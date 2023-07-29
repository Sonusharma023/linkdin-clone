import React from 'react'
import styled from "styled-components";
const Networkmain = () => {
    return (
        <Container>
            <Box>
                <p>No pending invitations</p>
                <span>Manage</span>
            </Box>

            <Box1>
                <div className='img'>
                    <img src='../images/close-icon.png' alt='' />
                </div>
                <Book>
                    <div className='img'>
                        <img src='../images/book.webp' alt='' />
                    </div>
                    <h2>Add personal contacts</h2>
                </Book>
                <p>We’ll periodically import and store your contacts to help you and others connect. You choose who to connect to and who to invite. <span>Learn more</span></p>
                <input type='email' placeholder='abc@gmail.com' />
                <Button>Continue</Button>
                <p>More options</p>
            </Box1>

            <Box2>
                <Heading>
                    <h3>People you may know in Greater Agra Area</h3>
                    <h4>See all</h4>
                </Heading>

                <Grid>
                    <Col>
                    <div className='img'>
                    </div>
                    <div className='body'>
                        <Img>
                          <img  src='../images/Faizan.webp' alt=''/>
                        </Img>
                        <h3>Faizan Qureshi</h3>
                        <p>Attened RBS CollEGE OF EDUCATION</p>
                       <span>Based on your profile</span>

                       <div className='button'>
                       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='#0a66c2'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                       <span>Connect</span>
                       </div>
                    </div>
                    </Col>

                                    <Col>
                    <div className='img'>
                    </div>
                    <div className='body'>
                        <Img>
                          <img  src='../images/devansh.webp' alt=''/>
                        </Img>
                        <h3>Devansh Khatri</h3>
                        <p>RBS'23 @BCA | Front-End Web Developer</p>
                       <span>Based on your profile</span>

                       <div className='button'>
                       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='#0a66c2'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                       <span>Connect</span>
                       </div>
                    </div>
                    </Col>   
                    <Col>
                    <div className='img'>
                    </div>
                    <div className='body'>
                        <Img>
                          <img  src='../images/prashant.webp' alt=''/>
                        </Img>
                        <h3>Prashant k.</h3>
                        <p>Linux</p>
                       <span>Based on your profile</span>

                       <div className='button'>
                       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='#0a66c2'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                       <span>Connect</span>
                       </div>
                    </div>
                    </Col>
                    <Col>
                    <div className='img'>
                    </div>
                    <div className='body'>
                        <Img>
                          <img  src='../images/karishma.webp' alt=''/>
                        </Img>
                        <h3>Karishma Singh</h3>
                        <p>Talent Acquisition Excutive...Masters of ...</p>
                       <span>Based on your profile</span>

                       <div className='button'>
                       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='#0a66c2'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                       <span>Connect</span>
                       </div>
                    </div>
                    </Col>
                    <Col>
                    <div className='img'>
                    </div>
                    <div className='body'>
                        <Img>
                          <img  src='../images/nandini.webp' alt=''/>
                        </Img>
                        <h3>Nandini Sharma</h3>
                        <p>Attened RBS CollEGE OF EDUCATION</p>
                       <span>Based on your profile</span>

                       <div className='button'>
                       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='#0a66c2'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                       <span>Connect</span>
                       </div>
                    </div>
                    </Col>
                    <Col>
                    <div className='img'>
                    </div>
                    <div className='body'>
                        <Img>
                          <img  src='../images/abhijeet.webp' alt=''/>
                        </Img>
                        <h3>Abhijeet Jadon </h3>
                        <p>I don't remem ber days but moments</p>
                       <span>Based on your profile</span>

                       <div className='button'>
                       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='#0a66c2'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                       <span>Connect</span>
                       </div>
                    </div>
                    </Col>
                    <Col>
                    <div className='img'>
                    </div>
                    <div className='body'>
                        <Img>
                          <img  src='../images/Anjul.webp' alt=''/>
                        </Img>
                        <h3>Anjul Singhal</h3>
                        <p>Attened RBS CollEGE OF EDUCATION</p>
                       <span>Based on your profile</span>

                       <div className='button'>
                       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='#0a66c2'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                       <span>Connect</span>
                       </div>
                    </div>
                    </Col>
                    <Col>
                    <div className='img'>
                    </div>
                    <div className='body'>
                        <Img>
                          <img  src='../images/abhishek.webp' alt=''/>
                        </Img>
                        <h3>Abhishek rajawat</h3>
                        <p>Sales funnel designer | Helping business</p>
                       <span>Based on your profile</span>

                       <div className='button'>
                       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='#0a66c2'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                       <span>Connect</span>
                       </div>
                    </div>
                    </Col>
                </Grid>
            </Box2>
        </Container>
    )
}
const Container = styled.div`
`;

const Box = styled.div`
width: 100%;
height: auto;
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   border-radius: 8px;
padding: 8px 8px 8px 16px;
display: flex;
align-items: center;
justify-content: space-between;

p{
    color: rgba(0,0,0,0.6);
}

span{
    padding: 6px 8px;

    border-radius: 6px;

    &:hover{
        background-color: #56687a;
    }
}
`;
const Box1 = styled.div`
width: 100%;
height: auto;
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   border-radius: 8px;
   margin-top: 16px;
   padding: 24px;
   margin-bottom: 16px;
   .img{
    
    width: 20px;
    height: 20px;
    margin-left:auto;
    
    img{
width: 100%;

    }
    }

    p{
        color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
  margin :16px 0  ;

  span{
    color: #0a66c2;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
  }
    }

    input{
        width: 100%;
        padding: 6px 8px;
        border: 2px solid rgba(0,0,0,0.5);
        color: rgba(0,0,0,0.5);
        border-radius: 6px;
    }
`;

const Book = styled.div`
display: flex;
align-items: center;
gap: 24px;
padding: 0 12px;
.img{
    width: 56px;
    height: 56px;
    margin: 16px  0 0 0;
    img{
width: 100%;

    }
}
h2{
    margin-top: 5px;
}
`;
const Button = styled.div`
  width: fit-content;
display: flex;
align-items: center;
justify-content: space-between;
padding: 4px 12px;
margin-top: 12px;
border-radius: 9px;
border: 1px solid #0a66c2;
color: #0a66c2;
transition: color 0.3s ease-in-out;
&:hover{
  background-color: rgba(10, 105,194, 0.2);
}
`;
const Box2 = styled.div`
width: 100%;
height: auto;
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   border-radius: 8px;
padding-top: 16px;
`;
const Heading = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 10px 0 16px;
h3{
    color: rgba(0,0,0,0.6);
}
h4{
    color: rgba(0,0,0,0.6);
}
`;
const Grid = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 13.6px;
padding: 13.6px;
@media (max-width:1200px) {
  width: 100%;
  max-width: 636px;
grid-template-columns:  repeat(3,1fr);
}
@media screen and (max-width:990px) {
  width: 100%;
  max-width: 396px;

  grid-template-columns: repeat(2,1fr)  ;  /* 225px 471px */
}

@media (max-width:768px) {
    width: 100%;
    max-width: 636px;
    margin: 0 auto;
    grid-template-columns: repeat(3,1fr)  ;  /* 225px 471px */

}
@media (max-width:560px) {
    width: 100%;
    max-width: 396px;
    grid-template-columns: repeat(2,1fr)  ;  /* 225px 471px */
}
@media (max-width:425px) {
    width: 100%;
display: flex;
flex-direction: column;

}
`;

const Col = styled.div`
width: 100%;
border-radius: 0.8rem;

@media (max-width:425px) {
    width: 100%;
max-width: 184px;
margin: 0 auto;

}
.img{
border-top-right-radius: 0.8rem;
border-top-left-radius: 0.8rem;

    background-image: url('../images/left-side.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 62px;
 
    img{
        width: 100%;
        object-fit: cover;
    }
}
.body{
    padding:0 12px;
    text-align: center;


    h3{
        color: rgba(0,0,0,0.9);
       letter-spacing :0.5px ;
       transform: translateY(-42px);
    }
    p{
        color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
  transform: translateY(-37px);
  /* letter-spacing :0.9px ; */
  line-height: 1.4;
    }

    span{
        font-size: 14px;
        color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
  letter-spacing :0.7px ;
    }
}

.button{
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
padding: 4px 12px;
margin-top: 12px;
border-radius: 25px;
border: 1px solid #0a66c2;
transition: color 0.3s ease-in-out;

span{
    color: #0a66c2;
  font-family: "Segoe";

}
&:hover{
  background-color: rgba(10, 105,194, 0.2);
} 
}
`;
const Img = styled.div`
width: 104px;
height: 104px;
border-radius: 50%;
margin: 0 auto;
transform: translateY(-50px);
img{
    width: 100%;
border-radius: 50%;

    object-fit: cover;
}
`;
export default Networkmain