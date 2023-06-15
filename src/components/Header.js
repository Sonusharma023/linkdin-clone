import styled from "styled-components";
import {connect } from "react-redux";
import {signOutAPI} from '../actions';

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home"> <img src="./images/home-logo.svg" alt="logo" /></a>
        </Logo>

        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="./images/search-icon.svg" alt="logo" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="/">
                <img src="./images/nav-home.svg" alt="vetor_img" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a href="/">
                <img src="./images/nav-network.svg" alt="vetor_img" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a href="/">
                <img src="./images/nav-jobs.svg" alt="vetor_img" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a href="/">
                <img src="./images/nav-messaging.svg" alt="vetor_img" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a href="/">
                <img src="./images/nav-notifications.svg" alt="vetor_img" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a href="/">
              { props.user && props.user.photoURL ? 
                <img src={props.user.photoURL} alt="vetor_img" /> :
                <img src="./images/user.svg" alt="vetor_img" />}
                {/* <img src="./images/user.svg" alt="vetor_img" /> */}
                <span>Me
                  <img src="./images/down-icon.svg" alt="vetor_img" />
                </span>
              </a>

              <SignOut onClick={() => props.SignOut()}><a href="/">Sign Out</a></SignOut>
            </User>

            <Work>
              <a href="/">
                <img src="./images/nav-work.svg" alt="vetor_img" />
                <span>Work
                  <img src="./images/down-icon.svg" alt="vetor_img" />
                </span>

              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  )
};

const Container = styled.div`
 background: #FFF;
 border-bottom: 1px solid rgba(0,0,0,0.08);
 position: fixed;
 left: 0;
 top: 0;
 padding: 0 24px;
 width: 100vw;
 z-index: 9;
`;


const Content = styled.div`
display: flex;
align-items: center;
max-width: 1128px;
min-height: 100%;
margin: 0 auto;
`;

const Logo = styled.div`
margin-right: 8px;
font-size: 0px;
`;

const Search = styled.div`
margin: 9px 0;
opacity: 1;
flex-grow: 1;
position: relative;

 & > div{
  max-width: 280px;

  input {
    box-shadow: none;
    background-color: #eef3f8;
    border-radius: 4px;
    color: rgba(0,0,0,0.9);
    width: 218px;
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

const Nav = styled.nav`
 margin-left: auto;
 display: block;
  @media screen and (max-width:768px){
    position: fixed;
    left: 0;
    bottom:0;
    background-color: #fff;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
list-style-type: none;

 .active{
  span:after {
    content: '';
    transform: scaleX(1);
    border-bottom: 2px solid var(--white , #fff);
    bottom: 0;
    left: 0;
    position: absolute;
    transition: transform 0.2s ease-in-out;
    width: 100%;
    border-color: rgb(0, 0,0,0.9);
  }
 }
`;


const NavList = styled.li`
   display: flex;
   align-items: center;
 justify-content: space-between;


   a {
    font-family: 'Segoe UI';
   align-items: center;
   background: transparent;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: 12px;
   padding: 0 15px;
   line-height: 1.5;
   min-height:52px;
   /* min-width: 80px; */
   position: relative;
   text-decoration: none;
   @media screen and (max-width: 911px){
    
   }

    span{
      color: rgba(0,0,0,0.6);
      /* display: flex;
      align-items: center; */

      @media screen and (max-width: 911px){
      display: none;

    }
    }

    @media screen and (max-width:768px){
      /* min-width: 40px; */
    }
   }

   &:hover,
   &:active{
    a{
      span{
        color: rgba(0,0,0,1);

      }
    }
   }
`;

const SignOut = styled.div`
position: absolute;
top: 45px;
background-color: #fff;
border-radius: 0 0 5px 5px;
width: 100px;
height: 40px;
font-size: 16px;
transition-duration: 167ms;
text-align: center;
display: none;
`;

const User = styled(NavList)`

 a > img{
  width: 24px;
  height: 24px;
  border-radius: 50%;
 } 

 span {
  display: flex;
  align-items: center;
 }
 &:hover{
   ${SignOut} {
    align-items: center;
    display: flex;
    justify-content: center;
   }
 }
`;

const Work = styled(User)`
border-left: 1px solid rgba(0,0,0,0.15);
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
}

const mapDispatchToProps = (dispatch) => ({
  SignOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)


// export default Header;