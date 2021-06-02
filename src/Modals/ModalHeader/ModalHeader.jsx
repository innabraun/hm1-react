import React from "react"
import styles from "./../Modals.module.css"

class ModalHeader extends React.Component{

    render() {
        return(
            <div  className={styles.header}>
                <h3>{this.props.content}</h3>
            </div>
        )
    }
}

export default ModalHeader;