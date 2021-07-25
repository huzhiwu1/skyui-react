import React, { FC, MouseEventHandler, useCallback } from 'react';
import { Icon } from '../index';

const PoweroffIcon: FC = function () {
  const hadnleClick = useCallback<MouseEventHandler<SVGElement>>((e) => {
    console.log(e, 'e');
  }, []);
  return <Icon name="poweroff" size="large" onClick={hadnleClick} />;
};

export default PoweroffIcon;
