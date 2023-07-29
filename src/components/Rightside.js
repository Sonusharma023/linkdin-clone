import { useState } from "react";
import styled from "styled-components";

const Rightside = () => {

  const [showMore, setShowMore] = useState(false);
  return (
    <Container>
      <div className="box">
        <div className="right-name">
          <h1>LinkedIn News</h1>
          <img src="./images/feed-icon.svg" alt="vector-img" />
        </div>
        <div className="row">
          <Feed1>
            <NavList>
              <h3>Agilitas Sports raies ₹400 crore </h3>
              <span>2d ago . 144 readers</span>
            </NavList>

            <NavList>
              <h3>Agilitas Sports raies ₹400 crore </h3>
              <span>2d ago . 144 readers</span>
            </NavList>

            <NavList>
              <h3>Agilitas Sports raies ₹400 crore </h3>
              <span>2d ago . 144 readers</span>
            </NavList>

            <NavList>
              <h3>Agilitas Sports raies ₹400 crore </h3>
              <span>2d ago . 144 readers</span>
            </NavList>

            <NavList>
              <h3>Agilitas Sports raies ₹400 crore </h3>
              <span>2d ago . 144 readers</span>
            </NavList>

            <div className={showMore ? "id active" : "id"}>
              <NavList>
                <h3>Agilitas Sports raies ₹400 crore </h3>
                <span>2d ago . 144 readers</span>
              </NavList>

              <NavList>
                <h3>Agilitas Sports raies ₹400 crore </h3>
                <span>2d ago . 144 readers</span>
              </NavList>

              <NavList>
                <h3>Agilitas Sports raies ₹400 crore </h3>
                <span>2d ago . 144 readers</span>
              </NavList>

              <NavList>
                <h3>Agilitas Sports raies ₹400 crore </h3>
                <span>2d ago . 144 readers</span>
              </NavList>

              <NavList>
                <h3>Agilitas Sports raies ₹400 crore </h3>
                <span>2d ago . 144 readers</span>
              </NavList>
            </div>

            <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
          </Feed1>
        </div>
      </div>

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
const Container = styled.div`
grid-area: rightside;
width: 100%;
height: 100%;
@media screen and (max-width:1008px){
  grid-area: 2/2;
}


    .box{
      box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
      background-color: #F9FAFB;
      border-radius: 8px;
      border-bottom: 1.5px solid rgba(0,0,0,0.09) ;
    }
    .collect{
  position: sticky;
top: 57px;

@media screen and (max-width:1008px){
  position: unset;
}
}

 .right-name{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px 0 12px;

   h1{

    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: rgba(0,0,0,0.9);
    font-family: 'Segoe UI';
   }
 }
 .row{
    margin: 0 12px;
    padding-bottom: 12px;
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

const Feed1 = styled.ul`

width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding: 0 12px;

  .id{
    display: none;
  }
  
     .active{
      display: flex;
      flex-direction: column;
     }
     .btn{
      margin-top: 12px;
      display: flex;
      align-items: start;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: rgba(0,0,0,0.5);
      font-family: 'Segoe UI';
     }

  h3{
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: rgba(0,0,0,0.9);
    font-family: 'Segoe UI';
    margin: 4px 0 0 0;
    /* padding: 0 16px 0 0 ; */
  }
  span{
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    color: rgba(0,0,0,0.5);
    font-family: 'Segoe UI';
  }
`;
const NavList = styled.li`
padding: 4px 0;
`;

const Img = styled.div`
/* max-width: 100%;
height: 100%;
background: url("./images/backgroung.jfif");
background-size: cover;
background-position: center;
background-repeat: no-repeat; */
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
width: 100%;
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

export default Rightside;