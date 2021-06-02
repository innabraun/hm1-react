import React from "react"
import styles from "./Buttons.module.css"
import Modals from "../Modals/Modals";


class Buttons extends React.Component {
        state={
            isClose1:false,
            isClose2:false
        }

    isOpen1=()=>{
            const {isClose1}=this.state
        this.setState({
            isClose1: !this.state.isClose1
        })
    }

    isOpen2=()=>{
            const {isClose2}=this.state
        this.setState({
            isClose2: !this.state.isClose2
        })
    }


    render() {
        return(
            <div className={styles.wrapper}>

                <button onClick={()=>this.isOpen1()} className={styles.item1}>{this.props.title1}</button>



                <button onClick={()=>this.isOpen2()} className={styles.item2} >{this.props.title2}</button>


                <Modals

                        show={this.state.isClose1}
                        toggleVisibility={() => {
                            this.isOpen1();
                        }}
                        headerContent={"Do you want to delete this file"}
                        bodyText={[<br/>, "Once you delete this file, it won't be possible to undo this action.", <br/>, <br/>, "Are you sure you want to delete it?", <br/>]}
                        onOkClicked={() => alert("Are you really sure?")}

                />

                <Modals
                    show={this.state.isClose2}
                    toggleVisibility={() => {
                        this.isOpen2();
                    }}
                    headerContent={"Do you want to delete your profile?"}
                    bodyText={[<br/>, "You will lost all your followers in this way", <br/>, <br/>, "Dont leave, we love you ", <br/>]}
                    onOkClicked={() => alert("Are you sure?")}
                />


                </div>
        )
    }

}

export default Buttons