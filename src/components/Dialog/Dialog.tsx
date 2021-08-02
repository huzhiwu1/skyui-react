import React, { FC, useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { defaultPrefixCls } from 'src/shared/getPrefixCls';
import clsx from 'clsx';
import './Dialog.less';
import { Icon } from '../Icon';

export interface DialogProps {
  visible: boolean;
  title: string;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  onCancel?: React.MouseEventHandler;
  onOk?: React.MouseEventHandler;
  maskClosable?: boolean;
}
const Dialog: FC<DialogProps> = function (props) {
  const mountNodeRef = useRef<HTMLDivElement>(document.createElement('div'));
  const prefixcls = `${defaultPrefixCls}-dialog`;
  const {
    visible,
    title,
    children,
    okText = '确认',
    cancelText = '取消',
    onCancel,
    onOk,
    maskClosable = true,
  } = props;

  const handleClickMask = useCallback<React.MouseEventHandler>(
    (e) => {
      maskClosable && onCancel && onCancel(e);
    },
    [maskClosable, onCancel],
  );

  const dialogElement = visible ? (
    <>
      <div
        className={`${prefixcls}__mask`}
        onClick={handleClickMask}
        role="dialog"
      />
      <div className={`${prefixcls}__wrap`}>
        <div className={prefixcls}>
          <div className={`${prefixcls}__content`}>
            <div
              className={`${prefixcls}__close`}
              onClick={onCancel}
              role="button"
              tabIndex={0}
            >
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
                onClick={onOk}
              >
                {okText}
              </button>
              <button
                type="button"
                className={clsx(
                  `${prefixcls}__button`,
                  `${prefixcls}__button--cancel`,
                )}
                onClick={onCancel}
              >
                {cancelText}
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  ) : null;

  useEffect(() => {
    if (visible) {
      if (!document.body.contains(mountNodeRef.current)) {
        document.body.appendChild(mountNodeRef.current);
      }
    }
  }, [visible]);

  useEffect(
    () => () => {
      if (mountNodeRef.current.parentNode) {
        ReactDOM.unmountComponentAtNode(mountNodeRef.current);
      }
    },
    [],
  );

  return ReactDOM.createPortal(dialogElement, mountNodeRef.current);
};

export default Dialog;
