import React from 'react'
import styled from 'styled-components'
export default function List() {
	return (
		<div>
			<Markers>
				{[...Array(10)].map(item => {
					return <Marker />
				})}
			</Markers>
		</div>
	)
}

const Markers = styled.ul`
	list-style: none;
	padding-left: 0;
	display: flex;
	justify-content: center;
`
const Marker = styled.li`
	position: relative;
	width: 6%;
	height: 0;
	padding: 3% 0;
	margin: 0 auto;
	border-radius: 50%;
	background: #a7cd80;
	border: 10px solid #97b974;
	display: flex;
	justify-content: center;
	font-size: 3em;
`
