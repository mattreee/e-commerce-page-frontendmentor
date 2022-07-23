import styled from "styled-components";

export const NavigationStyle = styled.nav`
   color: hsl(219, 9%, 45%);
   font-family: 1rem;

   display: flex;
   align-items: center;
   width: 80vw;
   margin: 0 auto;

   border-bottom: 3px solid hsl(223, 64%, 98%);

   .mobile-menu {
      margin-right: 1rem;
      filter: brightness(50%);
   }
`;

export const LogoStyle = styled.img`
   width: 8rem;
`;

export const ListStyle = styled.ul`
   list-style: none;
   display: flex;
   gap: 1.5rem;
   margin-left: 1rem;

   li {
      font-weight: 400;
      cursor: pointer;
      padding: 2rem 0;
      border-bottom: 4px solid white;

      &:hover {
         color: black;
         border-bottom-color: hsl(26, 100%, 55%);
      }
   }
`;

export const ProfileStyle = styled.img`
   max-width: 3rem;
   margin-left: 2rem;
   border: 2px solid white;
   border-radius: 50%;
   cursor: pointer;

   &:hover {
      border-color: hsl(26, 100%, 55%);;
   }
`;