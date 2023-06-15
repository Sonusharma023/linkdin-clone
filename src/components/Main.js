import { useState, useEffect} from "react";
import  styled  from "styled-components";
import PostModal from "./PostModal";
import { connect } from "react-redux";
import { getArticlesAPI } from "../actions";
import ReactPlayer from "react-player";

const Main = (props) => {
  const[data, setData]= useState(false);
  const[showModal, setShowModal]= useState("close");

  useEffect(() => {
		props.getArticles();
	}, []);

  const handleClick = (e) =>{
    e.preventDefault();
    if(e.target !== e.currentTarget){
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close")
        break;

        case "close":
          setShowModal("open")
        break;

      default:
        setShowModal("close")
        break;
    }
  }
  return (
    <>
    { props.articles.length === 0 ? <p>There is no articles</p> :(
    <Container>
    <Feed1>
    
     <div className="row">
     {props.user && props.user.photoURL ? 
     <img src={props.user.photoURL} alt="user"/>
     : <img src="./images/user.svg" alt="user" /> }
     
      <input type="text" placeholder="Start a post" onClick={handleClick} 
      disabled={props.loading ? true : false}/>
     </div>

     <Row>
      <div className="box">
      <img src="./images/image.png" alt="user_info" />
         <span>Photo</span>
      </div>

      <div className="box">
      <img src="./images/video.png" alt="video_img" />
         <span>Video</span>
      </div>

      <div className="box">
      <img src="./images/event.png" alt="event_img" />
         <span>Event</span>
      </div>

      <div className="box">
      <img src="./images/article.png" alt="article_img" />
         <span>Write article</span>
      </div>
     </Row>
    </Feed1>


  
  <Line>
<div className="flex">
<div className="long"></div>
    <span>Sort by:</span>
</div>
      <Dropdown>
              <a  href="/">
                <span onClick={()=> setData(!data)}>Top
                  <img src="./images/down-icon.svg" alt="vetor_img" />
                </span>
              </a>

              <div className={data ? "Top active": "Top"}>
              <NavList>
              <a href="/">Top</a>
              </NavList>
              <NavList>
              <a href="/">Recent</a>
              </NavList>
              </div>

      </Dropdown>
  </Line>

    <Feed2>
      <Span>Recommended for you</Span>
    
    <Box>
      <img src="./images/user.svg" alt="group_img"/>
    
     <Col>
      <h2>Adani Group</h2>
      <p>Growth with Goodness</p>
      <span>
      <img src="./images/path.png" alt="follow_img"/>
      People pages to follow</span>
     </Col>

     <div className="col2">
     <img src="./images/plus-icon.svg" alt="icon_img"/>
      Follow
     </div>
    </Box>

    <Box>
      <img src="./images/user.svg" alt="group_img"/>
    
     <Col>
      <h2>Adani Group</h2>
      <p>Growth with Goodness</p>
      <span>
      <img src="./images/path.png" alt="follow_img"/>
      People pages to follow</span>
     </Col>

     <div className="col2">
     <img src="./images/plus-icon.svg" alt="icon_img"/>
      Follow
     </div>
    </Box>

    <Box>
      <img src="./images/user.svg" alt="group_img"/>
    
     <Col>
      <h2>Adani Group</h2>
      <p>Growth with Goodness</p>
     </Col>

     <div className="col2">
     <img src="./images/plus-icon.svg" alt="icon_img"/>
      Follow
     </div>
    </Box>

    <Button>Show more
    <img src="./images/right-icon.svg" alt="arrow_img"/>
    </Button>
    </Feed2>
    <Content>
      {props.loading && <img src="./images/spin.svg" alt="spin_img" />}
      {props.articles.length > 0 &&
					props.articles.map((article, key) => (
        

    <Feed3 key={key}>
       <Rows>
      <img src={article.actor.image} alt="useritem_img"/>
          
          <Column>
            <h4>{article.actor.title}</h4>
            <p>{article.actor.description}</p>
            <p>{article.actor.date.toDate().toLocaleDateString()}</p>
          </Column>
          <div className="circle">
          <img src="./images/dots.svg" alt="photo_img"/>

          </div>
       </Rows>

       <span>{article.description}</span>
        <SharedImage>
        <a href="/">{!article.sharedImg && article.video ?
         <ReactPlayer width={"100%"} url={article.video} />
          : article.sharedImg && <img src={article.sharedImg} alt="main-banner_img" />}</a>
        </SharedImage>
        <div className="like">75</div>

        <div className="last">
          <span>
          <img src="./images/like.png" alt="item_img" style={{transform: "translateY(-3px)"}} />
           Like
          </span>
          <span>
          <img src="./images/comment.png" alt="item_img"/>
           Comment
          </span>
          <span>
          <img src="./images/send.png" alt="item_img"/>
           Send
          </span>
        </div>
    </Feed3>
          ))}
    </Content>
<PostModal showModal={showModal} handleClick={handleClick}/>
</Container>
    )
}
</>

  )
}
const Container = styled.div`
grid-area: main;
width: 100%;
height: 100%;
@media (max-width:1008px) {
grid-area: 1/2;
}

`;

const Feed1 = styled.div`
width: 100%;
height: 100%;
background-color: #F9FAFB;
height: 118px;
border-radius: 8px;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
margin-bottom: 8px;
.row{
  display: flex;

  align-items: center;
  margin: 0 16px 8px;
  @media (max-width:338px) {
    margin-bottom: 0;


      }

  img{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 8px;
  }
  input{
    width: 100%;
    height: 100%;
    margin: 12px 0 4px 0;
    padding: 10px 8px 10px 16px;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 35px;
  }
  input[type=text]{
    font-size: 14px;
    line-height: 21px;
    font-weight: 600;
    color: rgba(0,0,0,0.5);
    font-family: 'Segoe UI';
  }

}
`;
const Row = styled.div`
width: 100%;
height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 12px 0;
    flex-wrap: wrap;
      @media (max-width:768px) {
        padding: 12px 0;
}

      @media (max-width:338px) {
        padding:  0;
      }

     .box{
      max-width: 100%;
      height: 100%;
display: flex;
align-items: center;
padding: 0 8px;

@media (max-width:338px) {
  padding-top: 10px;

      }
      img{
      width: 20px;
      /* height: 24px; */
      @media (max-width:768px) {
        width: 15px;
      }
      }

      span{
        width: 100%;
        margin-left: 10px;
        font-size: 14px;
    /* line-height: 28px; */
    font-weight: 600;
    color: rgba(0,0,0,0.5);
    font-family: 'Segoe UI';

    @media (max-width:768px) {
      margin-left: 5px;
      font-size: 13px;
      }
      }
     }
`;

const Line = styled.div`
display: flex;
align-items: center;


 .flex{
  display: flex;
    align-items: center;
    width: 100%;
    /* justify-content: space-between ; */

.long{
    width: 100%;
    height: 1px;
    margin: 7.5px 8px 7.5px;
    background: rgba(0,0,0,0.3);

}
span{
  white-space: nowrap;
 font-size: 12px;
 line-height: 16px;
 color: rgba(0,0,0,0.5);
 font-family: 'Segoe UI';
 font-weight: 400;
  }

}
`;

const Dropdown = styled.div`
 position: relative;

 .Top{
  padding: 8px 0;
    position: absolute;
    top: 25px;
    right: 0;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    width: 100px;
    height:70px;
    font-size: 16px;
    display: none;
    
  }
  .active{
    display: block;
  }
 a{
  text-decoration: none;
 }
span {
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  margin: 0 4px;
  color: rgba(0,0,0,0.9);
 font-family: 'Segoe UI';

 img{
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
 }
 }
`;

const NavList = styled.li`
  padding: 4px 8px;
  list-style-type: none;
  color: rgba(0,0,0,0.5);

  &:hover{
    background-color: rgba(0,0,0,0.05);
  color: rgba(0,0,0,0.8);

  }
`;

const Box = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: start;
padding: 12px 16px 12px;
border-bottom: 1px solid rgba(0,0,0,0.1);
img{
  width: 48px;
  height: 48px;
  margin-right: 8px;
}
`;
const Col = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
margin: 0 8px;

span{
  /* margin-top: 4px; */
  font-size: 12px;
  line-height: 17.5px;
  font-family: 'Segoe UI';
  color: rgba(0,0,0,0.5);
  img{
  width: 14px;
  height: 10px;
}
}

 h2{
  font-size: 16px;
  line-height: 21px;
  font-family: 'Segoe UI';
  color: rgba(0,0,0,0.7);
 }
 p{
  margin-top: 4px;
  font-size: 14px;
  line-height: 17.5px;
  font-family: 'Segoe UI';
  color: rgba(0,0,0,0.7);
 }
`;


const Feed2 = styled.div`
width: 100%;
background-color: #F9FAFB;
height: 118px;
border-radius: 8px;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
margin: 8px 0;
height: fit-content;

.col2{
  display: flex;
  align-items: center;
  padding: 6px 16px ;
  border: 1px solid #0a66c2;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Segoe UI';
  color: #0a66c2;
  border-radius: 25.6px;
   img{
    width: 16px;
    height: 16px;
    margin-right: 4px;
   }
}
`;
const Span = styled.div`
  padding: 16px 0;
  margin: 0 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: rgba(0,0,0,0.7);
  font-family: 'Segoe UI';
`;

const Button = styled.div`
width: 100%;
padding: 6px 8px;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      color: rgba(0,0,0,0.5);
      font-family: 'Segoe UI';

img{
  padding: 2px 0 0 4px;
}
`;

const Feed3 = styled.div`
width: 100%;
height: fit-content;
background-color: #F9FAFB;
border-radius: 8px;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.09);
margin-bottom: 10px;
.img{
  width: 100%;
  height: 290px;
  background-image: url("./images/linkdin-add.jfif");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
span{
  display: flex;
  align-items: start;
  font-size: 14px;
line-height: 20px;
font-family: 'Segoe UI';
  color: rgba(0,0,0,0.8);
  padding: 0 16px;
  margin-bottom: 8px;
}

.like{
  text-align: left;
  font-size: 13px;
line-height: 17.5px;
font-family: 'Segoe UI';
  color: #0a66c2;
  padding:16px 0 ;
  margin: 0 8px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}
.last{
  padding: 4px 12px;
  display: flex;
  align-items: end;
  justify-content: space-between;

  span{
    display: flex;
    align-items: center;
    padding: 10px 8px;

    img{
      width: 18px;
      height: 18px;
      margin-right: 8px;
    }
  }
}
`;

const Rows = styled.div`
display: flex;
align-items: start;
padding: 12px 16px 0 16px ;
margin-bottom: 8px;

img{
      width: 40px;
      height: 40px;
    }
  .circle{
    max-width: 32px;
   width: 100%;
   height: 32px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   background-color: rgba(0,0,0,0.1);

    img{
      width: 24px;
      height: 24px;
      padding: 0 3px;
    }
  }
`;

const Column = styled.div`
  text-align: left;
width: 100%;
margin: 0 8px;
h4{
font-size: 12px;
line-height: 20px;
font-family: 'Segoe UI';
  color: rgba(0,0,0,0.9);
}
P{
  font-size: 10px;
line-height: 10.5px;
  font-family: 'Segoe UI';
  color: rgba(0,0,0,0.7);
}
`;

const Content = styled.div`
text-align: center;
& > img{
  width: 30px;
}
`;
const SharedImage = styled.div`
	margin: 8px 16px 0;
	background-color: #f9fafb;
	img {
		width: 100%;
		height: 100%;
	}
`;

const mapStateToProps = (state) => {
	return {
		user: state.userState.user,
		loading: state.articleState.loading,
		articles: state.articleState.articles,
	};
};

const mapDispatchToProps = (dispatch) => ({
	getArticles: () => dispatch(getArticlesAPI()),
	// likeHandler: (payload) => dispatch(updateArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);