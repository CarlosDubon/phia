import React,{useState} from 'react'
import logo from "../logo.png";
import {Button, Container, Row} from "reactstrap";
import {setApp} from "../redux/actions/app";
import {connect} from "react-redux";

const container ={
    width:"100vw",
    height:"100vh",
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    padding:"1em",
    boxSizing:"border-box"
}
const buttonContainer={
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"4em"
}
const Welcome=(props)=>{
    return(
        <div>
            <div style={container}>
                <img src={logo} className="img-fluid" />
                <Container>
                    <Row md={12} style={buttonContainer}>
                        <Button size="lg" color="info" onClick={()=>{props.setApp(1)}} >Dorime!</Button>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
const mapDispatchToProps={
    setApp
}
export default connect(null,mapDispatchToProps)(Welcome)