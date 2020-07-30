import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  color: var(--white);
  text-align: center;
  height: min-content;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
