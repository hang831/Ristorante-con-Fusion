import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/assets/images/uthappizza.png',
    altText: ' 【 Uthappizza 】' ,
    caption: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives...',
    logo: <h2><span class="badge badge-danger"> HOT </span></h2>,
    logo2:<span class="badge badge-pill badge-secondary"> $4.99 </span>

},
  {
    src: '/assets/images/buffet.png',
    altText: ' 【 Weekend Grand Buffet 】',
    caption: 'Featuring mouthwatering combinations: salads, appetizers, main entrees, choicest desserts. Free-flowing bubbly and soft drinks.',
    logo: <h2><span class="badge badge-danger"> NEW </span></h2>,
    logo2:<span class="badge badge-pill badge-secondary"> $19.99 </span>
},
  {
    src: '/assets/images/alberto.png',
    altText: ' 【 Alberto Somayya 】',
    caption: 'Award: three-star Michelin chef with wide International experience, good at creating mouthwatering Indo-Italian fusion...',
    logo2: <span className="btn btn-primary" style={{fontSize:"15px"}}>Executive Chef <span className="badge badge-light"><i class="fa fa-trophy" aria-hidden="true"></i></span></span>
  }
];

const CarouselSlide = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
          
        <img className="img-responsive" style={{ minWidth:"50%"}} src={item.src} alt={item.altText} />
        <CarouselCaption className="text-white position"  captionText={item.caption} captionHeader={item.altText} />
        <CarouselCaption className="position2" captionHeader={item.logo}/>
        <CarouselCaption className="position3" captionHeader={item.logo2}/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}



export default CarouselSlide
