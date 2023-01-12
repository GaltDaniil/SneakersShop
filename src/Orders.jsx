import React from 'react'
import { Info } from './Info'
import { AppContext } from './App'
import "./index.scss"


export const Orders = () => {

    const {orders} = React.useContext(AppContext)
    console.log(orders)

  return (
        <div className="emptyCart">
            {orders.length===0?
                    <Info
                      title={"Заказов еще нет"}
                      description = {`Закажите хотя бы один продукт`}
                      imgUrl={"/img/empty1.png"}
                    />:<div className='d-flex pt-40 flex-wrap'>
                      {orders.map((el)=>{
                        return(
                          <div>
                            <ul className='d-flex'>
                              <li>1</li>
                              <li>2</li>
                              <li>3</li>
                            </ul>
                          </div>
                        )
                      })}
                        </div>}
        </div>
  )
}
