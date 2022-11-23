import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import gato1 from '../imagenes/gato1.png'
import gato2 from '../imagenes/gato2.png'
import gatos from '../imagenes/gatos.png'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit'
export default function Inicio() {
  return (
    <MDBCarousel showIndicators showControls fade>
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={1}
      src={gatos}
      alt='...'
    >
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 d-block'
      itemId={2}
      src={gato1}
      alt='...'
    >
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 d-block'
      itemId={3}
      src={gato2}
      alt='...'
    >
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </MDBCarouselItem>
  </MDBCarousel>
  );
}
