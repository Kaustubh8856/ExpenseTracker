import React, { useEffect, useState } from "react";
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
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const addTransaction = (paylode) => {
    const transactionArray = [...transactions];
    transactionArray.push(paylode);
    updateTransactions(transactionArray);
  };
  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) => {
      payload.type === "EXPENSE"
        ? (exp += payload.amount)
        : (inc += payload.amount);
    });
    updateExpense(exp);
    updateIncome(inc);
  };

  useEffect(() => calculateBalance(), [transactions]);

  return (
    <Container>
      <OverviewComponent
        addTransaction={addTransaction}
        income={income}
        expense={expense}
      />
      <TransactionComponent transactions={transactions} />
    </Container>
  );
};

export default HomeComponent;
