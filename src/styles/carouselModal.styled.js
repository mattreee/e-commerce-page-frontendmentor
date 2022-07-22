import styled from "styled-components";

export const CarouselModalStyles = styled.div`
   background-color: rgba(0,0,0, .7);
   color: #eee;
   width: 100vw;
   height: 100vh;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 2;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 1.5rem;

   .main-container {
      position: relative;
   }
   
   .main-image {
      width: 30vw;
      min-width: 15rem;
      border-radius: 10px;
   }

   .icon-change {
      background-color: white;
      position: absolute;

      padding: 1rem;
      border-radius: 50%;

      cursor: pointer;

      &:hover {
         fill: red;
      }
   }

   .previous {
      left: -1rem;
      top: 50%;
   }

   .next {
      right: -1rem;
      top: 50%;
   }

   .icon-close {
      position: absolute;
      width: 1.2rem;
      right: 0;
      top: -2rem;
      cursor: pointer;

      filter: invert(75%) sepia(68%) saturate(5648%) hue-rotate(348deg) brightness(107%) contrast(101%);
   }
`;

export const ThumbModalContainerStyle = styled.div`
   display: flex;
   justify-content: center;
   gap: 1rem;
   width: 30vw;

   .thumbnail__image {
      max-width: 12vmin;
      border-radius: 10px;
      cursor: pointer;

      border: 2px solid transparent;

      &:hover {
         filter: contrast(.5) brightness(1.5) saturate(.8);
      }
   }

   img:nth-child(${props => props.selectedImage}) {
      background-color: white;
      border: 2px solid hsl(26, 100%, 55%);

      filter: contrast(.5) brightness(1.5) saturate(.8);
   }
`;