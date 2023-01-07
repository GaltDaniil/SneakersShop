import React from "react"
import {Card} from "../Card";
import styles from "./Favorite.module.scss"
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

export function Favorites({searchValue, onChangeSearch, setSearchValue}){
    
  const {onFavorite, onFavorited, favoriteItems, AddItemToFavorites, RemoveItemFromFavorites} = React.useContext(AppContext)

  return(
        <div className={styles.content}>
          <div className='d-flex justify-between'>
            <h1 className=''>{searchValue?`Поиск по: ${searchValue}`:'Мне нравится'}</h1>
            <div className='search'>
              <img width={15} height={15} src="/img/search2.svg" alt="search" />
              <input onChange={onChangeSearch} value={searchValue} placeholder='Поиск...' />
              {searchValue?<img onClick={()=>setSearchValue('')} className='searchCross' src="/img/cross.svg" alt="close" />:null}
              
            </div>
          </div>
          
            {favoriteItems.length===0?
                <div className={styles.main}>
                        <img src="./img/empty2.png" alt="" />
                        <h3>Вы еще ничего не выбрали</h3>
                        <p>Вернитесь на главную страницу и выберите хоть что-нибудь!</p>
                        <Link to={"/"}>
                        <button className={styles.greenButton}> Вернуться назад</button>
                        </Link>
                        
                </div>:<div className='d-flex pt-40 flex-wrap'>
                {favoriteItems.filter((el)=>el.title.toLowerCase().includes(searchValue.toLowerCase())).map((el, index)=>
            <Card
              key={index}
              {...el}
              parentid={el.id}
              />
            )}
                    </div>}
            
            
        </div>
    )
}