import React from 'react'
import styles from'./Card.module.scss'
import ContentLoader from "react-content-loader"
import { AppContext } from '../../App'



export function Card({title, isLoading, img, price, favAdded, id, parentid}) {
  

  const {onPlus, isWait,  onFavorited, onFavorite, IsItemAdded} = React.useContext(AppContext)


  

    return(
      isLoading?<div className={styles.card}>
      <ContentLoader 
    speed={1}
    width={158}
    height={217}
    viewBox="0 0 158 217"
    backgroundColor="#f2f2f2"
    foregroundColor="#e6e6e6"
  >
    <rect x="0" y="30" rx="9" ry="9" width="158" height="89" /> 
    <rect x="0" y="135" rx="5" ry="5" width="147" height="15" /> 
    <rect x="0" y="155" rx="5" ry="5" width="120" height="15" /> 
    <rect x="1" y="182" rx="5" ry="5" width="96" height="25" /> 
    <rect x="133" y="182" rx="5" ry="5" width="25" height="25" />
  </ContentLoader>
  </div>:
  <div className={styles.card}>
      <button className={styles.btnLike} onClick={()=>onFavorite({id, title, img, price, parentid})}>
        <img  width={15} height={15}  src={!onFavorited(title)?"/img/unlike.svg":"/img/like.svg"} alt="unlike" />
      </button>
    <img width={133} height={112} src={img} alt="" />
    <h5>{title}</h5>
    <div className='d-flex justify-between pt-10 align-center'>
      <div className='d-flex flex-column'>
        <p>Цена:</p>
        <b>{price} руб</b>
      </div>
      <img className={styles.btnAddCart} onClick={()=>onPlus({id, title, img, price, parentid})} width={25} height={25} src={!IsItemAdded(title) ? "/img/unchecked.png": "/img/checked.png" } alt="Plus" />
    </div>

  </div>
        
    )
}