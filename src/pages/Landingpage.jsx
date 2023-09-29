import React from "react";
import {Row,Col,Card} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
function Landingpage(){
    const navigateByUrl=useNavigate()

    const navigate =()=>{
        navigateByUrl('/home')
    }
    return(
        <>
        <Row className="mt-5 mb-5 align-items-center justify-content-between">
            <Col>
            </Col>
            <Col lg={4} >
                <h3 className="mb-3">Welcome to <span className="text-warning">Media player</span></h3>
                <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error iure, illum temporibus, asperiores assumenda sed, rem nemo et porro reiciendis veniam saepe non quas suscipit corrupti quo mollitia aspernatur vel.</p>
                <button onClick={navigate} className="btn btn-info mt-5 fw-bolder">Get started</button>
            </Col>
            <Col></Col>
            <Col className="ps-5" lg={6} >
                <img className="img-fluid ms-5 ps-5" src="https://cdn.pixabay.com/animation/2022/07/29/20/29/20-29-04-772_512.gif" alt="landing" />
            </Col>
        </Row>
        <div className="container mt-5 mb-r d-flex justify-content-center align-items-center flex-column">
            <h3>Features</h3>
            <div className="cards mt-5 d-flex justify-content-enter-between w-100 align-items-center">
            <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Managing videos</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </Card.Text>
            </Card.Body>
            </Card>
            <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </Card.Text>
            </Card.Body>
            </Card>
            <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
        </div>
       
            <div className="container mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded align-items-center">
                <div className="content">
                    <h3 className="text-warning mb-5">Simple,Fast and Powerful </h3>
                    <h6><span className="fs-5 fw-bolder">Play Everthing</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum laborum molestias accusantium incidunt voluptatum maxime ut dolores!</h6>
                    <h6 className="mt-4"><span className="fs-5 fw-bolder">Categorise Video</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia est, necessitatibus quisquam voluptatem explicabo veritatis voluptas velit nam minus</h6>
                    <h6 className="mt-4"><span className="fs-5 fw-bolder">Managing History</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sit consectetur officiis animi</h6>
                </div>
                <div className="video ms-5 ">
                <iframe width="610" height="290" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        
        </>
    )
}
export default Landingpage