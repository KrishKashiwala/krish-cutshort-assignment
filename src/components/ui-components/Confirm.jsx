import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../helper-components/Button'
import tick from '../../assests/images/tick.png'
import "../../assests/css/confirm.css"

const Confirm = (props) => {
	// @ts-ignore
	const baseState = useSelector(state => state.formState)
	return (
		<div className='confirm_container'>

			<img src={tick} alt="" />
			<header>
				<h2>Congratulations,&nbsp;{baseState.displayName}!</h2>
				<small>You have completed onboarding, you can start using the Eden!.</small>
			</header>
			<Button buttonText="Launch Eden" />
		</div >
	)
}

export default Confirm