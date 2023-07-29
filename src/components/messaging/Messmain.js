import React from 'react'
import styled from "styled-components";
const Messmain = () => {
  return (
    <Container>
      <Box>
        <Heading>
          <h3>Messaging</h3>
          <Icon>
            <img src='../images/dots.svg' alt='' width="16px" />
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='rgba(0,0,0,0.6)'><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" /></svg>
          </Icon>
        </Heading>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="./images/search-icon.svg" alt="logo" />
          </SearchIcon>
          </Search>
          <Button>
            <span>Focused</span>
            <p>Other</p>
          </Button>
          <User>
  <Miniuser>
  <div className='img'>
              <img src='../images/user.svg' alt='' />
            </div>
            <Head>
              <h4>Diane Chiang</h4>
              <h5>LinkedIn Offer</h5>
              <p>there, Sonu! My</p>
            </Head>
  </Miniuser>
            <Span>Jul 10</Span>
          </User>

          <User>
  <Miniuser>
  <div className='img'>
              <img src='../images/user.svg' alt='' />
            </div>
            <Head>
              <h4>Diane Chiang</h4>
              <h5>LinkedIn Offer</h5>
              <p>there, Sonu! My</p>
            </Head>
  </Miniuser>
            <Span>Jul 10</Span>
          </User>

      </Box>
      <Box1>
        <Heading1>
          <div className='heading'>
            <h3>Diane Chiang</h3>
            <p>Senior Product Operations Manager at LinkedIn</p>
          </div>
          <Icon1>
            <img src='../images/dots.svg' alt='' width="16px" />
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
          </Icon1>
        </Heading1>
        <Line><span>LinkedIn Offer</span> <span>Jul 10</span></Line>

        <Row>
          <div className='img'>
            <img src='../images/user.svg' alt='' />
          </div>
          <Body>
            <div className='head'>
              <h3>Diane Chiang</h3> <p>1:32 PM</p>
            </div>
            <p>Hi there, Sonu! My name is Diane from the LinkedIn Premium team. Despite recent economic uncertainty, a number of companies are still posting jobs. Would you like to try Premium for free to accelerate your job search?</p>

            <span>A free trial? Sure</span>
          </Body>
        </Row>
      </Box1>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 80vh;
display: flex;
`;
const Box = styled.div`
width: 100%;
height: auto;

max-width: 312.53px;
margin: 0 auto;
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
border-top-left-radius: 8px;
   border-bottom-left-radius: 8px;
`;
const Box1 = styled.div`
width: 100%;
height: auto;

max-width: 468.8px;
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   border-top-right-radius: 8px;
   border-bottom-right-radius: 8px;

@media screen and (max-width:425px) {
  display: none;
}
`;
const Heading = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 8px 16px;
border-bottom: 1px solid rgba(0,0,0,0.09);
h3{
    color: rgba(0,0,0,0.6);
}
`;
const Icon = styled.div`
display: flex;
align-items: center;
gap: 32px;
`;
const Search = styled.div`
width: 100%;
margin: 9px 0;
opacity: 1;
flex-grow: 1;
position: relative;
margin: 8px 12px;
 & > div{
  max-width: 280px;

  input {
    box-shadow: none;
    background-color: #eef3f8;
    border-radius: 4px;
    width: 100%;
    color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
    padding: 0 8px 0 40px;
    line-height: 1.75;
    font-weight: 400;
    font-size: 14px;
    height: 34px;
    border-color: #dce6f1;
    vertical-align: text-top;

    &:focus{
  border: 2px solid #0a66c2;
 }
  }


 }
`;
const SearchIcon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 10px;
left: 2px;
border-radius: 0 2px 2px 0;
margin: 0;
pointer-events: none;
display: flex;
justify-content: center;
align-items: center;
transition:  background-color 0.15s;
`;
const Heading1 = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
padding: 8px 16px;
border-bottom: 1px solid rgba(0,0,0,0.09);

h3{
  color: rgba(0,0,0,0.6);

}
p{
  color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
  font-size: 13px;
}
`;
const Icon1 = styled.div`
display: flex;
align-items: center;
gap: 32px;
`;
const Line = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom:10px ;
background-color: rgba(0,0,0,0.04);
span{
  color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
  font-size: 12px;
  padding: 8px 12px;

}
`;
const Row = styled.div`
display: flex;
align-items: start;
padding: 0 12px;
.img{
  width: 100%;
  max-width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right:10px;

  img{
    width: 100%;
  border-radius: 50%;
  }
}


`;
const Body = styled.div`
display: flex;
  flex-direction: column;
  font-size: 13px;
  gap: 10px;
  color: rgba(0,0,0,0.5);

  .head{
  display: flex;
align-items: center;
  gap: 20px;
  font-size: 14px;
  color: rgba(0,0,0,0.6);

p{
  font-size: 12px;
  color: rgba(0,0,0,0.7);
  font-family: "Segoe UI";
}
}

p{
  color: rgba(0,0,0,0.4);
  font-family: "Segoe UI";

}
span{
  width: fit-content;
display: flex;
align-items: center;
justify-content: space-between;
padding: 6px 16px;
border-radius: 15px;
color: #0a66c2;
border: 1px solid #0a66c2;
margin: 0 4px 8px 0;
transition: color 0.3s ease-in-out;
&:hover{
  background-color: rgba(10, 105,194, 0.2);
}
}
`;
const Button = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

span{
  font-size: 14px;
  color: #026600;
  padding: 9px 8px 11px;
  
}
p{
  font-size: 14px;
  color: rgba(0,0,0,0.6);
  padding: 9px 8px 11px;
}
`;
const User = styled.div`
display: flex;
align-items: start;
justify-content: space-between;
background-color: #eef3f8;
padding: 6px 12px;
border-left: 5px solid #026600;
.img{
  width: 100%;
  max-width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top:2px;
  margin-right: 15px;

  img{
    width: 100%;
  border-radius: 50%;
  }
}
`;
const Head = styled.div`

h4{
  color: rgba(0,0,0,0.7);
font-size: 15px;
}
h5{
  color: rgba(0,0,0,0.5);
font-size: 14px;
font-family: "Segoe UI";

}
p{
  color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
  font-size: 13px;
}
`;
const Span = styled.div`
margin: 0;
color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
`;
const Miniuser = styled.div`
display: flex;
align-items: center;
`;
export default Messmain