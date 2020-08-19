import React,{ Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container, Row, Col,ListGroup, ListGroupItem} from 'reactstrap';
import  CarouselComponent  from './CarouselComponent'
import { FadeTransform } from 'react-animation-components';

class Home extends Component {

    render(){
      return(
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-12">
            <CarouselComponent />
            </div>
            </div>

            <div className="row row-content">
              <div className="col-6 col-md-6">

                <h2>{"\n"}Announcements{"\n"}</h2>

                  <ListGroup>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                  </ListGroup>
              </div>


              <div className="col-6 col-md-6">
                  <h2>{"\n"}News and Events{"\n"}</h2>

                    <ListGroup>
                      <ListGroupItem>Cras justo odio</ListGroupItem>
                      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                      <ListGroupItem>Morbi leo risus</ListGroupItem>
                      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                      <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                </div>
              </div>

              <div class="container-fluid py-2">
                  <h2 class="font-weight-light text-center">Current Offers</h2>
                    <FadeTransform
                          in
                          transformProps={{
                              exitTransform: 'scale(0.5) translateY(-50%)'
                          }}>
                  <div class="d-flex flex-row flex-nowrap justify-content-center" >
                        <div class="card m-3">
                        <div class="card-body">
                          Offer Detail
                        </div>
                        </div>

                        <div class="card m-3">
                          <div class="card-body">
                            Offer Detail
                          </div>
                        </div>
                        <div class="card m-3">
                          <div class="card-body">
                            Offer Detail
                          </div>
                        </div>
                        <div class="card m-3">
                          <div class="card-body">
                            Offer Detail
                          </div>
                        </div>
                  </div>
                  </FadeTransform>
              </div>

              <div class="container-fluid py-2">
                  <h2 class="font-weight-light text-center">Answers and Solutions</h2>
                    <FadeTransform
                          in
                          transformProps={{
                              exitTransform: 'scale(0.5) translateY(-50%)'
                          }}>
                  <div class="d-flex flex-row flex-nowrap justify-content-center" >
                        <div class="card m-3">
                        <div class="card-body">
                          Paper
                        </div>
                        </div>

                        <div class="card m-3">
                          <div class="card-body">
                            Paper
                          </div>
                        </div>
                        <div class="card m-3">
                          <div class="card-body">
                            Paper
                          </div>
                        </div>
                        <div class="card m-3">
                          <div class="card-body">
                            Paper
                          </div>
                        </div>
                  </div>
                  </FadeTransform>
              </div>

              <div style={{backgroundColor: '#ADD8E6'}} class="jumbotron jumbotron-fluid ">
                  <h1 class="display-4 text-center">Results</h1>
                  <p class="lead text-center">Student Results</p>
              </div>

              <div class="row">
                <div class="col-12 col-md-12">
                  <h2 class="font-weight-light text-center p-3">Testimonials</h2>
                </div>
              </div>

              <div className="row row-content">

                <div className="col-6 col-md-6">
                  <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Testimonial title</CardTitle>
                      <CardSubtitle>Testimonial subtitle</CardSubtitle>
                      <CardText>Sampleinfo</CardText>

                    </CardBody>
                  </Card>
                </div>
                <div className="col-6 col-md-6">
                  <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Testimonial title</CardTitle>
                      <CardSubtitle>Testimonial subtitle</CardSubtitle>
                      <CardText>Sampleinfo</CardText>
                    </CardBody>
                  </Card>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12 col-md-12">
                    <h2 class="font-weight-light text-center p-3">Institute Advantages</h2>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-6 col-md-6">
                    <Card>
                      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Advantage title</CardTitle>
                        <CardSubtitle>Advantage subtitle</CardSubtitle>
                        <CardText>Advantage</CardText>

                      </CardBody>
                    </Card>
                  </div>
                  <div className="col-6 col-md-6">
                    <Card>
                      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Advantage title</CardTitle>
                        <CardSubtitle>Advantage subtitle</CardSubtitle>
                        <CardText>Advantage</CardText>
                      </CardBody>
                    </Card>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6 col-md-6">
                      <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>Advantage title</CardTitle>
                          <CardSubtitle>Advantage subtitle</CardSubtitle>
                          <CardText>Advantage</CardText>

                        </CardBody>
                      </Card>
                    </div>
                    <div className="col-6 col-md-6">
                      <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>Advantage title</CardTitle>
                          <CardSubtitle>Advantage subtitle</CardSubtitle>
                          <CardText>Advantage</CardText>
                        </CardBody>
                      </Card>
                      </div>
                    </div>
        </div>
      );
    }
}

export default Home;
