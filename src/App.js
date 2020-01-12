import React, { useState, createContext } from 'react'

import './App.css'
import List from './components/List'
import Timer from './components/Timer'

export const DataContext = createContext([])
function App() {
	let [data, setData] = useState({ timer: 10, start: false, interval: 1000 })
	return (
		<>
			<button onClick={() => setData({ ...data, start: true })}>Start</button>
			<List />
			<DataContext.Provider value={data}>
				<Timer />
			</DataContext.Provider>
		</>
	)
}

export default App
