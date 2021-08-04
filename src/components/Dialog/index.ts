import Dialog, { DialogProps, DialogType } from './Dialog';
import Confirm from './Confirm';

export * from './Dialog';

interface ModalType extends DialogType {
  confirm(config: DialogProps): { destroy(): void };
}
const Modal = Dialog as ModalType;
Modal.confirm = Confirm;

export { Modal };
