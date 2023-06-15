
import styled from "styled-components";
import {connect } from "react-redux";
import {signInAPI} from '../actions';
import {Navigate} from 'react-router-dom';
const Login = (props) => {
  return (
    <Container>
    {props.user &&  <Navigate to="/home" />}
      <Nav>
        <a href="/">
          <img src='./images/login-logo.svg' alt='Linkdin_logo' />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>

      <Section>
        <div className='row'>
          <h1>Welcome to your 
            professional 
            community</h1>

          <Form>
            <div className='column'>
              <div className='input-text'>
                <div>Email or phone</div>
                <input type='email' className='text' />
              </div>

              <div className='input-text'>
                <div>Password</div>
                <input type='password' className='text' />
              </div>
            </div>

            <div className='forgot'>
              <div>Forgot password?</div>
              <div className='button'><a href='/'>Sign in</a> </div>
            </div>

            <Line>
              <div>
                <span></span>
                <Last>or</Last>
                <span></span>
              </div>
            </Line>

            <Button onClick={() => props.SignIn()}>
              <img src='./images/G.png' alt='google-img' />
              <div>Continue with Google</div>
            </Button>
          </Form>

          <div className='join-now'>New to LinkedIn? Join now</div>
        </div>
        <div className='row1'>
          <img src='./images/home_img.png' alt='home-img' />

        </div>
      </Section>
    </Container>
  )
};
// =========== Container ==============
const Container = styled.div`
padding: 0px;
`;
// =========== Nav ==============

const Nav = styled.nav`
max-width: 1128px;
margin: auto;
padding: 12px 16px 16px;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
flex-wrap: nowrap;

   @media screen and (max-width: 768px) {
      padding: 12px 5px 16px;
    }

  & > a {
    width: 135px;
    height: 34px;

    @media screen and (max-width: 768px) {
      padding: 0 5px;
      width: 103px;
    height: 24px;
    }



  }
`;
// =========== Join ==============

const Join = styled.a`
font-size: 16px;
font-weight: 600;
padding: 10px 12px;
text-decoration: none;
color: rgba(0,0,0, 0.6);
margin-right: 12px;

 &:hover {
  background-color: rgba(0,0,0, 0.08);
  color: rgba(0,0,0, 0.7);
  text-decoration: none;
  border-radius: 4px;
 }
 @media screen and (max-width: 768px) {
  padding: 7px 9px;
  margin-right: 8px;
  font-size: 15px;
    }

`;
// =========== SignIn ==============

const SignIn = styled.a`
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
border-radius: 24px;
transition: 167ms;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px 24px;
text-align: center;
background-color: rgba(0, 0, 0, 0);

  &:hover{
    background-color: rgba(112, 181, 249, 0.15);
    /* color: #0a66c2;
    text-decoration: none; */
  }

  @media screen and (max-width: 768px) {
    padding: 7px 14px;
    font-size: 15px;
    }
`;
// =========== Section ==============

const Section = styled.section`
   max-width: 1128px;
   margin: auto;
   display: grid;
   align-items: center;
   grid-template-columns: repeat(2, 1fr);
   padding: 40px 16px 0 16px;
     
   & > .row{
    width: 100%;
   display: flex;
   flex-direction: column;
   }

   & > .row1 {
    width: 100%;
   overflow-x: hidden;
   }

   & > .row > h1 {
    /* max-width: 500px; */
    width: 100%;
   font-family: 'Segoe UI';
   font-weight: 300;
   font-size: 55px;
   /* line-height: 67px; */
   overflow: hidden;
   /* display: flex;
   align-items: center; */
   color: #8F5849;
   }
   
   & > .row > .join-now{
   margin-top: 14px;
   /* width: 408px;
   height: 48px; */
   padding: 11px 0 12px 0;
   background: rgba(255, 255, 255, 0.002);
   box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.75);
   border-radius: 24px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: 'Segoe UI';
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: rgba(0, 0, 0, 0.75);
   cursor: pointer;
  }

 @media screen and (max-width:768px){
  display: flex;
  flex-direction: column;
   & > .row >h1 {
    font-size: 32px;
   }
 }
`;

const Form = styled.form`
   
   & > .column{
   display: flex;
   flex-direction: column;
   gap: 23px;
   }

   & > .column > .input-text{
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 11px 0;
   }

    & > .column > div{
   font-family: 'Segoe UI';
   font-weight: 600;
   font-size: 13px;
   line-height: 21px;
   color: rgba(0, 0, 0, 0.75);
   }

   & > .column >  .input-text > .text{
    /* width: 408px;
    height: 59px; */
    padding: 15px ;
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 4px;
   }

   & > .column >  .input-text > .text[type=email]{
     font-size: 18px;
   }

    & > .forgot{
      display: flex;
      flex-direction: column;
      gap: 22px;
    }

   & > .forgot > div{
    font-family: 'Segoe UI';
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #0A66C2;
   }

   & > .forgot > .button{
    /* width: 400px;
height: 51px; */
padding: 13px 0;
background: #0A66C2;
border-radius: 24px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
   }

   & > .forgot > .button > a{
    font-family: 'Segoe UI';
    text-decoration: none;
font-weight: 600;
font-size: 16px;
line-height: 21px;

color: #FFFFFF;

   }
`;



const Line = styled.div`
  

  & > div {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: row;
  }

  & > div > span{
   width: 100%;
   height: 1px;
   background: rgba(0, 0, 0, 0.35);
   margin: 26px 0;
  }
`;

const Last = styled.div`
    margin: 0 16px;
    font-family: 'Segoe UI';
    font-weight: 400;
    font-size: 13px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.9);
`;


const Button = styled.div`
/* width: 398px;
height: 40px; */
padding: 10px 0;
background: #FFFFFF;
border: 1px solid #DADCE0;
border-radius: 20px;

display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

&:hover{
  background-color: rgba(207,207,207,0.25);
 }
 & > div{
  padding:3px 0 0 8px;
 }
`;


const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
}

const mapDispatchToProps = (dispatch) => ({
  SignIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)

// export default Login;