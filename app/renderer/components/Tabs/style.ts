import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  .tab-item {
    color: #6e6e6e;
    font-size: 14px;
    cursor: pointer;
    cursor: default;
    &:hover {
      color: #000;
    }
  }
  .tab-item-active {
    color: #000;
    font-weight: bold;
  }
`;
