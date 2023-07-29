import styled from "styled-components";
import { connect } from "react-redux";
import { signOutAPI } from '../actions';
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(false);
  return (
    <Container>
      <Content>
        <Logo>
          <NavLink to="/home" className="navbar-link">
            <img src="./images/home-logo.svg" alt="logo" />
          </NavLink>
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
            <NavList >
              <NavLink to="/home" className=" navbar-link">
                <img src="./images/nav-home.svg" alt="vetor_img" />
                <span>Home</span></NavLink>

            </NavList>

            <NavList >
              <NavLink to="/network" className="navbar-link ">
                <img src="./images/nav-network.svg" alt="vetor_img" />
                <span>My Network</span>
              </NavLink>
            </NavList>

            <NavList >
              <NavLink to="/jobs" className="navbar-link ">
                <img src="./images/nav-jobs.svg" alt="vetor_img" />
                <span>Jobs</span>
              </NavLink>
            </NavList>

            <NavList >
              <NavLink to="/messaging" className="navbar-link ">
                <img src="./images/nav-messaging.svg" alt="vetor_img" />
                <span>Messaging</span>
              </NavLink>
            </NavList>

            <NavList >
              <NavLink to="/notifications" className="navbar-link ">
                <img src="./images/nav-notifications.svg" alt="vetor_img" />
                <span>Notifications</span>
              </NavLink>
            </NavList>

            <User onClick={() => setOpen(!open)}>
              {/* <NavLink   className="navbar-link"> */}

              {props.user && props.user.photoURL ?
                <img src={props.user.photoURL} alt="vetor_img" /> :
                <img src="./images/user.svg" alt="vetor_img" />}
              {/* <img src="./images/user.svg" alt="vetor_img" /> */}
              <span>Me
                <img src="./images/down-icon.svg" alt="vetor_img" />
              </span>


              {
                open && (<SignOut onClick={() => props.SignOut()}><a href="/">Sign Out</a></SignOut>)
              }
              {/* </NavLink> */}
            </User>

            <Work onClick={() => setData(!data)}>
              <img src="./images/nav-work.svg" alt="vetor_img" />
              <span>Work
                <img src="./images/down-icon.svg" alt="vetor_img" />
              </span>

              {data && (<Miniwork>
                <div className="Business">
                  <h1>For Business</h1>
                  <img src="./images/close-icon.png" alt="close-img" />
                </div>
                <Flex>
                  <MiniBox>
                    <h3>Visit More LinkedIn Products</h3>

                    <Row>
                      <Col>
                        <div className="Outer">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#1a6eff"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                        </div>
                        <span>Learning</span>
                      </Col>
                      <Col>
                        <div className="Outer">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#1a6eff"><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" /></svg>
                        </div>
                        <span>Talent Insights</span>
                      </Col>
                      <Col>
                        <div className="Outer">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#1a6eff"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
                        </div>
                        <span>Post a job</span>
                      </Col>
                      <Col>
                        <div className="Outer">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#1a6eff"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM229.5 173.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L253.2 328H162.8l-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7L186.8 280h42.3L208 237.7zM392 256a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm24-43.9V184c0-13.3 10.7-24 24-24s24 10.7 24 24v96 48c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-9.4 4.5-19.9 7-31 7c-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1z" /></svg>
                        </div>
                        <span>Advertise</span>
                      </Col>
                      <Col>
                        <div className="Outer">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#1a6eff"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
                        </div>
                        <span>Find Leads</span>
                      </Col>
                      <Col>
                        <div className="Outer">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill="#1a6eff"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                        </div>
                        <span>Groups</span>
                      </Col>
                      <Col>
                        <div className="Outer">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill="#1a6eff"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        </div>
                        <span>Service MarketPlace</span>
                      </Col>
                    </Row>
                  </MiniBox>

                  <MiniBox1>
                    <h3>LinkedIn Business Services</h3>

                    <div className="ul">
                      <div className="li">
                        <h4>Talent Solutions</h4>
                        <p>Find, attract and recurit talent</p>
                        </div>
                        <div className="li">
                        <h4>Sales Solutions</h4>
                        <p>Unlock sales opportunities</p>
                        </div>
                        <div className="li">
                        <h4>Post a job for free</h4>
                        <p>Get your job in front of quality candidates</p>
                        </div>
                        <div className="li">
                        <h4>Marketing Solutions</h4>
                        <p>Acquire customers and grow your Business</p>
                        </div>
                        <div className="li">
                        <h4>Learning Solutions</h4>
                        <p>Develop talent across your Organization</p>
                        </div>
                        <div className="li">
                        <h4>Admin Center</h4>
                        <p>Manage billing, and account details</p>
                        </div>
                    </div>
                  </MiniBox1>

                  <MiniBox3>
                   <h3>Create a Company Page</h3>
                   <img src="./images/plus-icon.svg" alt="plus-img" />
                  </MiniBox3>
                </Flex>
              </Miniwork>)}
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
 font-family: Segoe UI;
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
 .navbar-link{
 font-family: 'Segoe UI';
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
   white-space: nowrap;
   cursor: pointer;
   text-decoration: none;
@media screen and (max-width:374px){
  padding: 0;
}

    span{
      color: rgba(0,0,0,0.6);
      /* display: flex;
      align-items: center; */

      @media screen and (max-width: 911px){
      display: none;
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
  }
`;

const SignOut = styled.div`
position: absolute;
top: 53px;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 0 0 5px 5px;
width: 80px;
height: 40px;
font-size: 16px;
transition-duration: 167ms;
text-align: center;
display: flex;
transition: all 0.4s ease-in-out;

@media screen and (max-width: 768px){
  border-radius:  5px;
top: -41px;

}
@media screen and (max-width: 351px){
right: -5px;
}
a{
  display: flex;
  font-family: 'Segoe UI';
   align-items: center;
   background: transparent;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: 12px;
   padding: 0 15px;
   line-height: 1.5;
   white-space: nowrap;
  text-decoration: none;
  color: #444;
font-weight: 600;
}
a:hover{
  color: #000;
}
`;

const User = styled(NavList)`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Segoe UI';
   background: transparent;
   font-size: 12px;
   padding: 0 15px;
   line-height: 1.5;
   /* min-height:52px; */
   position: relative;
   white-space: nowrap;
   cursor: pointer;
   color: rgba(0,0,0,0.6);
   @media screen and (max-width:374px){
  padding: 0;
}
 img{
  width: 24px;
  height: 24px;
  border-radius: 50%;
 } 

 span {
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px){
    display: none;
}
  img{
    width: 20px;
  height: 20px;
  }
 }
 /* &:hover{
   ${SignOut} {
    align-items: center;
    display: flex;
    justify-content: center;
   }
 } */
`;

const Work = styled(User)`
border-left: 1px solid rgba(0,0,0,0.15);
position: relative;
`;

const Miniwork = styled.div`
max-width: 380px;
height: 60vh;
overflow-y: scroll;
position: absolute;
top: 49px;
right: 0;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 0 0 12px 12px;
font-size: 16px;
transition-duration: 167ms;
transition: all 0.4s ease-in-out;
z-index: 99;

@media screen and (max-width:768px){
top: -625px;
right: 0;
height: auto;
}

.Business{
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 16px 24px;
  h1{
    color: rgba(0, 0, 0, 0.8);
  }
}
`;

const Flex = styled.div`
width: 100%;
padding: 8px 2rem;

@media screen and (max-width:280px){
padding: 8px 0;
  
}
`;
const MiniBox = styled.div`
border-radius: 8px;
h3{
  color: rgba(0,0,0,0.8);
border-top: 1px solid rgba(0,0,0,0.3);
border-left: 1px solid rgba(0,0,0,0.3);
border-right: 1px solid rgba(0,0,0,0.3);

  font-size: 16px;
  padding: 16px 24px;
}`;
const Row = styled.div`
border: 1px solid rgba(0,0,0,0.3);

width: 100%;
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 10px;
`;

const Col = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
padding: 8px;
.Outer{
  width: fit-content;
padding:6px 8px;
border: 1px solid rgba(0,0,0,0.1);
border-radius: 2px;

&:hover{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
svg{
  width: 26px;
  height: 26px;
}
}
span{
  font-size: 13px;
    font-family: "Segoe UI";
   color: rgba(0,0,0,0.6);
  white-space: wrap;
}
`;
const MiniBox1 = styled.div`
margin-top: 10px;


h3{
  color: rgba(0,0,0,0.8);
border-top: 1px solid rgba(0,0,0,0.3);
border-left: 1px solid rgba(0,0,0,0.3);
border-right: 1px solid rgba(0,0,0,0.3);
  font-size: 16px;
  padding: 16px 24px;
}

.ul{
padding: 0 24px;
border: 1px solid rgba(0,0,0,0.3);

  .li{
    display: flex;
    align-items: start;
    flex-direction: column;
    padding: 4px 0;
h4{
  color: rgba(0,0,0,0.7);
  font-size: 14px;

}
    p{
      font-size: 12px;
    font-family: "Segoe UI";
   color: rgba(0,0,0,0.6);
    }
  }
}
`;

const MiniBox3 = styled.div`
margin-top: 10px;
display: flex;
gap:20px;
border: 1px solid rgba(0,0,0,0.3);
padding: 16px 24px;
@media screen and (max-width:768px){
  display: none;
}
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