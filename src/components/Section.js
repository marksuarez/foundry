import React from 'react'
import styled from 'styled-components'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'


const SectionGroup = styled.div`
	position: static;
`

const SectionLogo = styled.img`
	position: static;
`

const SectionTitleGroup = styled.div`
	position: static;
`

const SectionTitle = styled.h3`
	position: static;
`

const SectionText = styled.p`
	position: static;
`

const SectionCaption = styled.p`
	position: static;
`

const SectionCellGroup = styled.div`
	position: static;
`

const Section = props => (
	<div>
		<SectionGroup image={props.image}>
			<SectionLogo src={props.logo} />
			<SectionTitleGroup>
				<SectionTitle>{props.title}</SectionTitle>
				<SectionText>{props.text}</SectionText>
			</SectionTitleGroup>
		</SectionGroup>
		<SectionCaption>
			12 sections - 6 hours
		</SectionCaption>
		<SectionCellGroup>
			{staticdata.cells.map(cell => (
				<Cell title={cell.title} image={cell.image} />
			))}
		</SectionCellGroup>
	</div>
)

export default Section