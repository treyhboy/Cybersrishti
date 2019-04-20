import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
`;
const MainMoc = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const HeadMoc = styled.img`
  display: flex;
  height: 20%;
  width: auto;
`
const BOTMoc = styled.img`
  display: flex;
  height: 60%;
  width: auto;
`





class MainCom extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        };

    }
    render() {
        return (<Main>
                <MainMoc>
                    <HeadMoc src={require('../Img/trav.png')}/>
                    <BOTMoc src={require('../Img/airplane-boarding-passes-edit1.jpg')}/>
                </MainMoc>
            </Main>
        );
    }
}

export default MainCom;