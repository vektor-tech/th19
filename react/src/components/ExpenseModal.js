import React from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";
import "../styles/IncomeModal.css";

const ModalModalExample = () => (
  <div className="expense-modal">
    <Modal
      trigger={
        <Button size="small">
          <Icon name="edit" class="edit-button" size="large" />
        </Button>
      }
      size="tiny"
    >
      <Modal.Header>Expenses</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <input className="modal-input" type="text" placeholder="Name" />
          <input className="modal-input" type="number" placeholder="Value" />
        </Modal.Description>
        <button type="submit" className="submit-button">
          Done
        </button>
      </Modal.Content>
    </Modal>
  </div>
);

export default ModalModalExample;
