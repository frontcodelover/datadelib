import React from 'react'
import Button from './Button'
import styled from 'styled-components'

export default function ButtonContainer() {
	return (
		<ButtonContent>
			<Button>Janvier</Button>
			<Button>Février</Button>
			<Button>Mars</Button>
			<Button>Avril</Button>
			<Button>Mai</Button>
			<Button>Juin</Button>
			<Button>Juillet</Button>
			<Button>Aout</Button>
			<Button>Septembre</Button>
			<Button>Octobre</Button>
			<Button>Novembre</Button>
			<Button>Décembre</Button>
		</ButtonContent>
	)
}

const ButtonContent = styled.div`
display: flex;
gap: 6px;
margin: 20px 0 30px;
`
