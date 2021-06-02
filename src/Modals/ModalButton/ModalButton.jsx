import React from "react"
import styles from "./../Modals.module.css"


class ModalButton extends React.Component{
    render() {

        return(
            <div className={styles.button}>
                <button
                    className={styles.item}
                    onClick={()=>{
                        this.props.onAction1Click()
                    }}

                >{this.props.action1}</button>


                <button className={styles.item}
                onClick={()=>{
                    this.props.onActionClick()
                }}
                >{this.props.action}</button>
            </div>
        )
    }



}

export default ModalButton;