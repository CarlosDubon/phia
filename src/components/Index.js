import React from 'react'
import {connect} from "react-redux";
import Welcome from "./Welcome";

const Index=(props)=>{
    const {app} = props

    const renderSwitch =()=>{
        switch (app) {
            case 0:
                return <Welcome/>
            case 1:
                return 
            default:
                return
        }
    }
    return(
        <div>
            {renderSwitch()}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        app:state.app
    }
}
export default connect(mapStateToProps)(Index)