import React from 'react'
import axios from 'axios'

import styles from './Drawer.module.scss'
import {CartItem} from '../CartItem'
import { Info } from '../../Info'

import { AppContext } from '../../App'



function Drawer (props){
  const {cartItems, priceCount, setcartItems, setOrders} = React.useContext(AppContext)
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
    setOrders((prev)=>[...prev, data])

    for (let i=0; i<cartItems.length; i++){
      const item = cartItems[i]
      await axios.delete(`https://63a540482a73744b00893060.mockapi.io/cart/${item.id}`)
    }
    setcartItems([])
  } catch (error) {
    console.error(error)
  }
}

const closeDrawer = ()=>{
  props.cartChanger()
}

    return(
      <div className={styles.overlay}>
        
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

          {/* ПУСТАЯ КОРЗИНА */}
          
          {cartItems.length===0?
          <Info
            title={isOrderComplited?"Ваш заказ принят":"Корзина пуста"}
            description = {isOrderComplited?`Заказ с номером ${orderId} успешно создан`:`Добавьте хотя бы один продукт в вашу корзину`}
            imgUrl="/img/empty1.png"
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
                <b>1023 руб.</b>
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

export default Drawer