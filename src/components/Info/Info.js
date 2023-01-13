import React from 'react'
import styles from "./Info.module.scss"
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'

export const Info = ({title, description, imgUrl}) => {

  const {setVisibleDrawer} = React.useContext(AppContext)
  return (
    <div className={styles.emptyCart}>
        <img className='mb-20' width={150} src={imgUrl} alt="EmptyBox" />
        <h3 className='mb-10'>{title}</h3>
        <p>{description}</p>

        <Link style={{width: 200}} to="/">
            <button onClick={()=>setVisibleDrawer(value => !value)} className={styles.greenButton}>
            Закрыть
            </button>
        </Link>
  </div>
  )
}
