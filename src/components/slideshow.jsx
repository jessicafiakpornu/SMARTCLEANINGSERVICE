import React from 'react'
import {Carousel} from "react-bootstrap";


export default function () {
  return (
    <div className=''>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/634007/pexels-photo-634007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 >Cleaning</h3>
      <p className='h5'>The magic in cleaning. The tricks of stain removal. Nothing beats the experience. From floor polishing to janitorial services to home cleaning and maintenance, we have got you covered.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Disinfection</h3>
      <p className='h5'>We can fight this common enemy together by disinfecting high touch surfaces always, washing our hands with soap and water frequently and maintaining social distancing. For disinfecting of your homes and offices we are readily available to help you do that.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/4176307/pexels-photo-4176307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Fumigation</h3>
      <p className='h5'>SMART CLEANING SERVICE is licensed by the EPA to provide professional fumigation services. We have the experts with knowledge on how to deal with an infestation problem, the best way to eradicate the pest and provide advice on how to prevent reinfestation.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
