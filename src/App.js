import React from 'react';
import './index.scss';
import 'macro-css'
import axios from'axios'

import Card  from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Button from './components/Button';
import { Form } from './components/Form';



function App() {

  const [isDrawer, setVisibleDrawer] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [cartItems, setcartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [sizeButton, setSizeButton] = React.useState(false)
  const [isStateButton, setStateButton] = React.useState(true)
  const [isFormOpen, setFormOpen] = React.useState(false)
  const [favoriteItems, setFavoriteItems] = React.useState([])


  React.useEffect(()=>{
    try {
    axios.get('https://63a540482a73744b00893060.mockapi.io/items')
    .then(res=>setItems(res.data))
    axios.get('https://63a540482a73744b00893060.mockapi.io/cart')
    .then(res=>setcartItems(res.data))
    axios.get('https://63a540482a73744b00893060.mockapi.io/favorites')
    .then(res=>setFavoriteItems(res.data))


    } catch (error) {
      console.error(error)
    }
    
  }, [])

  const ShowDrawer = ()=>{
    setVisibleDrawer(value => !value)
  }
  const AddItemToCart = (obj)=>{
    setcartItems((prev)=>[...prev, obj])
    try {
      axios.post('https://63a540482a73744b00893060.mockapi.io/cart', obj)
    } catch (error) {
      console.error(error)
    }
  }
  const RemoveItemToCart = (object)=>{
    setcartItems((prev)=>prev.filter((el)=>Number(el.id)!==Number(object.id)))
    
    try {
      axios.delete(`https://63a540482a73744b00893060.mockapi.io/cart/${Number(object.id)}`)
    } catch (error) {
      console.error(error)
    }
  }
  const AddItemToFavorites = (obj)=>{
    setFavoriteItems((prev)=>[...prev, obj])
    try {
      axios.post('https://63a540482a73744b00893060.mockapi.io/favorites', obj)
    } catch (error) {
      console.error(error)
    }
  }
const RemoveItemFromFavorites =(obj)=>{
  setFavoriteItems((prev)=>prev.filter((el)=>Number(el.id)!==Number(obj.id)))
  try {
    axios.delete(`https://63a540482a73744b00893060.mockapi.io/favorites/${Number(obj.id)}`)
  } catch (error) {
    console.error(error)
  }
}

   const onChangeSearch = (event)=>{
    setSearchValue(event.target.value)
   }

  return (
    <div className="wrapper clear">
      <Header 
        cartChanger={ShowDrawer} 
      />
      {isDrawer && <Drawer 
        isDrawer={isDrawer}
        cartChanger={ShowDrawer}
        cartItems={cartItems}
        onRemove = {RemoveItemToCart}
      />}

        <div className="content p-40 ">
          <div className='d-flex justify-between'>
            <h1 className=''>{searchValue?`Поиск по: ${searchValue}`:'Все кросcовки'}</h1>
            <div className='search'>
              <img width={15} height={15} src="/img/search2.svg" alt="search" />
              <input onChange={onChangeSearch} value={searchValue} placeholder='Поиск...' />
              {searchValue?<img onClick={()=>setSearchValue('')} className='searchCross' src="/img/cross.svg" alt="close" />:null}
              
            </div>
          </div>

          <div className='d-flex pt-40 flex-wrap'>
            {items.filter((el)=>el.title.toLowerCase().includes(searchValue.toLowerCase())).map((el, index)=>
            <Card
              key={index}
              title={el.title} 
              price={el.price} 
              img={el.img}
              id={el.id}
              element={el}
              onPlus={(obj)=>AddItemToCart(el)}
              removeCartItem = {(obj)=>RemoveItemToCart(el)}
              addToFavorites ={(obj)=>AddItemToFavorites(el)}
              removeFavorites = {(obj)=>RemoveItemFromFavorites(el)}
              />
            )}
              
          </div>
        </div>


        <center className="lesson">
              <div>
                <input type="checkbox" id="off" onChange={()=>setStateButton(!isStateButton)}/>
                <lable className='ml-5' for="off">Off</lable>
              </div>
              <div>
                <input type="checkbox" id="small" onChange={()=>setSizeButton(!sizeButton)}/>
                <lable className='ml-5' for="small">Small</lable>
              </div>
          
          <Button
            isState = {isStateButton}
            sizeButton = {sizeButton}
            FormOpen = {setFormOpen}
          />

        </center>
        {isFormOpen?<Form/>:null}
      </div>
    );
  
}

export default App;
