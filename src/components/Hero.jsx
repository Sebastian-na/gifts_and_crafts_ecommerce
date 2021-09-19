import React from "react"
import styled from "styled-components"
import { items } from "../mocks/carouselItems"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import arrowLeft from "../assets/arrow-left.png"
import arrowRight from "../assets/arrow-right.png"
import useWindowSize from "../hooks/useWindowSize"

const CarouselItem = styled.div`
  height: 350px;
  @media (min-width: 768px) {
    height: 550px;
  }
`

const CarouselItemImage = styled.img`
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`

const Hero = () => {
  const { width } = useWindowSize()
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: width > 768 ? "calc(50% - 40px)" : "calc(50% - 20px)",
    width: width > 768 ? 80 : 40,
    height: width > 768 ? 80 : 40,
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
  }

  const customArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        onClick={onClickHandler}
        title={label}
        style={{ ...arrowStyles, left: width > 1000 ? 140 : 30 }}
      >
        <img src={arrowLeft} alt="Arrow left" />
      </button>
    )

  const customArrowNext = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        onClick={onClickHandler}
        title={label}
        style={{ ...arrowStyles, right: width > 1000 ? 140 : 30 }}
      >
        <img src={arrowRight} alt="Arrow right" />
      </button>
    )

  return (
    <Carousel
      infiniteLoop
      autoPlay
      showThumbs={false}
      showStatus={false}
      renderArrowPrev={customArrowPrev}
      renderArrowNext={customArrowNext}
    >
      {items.map((item, idx) => (
        <CarouselItem key={idx}>
          <CarouselItemImage src={item.image} alt={item.description} />
        </CarouselItem>
      ))}
    </Carousel>
  )
}

export default Hero
