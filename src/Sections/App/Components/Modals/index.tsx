import React, { FunctionComponent } from 'react';
import { Button, Modal as BootModal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connectModal } from 'redux-modal';
import "./styles/index.css";
/**
 * Modal definitions
 */
export enum Modals {
  Remove = "REMOVE"
}

type ModalProps = {
  show: boolean;
  handleHide: () => void;
  successCallback: () => void;
};
const Modal: FunctionComponent<any> = ({ show, handleHide, successCallback }: ModalProps) => {

  return(
    <BootModal keyboard centered fade={false} isOpen={show} toggle={handleHide}>
      <ModalHeader>Wait!</ModalHeader>
      <ModalBody>Are you sure you don't want to support this charity?</ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={handleHide}>Back</Button>
        <Button className={"modal_button--danger"} color="danger" onClick={() => { handleHide(); successCallback(); }}>Yes</Button>
      </ModalFooter>
    </BootModal>
  );
};

export default connectModal({ name: Modals.Remove })(Modal);