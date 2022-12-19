import './index.scss';
import 'macro-css'

function App() {
  return (
    <div className="wrapper clear">
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
              <li className='mr-30'><img width={25} height={25} src="/img/person.svg" alt="logo"/> </li>
            </ul>
        </header>

        <div className="content p-40 ">
          <h1 className='mb-40'>Все кросcовки</h1>

          <div className='d-flex'>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
              <h5>Мужские кроссовки белые Puma Street</h5>
              <div className='d-flex justify-between pt-10 align-center'>
                <div className='d-flex flex-column'>
                  <p>Цена:</p>
                  <b>12 990 руб</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>

            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
              <h5>Мужские кроссовки белые Puma Street</h5>
              <div className='d-flex justify-between pt-10 align-center'>
                <div className='d-flex flex-column'>
                  <p>Цена:</p>
                  <b>12 990 руб</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>

            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
              <h5>Мужские кроссовки белые Puma Street</h5>
              <div className='d-flex justify-between pt-10 align-center'>
                <div className='d-flex flex-column'>
                  <p>Цена:</p>
                  <b>12 990 руб</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
              <h5>Мужские кроссовки белые Puma Street</h5>
              <div className='d-flex justify-between pt-10 align-center'>
                <div className='d-flex flex-column'>
                  <p>Цена:</p>
                  <b>12 990 руб</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    );
  
}

export default App;
