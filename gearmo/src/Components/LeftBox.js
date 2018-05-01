import React, { Component } from 'react';
import tent1 from '../IMG_1269_1024x1024.jpeg';
import  '../App.css';
import {Carousel} from 'react-bootstrap';



class LeftBox extends Component {


  render() {
    return (
      
        <div style = {{width: '49%', height: '60%', paddingLeft: 80}}>
        <Carousel>
            <Carousel.Item>
              <img width={750} height={345} alt="750x345" src={tent1} />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={750} height={345} alt="750x345" src={tent1} />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={750} height={345} alt="750x345" src={tent1} />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div style = {{textAlign: 'left', paddingTop: 10,paddingLeft: 10,paddingRight: 10, fontFamily: "HelveticaNeue", fontSize: 24, backgroundColor: 'White', height: 300, paddingBottom: 10}}>
          4 Person Tent
          <div style = {{fontSize: 13, fontFamily: ".SFNSText", color: 'grey', paddingBottom: 10}}>
          2501 H Street, Sacramento CA 95816
            </div>
            <div >
            <button style = {{marginRight: 20, color: 'orange', backgroundColor: "white", borderRadius: 10}}>
              Buy - $154
            </button>
            <button style = {{color: 'green', borderRadius: 10}}>
              Rent - $15/day
            </button>
            </div>

            <div style = {{borderTopStyle: 'solid', borderColor: 'lightgrey'}}>
            This is information about the tent. It can fit 4 people. blah blah. about the tent. It can fit 4 people. blah blah. about the tent. It can fit 4 people. blah blah.
             about the tent. It can fit 4 people. blah blah. about the tent. It can fit 4 people. blah blah. 
            </div>
          </div>
        </div>
    );
  }
}

export default LeftBox;
