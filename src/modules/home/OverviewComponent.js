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
const AddTransaction = styled.button`
  background-color: black;
  color: white;
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
  padding: 15px 20px;
  margin: 10px 20px;
  & input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;

const AddTransactionView = () => {
  return (
    <AddTransactionContainer>
      <input type="number" placeholder="Amount" />
      <input type="text" placeholder="Description" />
    </AddTransactionContainer>
  );
};

const OverviewComponent = () => {
  const [isAdd, setIsAdd] = useState(true);
  return (
    <Container>
      <BalanceBox>
        Balance: ₹10,000
        <AddTransaction>{isAdd ? "Cancel" : "Add"}</AddTransaction>
      </BalanceBox>
      {isAdd && <AddTransactionView />}
    </Container>
  );
};

export default OverviewComponent;
