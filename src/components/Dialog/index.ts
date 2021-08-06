import Dialog, { DialogType } from './Dialog';
import Confirm, { ConfirmProps, UpdateConfirm } from './Confirm';

export * from './Dialog';

interface ModalType extends DialogType {
  confirm(
    config: ConfirmProps,
  ): { destroy(): void; update(config: UpdateConfirm): void };
}
const Modal = Dialog as ModalType;
Modal.confirm = Confirm;

export { Modal };
