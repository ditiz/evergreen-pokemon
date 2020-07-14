import React from "react";
import { Table } from "evergreen-ui";
import { MovesEntity } from "../types";

interface TableMovesProps {
  moves: MovesEntity[];
}

const TableMoves = ({ moves }: TableMovesProps) => {
  return (
    <Table>
      <Table.Head>
        <Table.SearchHeaderCell />
        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
        <Table.TextHeaderCell>ltv</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        {moves.map((move) => (
          <Table.Row key={move.move.name} isSelectable>
            <Table.TextCell>{move.move.name}</Table.TextCell>
            <Table.TextCell>{move.move.name}</Table.TextCell>
            <Table.TextCell isNumber>{move.move.name}</Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default TableMoves;
