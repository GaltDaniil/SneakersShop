import React from 'react'
import axios from 'axios'
import 'bootstrap'

import styles from './Drawer.module.scss'
import "../../index.scss"
import {CartItem} from '../CartItem'
import { Info } from '../Info/Info'

import { AppContext } from '../../App'



export function Drawer (props){
  const {cartItems, priceCount, setcartItems} = React.useContext(AppContext)
  const [isOrderComplited, setIsOrderComplited] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [orderId, setOrderId] = React.useState(null)

const postOrder = async ()=>{
  try {
    setIsLoading(true)
    const {data} = await axios.post('https://63a540482a73744b00893060.mockapi.io/orders', {
      items: cartItems})
    setOrderId(data.id)
    setIsOrderComplited(true)

    for (let i=0; i<cartItems.length; i++){
      const item = cartItems[i]
      await axios.delete(`https://63a540482a73744b00893060.mockapi.io/cart/${item.id}`)
    }
    setcartItems([])
    setIsLoading(false)
  } catch (error) {
    console.error(error)
  }
}

const closeDrawer = ()=>{
  props.cartChanger()
}

    return(
      <div className={`${styles.overlay} ${props.isDrawer?styles.overlayVisible:""}`}>
        <div className={styles.leftOverlay} onClick={isLoading?null:()=>closeDrawer()}></div>
        <div className={styles.drawer}>
          <div className='d-flex justify-between'>
            <h2 className='mb-20'>Корзина</h2>
            <img 
                  onClick={()=>closeDrawer()}
                  style={{opacity: 0.4, cursor: 'pointer'}}
                  className='btnRemove'
                  width={20} 
                  height={20} 
                  src="/img/cross.svg" 
                  alt="delite" />
          </div>

           {isLoading?
            <div >
                <div className={styles.loading}></div>
                <div className={styles.spinner}></div>
            </div>
           :null}

          {/* ПУСТАЯ КОРЗИНА/ЗАКАЗ СОЗДАН */}
          
          {cartItems.length===0?
          <Info
            title={isOrderComplited?"Ваш заказ принят":"Корзина пуста"}
            description = {isOrderComplited?`Заказ с номером ${orderId} успешно передан в курьерскую службу.`:`Добавьте хотя бы один продукт в вашу корзину`}
            imgUrl={isOrderComplited?"/img/order-is-ready.png":"/img/empty1.png"}
          />:
          <div className={styles.inDrawer} >
            <div className={styles.items}>
            {cartItems.map((el, index)=>
              <CartItem
                key={index}
                {...el}
                />
              )}
            </div>
            <div className={styles.cartTotalBlock}>
            <ul >
              <li>
                <span>Итого:</span>
                <div></div>
                <b>{priceCount} руб.</b>
              </li>
              <li>
                <span>Налог:</span>
                <div></div>
                <b>{priceCount/100*5} руб.</b>
              </li>
            </ul>
            <button onClick={()=>postOrder()} disabled={isLoading?true:false} className={styles.greenButton}> Оформить заказ
              <img src="/img/arrow-w.png" alt='arrow'/>
            </button>
            </div>
          </div>
          }
        </div>
      </div>    
  )
}
