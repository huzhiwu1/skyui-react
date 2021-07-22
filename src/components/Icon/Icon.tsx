import React, { FC } from 'react';
import clsx from 'clsx';
import { defaultPrefixCls } from 'src/shared/getPrefixCls';
import { SizeType } from 'src/shared/commonConfig';
import SvgsMap, { SvgTypes } from './svgs/index';
import './Icon.less';

interface IconProps {
  name: SvgTypes;
  size?: SizeType;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: FC<IconProps> = function (props) {
  const { name, size = 'normal', className, style } = props;

  const SvgIcon = SvgsMap[name];
  const prefixcls = `${defaultPrefixCls}-icon`;
  return (
    <SvgIcon
      style={style}
      className={clsx(prefixcls, {
        [`${prefixcls}--${size}`]: size,
        [`${className}`]: className,
      })}
    />
  );
};

export default Icon;
