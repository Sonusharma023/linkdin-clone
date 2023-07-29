import React from 'react'
import  styled  from "styled-components";
import Header from './Header';
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return (
<>
<Header />
    <Container>
    <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/home" className="Navlink">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Container>
</>
  )
}
const Container  = styled.div`
/* position: relative; */
padding-top: 52px;
width: 100%;
max-width: 1440px;
background-color: #F3F2EF;
margin: 0 auto;
.container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 3rem;
      font-family: 'Segoe UI';
    color: rgba(0, 0, 0, 0.9);


    }
    h3 {
      font-family: 'Segoe UI';
      color: rgba(0, 0, 0, 0.75);

      font-size: 2rem;
    }
    p {
      max-width: 600px;
      margin: 2rem auto;
      font-family: 'Segoe UI';
    color: rgba(0, 0, 0, 0.6);
    padding: 0 10px;
    }
  }

  .Navlink{
    text-decoration: none;

  }

@media (max-width:768px) {
padding-bottom: 60px;
}
`;
const Button  = styled.div`
width: fit-content;
margin-inline: auto;
  padding: 8px 20px;
  border: 1px solid #0a66c2;
  color: #0a66c2;
  border-radius: 20px;
  cursor: pointer;
`;
export default ErrorPage
