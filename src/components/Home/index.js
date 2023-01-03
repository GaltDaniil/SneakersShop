import React from "react";
import axios from'axios'


import Card from "../Card";

export function Home(props){

    
    

    return (
        <div className="content p-40">
          <div className='d-flex justify-between'>
            <h1 className=''>{props.searchValue?`Поиск по: ${props.searchValue}`:'Все кросcовки'}</h1>
            <div className='search'>
              <img width={15} height={15} src="/img/search2.svg" alt="search" />
              <input onChange={props.onChangeSearch} value={props.searchValue} placeholder='Поиск...' />
              {props.searchValue?<img onClick={()=>props.setSearchValue('')} className='searchCross' src="/img/cross.svg" alt="close" />:null}
              
            </div>
          </div>

          <div className='d-flex pt-40 flex-wrap'>
            {props.items.filter((el)=>el.title.toLowerCase().includes(props.searchValue.toLowerCase())).map((el, index)=>
            <Card
              key={index}
              title={el.title} 
              price={el.price} 
              img={el.img}
              id={el.id}
              element={el}
              onPlus={(obj)=>props.AddItemToCart(el)}
              removeCartItem = {(obj)=>props.RemoveItemToCart(el)}
              addToFavorites ={(obj)=>props.AddItemToFavorites(el)}
              removeFavorites = {(obj)=>props.RemoveItemFromFavorites(el)}
              />
            )}
              
          </div>
        </div>
    )
    
}