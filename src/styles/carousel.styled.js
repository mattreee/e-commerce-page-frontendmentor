import styled from "styled-components";

export const ProductCarouselStyles = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
`;

export const MainImageStyle = styled.div`
   width: 25vw;
   min-width: 15rem;
   position: relative;

   img {
      max-width: 100%;
      border-radius: 15px;
      cursor: pointer;
   }

   .mobile-carousel-control {
      display: none;
      position: absolute;
      background-color: white;
      padding: 1em;
      border-radius: 50%;
      top: 50%;
      margin: 0 1rem;
   }

   .next {
      right: 0;
   }

   @media (max-width: 750px) {
      width: 100%;
      margin: 0;
      padding: 0;

      img {
         border-radius: 0;
         cursor: auto;
      }

      .mobile-carousel-control {
         display: block;
      }
   }
`;

export const ThumbsStyle = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   place-items: center;
   gap: 1.5vw;

   img {
      border-radius: 10px;
      width: 5vw;
      cursor: pointer;
      border: 2px solid white;

      &:hover {
         opacity: .5;
      }
   }

   img:nth-child(${props => props.selectedImage}) {
      border: 2px solid hsl(26, 100%, 55%);
      opacity: .65;
   }
`;