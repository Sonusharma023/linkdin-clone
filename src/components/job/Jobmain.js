import React from 'react'
import styled from "styled-components";
const Jobmain = () => {
  return (
    <Container>
      <Box>
        <Feed1>
          <h3>Suggested job searches</h3>
          <img src='../images/close-icon.png' alt='' />
        </Feed1>
        <Feed2>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#0a66c2'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            <span>making manager</span>
          </Button>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#0a66c2'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            <span>hr</span>
          </Button>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#0a66c2'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            <span>legal</span>
          </Button>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#0a66c2'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            <span>sales</span>
          </Button>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#0a66c2'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            <span>amazon</span>
          </Button>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#0a66c2'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            <span>google</span>
          </Button>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#0a66c2'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            <span>analyst</span>
          </Button>
        </Feed2>

      </Box>

      <Box3>
        <div className='row'>
          <div className='col'>
            <Img>
              <img src='../images/user.svg' alt='' />
            </Img>
            <div className='combine'>
              <h3>See the full list of jobs where you'd be a top applicant </h3>
              <p>Millions of members use Premium</p>
              <div className='premium'>Try Premium for free</div>
            </div>
          </div>
        </div>
      </Box3>

      <Box3>
        <div className='row'>
          <div className='col'>
            <Img>
              <img src='../images/profile.webp' alt='' />
            </Img>
            <div className='combine'>
              <h3>Complete profiles receive 40x more opportunities</h3>
              <span>Update Profile</span>
            </div>
          </div>
          <img src='../images/close-icon.png' alt='' className="img" />
        </div>
      </Box3>

      <Box4>
        <Heading>
          <h1>Still Hiring</h1>
          <p>Jobs you may have missed</p>
        </Heading>
        <Hiring1>
          <div className='hiring-box'>

            <div className='hiring-img'>
              <img src='../images/con.webp' alt='' />
            </div>

            <Content>
              <h2>Construction Supervisor</h2>
              <h4>Dream Constructions india</h4>
              <p>Gurugram, Haryana, India (On-site)</p>
              <p><img src='../images/send.webp' alt='' /> Message the job poster directly</p>
              <span>Promoted <img src='../images/home-logo.svg' alt='' /> Easy Apply</span>
            </Content>
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" fill='rgba(0,0,0,0.6)'><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
        </Hiring1>

        <Hiring1>
          <div className='hiring-box'>

            <div className='hiring-img'>
              <img src='../images/der.webp' alt='' />
            </div>

            <Content>
              <h2>Dermatologist</h2>
              <h4>Vibes Healthcare Ltd</h4>
              <p>Delhi, India (On-site)</p>
              <p><img src='../images/send.webp' alt='' /> Message the job poster directly</p>
              <span>Promoted <img src='../images/home-logo.svg' alt='' /> Easy Apply</span>
            </Content>
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" fill='rgba(0,0,0,0.6)'><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>

        </Hiring1>

        <span>Show more <img src='../images/right-icon.svg' alt='' /></span>
      </Box4>

      <Box5>
      <Heading>
          <h1>Recommended for you</h1>
          <p>Based on your profile and search history</p>
        </Heading>

       <Minibox>
        <div className='mini-img'>
        <img src='../images/bag.webp' alt='' />
        </div>
        <h1>Want more jobs?</h1>
        <p>Click here to continue searching over 20 million jobs on LinkedIn</p>

        <span>Update Profile</span>
       </Minibox>
      </Box5>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: fit-content;

`;
const Box = styled.div`
padding: 24px 16px 16px;
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   border-radius: 8px;
`;
const Feed1 = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 10px;
img{
  width: 24px;
  height: 24px;
}
`;
const Feed2 = styled.div`
display: flex;
flex-wrap: wrap;
`;
const Button = styled.div`
width: fit-content;
display: flex;
align-items: center;
justify-content: space-between;
padding: 2px 12px;
border-radius: 9px;
border: 1px solid #0a66c2;
margin: 0 4px 8px 0;
transition: color 0.3s ease-in-out;
font-family: "Segoe UI";
&:hover{
  background-color: rgba(10, 105,194, 0.2);
}

svg{
  margin-right: 5px;
}
span{
  color:  #0a66c2;
}
`;
const Box3 = styled.div`
margin-top: 20px;
padding: 16px 16px;
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   border-radius: 8px;

span{
  width: fit-content;
display: flex;
align-items: center;
justify-content: space-between;
padding: 2px 12px;
margin-top: 7px;
border-radius: 9px;
border: 1px solid #0a66c2;
color: #0a66c2;
transition: color 0.3s ease-in-out;
&:hover{
  background-color: rgba(10, 105,194, 0.2);
}

}
.row{
  display: flex;
  align-items: start;
  justify-content: space-between;
.col{
  display: flex;
  align-items: center;
}
  .premium{
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  background-color: #f8c77e;
  border-radius: 17px;
  margin-top: 12px;
}
  h3{
    font-family: "Segoe UI";
    padding-right: 5px;
  }
  p{
    font-size: 12px;
    color: rgba(0,0,0,0.4);
    font-family: "Segoe UI";
  }
  .img{
    width: 24px;
    height: 24px;
  }
}


`;
const Img = styled.div`
width: 56px;
height: 56px;
border-radius: 50%;
margin: 0 8px 8px 0;

img{
  width: 56px;
height: 56px;
  border-radius: 50%;
}
`;

const Box4 = styled.div`
padding: 24px 16px 16px;
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   border-radius: 8px;
   margin-top: 20px;


   span{
    width: fit-content;
    margin: 6px auto;
    display: flex;
    gap: 5px;
    align-items: end;
    font-size: 14px;
  color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
    img{
      width: 16px;
      height: 16px;
    }
   }

   svg{
    width: 24px;
    height: 24px;
   }
`;

const Heading = styled.div`
padding-bottom: 15px;
p{
  font-size: 14px;
  color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
}
`;
const Hiring1 = styled.div`
border-bottom: 1px solid rgba(0,0,0,0.09);
padding: 20px 0 10px;
display: flex;
align-items: start;
justify-content: space-between;

.hiring-box{
  display: flex;
  align-items: start;
}
.hiring-img{
  width: 56px;
  height: 56px;
margin-right: 10px;
  img{
    width: 100%;
  }
}

span{
  display: flex;
  align-items: center;
  gap: 9px;
}
svg{
  margin-right: 10px;
}
`;
const Content = styled.div`
padding-left: 8px;

span{

  margin: 3px 0;
}
h4{
  font-family: "Segoe UI";
  margin-top: 5px;

  color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
}
p{
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
  img{
    width: 24px;
    height: 24px;
  }
}
`;

const Box5 = styled.div`
padding: 24px 16px 16px;
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   border-radius: 8px;
   margin-top: 20px;
`;
const Minibox = styled.div`
border: 1px solid rgba(0,0,0,0.09);
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
span{
  width: fit-content;
display: flex;
align-items: center;
justify-content: space-between;
padding: 2px 12px;
margin-top: 30px;
margin-bottom: 10px;
border-radius: 9px;
border: 1px solid #0a66c2;
color: #0a66c2;
transition: color 0.3s ease-in-out;
&:hover{
  background-color: rgba(10, 105,194, 0.2);
}
}

.mini-img{
  width: 48px;
  height: 48px;
margin: 0 auto;

img{
width: 100%;
}
}
h1{
  font-size: 24px;
  margin: 12px 0;
}
p{
  color: rgba(0,0,0,0.6);
  font-family: "Segoe UI";
}
`;
export default Jobmain