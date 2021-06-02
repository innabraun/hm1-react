import React from "react"
import styles from "./../Modals.module.css"


class ModalContent extends React.Component{
    render() {

        return(
            <div>
                <div className={styles.content}>{this.props.text}</div>
            </div>
        )
    }
}

export default ModalContent;