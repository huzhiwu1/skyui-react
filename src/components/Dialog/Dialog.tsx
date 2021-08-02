import React, { FC } from 'react';
import { defaultPrefixCls } from 'src/shared/getPrefixCls';
import clsx from 'clsx';
import './Dialog.less';
import { Icon } from '../Icon';

export interface DialogProps {
  visible: boolean;
  title: string;
}
const Dialog: FC<DialogProps> = function (props) {
  const prefixcls = `${defaultPrefixCls}-dialog`;
  const { visible, title, children } = props;
  return visible ? (
    <>
      <div className={`${prefixcls}__mask`} />
      <div className={`${prefixcls}__wrap`}>
        <div className={prefixcls}>
          <div className={`${prefixcls}__content`}>
            <div className={`${prefixcls}__close`}>
              <Icon
                name="close"
                className={`${prefixcls}__close-icon`}
                size="normal"
              />
            </div>
            <header className={`${prefixcls}__header`}>
              <h3 className={`${prefixcls}__title`}>{title}</h3>
            </header>
            <main className={`${prefixcls}__body`}>{children}</main>
            <footer className={`${prefixcls}__footer`}>
              <button
                type="button"
                className={clsx(
                  `${prefixcls}__button`,
                  `${prefixcls}__button--ok`,
                )}
              >
                确认
              </button>
              <button
                type="button"
                className={clsx(
                  `${prefixcls}__button`,
                  `${prefixcls}__button--cancel`,
                )}
              >
                取消
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Dialog;
