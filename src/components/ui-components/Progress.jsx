// @ts-nocheck
import React from 'react'
import { useSelector } from 'react-redux'
import "../../assests/css/progress.css"
const Progress = () => {
	const baseState = useSelector(state => state.formState)
	const liArray = document.querySelectorAll("li")

	let liEl = liArray[baseState.step - 1]
	if (liEl) liEl.classList.add("active_step")


	return (
		<div className="progress_container">
			<ul className='progress_bar'>
				<li className='active_step'></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>

		</div>
	)
}

export default Progress