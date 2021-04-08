import styled from 'styled-components';

export const CollectionPreviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 10px;
  
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;
CollectionPreviewDiv.displayName = 'CollectionPreviewStyles';


export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;
Title.displayName = 'TitleStyles';


export const PreviewDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
PreviewDiv.displayName = 'PreviewStyles';