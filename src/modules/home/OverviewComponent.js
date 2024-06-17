import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 100%;
`;
const BalanceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  width: 100%;
`;
const AddTransaction = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 10px;
  width: 100%;
  padding: 15px 20px;
  margin: 20px;
  & input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;
const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  & input {
    width: unset;
    margin: 0 10px;
  }
`;

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");
  const addTransaction = () => {
    console.log({ amount, desc, type });
    props.setIsAdd()
  };

  return (
    <AddTransactionContainer>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>

        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </RadioBox>
      <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
    </AddTransactionContainer>
  );
};

const OverviewComponent = () => {
  const [isAdd, setIsAdd] = useState(false);
  return (
    <Container>
      <BalanceBox>
        Balance: ₹10,000
        <AddTransaction onClick={() => setIsAdd(!isAdd)}>
          {isAdd ? "Cancel" : "Add"}
        </AddTransaction>
      </BalanceBox>
      {isAdd && <AddTransactionView setIsAdd={setIsAdd} />}
    </Container>
  );
};

export default OverviewComponent;
