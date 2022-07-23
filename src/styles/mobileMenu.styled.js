import styled from "styled-components";

export const MobileMenuStyles = styled.section`
   background-color: rgba(0,0,0, .7);
   position: fixed;
   left:0;
   top: 0;
   width: 100vw;
   height: 100vh;
   z-index : 3;

   .menu-container {
      width: 60vw;
      height: 100vh;
      background-color: white;
      color: black;
      padding-left: 2rem;

      img {
         margin: 2rem 0;
      }
      
      ul {
         list-style: none;
         padding-left: 0;

         display: flex;
         flex-direction: column;
         gap: 1.5rem;
      }

      li {
         font-weight: 700;
      }
   }
`;