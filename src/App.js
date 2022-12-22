import './index.scss';
import 'macro-css'

import Card  from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {name: 'Кроссовки Eugene SM 360', price: '12 990 руб.', img: '/img/sneakers/1.jpg',},
  {name: 'Кроссовки Pablo ESC ', price: '13 990 руб.', img: '/img/sneakers/2.jpg',}
  
]

function App() {
  return (
    <div className="wrapper clear">
      <Header/>
      <Drawer/>

        <div className="content p-40 ">
          <div className='d-flex justify-between'>
            <h1 className=''>Все кросcовки</h1>
            <div className='search'>
              <img width={15} height={15} src="/img/search2.svg" alt="" />
              <input placeholder='Поиск...' />
            </div>
          </div>

          <div className='d-flex pt-40 flex-wrap'>
            {arr.map((el)=>
            <Card name={el.name} price={el.price} img={el.img}/>
            )}
          </div>
        </div>
      </div>
    );
  
}

export default App;
