import React from 'react';
import ReactDOM from 'react-dom';
import Dialog, { DialogProps } from './Dialog';

export type ConfirmProps = Omit<DialogProps, 'children'> & {
  content: React.ReactNode;
};

export type UpdateConfirm =
  | ConfirmProps
  | ((preConfig: ConfirmProps) => ConfirmProps);

export default function (config: ConfirmProps) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  let currentConfig: ConfirmProps = {
    ...config,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    onCancel: close,
    visible: true,
  };

  function render({ content, ...props }: ConfirmProps) {
    ReactDOM.render(<Dialog {...props}>{content}</Dialog>, div);
  }

  function destroy() {
    ReactDOM.unmountComponentAtNode(div);
  }

  function update(updater: UpdateConfirm) {
    if (typeof updater === 'function') {
      currentConfig = updater(currentConfig);
    }
    currentConfig = {
      ...currentConfig,
      ...updater,
    };
    render(currentConfig);
  }

  function close() {
    currentConfig = {
      ...currentConfig,
      visible: false,
    };
    render(currentConfig);
  }

  render(currentConfig);

  return {
    destroy,
    update,
  };
}
