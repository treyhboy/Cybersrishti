import React, { Component } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import MainCom from "./MainCom";
import TicketPage from "../TicketPage/TicketPage"
import styled from "styled-components";
import { Router, BrowserRouter, Route, Switch,Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
const  Back =  styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #2076FF;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  z-index: -1;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 75%;
  background-color: white;
  border-radius: 1rem;
`;
const Nav = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  height: 100%;
  width: 30%;
  border-radius: 1rem 0px 0px 1rem;
  background-color: #03A9F5;
`;
const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  font-size: 3rem;
  font-weight:400;
  color: white;
  width: 100%;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items:center;
  margin-top: 8rem;
  height: 20%;
  width: 100%;
`;
const NavSelect = styled.div`
  display: flex;
  justify-content: space-around;
  padding-right: 2rem;
  align-items: center;
  height: 8%;
  width: 90%;
  border-radius: 2rem 0px 0px 2rem;
  color: white;
  font-size: 2rem;
  font-weight: lighter;
  font-family: 'Lato', sans-serif;
  &:hover {
    background-color: #2076FF;
  }
`;
const NavIcon = styled.img`
  display: flex;
  height: 2rem;
  width: auto;
`
const SignupButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 12rem;
  color: #2076FF;
  font-weight: 200;
  background-color:white ;
  border: solid 1px white;
  &:hover {
    background-color: transparent;
    color: white;
    border: solid 1px white;
  }
  font-size: 1.8rem;
  border-radius: 3rem;
`;
const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 12rem;
  color: white;
  font-weight: 200;
  background-color: #2076FF;
  border: solid 1px #2076FF;
  &:hover {
    background-color: transparent;
    color: white;
    border: solid 1px white;
  }
  font-size: 1.8rem;
  border-radius: 3rem;
`;





class Home extends Component {

    state = {
            isAuthenticated: false
        };

    componentDidMount() {
        this.setState({
            isAuthenticated:JSON.parse(sessionStorage.getItem("Token"))?true:false
        })
    }
    auth=(v)=>
    {
        sessionStorage.setItem("Token",v)
        this.setState({isAuthenticated:v})
    }
    render() {
        return (
            <Container>
                <Back/>
                <Content>
                    <Nav>
                        <NavLogo>
                            Traveligo
                        </NavLogo>
                        <NavSelect>
                            <NavIcon src={require('../Img/search.svg')}/>
                            Explore
                        </NavSelect>
                        <NavSelect >
                            <NavIcon src={require('../Img/home (1).svg')}/>
                            Bookings
                        </NavSelect>
                        <NavSelect>
                            <NavIcon src={require('../Img/airplane.svg')}/>
                            Hotels
                        </NavSelect>
                        <NavSelect>
                            <NavIcon src={require('../Img/fork.png')}/>
                            Food
                        </NavSelect>
                        <ButtonBox>
                        <Link to={"/Login"} style={{textDecoration:"none"}}>
                        <LoginButton>
                            Login
                        </LoginButton>
                        </Link>
                        <Link to={"/Signup"} style={{textDecoration:"none"}}>
                            <SignupButton>
                                Signup
                            </SignupButton>
                        </Link>
                        </ButtonBox>
                    </Nav>
                    <Switch>
                        <Route exact path="/Login" render={()=><Login auth={this.auth} history={this.props.history}/>} />
                        <Route exact path="/Signup" component={Signup} />
                        <Route exact path="/" render={()=>this.state.isAuthenticated?<TicketPage/>:<MainCom/>}/>
                    </Switch>
                </Content>
            </Container>
        );
    }
}

export default Home;

