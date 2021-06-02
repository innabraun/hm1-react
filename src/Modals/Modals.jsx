import React from "react"
import styles from "./Modals.module.css"
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalButton from "./ModalButton/ModalButton";

class Modal extends React.Component {
    render() {
        return (
            <div>
            <div onClick={ ()=>{this.props.toggleVisibility()}} className={styles.darkarea} style={{display: !!this.props.show ? "block": "none"}} >
            <div className={styles.onwrapper}>
                <div className={styles.wrapper} style={{display: !!this.props.show ? "block": "none"}}>
                <ModalHeader  content={this.props.headerContent}/>
                <ModalContent text={this.props.bodyText}/>
                <ModalButton
                    action="ok"
                    onActionClick={
                        () => {
                            this.props.onOkClicked();
                            this.props.toggleVisibility();
                        }
                    }

                    action1="close"
                    onAction1Click={() => {
                        this.props.toggleVisibility();
                    }}
                />
            </div>
            </div>
            </div>
            </div>
        )
    }
}


export default Modal;