import React from 'react'
import  styled  from "styled-components";
import Header from '../Header';
import Networkleft from './Networkleft';
import Networkmain from './Networkmain';
const Network = () => {
  return (
<>
<Header />
    <Container>
    <Layout>
      <Networkleft />
      <Networkmain />
    </Layout>
    </Container>
</>
  )
}
const Container  = styled.div`
padding-top: 52px;
width: 100%;
max-width: 1440px;
background-color: #F3F2EF;

@media (max-width:768px) {
padding-bottom: 60px;
  
}
`;

const Layout  = styled.div`
width: 100%;
max-width: 1128px;
/* height: auto; */
display: grid;
grid-template-areas:"leftside main " ;
grid-template-columns:  300px 804px;   /*225px 555px 300px */
column-gap: 24px;
row-gap: 24px;
grid-template-rows: auto;
margin: 24px auto 0;


@media (max-width:1200px) {
  width: 100%;
  max-width: 962px;
  grid-template-areas:"leftside main" ;
grid-template-columns:  300px  636px;  /*225px  387px  300px */
margin: 24px auto 0;
}
@media screen and (max-width:990px) {
  width: 100%;
  max-width: 721px;
  grid-template-areas:"leftside" "main " ;
  grid-template-columns: 300px 396px ;  /* 225px 471px */
margin: 24px auto;
}

@media (max-width:768px) {
display: flex;
flex-direction: column;
padding: 0 10px;
}
`;
export default Network