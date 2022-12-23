import React from 'react'
import styles from'./Card.module.scss'

function Card(props) {

  const [isAdded, setAdd] = React.useState(false)
  const [isFavorite, setFavorite] = React.useState(false)


  function AddToCart(){
    setAdd(prevState => !prevState)
  }
  function AddToFavorite(){
    setFavorite(prevState => !prevState)
  }

    return(
        <div className={styles.card}>
                <button className={styles.btnLike} onClick={AddToFavorite}>
                  <img  width={15} height={15} src={!isFavorite ? "/img/unlike.svg":"/img/like.svg"} alt="unlike" />
                </button>
              <img width={133} height={112} src={props.img} alt="" />
              <h5>{props.name}</h5>
              <div className='d-flex justify-between pt-10 align-center'>
                <div className='d-flex flex-column'>
                  <p>Цена:</p>
                  <b>{props.price}</b>
                </div>
                <button className={styles.button} onClick={AddToCart}>
                  <img width={11} height={11} src={!isAdded ? "/img/plus2.svg":"/img/search.svg"} alt="Plus" />
                </button>
              </div>

        </div>
    )
}
export default Card