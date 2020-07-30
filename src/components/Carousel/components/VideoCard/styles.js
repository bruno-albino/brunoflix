import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border-radius: 0px 4px 4px 0px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .7;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const VideoDetailsBorder = styled.div`
  height: 50px;
  width: 100%;
  opacity: 0;
  padding: 5px;
  padding-bottom: 55px;

  &:hover{
    opacity: 1;
  }
`;


VideoDetailsBorder.Title = styled.a`
  color: white;
  font-weight: bold;

  &:hover{
    background-color: var(--primary);
  }
`;
