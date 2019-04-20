import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
flex-direction: column;
  display: flex;
  height: 100%;
  width: 70%;
`;
const Heading = styled.div`
display: flex;
margin-top: 3%;
justify-content: center;
align-items: center;
height:6%;
width: 100%;
font-weight: 300;
font-size: 3rem;
color:#2076FF;
`;
const Head = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:15%;
width: 100%;

`;
const NavBarImg = styled.img`
  width:82%;
  height: auto;
`;

const SearchButton = styled.div`
  display: flex;
  float: right;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 10rem;
  color: white;
  font-weight: 200;
  background-color: #2076FF;
  border: solid 1px #2076FF;
  &:hover {
    background-color: white;
    color: #2076FF;
  }
  font-size: 1.5rem;
  border-radius: 3rem;
`;
const Available = styled.div`
width: 100%;
margin-left: 10px;
`;
const AvailableBox = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #e8e8e8;
    height: 5rem;
    padding: 1.5rem;
    border-radius: 15px;
    width: 92%;
    margin: .7rem;
    align-items: center;
    color: #3e3e3e;
    font-size: 1.3rem;
`;
const ABDate = styled.div`
`;

const ABRoute = styled.div`
`;
const ABButton = styled.div`
    color: #2076FF;
    font-size: 2.5rem;
    cursor: pointer;
    font-weight: bolder;
`;


class TicketPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    render() {
        return (<Main>
                <Heading>
                    Find Ticket
                </Heading>
                <Head>
                    <NavBarImg src={require("../Img/Img.jpg")}/>
                    <SearchButton>
                    Search
                    </SearchButton>
                </Head>
                <Available>
                <AvailableBox>
                <ABDate> 21 April, 2019 </ABDate>
                <ABRoute> Delhi India &rarr; New York, USA </ABRoute>
                <ABButton> + </ABButton>
                </AvailableBox>
                <AvailableBox>
                <ABDate> 21 April, 2019 </ABDate>
                <ABRoute> Delhi India &rarr; New York, USA </ABRoute>
                <ABButton> + </ABButton>
                </AvailableBox>
                <AvailableBox>
                <ABDate> 21 April, 2019 </ABDate>
                <ABRoute> Delhi India &rarr; New York, USA </ABRoute>
                <ABButton> + </ABButton>
                </AvailableBox>
                <AvailableBox>
                <ABDate> 21 April, 2019 </ABDate>
                <ABRoute> Delhi India &rarr; New York, USA </ABRoute>
                <ABButton> + </ABButton>
                </AvailableBox>
                </Available>
            </Main>
        );
    }
}

export default TicketPage;


// const MainForm = styled.div`
//   display: flex;
//   flex-flow: column;
//   align-items: center;
//   height: 100%;
//   width: 45%;
// `;
// const MainMoc = styled.div`
//   display: flex;
//   flex-flow: column;
//   justify-content: space-around;
//   align-items: center;
//   height: 100%;
//   width: 55%;
// `;
// const HeadMoc = styled.img`
//   display: flex;
//   height: 25%;
//   width: auto;
//
// `
// const BOTMoc = styled.img`
//   display: flex;
//   height: 50%;
//   width: auto;
// `
// const FormHead = styled.div`
//   display: flex;
//   flex-flow: column;
//   justify-content: center;
//   align-items: center;
//   padding-top: 5rem;
//   height: 12%;
//   width: 50%;
//   color:#2076FF;
//   font-size: 3rem;
//   font-weight: lighter;
// `;
// const FormRow = styled.div`
//   display: flex;
//   flex-flow: column;
//   justify-content: center;
//   align-items: center;
//   margin: 2rem;
//   height: 10%;
//   width: 100%;
// `;
// const Input = styled.input`
//   height: 4rem;
//   width: 20rem;
//   border: none;
//   display:flex;
//   outline: none;
//   font-size: 1.5rem;
//   border-bottom: solid 1px gray;
//   color: gray;
// `;
// const EnterButton = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 4rem;
//   width: 12rem;
//   color: white;
//   font-weight: 200;
//   background-color: #2076FF;
//   border: solid 1px #2076FF;
//   &:hover {
//     background-color: white;
//     color: #2076FF;
//   }
//   font-size: 1.8rem;
//   border-radius: 3rem;
// `;


