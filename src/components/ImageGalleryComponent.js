/* https://reactjsexample.com/simple-photo-gallery-based-on-react-and-inspired-on-airbnb-image-gallery/ */
import React, { Component } from 'react'
import 'react-bnb-gallery/dist/style.css'
import ReactBnbGallery from 'react-bnb-gallery'
import '../button.css'
const photos = [
    {
  photo: "https://images.pexels.com/photos/3873783/pexels-photo-3873783.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300",
  caption: "Ristorante con Fusion",
  subcaption: "121, Clear Water Bay RoadClear Water Bay, Kowloon HONG KONG",
  thumbnail: "https://images.pexels.com/photos/3873783/pexels-photo-3873783.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300",
}, {
  photo: "https://images.pexels.com/photos/785541/pexels-photo-785541.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  caption: "We have toliet here!",
  subcaption: "Take it easy, you can eat and drink whatever you want",
  thumbnail: "https://images.pexels.com/photos/785541/pexels-photo-785541.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
}, {
    photo: "https://images.pexels.com/photos/3324436/pexels-photo-3324436.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    caption: "Decoration",
    subcaption: "Yeah, that feel good",
    thumbnail: "https://images.pexels.com/photos/3324436/pexels-photo-3324436.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  }, {
    photo: "https://images.pexels.com/photos/2174070/pexels-photo-2174070.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    caption: "Decoration",
    subcaption: "Is it your cup of tea?",
    thumbnail: "https://images.pexels.com/photos/2174070/pexels-photo-2174070.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },  {
    photo: "https://images.pexels.com/photos/1034380/pexels-photo-1034380.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    caption: "Promotion",
    subcaption: "Good luck, you can enjoy our promotion when you see these card",
    thumbnail: "https://images.pexels.com/photos/1034380/pexels-photo-1034380.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },  {
    photo: "https://images.pexels.com/photos/1315910/pexels-photo-1315910.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    caption: "Menu",
    subcaption: "A handsome man seem hard to choose his favorite. Solution: order all :)",
    thumbnail: "https://images.pexels.com/photos/1315910/pexels-photo-1315910.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },  {
    photo: "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    caption: "Uthappizza -- Our top dish",
    subcaption: "What a amazing photo",
    thumbnail: "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },   {
    photo: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    caption: "Our latest promotion -- Buffet",
    subcaption: "only $199 per person!",
    thumbnail: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },  {
    photo: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    caption: "Ristorante con Fusion",
    subcaption: "121, Clear Water Bay RoadClear Water Bay, Kowloon HONG KONG",
    thumbnail: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

class ImageGallery extends Component {
  constructor() {
    super(...arguments);
    this.state = { 
        galleryOpened: false 
    };        
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render () {
    return (
        <div>
            <div className="button">
            <button className="btn-hover color-7" onClick={this.toggleGallery}>Open Images Gallery</button>
            </div>
            <ReactBnbGallery       
            show={this.state.galleryOpened}
            photos={photos}
            onClose={this.toggleGallery}/>
         </div>
    )
  }
}

export default ImageGallery