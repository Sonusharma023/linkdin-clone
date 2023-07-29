import React from 'react'
import  styled  from "styled-components";
import Header from '../Header';
import Jobleft from './Jobleft';
import Jobmain from './Jobmain';
import Jobright from './Jobright';
const Job = () => {
  return (
<>
<Header />
    <Container>
    <Layout>
<Jobleft />
<Jobmain />
<Jobright />
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
grid-template-areas:"leftside main rightside" ;
grid-template-columns:  225px 555px 300px;   /*225px 555px 300px */
column-gap: 25px;
row-gap: 25px;
grid-template-rows: auto;
margin: 24px auto 0;


@media (max-width:1200px) {
  width: 100%;
  max-width: 962px;
  grid-template-areas:"leftside main rightside" ;
grid-template-columns:  225px  387px  300px;  /*225px  387px  300px */
margin: 24px auto 0;
}
@media screen and (max-width:1008px) {
  width: 100%;
  max-width: 721px;
  grid-template-areas:"leftside" "main " ;
  grid-template-areas: "" "rightside" ;
  grid-template-columns: 225px 471px ;  /* 225px 471px */

  
margin: 24px auto;
}

@media (max-width:768px) {
display: flex;
flex-direction: column;
padding: 0 10px;
}
`;
export default Job