import React from 'react'
import  styled  from "styled-components";
const Notiright = () => {
  return (
    <Container>
     <div className="collect">
 <Img>
        <img src="./images/See.png" alt="" />
      </Img>

      <Feed2>
        <span>About</span>
        <span>Accessibility</span>
        <span>Help Center</span>
        <span>Privacy & Terms <img src="./images/down-icon.svg" alt="vetor-img" /></span>
        <span>Ad Choices</span>
        <span>Adverstising</span>
        <span>Business Services<img src="./images/down-icon.svg" alt="vetor-img" /></span>
        <span>Get the LinkedIn app</span>
        <span>more</span>

      </Feed2>

      <p className="last-line"><img src="./images/login-logo.svg" alt="logo" /> LinkedIn Corporation © 2023</p>
 </div>
    </Container>
  )
}
const Container  = styled.div`
width: 100%;
height: 100%;
@media screen and (max-width:1008px){
  grid-area: 2/2;
}
.collect{
  position: sticky;
top: 60px;


@media screen and (max-width:768px){
  position: unset;
}
}
.last-line{
    text-align: center;
font-size: 12px;
line-height: 16px;
color: rgba(0,0,0,0.8);
    font-family: 'Segoe UI';

    

     img{
      width: 56px;
      height: 14px;
     }
   }
`;

const Img = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
    padding: 12px 0 ;
    background-color: #F3F2EF;
`;

const Feed2 = styled.div`
    background-color: #F3F2EF;
padding: 0 24px;
font-size: 12px;
padding-bottom: 16px;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 15px;


span{
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0,0,0, 0.5);
  font-family: 'Segoe UI';
}
`;
export default Notiright