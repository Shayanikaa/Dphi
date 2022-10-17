import React from 'react';
import Card from 'react-bootstrap/Card';
import caret from './images/Caret.png';
import butterfly from './images/butterfly.png';
import card3 from './images/card3.png';
import card4 from './images/card4.png';
import card5 from './images/card5.png';
import {
  CardGroup,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import Picsart from './icons/picsart.svg';
import AiIcon from './icons/AiIcon.svg';
import Heartpic from './icons/Heartpic.svg';
import pics from './images/pic1.png';
import {useNavigate} from 'react-router-dom';
import MenIcon from './icons/MenIcon.svg';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const navigateToForms = () => {
    navigate('/Forms');
  }
  const navigated = useNavigate();

  const navigateTonext = () => {
    navigated('/Brief','/Overview');
  }
  return (
    <>
    <div className='nextcontainer'>
      <div className='heading'>
      <div className='yellowline'>
       </div>
      <h1>Accelerate Innovation with Global Al Challenges</h1>
      <br />
      <br />
      <p>Al Challenges at DPhi simulate real-world problems. It is a great place to put your Al/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
      <br />
      <button onClick={navigateToForms}><b>Create Challenge</b></button>
      </div>
      <div className='pic'>
      <img src={Picsart} alt="" />
      </div>
   </div>
   <div className='sub-container'>
    <div className='icon1'>
      <div className='icons'>
        <img src={AiIcon} alt="" />
      </div>
      <div className='icon-text'>
        <h3>100k+</h3>
        <p>AI model submission</p>
      </div>
      <div className='whiteline'></div>
    </div>
    <div className='icon1'>
      <div className='icons'>
        <img src={MenIcon} alt="" />
      </div>
      <div className='icon-text'>
        <h3>50k+</h3>
        <p>Data scientists</p>
      </div>
      <div className='whiteline'></div>
    </div>
    <div className='icon1'>
      <div className='icons'>
        <img src={Heartpic} alt="" />
      </div>
      <div className='icon-text'>
        <h3>100k+</h3>
        <p>AI Challenges hosted</p>
      </div> 
    </div>
   </div>
   <div className='sub-container1'>
   <h2>Why participate in <span>AI Challenges?</span></h2>
   <div className='boxes'>
   <CardGroup>
   <Row xs={2} md={2} className="g-5 mt-2 px-2 ms-5 p-3">
   <Col  className="card-columns align-items-center">
    <Card className="px-2" style={{ width: '33rem' ,height:'200px',background: '#F8F9FD',borderRadius:'6',}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col className="card-columns px-2 ">
    <Card className="px-2" style={{ width: '33rem' ,height:'200px' ,background: '#F8F9FD'}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
   </Col>
   <Col className="card-columns">
    <Card className="px-2" style={{ width: '33rem' ,height:'200px',background: '#F8F9FD'}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
   </Col>
   <Col className="card-columns p-2">
    <Card className="px-2" style={{ width: '33rem' ,height:'200px',background: '#F8F9FD',padding:'10px'}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
   </Col> 
  </Row>
    </CardGroup>
   </div>
   </div>
   <div className='sub-container2'>
    <div className='searchbarHeading'>
    
      <h3><b>Explore Challenges</b></h3>
    </div>
    <div className='searchfilter'>
      <input type="text" placeholder='Search'/>
      <button>Filter <img src={caret} alt="" /></button>
    </div>

   </div>
   <div className='sub-container3'>
    <div className='cards'>
    <Row md={4} sm={4} className=' d-flex p-4 g-4'>
          <Col className="card-columns mx-auto my-3 p-3 ">
          <Card style={{ width: '20rem', height:'30rem'}}>
      <Card.Img variant="top" src={pics} />
      <Card.Body className='text-center'>
      <Button style={{ width: '50px', height:'20px',fontSize:'9px',textAlign:"center",padding:"0px"}}>past</Button>
        <Card.Text><h5 className='mt-3'><b>Data Science Bootcamp - Graded Datathon</b></h5>
        <p className='mt-4'>starts in</p>
        <p className='mt-4'> <b>11 : 30: 12</b></p>
         </Card.Text>
        <Button onClick={navigateTonext} className='mt-5 btn-success '>Participate</Button>
      </Card.Body>
    </Card>
          </Col>
        </Row>

    </div>
    <div className='cards'>
    <Row md={4} sm={4} className=' d-flex p-4 g-4'>
          <Col className="card-columns mx-auto my-3 p-3 ">
          <Card style={{ width: '20rem', height:'30rem'}}>
      <Card.Img variant="top" src={butterfly} />
      <Card.Body className='text-center'>
      <Button style={{ width: '50px', height:'20px',fontSize:'9px',textAlign:"center",padding:"0px"}}>past</Button>
        <Card.Text><h5 className='mt-3'><b>Data Sprint 72 - Butterfly Identification</b></h5>
        <p className='mt-4'>starts in</p>
        <p className='mt-4'> <b>11 : 30: 12</b></p>
         </Card.Text>
        <Button onClick={navigateTonext} className='mt-5 btn-success '>Participate</Button>
      </Card.Body>
    </Card>
          </Col>
        </Row>

    </div>
    <div className='cards'>
    <Row md={4} sm={4} className=' d-flex p-4 g-4'>
          <Col className="card-columns mx-auto my-3 p-3 ">
          <Card style={{ width: '20rem', height:'30rem'}}>
      <Card.Img variant="top" src={pics} />
      <Card.Body className='text-center'>
      <Button style={{ width: '50px', height:'20px',fontSize:'9px',textAlign:"center",padding:"0px"}}>past</Button>
        <Card.Text><h5 className='mt-3'><b>Data Sprint 71-Weather Recognition</b></h5>
        <p className='mt-4'>starts in</p>
        <p className='mt-4'> <b>11 : 30: 12</b></p>
         </Card.Text>
        <Button onClick={navigateTonext} className='mt-5 btn-success '>Participate</Button>
      </Card.Body>
    </Card>
          </Col>
        </Row>

    </div>
   </div>
   <div className='sub-container4'>
   <div className='cards'>
    <Row md={3} sm={3} className=' d-flex p-3 g-4'>
          <Col className="card-columns mx-auto my-3 p-3 ">
          <Card style={{ width: '20rem', height:'30rem'}}>
      <Card.Img variant="top" src={card5} />
      <Card.Body className='text-center'>
      <Button style={{ width: '50px', height:'20px',fontSize:'9px',textAlign:"center",padding:"0px"}}>past</Button>
        <Card.Text><h5 className='mt-3'><b>data science</b></h5>
        <p className='mt-4'>starts in</p>
        <p className='mt-4'> <b>11 : 30: 12</b></p>
         </Card.Text>
        <Button onClick={navigateTonext} className='mt-5 btn-success '>Participate</Button>
      </Card.Body>
    </Card>
          </Col>
        </Row>

    </div>
    <div className='cards'>
    <Row md={4} sm={4} className=' d-flex p-4 g-4'>
          <Col className="card-columns mx-auto my-3 p-3 ">
          <Card style={{ width: '20rem', height:'30rem'}}>
      <Card.Img variant="top" src={card4} />
      <Card.Body className='text-center'>
      <Button style={{ width: '50px', height:'20px',fontSize:'9px',textAlign:"center",padding:"0px"}}>past</Button>
        <Card.Text><h5 className='mt-3'><b>data science</b></h5>
        <p className='mt-4'>starts in</p>
        <p className='mt-4'> <b>11 : 30: 12</b></p>
         </Card.Text>
        <Button onClick={navigateTonext} className='mt-5 btn-success '>Participate</Button>
      </Card.Body>
    </Card>
          </Col>
        </Row>

    </div>
    <div className='cards'>
    <Row md={4} sm={4} className=' d-flex p-4 g-4'>
          <Col className="card-columns mx-auto my-3 p-3 ">
          <Card style={{ width: '20rem', height:'30rem'}}>
      <Card.Img variant="top" src={card3} />
      <Card.Body className='text-center'>
      <Button style={{ width: '50px', height:'20px',fontSize:'9px',textAlign:"center",padding:"0px"}}>past</Button>
        <Card.Text><h5 className='mt-3'><b>data science</b></h5>
        <p className='mt-4'>starts in</p>
        <p className='mt-4'> <b>11 : 30: 12</b></p>
         </Card.Text>
        <Button onClick={navigateTonext} className='mt-5  btn-success '>participate</Button>
      </Card.Body>
    </Card>
          </Col>
        </Row>

    </div>
   </div>
    </>
  )
}


export default Home
