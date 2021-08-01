import React, { FC, useState } from 'react';
import Dialog from '../Dialog';

const Basic: FC = function () {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setVisible((value) => !value)}>
        trigger
      </button>
      <Dialog visible={visible} />
    </>
  );
};

export default Basic;
