import React from 'react'
import styled from 'styled-components'

export default function BlockData({ bgColor, color, data, type }) {
	console.log("BLOCK", data)
	return (
		<Block bgColor={bgColor} color={color}>
			<Container>
				<Number>{data}</Number>
				<TextNumber>{type + "s"}</TextNumber>
			</Container>
		</Block>
	)
}

const Block = styled.div`
	background-color: ${(props) => props.bgColor};
	border-radius: 10px;
	width: 33%;
	height: 150px;
	color: ${(props) => props.color};
	border: 1px solid ${(props) => props.color};
	box-shadow: 2px 3px 5px 1px #ccc;
`

const Number = styled.p`
	font-size: 60px;
	padding: 0 30px;
	margin: 0;
	font-weight: 700;
`

const TextNumber = styled.p`
	margin: 0;
	padding: 0 10px;
	font-weight: 400;
	font-size: 20px;
	font-weight: 600;
`

const Container = styled.div`
	display: flex;
	flex: auto;
	align-items: center;
	justify-content: space-between;
	height: 150px;
`
