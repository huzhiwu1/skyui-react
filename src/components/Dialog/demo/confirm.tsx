import React, { FC, useCallback } from 'react';
import { Modal } from '../index';

const Confirm: FC = function () {
  const handleConfirm = useCallback(() => {
    const { destroy, update } = Modal.confirm({
      title: 'confirm',
      visible: true,
      content: 'children',
    });
    setTimeout(() => {
      update((e) => ({
        ...e,
        content: 'update children',
      }));
    }, 2000);
    setTimeout(destroy, 4000);
  }, []);
  return (
    <button type="button" onClick={handleConfirm}>
      confirm
    </button>
  );
};

export default Confirm;
