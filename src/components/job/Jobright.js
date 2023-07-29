import React from 'react'
import styled from "styled-components";
const Jobright = () => {
    return (
        <Container>
            <Box>
                <div className='title'>
                    <Tittle>Job seeker guidance</Tittle>
                    <p>Recommended based on your activity</p>
                </div>
                <div className='class'>
                    <h3>I want to improve my resume</h3>
                    <img src='../images/jobright.webp' alt=''  />
                </div>
                <p>Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
                <span>Show more <img src='../images/right-icon.svg' alt='' /></span>
            </Box>
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
        </Container>
    )
}
const Container = styled.div`
width: 100%;
height: fit-content;
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
const Box = styled.div`
width: 100%;
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   border-radius: 8px;
   padding: 24px 12px 16px;
   margin-bottom: 8px;

   p{
    font-size: 12px;
    color: rgba(0,0,0,0.5);
    font-family: "Segoe UI";
   }

   .class{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 0;

    h3{
        font-size: 12px;
    }
   }
   span{
    margin-top:5px ;
    display: flex;
    align-items: end;
    gap: 4px;
    color: rgba(0,0,0,0.7);
   }
`;
const Tittle = styled.div`
padding-bottom: 4px;

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
export default Jobright