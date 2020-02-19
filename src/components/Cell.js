import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
	position: static;
`

const CellImage = styled.div`
	position: static;
`

const CellTitle = styled.div`
	position: static;
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell