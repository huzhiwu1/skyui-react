import React, { SVGAttributes } from 'react';
import clsx from 'clsx';
import { defaultPrefixCls } from 'src/shared/getPrefixCls';
import { SizeType } from 'src/shared/commonConfig';
import SvgsMap, { SvgTypes } from './svgs/index';
import './Icon.less';

interface InternalIconProps extends SVGAttributes<SVGElement> {
  name: SvgTypes;
  size?: SizeType;
  className?: string;
}

export type IconRefType = SVGElement | undefined;
const InternalIcon: React.ForwardRefRenderFunction<
  IconRefType,
  InternalIconProps
> = (props, ref) => {
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
      ref={ref}
    />
  );
};

export interface IconType
  extends React.ForwardRefExoticComponent<
    InternalIconProps & React.RefAttributes<SVGElement>
  > {
  __SKY_ICON: boolean;
}
export const Icon = React.forwardRef<IconRefType, InternalIconProps>(
  InternalIcon,
) as IconType;

Icon.displayName = 'Icon';
Icon.__SKY_ICON = true;
export default Icon;
