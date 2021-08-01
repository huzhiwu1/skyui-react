import React, { FC, useState } from 'react';
import Dialog from '../Dialog';

const Basic: FC = function () {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setVisible((value) => !value)}>
        trigger
      </button>
      <Dialog visible={visible} title="dialog标题">
        <div>我是content</div>
      </Dialog>
    </>
  );
};

export default Basic;
