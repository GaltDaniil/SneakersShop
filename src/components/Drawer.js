export function Drawer (){
    return(
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
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
          <div className="items">
            <div className="cartItem d-flex align-center">
              <img 
                className='mr-20'
                width={70} 
                height={70} 
                src="/img/sneakers/1.jpg" 
                alt="" />
              <div className='mr-20'>
                <p className='mb-5'>Мужские кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img 
                className='btnRemove'
                width={25} 
                height={25} 
                src="/img/cross.svg" 
                alt="delite" />
            </div>
            <div className="cartItem d-flex align-center">
              <img 
                className='mr-20'
                width={70} 
                height={70} 
                src="/img/sneakers/1.jpg" 
                alt="" />
              <div className='mr-20'>
                <p className='mb-5'>Мужские кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img 
                className='btnRemove'
                width={25} 
                height={25} 
                src="/img/cross.svg" 
                alt="delite" />
            </div>
          </div>

          <div className='cartTotalBlock'>
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
          <button className='greenButton'> Оформить заказ
            <img src="/img/arrow-w.png" alt='arrow'/>
          </button>
          </div>
          
        </div>
      </div>
    )
}