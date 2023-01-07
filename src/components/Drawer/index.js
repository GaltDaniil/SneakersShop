import React from 'react'
import styles from './Drawer.module.scss'
import {CartItem} from '../CartItem'

import { AppContext } from '../../App'


function Drawer (props){

const [countPrice, setCountPrice] = React.useState(0)
const {cartItems} = React.useContext(AppContext)

    return(
      <div className={styles.overlay}>
        
        <div className={styles.drawer}>
          <div className='d-flex justify-between'>
            <h2 className='mb-20'>Корзина</h2>
            <img 
                  onClick={props.cartChanger}
                  style={{opacity: 0.4, cursor: 'pointer'}}
                  className='btnRemove'
                  width={20} 
                  height={20} 
                  src="/img/cross.svg" 
                  alt="delite" />
          </div>

          {/* ПУСТАЯ КОРЗИНА */}
          
          {cartItems.length===0?<div className={styles.emptyCart}>
            
            <img width={150} src="/img/empty1.png" alt="EmptyBox" />
            <h3>Корзина пустая</h3>
            <p>Добавьте хотя бы один товар в корзину</p>
            <button className={styles.greenButton}>
             Закрыть
            </button>
          </div>:
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
                <b>{countPrice} руб.</b>
              </li>
              <li>
                <span>Налог:</span>
                <div></div>
                <b>1023 руб.</b>
              </li>
            </ul>
            <button className={styles.greenButton}> Оформить заказ
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