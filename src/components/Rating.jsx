import React from "react"
import halfStar from "../assets/half-star.png"
import wholeStar from "../assets/whole-star.png"
import emptyStar from "../assets/empty-star.png"
import styled from "styled-components"

const StyledSpan = styled.span`
  font-size: var(--xxs);
  margin-left: 5px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  /* margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  grid-area: ${({ gridArea }) => gridArea};
  @media (min-width: 1140px) {
    margin: ${({ marginOnBigScreen }) => marginOnBigScreen};
  } */
`

const Star = styled.img`
  width: ${({ widthX }) => widthX || "24px"};
  height: ${({ widthX }) => widthX || "24px"};
`

const Rating = ({
  value,
  text,
  width,
  // marginBottom,
  // containerWidth,
  // maxContainerWidth,
  // margin,
  // gridArea,
  // marginOnBigScreen,
  ...props
}) => {
  return (
    <Container
      // marginBottom={marginBottom}
      // width={containerWidth}
      // maxWidth={maxContainerWidth}
      // margin={margin}
      // gridArea={gridArea}
      // marginOnBigScreen={marginOnBigScreen}
      {...props}
    >
      <span>
        <Star
          widthX={width}
          src={value >= 1 ? wholeStar : value >= 0.5 ? halfStar : emptyStar}
          alt="star"
        />
      </span>
      <span>
        <Star
          widthX={width}
          src={value >= 2 ? wholeStar : value >= 1.5 ? halfStar : emptyStar}
          alt="star"
        />
      </span>
      <span>
        <Star
          widthX={width}
          src={value >= 3 ? wholeStar : value >= 2.5 ? halfStar : emptyStar}
          alt="star"
        />
      </span>
      <span>
        <Star
          widthX={width}
          src={value >= 4 ? wholeStar : value >= 3.5 ? halfStar : emptyStar}
          alt="star"
        />
      </span>
      <span>
        <Star
          widthX={width}
          src={value >= 5 ? wholeStar : value >= 4.5 ? halfStar : emptyStar}
          alt="star"
        />
      </span>
      <StyledSpan>{text && text}</StyledSpan>
    </Container>
  )
}

export default Rating
