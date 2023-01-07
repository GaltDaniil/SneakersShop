import React from "react"
import { AppContext } from '../../App'

import {Card} from "../Card";

export function Home(props){
    
  const {IsItemAddToCart, items, IsItemAddToFavorite, AddItemToCart, RemoveItemToCart, AddItemToFavorites, RemoveItemFromFavorites} = React.useContext(AppContext)

  const filtredItems = items.filter((el)=>el.title.toLowerCase().includes(props.searchValue.toLowerCase()))

return (
        <div className="content p-40">
          <div className='d-flex justify-between'>
            <h1 className=''>{props.searchValue?`Поиск по: ${props.searchValue}`:"Все кросcовки"}</h1>
            <div className='search'>
              <img width={15} height={15} src="/img/search2.svg" alt="search" />
              <input onChange={props.onChangeSearch} value={props.searchValue} placeholder='Поиск...' />
              {props.searchValue?<img onClick={()=>props.setSearchValue('')} className='searchCross' src="/img/cross.svg" alt="close" />:null}
            </div>
          </div>
          
          <div className='d-flex pt-40 flex-wrap'>
            {(props.isLoading ? [...Array(10)]:filtredItems).map((el, index)=>
            <Card
              key={index}
              parentid={el && el.id}
              {...el}

              isLoading = {props.isLoading}
              />
            )}
              
          </div>
          
        </div>
    )
    
}