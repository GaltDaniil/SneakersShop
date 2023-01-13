import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'

export function Header({cartChanger}){

  const {priceCount} = React.useContext(AppContext)

    return (
        <header className='d-flex justify-between p-40'>
          <div className='d-flex align-center '>
          <Link to='/'>
            <img width={50} height={40} src="img/logo.png" alt="logo" />
          </Link>
            <div className={styles.LeftText}>
              <h3>LINNIK FITNESS</h3>
              <p className='opacity-5'>Школа фитнес тренеров</p>
            </div>
          </div>
            <ul className='d-flex align-center'>
              <li className='mr-35 d-flex align-center'>
                <img onClick={cartChanger} className="mr-10" width={27} height={27} src="img/cart.svg" alt="logo" />
                <span onClick={cartChanger}>{priceCount} руб</span>
              </li>
              <li className='mr-30'>
                <Link to='/favorites'>
                  <img width={23} height={23} src="img/unlike.svg" alt="logo"/>
                </Link>
              </li>
              <li className='mr-30'>
                <Link to="/orders">
                <img width={23} height={23} src="/img/person2.svg" alt="logo"/>
                </Link> 
              </li>
                
            </ul>
        </header>
    )
}