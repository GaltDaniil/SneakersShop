import React from "react";
import Card from "../Card";
import styles from "./Favorite.module.scss"

export function Favorites(props){
    return(
        <div className={styles.content}>
          <div className='d-flex justify-between'>
            <h1 className=''>{props.searchValue?`Поиск по: ${props.searchValue}`:'Мне нравится'}</h1>
            <div className='search'>
              <img width={15} height={15} src="/img/search2.svg" alt="search" />
              <input onChange={props.onChangeSearch} value={props.searchValue} placeholder='Поиск...' />
              {props.searchValue?<img onClick={()=>props.setSearchValue('')} className='searchCross' src="/img/cross.svg" alt="close" />:null}
              
            </div>
          </div>
          
            {props.favoriteItems.length===0?
                <div className={styles.main}>
                        <img src="./img/empty2.png" alt="" />
                        <h3>Вы еще ничего не выбрали</h3>
                        <p>Вернитесь на главную страницу и выберите хоть что-нибудь!</p>
                        <button></button>
                        
                </div>:<div className='d-flex pt-40 flex-wrap'>
                {props.favoriteItems.filter((el)=>el.title.toLowerCase().includes(props.searchValue.toLowerCase())).map((el, index)=>
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
                    </div>}
            
            
        </div>
    )
}