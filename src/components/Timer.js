import React, { useState, useContext } from 'react'
import useInterval from '../hooks/useInterval'
import { DataContext } from '../App'

export default function Timer() {
	let { timer, start } = useContext(DataContext)
	let [count, setCount] = useState(timer)
	let [rounds] = useState([])
	useInterval(() => {
		if (start) {
			setCount(count - 1)
			if (count === 0) {
				setCount(timer)
				rounds.push(rounds.length + 1)
			}
		}
	}, 1000)

	return (
		<div>
			<h1>{count}</h1>
		</div>
	)
}
