import styles from './CartItem.module.scss'
import React from "react"
import { AppContext } from '../../App'

export function CartItem({id, title, img, price, parentid=id, RemoveItemToCart}){

  const {RemoveCartItem} = React.useContext(AppContext)

    return(
            <div className={styles.cartItem}>
              <img 
                className='mr-20'
                width={70} 
                height={70} 
                src={img} 
                alt="" />
              <div className='mr-20'>
                <p className='mb-5'>{title}</p>
                <b>{price} руб.</b>
              </div>
              <img
                className={styles.btnRemove}
                onClick={()=>{RemoveCartItem(parentid)}}
                width={25} 
                height={25} 
                src="img/cross.svg" 
                alt="delite" />
            </div>
    )
}
