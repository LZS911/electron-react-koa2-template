import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100%;
  height: calc(100% - 110px);
  .header {
    width: 100%;
  }
  .wrapper {
    height: 100%;
    display: flex;
    .sider {
      background-color: #ededed;
      flex-basis: 200px;
    }
    .content {
      flex: 1;
      padding: 10px;
    }
  }
`;
