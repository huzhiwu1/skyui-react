import React, { FC } from 'react';

export interface DialogProps {
  visible: boolean;
}
const Dialog: FC<DialogProps> = function (props) {
  const { visible } = props;
  return visible ? <div>dilaog</div> : null;
};

export default Dialog;
