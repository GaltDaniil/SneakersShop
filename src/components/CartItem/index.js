import styles from './CartItem.module.scss'

export function CartItem(props){

    return(
            <div className={styles.cartItem}>
              <img 
                className='mr-20'
                width={70} 
                height={70} 
                src={props.img} 
                alt="" />
              <div className='mr-20'>
                <p className='mb-5'>{props.title}</p>
                <b>{props.price} руб.</b>
              </div>
              <img 
                className={styles.btnRemove}
                onClick={()=>{props.onRemove()}}
                width={25} 
                height={25} 
                src="/img/cross.svg" 
                alt="delite" />
            </div>
    )
}
