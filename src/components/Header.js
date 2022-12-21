export function Header(){
    return (
        <header className='d-flex justify-between p-40'>
          <div className='d-flex align-center '>
            <img width={50} height={40} src="/img/logo.png" alt="logo" />
            <div className='LeftText'>
              <h3>LINNIK FITNESS</h3>
              <p className='opacity-5'>Школа фитнес тренеров</p>
            </div>
          </div>
            <ul className='d-flex align-center'>
              <li className='mr-30 d-flex align-center'>
                <img width={25} height={25} src="/img/cart.svg" alt="logo" />
                <span>1285 руб</span>
              </li>
              <li className='mr-30'><img width={25} height={25} src="/img/person2.svg" alt="logo"/> </li>
            </ul>
        </header>
    )
}