import React, { FC, SVGAttributes } from 'react';
import clsx from 'clsx';
import { defaultPrefixCls } from 'src/shared/getPrefixCls';
import { SizeType } from 'src/shared/commonConfig';
import SvgsMap, { SvgTypes } from './svgs/index';
import './Icon.less';

interface IconProps extends SVGAttributes<SVGElement> {
  name: SvgTypes;
  size?: SizeType;
  className?: string;
}

const Icon: FC<IconProps> = function (props) {
  const { name, size = 'normal', className, ...reset } = props;

  const SvgIcon = SvgsMap[name];
  const prefixcls = `${defaultPrefixCls}-icon`;
  return (
    <SvgIcon
      className={clsx(prefixcls, {
        [`${prefixcls}--${size}`]: size,
        [`${className}`]: className,
      })}
      {...reset}
    />
  );
};

export default Icon;
