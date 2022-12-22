
import styles from'./Card.module.scss'

function Card(props) {
    return(
        <div className={styles.card}>
                <button className={styles.btnLike}>
                  <img  width={15} height={15} src="/img/unlike.svg" alt="unlike" />
                </button>
              <img width={133} height={112} src={props.img} alt="" />
              <h5>{props.name}</h5>
              <div className='d-flex justify-between pt-10 align-center'>
                <div className='d-flex flex-column'>
                  <p>Цена:</p>
                  <b>{props.price}</b>
                </div>
                <button className={styles.button} onClick={()=>{alert(123)}}>
                  <img width={11} height={11} src="/img/plus2.svg" alt="Plus" />
                </button>
              </div>

        </div>
    )
}
export default Card