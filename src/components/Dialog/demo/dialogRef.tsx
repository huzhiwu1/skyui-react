import React, { FC, useCallback, useState, useRef, useEffect } from 'react';
import Dialog from '../Dialog';

const DialogRef: FC = function () {
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef(null);

  const handleHidden = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const handleShow = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  useEffect(() => {
    console.log(dialogRef, 'dialogRef');
  }, [visible]);
  return (
    <>
      <button type="button" onClick={() => setVisible((value) => !value)}>
        trigger
      </button>
      <Dialog
        ref={dialogRef}
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

export default DialogRef;
