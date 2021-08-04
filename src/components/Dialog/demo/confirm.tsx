import React, { FC, useCallback } from 'react';
import { Modal } from '../index';

const Confirm: FC = function () {
  const handleConfirm = useCallback(() => {
    const { destroy } = Modal.confirm({
      title: 'confirm',
      visible: true,
      children: '我是children',
    });
    setTimeout(destroy, 3000);
  }, []);
  return (
    <button type="button" onClick={handleConfirm}>
      confirm
    </button>
  );
};

export default Confirm;
