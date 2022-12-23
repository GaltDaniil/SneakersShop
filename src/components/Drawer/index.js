import styles from './Drawer.module.scss'

function Drawer (){
    return(
        <div className={styles.overlay}>
        <div className={styles.drawer}>
          <div className='d-flex justify-between'>
            <h2 className='mb-20'>Корзина</h2>
            <img 
                  style={{opacity: 0.4, cursor: 'pointer'}}
                  className='btnRemove'
                  width={20} 
                  height={20} 
                  src="/img/cross.svg" 
                  alt="delite" />
          </div>
          <div className={styles.items}>
            <div className={styles.cartItem}>
              <img 
                className='mr-20'
                width={70} 
                height={70} 
                src="/img/sneakers/1.jpg" 
                alt="" />
              <div className='mr-20'>
                <p className='mb-5'>Мужские кроссовки Nike Air Max 270</p>
                <b>13 999 руб.</b>
              </div>
              <img 
                className={styles.btnRemove}
                width={25} 
                height={25} 
                src="/img/cross.svg" 
                alt="delite" />
            </div>
          </div>

          <div className={styles.cartTotalBlock}>
          <ul >
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
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
      </div>
    )
}

export default Drawer