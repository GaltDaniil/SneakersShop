import React from 'react';
import './index.scss';
import 'macro-css'
import axios from'axios'

import {Route, Routes} from 'react-router-dom'

import { Header } from './components/Header';
import Drawer from './components/Drawer';
import { Home } from './components/Home';
import { Favorites } from './components/Favorite';


export const AppContext = React.createContext({})

function App() {

  const [isDrawer, setVisibleDrawer] = React.useState(false)
  const [favoriteItems, setFavoriteItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [items, setItems] = React.useState([])
  const [cartItems, setcartItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isWait, setIsWait] = React.useState(false)



  React.useEffect(()=>{
    try {
    async function DownloadData (){
      
    const cartItemResp = await axios.get('https://63a540482a73744b00893060.mockapi.io/cart')
    const favoriteResp = await axios.get('https://63a540482a73744b00893060.mockapi.io/favorites')
    const itemResp = await axios.get('https://63a540482a73744b00893060.mockapi.io/items')

    
    setcartItems(cartItemResp.data)
    setFavoriteItems(favoriteResp.data)
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

    const onPlus = async (obj)=>{
        if(IsItemAdded(obj.title)){
          RemoveCartItem(obj.parentid)
        } else{
          
        try {
          const {data} =await axios.post('https://63a540482a73744b00893060.mockapi.io/cart', obj)
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
    <AppContext.Provider value={{IsItemAdded, isWait, RemoveCartItem, onPlus, onFavorited, onFavorite, items, cartItems, favoriteItems}}>
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
        </Routes>
          
          
          
        </div>
    </AppContext.Provider>
    );
  
}

export default App;
