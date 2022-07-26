import styled from "styled-components";

export const CartWindowStyles = styled.div`
   margin-left: auto;
   position: relative;
   
   .cart-icon {
      cursor: pointer;
   }

   sup {
      font-size: .6rem;
      position: absolute;
      right: -.5em;
      top: -.3em;
      background-color: hsl(26, 100%, 55%);
      color: white;
      padding: 0 .5em;
      border-radius: 40%;
   }
`;

export const WindowContainer = styled.div`
   background-color: white;
   position: absolute;
   min-width: 22rem;
   min-height: 10rem;
   margin-top: 1.5rem;
   margin-left: -10rem;
   box-shadow: 5px 5px 15px 0px rgba(0,0,0, .2);
   border-radius: 10px;
   z-index: 5;
   
   .cart-title {
      color: black;
      font-size: 1.05rem;
      padding: 1em;
      border-bottom: 2px solid hsl(223, 64%, 98%);
   }

   .empty-cart {
      font-weight: 700;
      text-align: center;
      margin: 4rem 0;
   }

   .cart-contents {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      padding: 0 1.5rem;
      gap: .3rem;
   }

   .button-checkout {
      background: hsl(26, 100%, 55%);
      color: white;
      font-size: 1.03rem;
      font-weight: 700;
      border: none;
      border-radius: 5px;
      padding: 1em 0;
      margin: 1em 0;
      cursor: pointer;
   }

   @media (max-width: 750px) {
      margin: 0;

      margin-top: 2rem;
      margin-left: -14rem;
      box-shadow: 5px 5px 15px 0px rgba(0,0,0, .3);
   }
`;

export const CartItemStyle = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;

   .cart-thumb {
      max-width: 3rem;
      border-radius: 5px;
   }

   .cart__item--name {
      font-size: .95rem;
   }

   .cart__item--container {
      display: flex;
      flex-direction: column;
      gap: .3rem;
   }

   .cart__item--prices {
      font-size: .95rem;
   }

   .cart__item--delete {
      cursor: pointer;
   }

   .item-total {
      font-weight: 700;
      color: black;
   }
`;