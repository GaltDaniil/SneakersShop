import React from 'react';
import './index.scss';
import 'macro-css'
import axios from'axios'

import {Route, Routes} from 'react-router-dom'

import { Header } from './components/Header';
import Drawer from './components/Drawer';
import { Home } from './components/Home';
import { Favorites } from './components/Favorite';
import { Orders } from './Orders';


export const AppContext = React.createContext({})

function App() {

  const [isDrawer, setVisibleDrawer] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(true)
  const [isWait, setIsWait] = React.useState(false)
  const [priceCount, setPriceCount] = React.useState(0)
  

  const [items, setItems] = React.useState([])
  const [cartItems, setcartItems] = React.useState([])
  const [favoriteItems, setFavoriteItems] = React.useState([])
  const [orders, setOrders] = React.useState([])

  React.useEffect(()=>{
    try {
    async function DownloadData (){
      
    const cartItemResp = await axios.get('https://63a540482a73744b00893060.mockapi.io/cart')
    const favoriteResp = await axios.get('https://63a540482a73744b00893060.mockapi.io/favorites')
    const orderResp = await axios.get('https://63a540482a73744b00893060.mockapi.io/orders')
    const itemResp = await axios.get('https://63a540482a73744b00893060.mockapi.io/items')
    
    setcartItems(cartItemResp.data)
    setFavoriteItems(favoriteResp.data)
    setOrders(orderResp.data)
    setItems(itemResp.data)
    setIsLoading(false)
    }
    DownloadData()

    } catch (error) {
      console.error(error)
    }
    
  }, [])

  const IsItemAdded = (title)=>{
    return cartItems.some(item=>item.title===title)
  }

    
  React.useEffect(()=>{
    const price = cartItems.reduce((acc, el)=>{
      return acc+el.price}, 0)
    setPriceCount(price)
  },[cartItems])

    const ShowDrawer = ()=>{
    setVisibleDrawer(value => !value)
  }
    const onChangeSearch = (event)=>{setSearchValue(event.target.value)}

    const RemoveCartItem = (id)=>{
      try {
        const delItem = cartItems.find((el)=>Number(el.parentid)===Number(id))
        setcartItems((prev)=>prev.filter((el)=>Number(el.parentid)!==Number(id)))
        axios.delete(`https://63a540482a73744b00893060.mockapi.io/cart/${Number(delItem.id)}`)
        
      } catch (error) {
        console.error(error)
      }
    }

    const updateCountPrice = () => {
      const price = cartItems.reduce((acc, el)=>{
        return acc+el.price}, 0)
      setPriceCount(price)
    }

    const onPlus = async (obj)=>{

        if(IsItemAdded(obj.title)){
          RemoveCartItem(obj.parentid)
        } else{
        try {
          
          const {data} = await axios.post('https://63a540482a73744b00893060.mockapi.io/cart', obj)
          setcartItems((prev)=>[...prev, data])
          
        } catch (error) {
          console.error(error)
        }
        }
      }

      const onFavorited = (title)=>{
        return favoriteItems.some(item=>item.title===title)
      }

      const onFavorite = async (obj) => {
          if(onFavorited(obj.title)){
              try {
                const delItem = favoriteItems.find((el)=>Number(el.parentid)===Number(obj.parentid))
                axios.delete(`https://63a540482a73744b00893060.mockapi.io/favorites/${Number(delItem.id)}`)
                setFavoriteItems((prev)=>prev.filter((el)=>Number(el.parentid)!==Number(obj.parentid)))
              } catch (error) {
                console.error(error)
              }
          } else {
              try {
                
                setIsWait(true)
                const {data} = await axios.post('https://63a540482a73744b00893060.mockapi.io/favorites', obj)
                setFavoriteItems((prev)=>[...prev, data])
                
                setIsWait(false)
              } catch (error) {
                console.error(error)
              }
          }
      }
      

  return (
    <AppContext.Provider value={{
      
      isWait,
      priceCount,
      items, 
      cartItems, 
      favoriteItems,
      orders,

      setPriceCount,
      setcartItems,
      RemoveCartItem, 
      onPlus, 
      onFavorited, 
      onFavorite,
      setOrders,
      setVisibleDrawer,
      IsItemAdded,
      updateCountPrice
      
      }}>
      <div className="wrapper clear">

        <Header 
          cartChanger={ShowDrawer} 
        />
        {isDrawer && 
        
          <Drawer 
            items = {items}
            cartItems = {cartItems}
            isDrawer = {isDrawer}
            cartChanger = {ShowDrawer}
          />}
        
        <Routes>
          <Route path='/' element={
          
          <Home
          onChangeSearch = {onChangeSearch}
          
          searchValue={searchValue}
          isLoading = {isLoading}
          />} />

          <Route path='/favorites' element={
          
          <Favorites
            onChangeSearch = {onChangeSearch}
            searchValue={searchValue}
            />}/>

          <Route path='/orders' element={
            <Orders/>
          }/>
        </Routes>
          
        </div>
    </AppContext.Provider>
    );
  
}

export default App;
