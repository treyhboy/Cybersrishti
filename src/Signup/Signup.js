import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
`;
const MainForm = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  width: 45%;
`;
const MainMoc = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 55%;
`;
const FormHead = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  height: 10%;
  width: 50%;
  color:#2076FF;
  font-size: 3rem;
  font-weight: lighter;
`;
const FormRow = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  height: 10%;
  width: 100%;
`;
const Input = styled.input`
  height: 4rem;
  width: 20rem;
  border: none;
  display:flex;
  outline: none;
  font-size: 1.5rem;
  border-bottom: solid 1px gray;
  color: gray;
`;
const EnterButton = styled.div`
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
    background-color: white;
    color: #2076FF;
  }
  font-size: 1.8rem;
  border-radius: 3rem;
`;
const HeadMoc = styled.img`
  display: flex;
  height: 25%;
  width: auto;

`
const BOTMoc = styled.img`
  display: flex;
  height: 50%;
  width: auto;
`




class Signup extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        };

    }
    render() {
        return (<Main>
                        <MainForm>
                            <FormHead>
                                SignUp
                            </FormHead>
                            <FormRow>
                                <Input placeholder={"Name"}/>
                            </FormRow>
                            <FormRow>
                                <Input placeholder={"Username"}/>
                            </FormRow>
                            <FormRow>
                                <Input placeholder={"Password"}/>
                            </FormRow>
                            <FormRow>
                                <EnterButton>
                                    SignUp
                                </EnterButton>
                            </FormRow>
                        </MainForm>
                        <MainMoc>
                            <HeadMoc src={require('../Img/trav.png')}/>
                            <BOTMoc src={require('../Img/airplane-boarding-passes-edit2.jpg')}/>
                        </MainMoc>
            </Main>
        );
    }
}

export default Signup;