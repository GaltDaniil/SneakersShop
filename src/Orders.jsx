import React from 'react'
import axios from 'axios'

import { Info } from './components/Info/Info'
import "./index.scss"
import { Card } from './components/Card'


export const Orders = () => {

  const [orders, setOrders] = React.useState([])
  const [isOrderLoading, setIsOrderLoading] = React.useState(false)
  

  React.useEffect(()=>{
    (async ()=>{
      setIsOrderLoading(true)
      try {
        const orderResp = await axios.get('https://63a540482a73744b00893060.mockapi.io/orders')

        setOrders(orderResp.data)
        setIsOrderLoading(false)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])
    
  return (

        <div >{isOrderLoading?<div className="spinner"></div>:<div className="d-flex flex h100p">
        {orders.length===0?
                <Info
                  title={"Заказов еще нет"}
                  description = {`Закажите хотя бы один продукт`}
                  imgUrl={"img/empty1.png"}
                />:<div >
                  {orders.reverse().map((el)=>{
                    return(
                      <div className='d-flex flex-column flex-wrap m-40'>
                        <h4>Заказ №{el.id}</h4>
                        
                        <div className='d-flex' style={{borderTop: 3}}>
                          {el.items.map((el)=>
                          <Card
                          {...el}
                          notFav={true}
                          notCheck = {true}
                          />)}
                        </div>
                      </div>
                    )
                  })}
                    </div>}
    </div>}
          </div>
  )
}
