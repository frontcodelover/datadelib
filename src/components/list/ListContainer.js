import React from 'react'
import styled from 'styled-components'

export default function ListContainer({ data }) {
    console.log(data)
  return (
      <Container>
          
          <Table>
  <Table.Head>
    <Table.TR>
      <Table.TH>Heading 1</Table.TH>
      <Table.TH>Heading 2</Table.TH>
    </Table.TR>
  </Table.Head>
  <Table.Body>
    <Table.TR>
      <Table.TH>data 1</Table.TH>
      <Table.TH>data 2</Table.TH>
    </Table.TR>
    <Table.TR>
      <Table.TH>data 3</Table.TH>
      <Table.TH>data 4</Table.TH>
    </Table.TR>
  </Table.Body>
</Table>

    </Container>
  )
}

const Container = styled.div`
	display: flex;
	flex: auto;
	gap: 6px;
	align-items: center;
	justify-content: space-between;
	height: auto;
	padding: 30px;
	margin: 0 50px 30px;
	border-radius: 10px;
	flex-direction: column;
	background-color: #fff;
	box-shadow: 2px 3px 5px 1px #ccc;
`

export const Table = styled.table`
  // custom css goes here
`;

Table.Head = styled.thead`
 // custom css goes here
`;

Table.Body = styled.tfoot`
  // custom css goes here
`;

Table.Foot = styled.tbody`
 // custom css goes here
`;

Table.TH = styled.tr`
  // custom css goes here
`;

Table.TR = styled.th`
  // custom css goes here
`;

Table.TD = styled.td`
  // custom css goes here
`;