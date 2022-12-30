import React from "react"
import styles from "./Form.module.scss"

export function Form(props){

    const [isEmail, setEmail] = React.useState('')
    const [isPass, setPass] = React.useState(false)
    const [isError, setError] = React.useState(false)

    const IsError = (event)=>{
        setError(true)
        event.disabled()
    }

    return(
        <div>
            <div className={styles.overlay}>
                <img src="./img/Ellipse.png" alt="dot" />
                <div className={styles.popForm}>
                    <img className={styles.pipka} src="./img/Rectangle.png" alt="pipka" />
                    <div className={styles.formSpace}>
                        <form action="submit">
                            {isError?<div className={styles.errorMassage}>
                                Неверный e-mail или пароль.<br/> 
                                Проверьте введенные<br/> 
                                данные и повторите попытку</div>:
                                <p>Введите ваш email и пароль <br/> для входа личный кабинет</p>}
                            
                            <input className={isError?styles.btnError:''} type="email" onChange={(event)=>{setEmail(event.target.value); setError(false)}} placeholder="Введите свой E-mail"/>
                            <input className={isError?styles.btnError:''} type="password" onChange={(event)=>{event.target.value?setPass(true):setPass(false)}}  disabled={isEmail?false:true} placeholder="Введите свой пароль"/>
                            <button onClick={IsError} disabled={isEmail&&isPass&&!isError?false:true}>Войти</button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    )
}