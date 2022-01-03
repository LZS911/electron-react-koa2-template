import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 50px;
  display: flex;
  -webkit-app-region: drag;
  .control {
    background-color: #f5f5f5;
    height: 100%;
    flex-basis: 200px;
    .arrow-content {
      width: 60px;
      margin-left: 130px;
      padding: 14px 0;
      display: flex;
    }
    .arrow {
      width: 8px;
      height: 8px;
      border-top: 1px solid rgb(68, 68, 68, 0.55);
      border-left: 1px solid rgb(68, 68, 68, 0.55);
    }

    .arrow-wrapper {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .left-wrapper {
      padding-left: 4px;

      &:hover {
        background-color: #e8e8e8;
      }
      .arrow-left {
        transform: rotate(-45deg);
      }
    }
    .right-wrapper {
      padding-right: 4px;
      margin-left: 10px;
      &:hover {
        background-color: #e8e8e8;
      }
      .arrow-right {
        transform: rotate(135deg);
      }
    }
    .disabled-wrapper {
      pointer-events: none;
      opacity: 0.3;
    }
  }
  .nav {
    background-color: #f8f8f8;
    height: 100%;
    flex: 1;
    padding-left: 20px;
  }

  .system {
    flex-basis: 348px;
    background-color: #f8f8f8;
    height: 100%;
    display: flex;
    align-items: center;
    .search-input {
      display: flex;
      align-items: center;
      margin-left: 35px;
      background-color: #ececec;
      border-radius: 20px;
      padding: 2px 4px;
      cursor: text;
      width: 145px;
      justify-content: center;
      input {
        height: 100%;
        outline: none;
        border: none;
        background-color: #ececec;
        width: 100%;
        ::placeholder {
          opacity: 0.5;
          font-size: 12px;
        }
      }
    }
  }
`;
