import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 10px 20px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  & input {
    padding: 10px 12px;
    width: 100%;
    border-radius: 12px;
    outline: none;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
  }
`;
const Cell = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  border-radius: 2px;
  font-weight: normal;
  border: 1px solid #e6e8e9;
  border-right: 5px solid ${(props) => (props.isExpense ? "Red" : "Green")};
`;
const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload.type === "EXPENSE"}>
      <span> {props.payload.desc} </span>
      <span> {props.payload.amount} </span>
    </Cell>
  );
};

const TransactionComponent = (props) => {
  return (
    <Container>
      TransactionComponent
      <input type="text" placeholder="Search" />
      {props.transactions.length
        ? props.transactions.map((payload) => (
            <TransactionCell payload={payload} />
          ))
        : ""}
    </Container>
  );
};

export default TransactionComponent;
