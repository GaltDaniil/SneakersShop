function Card() {
    return(
        <div className="card">
                <button className='btnLike'>
                  <img  width={15} height={15} src="/img/unlike.svg" alt="unlike" />
                </button>
              <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
              <h5>Мужские кроссовки белые Puma Street</h5>
              <div className='d-flex justify-between pt-10 align-center'>
                <div className='d-flex flex-column'>
                  <p>Цена:</p>
                  <b>12 990 руб</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src="/img/plus2.svg" alt="Plus" />
                </button>
              </div>

        </div>
    )
}
export default Card