import React, { FC, useCallback, useState } from 'react';
import Dialog from '../Dialog';

const Basic: FC = function () {
  const [visible, setVisible] = useState(false);

  const handleHidden = useCallback(
    (e) => {
      console.log(e, 'e');
      setVisible(false);
    },
    [setVisible],
  );

  const handleShow = useCallback(
    (e) => {
      console.log(e, 'e');
      setVisible(false);
    },
    [setVisible],
  );
  return (
    <>
      <button type="button" onClick={() => setVisible((value) => !value)}>
        trigger
      </button>
      <Dialog
        visible={visible}
        title="dialog标题"
        onCancel={handleHidden}
        onOk={handleShow}
      >
        <div>我是content</div>
      </Dialog>
    </>
  );
};

export default Basic;
