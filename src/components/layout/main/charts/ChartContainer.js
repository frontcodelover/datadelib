import React from 'react'
import styled from 'styled-components'
import Button from '../../button/Button'
import { Charts } from '../../../../Charts'
import ButtonContainer from '../../button/ButtonContainer'

export default function ChartsContainer({myData}) {
    return (
        <>
            <Container>
                <div>

			<ButtonContainer />
            </div>
                
            <Charts myData={myData} />
                
		</Container>
        </>
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
	margin: 0 50px;
	border-radius: 10px;
    flex-direction: column;
	background-color: #fff;
`
