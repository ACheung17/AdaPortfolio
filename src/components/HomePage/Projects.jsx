import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, Button } from 'reactstrap';

const items = [
  {
    src: 'images/letsEat-app.png',
    altText: "Let's Eat",
    caption: "Let's Eat",
    location: "https://github.com/ACheung17/LetsEat-APP",
    appLink: "https://acheung17.github.io/LetsEat-APP/#/"
  },
  {
    src: 'images/letsEat.jpg',
    altText: "Let's Eat (REST API)",
    caption: "Let's Eat (REST API)",
    location: "https://github.com/ACheung17/LetsEat",
    appLink: "https://infinite-dawn-76227.herokuapp.com/restaurants"
  },
  {
    src: 'images/postNote.png',
    altText: 'Post Notes',
    caption: 'Post Notes',
    location: "https://github.com/ACheung17/PostNotes",
    appLink: "https://acheung17.github.io/PostNotes/"
  }
];

function Projects() {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
      <img src={item.src} alt={item.altText} className="project-img" />
      <div className="caption">
        <h5>{item.caption}</h5>
        <Button className="project-btn" outline color="dark" href={item.appLink} target="_blank">VIEW PROJECT</Button>
        <Button className="project-btn" outline color="dark" href={item.location} target="_blank">VIEW CODE</Button>
      </div> 
      </CarouselItem>
    );
  });

  return (
    <section id="projects" className="white-section">
      <div className="myContainer">
        <h2>Highlights</h2>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;