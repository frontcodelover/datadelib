import React from 'react'
import styled from 'styled-components'

export default function Button({ children }) {
    return <ButtonDiv>{children}</ButtonDiv>
}

const ButtonDiv = styled.button`
	border-radius: 5px;
    border: 1px solid #AEB6CF;
    color: #232927;
    padding: 2px 20px;
    font-size: 15px;
    background-color: #fff;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        border: 1px solid #00DEA3;
        background-color: #00DEA3;
        color: #fff;
    }
`
