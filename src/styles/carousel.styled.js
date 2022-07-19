import styled from "styled-components";

export const ProductCarouselStyles = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
`;

export const MainImageStyle = styled.div`
   width: 25vw;

   img {
      max-width: 100%;
      border-radius: 15px;
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

export const ThumbStyle = styled.img`
   
`;