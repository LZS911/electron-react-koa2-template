import React from 'react';
import { useLocation } from 'react-router';
import { classnames } from '../../../../../../utils';

const { ipcRenderer } = window.electronAPI;

const Control: React.FC = () => {
  const [isSwitchRouter, setIsSwitchRouter] = React.useState({
    back: false,
    forward: false,
  });
  const location = useLocation();
  React.useEffect(() => {
    ipcRenderer.canGoBackOrForward(setIsSwitchRouter);
  }, [location]);

  const back = () => {
    isSwitchRouter.back && ipcRenderer.goBack();
  };
  const forward = () => {
    isSwitchRouter.forward && ipcRenderer.goForward();
  };
  return (
    <div className="control">
      <div className="arrow-content">
        <div
          className={classnames(
            ['arrow-wrapper', 'left-wrapper', 'disabled-wrapper'],
            [true, true, !isSwitchRouter.back]
          )}
          onClick={back}
        >
          <div
            className={classnames(
              ['arrow', 'arrow-left', 'disabled-arrow'],
              [true, true, !isSwitchRouter.back]
            )}
          />
        </div>
        <div
          className={classnames(
            ['arrow-wrapper', 'right-wrapper', 'disabled-wrapper'],
            [true, true, !isSwitchRouter.forward]
          )}
          onClick={forward}
        >
          <div
            className={classnames(
              ['arrow', 'arrow-right', 'disabled-arrow'],
              [true, true, !isSwitchRouter.forward]
            )}
          />
        </div>
      </div>
    </div>
  );
};
export default Control;
