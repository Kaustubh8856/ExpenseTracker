import React, { useState } from "react";
import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  width: 360px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const HomeComponent = (props) => {
  const [transactions, updateTransactions] = useState([]);
  const addTransaction = (paylode) => {
    const transactionArray = [...transactions];
    transactionArray.push(paylode);
    updateTransactions(transactionArray);
  };
  return (
    <Container>
      <OverviewComponent addTransaction={addTransaction} />
      <TransactionComponent transactions={transactions} />
    </Container>
  );
};

export default HomeComponent;
