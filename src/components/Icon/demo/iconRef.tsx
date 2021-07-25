import React, { FC, useEffect, useRef } from 'react';

import { Icon } from '../index';

const IconRef: FC = function () {
  const iconRef = useRef(null);
  useEffect(() => {
    console.log(iconRef);
  });

  return <Icon name="poweroff" size="large" ref={iconRef} />;
};

export default IconRef;
