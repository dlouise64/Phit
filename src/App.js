import React, { useState, createContext } from 'react'

import './App.css'
import List from './components/List'
import Timer from './components/Timer'

export const DataContext = createContext([])
function App() {
	let [data, setData] = useState({ timer: 10, start: false })
	return (
		<>
			<button onClick={() => setData({ timer: 10, start: true })}>Start</button>
			<List />
			<DataContext.Provider value={data}>
				<Timer />
			</DataContext.Provider>
		</>
	)
}

export default App
