import React from 'react';
import './index.scss';
import 'macro-css'
import axios from'axios'
import {Route, Routes} from 'react-router-dom'

import {Header} from './components/Header';
import Drawer from './components/Drawer';
import { Home } from './components/Home';
import { Favorites } from './components/Favorite';



function App() {

  const [isDrawer, setVisibleDrawer] = React.useState(false)
  const [favoriteItems, setFavoriteItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [items, setItems] = React.useState([])
  const [cartItems, setcartItems] = React.useState([])


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
    const onChangeSearch = (event)=>{setSearchValue(event.target.value)}
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
      <Routes>
        <Route path='/' element={<Home
        onChangeSearch = {onChangeSearch}
        AddItemToCart = {AddItemToCart}
        AddItemToFavorites={AddItemToFavorites}
        RemoveItemFromFavorites={RemoveItemFromFavorites}
        items={items}
        searchValue={searchValue}
        favoriteItems={favoriteItems}
        />} />
        <Route path='/favorites' element={<Favorites
          onChangeSearch = {onChangeSearch}
          AddItemToCart = {AddItemToCart}
          AddItemToFavorites={AddItemToFavorites}
          RemoveItemFromFavorites={RemoveItemFromFavorites}
          items={items}
          searchValue={searchValue}
          favoriteItems={favoriteItems}
          />}/>
      </Routes>
        
        
        
      </div>
    );
  
}

export default App;
