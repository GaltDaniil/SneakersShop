import styles from './button.module.scss'

function Button (props){

    function ClickBtn(){
        props.FormOpen(true)
    }


    return (
        <button onClick={ClickBtn} className={!props.sizeButton?`${styles.medium}`:`${styles.small}`} disabled={!props.isState?true:false}>
            <span>Действие</span>
        </button>
    )
}
export default Button