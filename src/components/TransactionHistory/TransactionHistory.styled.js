import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 350px;
  border-collapse: collapse;
`;

export const TebleHead = styled.th`
  border: 1px solid #7888f5;
  background-color: #7290d4;
  margin: 0;
  padding: 5px;
`;

export const TableRow = styled.tr`
  border: 1px solid #7888f5;
  &:nth-child(2n) {
    background-color: #8bc2eb;
  }
`;
