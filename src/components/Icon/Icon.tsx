import React, { FC } from 'react';
import SvgsMap, { SvgTypes } from './svgs/index';

interface IconProps {
  name: SvgTypes;
}

const Icon: FC<IconProps> = function (props) {
  const { name } = props;
  const SvgIcon = SvgsMap[name];
  return <SvgIcon />;
};

export default Icon;
