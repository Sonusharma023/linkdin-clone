import React from 'react'
import  styled  from "styled-components";
const Notileft = () => {
  return (
    <Container>
    <Heading>
    <h1>Manage your</h1>
     <h1>Notifictions</h1>
    </Heading>
     <span>View Settings</span>
    </Container>
  )
}
const Container  = styled.div`
width: 100%;
height: fit-content;
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   border-radius: 8px;
   padding: 16px;
   position: sticky;
top: 70px;

@media screen and (max-width:768px){
  position: unset;
}
   span{
    font-size: 14px;
    color: #0a66c2;
    font-weight: 500;
}
`;
const Heading  = styled.div`
margin-bottom: 0.5rem;

h1{
    font-size: 16px;
    line-height: 1.4;
}


`;
export default Notileft