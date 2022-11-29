import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { useUsersQuery } from "../../service/usersApi.js"

const Button = styled.button`
  color: hotpink;
  background-color: white;
`
let interval
export default function Dashboard() {
	const [counter, setCounter] = useState(0)
	const {
		data, error, isLoading, isSuccess,
	} = useUsersQuery()
	useEffect(() => {
		console.log(data, error, isLoading, isSuccess)
	}, [isSuccess])
	useEffect(() => {
		interval = setInterval(() => {
			setCounter((counter) => counter + 1)
		}, 1000)
		return () => clearInterval(interval)
	}, [])
	return (
		<div>
			{isLoading ? <p>Loading...</p> : ""}
			{error ? (
				<p>
  error :
					{error}
				</p>
			) : ""}
			{isSuccess ? <p>isSuccess</p> : ""}
			<h1>Dashboard</h1>
			<p>{counter}</p>
			<Button>Test</Button>
		</div>
	)
}