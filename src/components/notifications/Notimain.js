import React from 'react'
import styled from "styled-components";
const Notimain = () => {
  return (
    <Container>

      <Box>
        <div className='row'>
          <Img>
            <img src="../images/user.svg" alt="group_img" />
          </Img>
          <Para>
            <p>Here are some expert tips on crafting an effective post interview.</p>
            <span>thank-you note</span>
          </Para>

        </div>
        <Icon>
          <span>46m</span>
          <img src='../images/dots.svg' alt='three-dots' />
        </Icon>
      </Box>
      <Box>
        <div className='row'>
          <Img>
            <img src="../images/noti-img1.png" alt="group_img" />
          </Img>
          <p>Here are 3 export tips to embrace change at work</p>

        </div>
        <Icon>
          <span>46m</span>
          <img src='../images/dots.svg' alt='three-dots' />
        </Icon>
      </Box>

      <Box>
        <div className='row'>
          <Img>
            <img src="../images/noti-img2.jpg" alt="group_img" />
          </Img>
          <Para>
            <p>Friday New Wrap: Enchancing productivity at work Building a proactive mindset and more.</p>
            <span>pain-free handover</span>
          </Para>

        </div>
        <Icon>
          <span>1h</span>
          <img src='../images/dots.svg' alt='three-dots' />
        </Icon>
      </Box>

      <Box>
        <div className='row'>
          <Img>
            <img src="../images/noti-img3.jpg" alt="group_img" />
          </Img>
          <p>Keep your answers concise during a job interview, suggests an expert. Here's why</p>

        </div>
        <Icon>
          <span>3h</span>
          <img src='../images/dots.svg' alt='three-dots' />
        </Icon>
      </Box>

      <Box>
        <div className='row'>
          <Img>
            <img src="../images/noti-img4.jpg" alt="group_img" />
          </Img>
          <Para>
            <p>Here are some expert tips on crafting an effective post interview.</p>
            <span>thank-you note</span>
          </Para>

        </div>
        <Icon>
          <span>6h</span>
          <img src='../images/dots.svg' alt='three-dots' />
        </Icon>
      </Box>

      <Box>
        <div className='row'>
          <Img>
            <img src="../images/noti-img5.png" alt="group_img" />
          </Img>
          <p>Here are 3 export tips to embrace change at work</p>

        </div>
        <Icon>
          <span>1d</span>
          <img src='../images/dots.svg' alt='three-dots' />
        </Icon>
      </Box>



      <Box>
        <div className='row'>
          <Img>
            <img src="../images/user.svg" alt="group_img" />
          </Img>
          <p>Here are 3 export tips to embrace change at work</p>

        </div>
        <Icon>
          <span>2d</span>
          <img src='../images/dots.svg' alt='three-dots' />
        </Icon>
      </Box>

      <Box>
        <div className='row'>
          <Img>
            <img src="../images/noti-img3.jpg" alt="group_img" />
          </Img>
          <Para>
            <p>Friday New Wrap: Enchancing productivity at work Building a proactive mindset and more.</p>
            <span>pain-free handover</span>
          </Para>

        </div>
        <Icon>
          <span>2d</span>
          <img src='../images/dots.svg' alt='three-dots' />
        </Icon>
      </Box>

      <Box>
        <div className='row'>
          <Img>
            <img src="../images/noti-img4.jpg" alt="group_img" />
          </Img>
          <p>Here are 3 export tips to embrace change at work</p>

        </div>
        <Icon>
          <span>3d</span>
          <img src='../images/dots.svg' alt='three-dots' />
        </Icon>
      </Box>

      <Box>
        <div className='row'>
          <Img>
            <img src="../images/noti-img2.jpg" alt="group_img" />
          </Img>
          <p>How can knowing your purpose your help in decsion making? This artist breaks it down.</p>

        </div>
        <Icon>
          <span>5d</span>
          <img src='../images/dots.svg' alt='three-dots' />
        </Icon>
      </Box>

      <Box>
        <div className='row'>
          <Img>
            <img src="../images/noti-img1.png" alt="group_img" />
          </Img>
          <p>Ace your self-review this appraisal cycle with these expert tips.</p>

        </div>
        <Icon>
          <span>1w</span>
          <img src='../images/dots.svg' alt='three-dots' />
        </Icon>
      </Box>

      <Box>
        <div className='row'>
          <Img>
            <img src="../images/noti-img5.png" alt="group_img" />
          </Img>
          <Para>
            <p>Here are some expert tips on crafting an effective post interview.</p>
            <span>thank-you note</span>
          </Para>

        </div>
        <Icon>
          <span>2w</span>
          <img src='../images/dots.svg' alt='three-dots' />
        </Icon>
      </Box>


    </Container>
  )
}


const Container = styled.div`
width: 100%;
height: fit-content;
background-color: #FFFFFF;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
   border-radius: 8px;
`;
const Box = styled.div`
width: 100%;
height: fit-content;
display: flex;
align-items: center;
justify-content: space-between;
padding: 1.6rem 0.8rem 1.6rem 2.4rem;

.row{
  width: 100%;
  display: flex;
  align-items: center;
}
p{
  color: rgba(0,0,0,0.6);
  font-size: 13px;
  font-weight: 300;
  margin-right: 0.8rem
}
`;


const Img = styled.div`
width: 100%;
  max-width: 56px;
  height: 48px;

margin-right: 0.8rem;

img{
  width: 100%;
}
`;

const Para = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: start;


span{
  font-size: 12px;
  color: rgba(0,0,0,0.3);
}


`;

const Icon = styled.div`
display: flex;
flex-direction: column;
span{
  font-size: 11px;
  font-weight: 300;
  color: rgba(0,0,0,0.3);
  margin: 0.4rem 0.8rem 0 0;
}
img{
  width: 30px;
  height: 30px;
}
`;
export default Notimain