import './index.scss';
import 'macro-css'

import Card  from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';

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
{/* кросовки */}

          <div className='d-flex pt-40 flex-wrap'>
          <Card/>
          <Card/>
          <Card/>
            

            
          </div>
          
        </div>
      </div>
    );
  
}

export default App;
