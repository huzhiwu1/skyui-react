import React from 'react';
import ReactDOM from 'react-dom';
import Dialog, { DialogProps } from './Dialog';

export default function (config: DialogProps) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  function render() {
    ReactDOM.render(<Dialog {...config} />, div);
  }

  render();

  function destroy() {
    ReactDOM.unmountComponentAtNode(div);
  }
  return {
    destroy,
  };
}
