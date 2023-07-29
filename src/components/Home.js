
import  styled  from "styled-components";
import LeftSide from "./LeftSide";
import Main from "./Main";
import Rightside from "./Rightside";
import Header from './Header';
// import { Navigate } from "react-router-dom";
// import {connect } from "react-redux";

const Home = (props) => {

  return <>
     <Header />
     <Container>

     {/* {props.user && <Navigate to="/" />} */}
      <Section>
        <h5><a href="/">Hiring in a hurry? - </a></h5>
        <p>Find talented pros in record time with Upwork and keep business moiving.</p>
      </Section>
      <Layout>
       <LeftSide />
        <Main />
      <Rightside />
      </Layout>
     </Container>
    </>
}

const Container  = styled.div`
/* position: relative; */
padding-top: 52px;
width: 100%;
max-width: 1440px;
background-color: #F3F2EF;

@media (max-width:768px) {
padding-bottom: 60px;
  
}
`;

// const Content  = styled.div`
// max-width: 1128px;
// margin: 0 auto;
// `;


const Section  = styled.section`
/* min-height: 50px; */
/* padding: 16px 0; */
margin: 10px 0;
box-sizing: content-box;
text-align: center;
text-decoration: underline;
display: flex;
justify-content: center;

      a{
    font-weight: 700;
    color: #0a66c2;
  font-size: 14px;
  font-family: 'Segoe UI';
      }

p{
  font-size: 14px;
  color: #434649;
  font-weight: 600;
  font-family: 'Segoe UI';
}

@media screen and (max-width: 768px) {
  flex-direction: column;
  padding: 0 5px;
}
`;

const Layout  = styled.div`
/* position: relative; */
width: 100%;
max-width: 1128px;
height: auto;
display: grid;
grid-template-areas:"leftside main rightside" ;
grid-template-columns:  225px 555px 300px;   /*225px 555px 300px */
column-gap: 25px;
row-gap: 25px;
grid-template-rows: auto;
margin: 0 auto;


@media (max-width:1200px) {
  width: 100%;
  max-width: 962px;
  grid-template-areas:"leftside main rightside" ;
grid-template-columns:  225px  387px  300px;  /*225px  387px  300px */
margin: 0 auto;
}
@media (max-width:1008px) {
  width: 100%;
  max-width: 721px;
  grid-template-areas:"leftside" "main " ;
  grid-template-areas: "" "rightside " ;

  grid-template-columns: 225px 471px ;  /* 225px 471px */

  
margin: 0 auto;
}

@media (max-width:768px) {
display: flex;
flex-direction: column;
padding: 0 10px;
}
`;

// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user,
//   };
// }
// export default connect(mapStateToProps)(Home);
export default Home;