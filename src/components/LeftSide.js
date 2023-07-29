import styled from "styled-components";
import {connect } from "react-redux";
const LeftSide = (props) => {
  return (
    <Container>
      <Feed1>

        <div className="info">
        </div>
        <div className="user">
          <Gap>
          <Photo>
          {props.user && props.user.photoURL ? 
     <img src={props.user.photoURL} alt="user"/>
     : <img src="./images/user.svg" alt="user" /> }
          </Photo>
          </Gap>

          <h1>Welcome, {props.user ? props.user.displayName: "there"}!</h1>
          <p>Add a photo</p>
        </div>
        <Column1>
          <div className="row">
            <div className="col1">
              <h3>Connections</h3>
              <p>Grow your network</p>
            </div>
            <div className="col2">
              <img src="./images/widget-icon.svg" alt="svg" />
            </div>
          </div>
        </Column1>
        <Column2>
          <h3>Access exclusive tools & insights</h3>
          <a href="/">
            <img src="./images/primum.png" alt="primum" />
            Try Premium for free
          </a>
        </Column2>
        <Column3>
          <div className="row">
            <img src="./images/item-icon.svg" alt="logo" />
            <h3>My item</h3>
          </div>
        </Column3>
      </Feed1>


      <Feed2>
      <Group>Groups</Group>
       <Events>Events 
       <img src="./images/plus-icon.svg" alt="Plus"/>
       </Events>

       <Followed>Followed Hashtags</Followed>

       <Discover>Discover more</Discover>
      </Feed2>
    </Container>
  )
}
const Container = styled.div`
grid-area: 1/1;
width: 100%;
height: 100%;
`;
const Feed1 = styled.div`
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   border-radius: 8px;
position: relative;
margin-bottom: 12px;

  .info{

  background-image: url("./images/left-side.png");
  width: 100%;
    height: 56px;
    background-size: cover;
    background-position: center;
   border-top-left-radius: 8px;
   border-top-right-radius: 8px;

 }
.user{
  padding: 0 12px 16px 12px;
  text-align: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  h1{
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
color: #000000;
font-family: 'Segoe UI';

&:hover{
  text-decoration: underline;
}
  }

  p{
    font-size: 12px;
    color: #0A66c2;
    line-height: 16px;
    margin-top: 4px;
    font-family: 'Segoe UI';
  }
}
`;
const Gap = styled.div`
display: flex;
align-items: center;
justify-content: center;
transform: translateY(-22px);
    width: 100%;
    height: 51.33px;
`;
const Photo = styled.div`
width: 72px;
height: 72px;
border-radius: 50%;
background-color: #F9FAFB;
display: flex;
align-items: center;
justify-content: center;
img{
  width: 100%;
  border-radius: 50%;
  height: auto;

}
`;

const Column1 = styled.div`
padding: 12px 0;
border-bottom: 1px solid rgba(0,0,0,0.1);
 .row{
  padding: 4px 12px;
  display: flex;

    .col1{
      display: flex;
      flex-direction: column;
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      
      h3{
        color: rgba(0,0,0,0.5);
        font-family: 'Segoe UI';
      }
      p{
        color: rgba(0,0,0,0.7);
        font-weight: 700;
        font-family: 'Segoe UI';
      }
    }
    .col2{
      margin-left: auto;
    }
 }
`;
const Column2 = styled.div`
padding: 12px;
border-bottom: 1px solid rgba(0,0,0,0.1);
 h3{
  font-size: 12px;
  line-height: 16px;
  color: rgba(0,0,0,0.5);
  font-family: 'Segoe UI';
 }

 a{
  font-size: 12px;
  line-height: 16px;
  color: #0a66c2;
  font-weight: 600;
  display: flex;
  font-family: 'Segoe UI';

   img{
    width: 24px;
    height: 16px;
   }
 }
`;
const Column3 = styled.div`
padding: 12px;
 .row{
  display: flex;
  align-items: center;

  img{
margin-right: 5px;
  }
  h3{
    font-size: 12px;
    line-height: 16px;
    font-weight: 600px;
    color: rgba(0,0,0,0.7);
    font-family: 'Segoe UI';
  }
 }
`;

const Feed2 = styled.div`
background-color: #FFFFFF;
   border-radius: 8px;
   box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   position: sticky;
top: 70px;

@media screen and (max-width:768px){
  position: unset;
}
`;

const Group = styled.div`
padding: 8px 0 8px 12px;
color: #0a66c2;
font-size: 12px;
font-weight: 600;
line-height: 16px;
font-family: 'Segoe UI';
`;

const Events = styled.div`
padding: 8px 0 8px 12px;
display: flex;
align-items: center;
justify-content: space-between;
color: #0a66c2;
font-size: 12px;
line-height: 16px;
font-weight: 600;
font-family: 'Segoe UI';

 img{
  padding-right: 8px;
 }
`;

const Followed = styled.div`
padding: 8px 0 8px 12px;
color: #0a66c2;
font-size: 12px;
font-weight: 600;
line-height: 16px;
font-family: 'Segoe UI';
border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const Discover = styled.div`
padding: 12px;
text-align: center;
font-size: 14px;
font-weight: 600;
line-height: 20px;
font-family: 'Segoe UI';
color: rgba(0,0,0,0.5);

`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
}
export default connect(mapStateToProps)(LeftSide);
// export default LeftSide