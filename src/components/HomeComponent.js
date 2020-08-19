import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container, Row, Col} from 'reactstrap';
import  CarouselComponent  from './CarouselComponent'

function Home(props) {
    return(
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-12">
            <CarouselComponent />
            </div>
            </div>
        </div>
    );
}

export default Home;
