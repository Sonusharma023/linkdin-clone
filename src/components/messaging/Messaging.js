import React from 'react'
import  styled  from "styled-components";
import Header from '../Header';
import Messright from './Messright';
import Messmain from './Messmain';
const Messaging = () => {
  return (
<>
<Header />
    <Container>
    <Layout>
<Messmain />
<Messright />
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
grid-template-columns:  781.33px 300px;   /*225px 555px 300px */
column-gap: 24px;

margin: 24px auto 0;


@media (max-width:1200px) {
  width: 100%;
  max-width: 935.34px;
  grid-template-areas:"leftside main" ;
grid-template-columns:  635.34px  300px;  /*225px  387px  300px */
}
@media screen and (max-width:990px) {
  width: 100%;
  max-width: 635.34px;
display: flex;
flex-direction: column;
align-items: center;
}

@media (max-width:768px) {
display: flex;
flex-direction: column;
padding: 0 10px;
}
`;
export default Messaging