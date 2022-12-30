import React from 'react'
import styles from'./Card.module.scss'

function Card(props) {
  
  const [isAdd, setAdd] = React.useState(false)
  const [isFavorite, setFavorite] = React.useState(false)

  function ChangeButton(){
    if(isAdd){
      console.log(props.id)
      props.removeCartItem(props.id)
      
    } else{
      props.onPlus([props.title, props.img, props.price])
    }
    setAdd(value=>!value)
  }
  function AddToFavorite(){
    if (isFavorite){
      props.removeFavorites(props.id)
      } else{
        props.addToFavorites([props.title, props.img, props.price])
      }
    setFavorite(value=>!value)
  }


    return(
        <div className={styles.card}>
                <button className={styles.btnLike} onClick={AddToFavorite}>
                  <img  width={15} height={15}  src={!isFavorite?"/img/unlike.svg":"/img/like.svg"} alt="unlike" />
                </button>
              <img width={133} height={112} src={props.img} alt="" />
              <h5>{props.title}</h5>
              <div className='d-flex justify-between pt-10 align-center'>
                <div className='d-flex flex-column'>
                  <p>Цена:</p>
                  <b>{props.price} руб</b>
                </div>
                <img className={styles.btnAddCart} onClick={ChangeButton} width={25} height={25} src={!isAdd ? "/img/unchecked.png": "/img/checked.png" } alt="Plus" />
              </div>

        </div>
    )
}
export default Card