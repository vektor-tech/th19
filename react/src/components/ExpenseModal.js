import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { Button, Modal, Icon } from "semantic-ui-react";
import "../styles/IncomeModal.css";

const ADD_EXPENSE = gql`
  mutation AddExpense($name: String!, $value: Int!) {
    updateUser(
      where: { id: "cjremrker001b07969z5epnt1" }
      data: {
        expenses: {
          create: {
            name: $name
            value: $value
            timestamp: "2018-11-26T06:16:12.123Z"
          }
        }
      }
    ) {
      expenses {
        name
        value
        timestamp
      }
    }
  }
`;

const ModalModalExample = () => {
  let nameInput, valueInput;
  return (
    <div className="income-modal">
      <Modal
        trigger={
          <Button size="small">
            <Icon name="edit" className="edit-button" size="large" />
            Add Expense
          </Button>
        }
        size="tiny"
      >
        <Modal.Header>Expense</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Mutation mutation={ADD_EXPENSE}>
              {(addExpense, { data }) => (
                <div>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      addExpense({
                        variables: {
                          name: nameInput.value,
                          value: parseInt(valueInput.value) * 100,
                        },
                      });
                      nameInput.value = "";
                      valueInput.value = "";
                    }}
                  >
                    <input
                      ref={node => {
                        nameInput = node;
                      }}
                      type="text"
                      placeholder="Name"
                      className="modal-input"
                    />
                    <input
                      ref={node => {
                        valueInput = node;
                      }}
                      type="number"
                      placeholder="Value"
                      className="modal-input"
                    />
                    <button className="ui button" type="submit">
                      Add Expense
                    </button>
                  </form>
                </div>
              )}
            </Mutation>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ModalModalExample;
