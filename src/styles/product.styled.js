import styled from "styled-components";

export const ProductStyles = styled.section`
   width: 80vw;
   margin: 0 auto;
   margin-top: 4rem;

   display: grid;
   grid-template-columns: 1fr 1fr;
`;

export const CompanyStyle = styled.div`
   text-transform: uppercase;
   font-weight: 700;
   color: hsl(26, 100%, 55%);
   letter-spacing: .1em;

   margin: 1.5rem 0;
`;

export const TitleStyle = styled.h1`
   font-size: 3rem;
   margin-bottom: 2rem;
`;

export const DescriptionStyle = styled.p`
   color: hsl(219, 9%, 45%);
   font-weight: 400;
   letter-spacing: .04em;
   line-height: 1.5rem;

   margin-bottom: 1.5rem;
`;

export const PriceStyle = styled.span`
   font-size: 2rem;
   font-weight: 700;
`;

export const DiscountStyle = styled.span`
   background-color: hsl(25, 100%, 94%);
   color: hsl(26, 100%, 55%);
   font-weight: 700;
   padding: .2em .4em;
   margin-left: 1rem;
   border-radius: 5px;
`;

export const TotalPriceStyle = styled.p`
   color: hsl(220, 14%, 75%);
   font-weight: 700;
   font-size: 1.05rem;
   text-decoration: line-through;

   margin-top: .5rem;
   margin-bottom: 1.5rem;
`;

export const AddContainer = styled.div`
   display: flex;
   gap: 1rem;
`;

export const ButtonContainerStyle = styled.div`
   background-color: hsl(223, 64%, 98%);
   width: fit-content;
   display: flex;
   align-items: center;
   border-radius: 5px;
`;

export const ButtonQuantStyle = styled.img`
   cursor: pointer;
   padding: 1rem;
`;

export const QuantStyle = styled.div`
   font-weight: 700;
   font-size: 1.1rem;
   padding: 0 1.5em;
`;

export const AddButton = styled.button`
   background-color: hsl(26, 100%, 55%);
   color: white;
   font-size: 1.2rem;
   border: none;
   padding: 1em 3em;
   border-radius: 5px;
   cursor: pointer;

   img {
      max-width: 100%;
      width: 1.2rem;
      filter: invert(87%) sepia(89%) saturate(3%) hue-rotate(180deg) brightness(110%) contrast(97%);
      margin-right: 1rem;

      &:hover {
         opacity: .7;
      }
   }

   &:hover {
      opacity: .7;
   }
`;