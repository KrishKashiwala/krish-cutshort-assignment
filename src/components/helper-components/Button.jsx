import React from 'react'
import { useDispatch } from 'react-redux'
import "../../assests/css/button.css"
import { updateStep } from '../../redux/formSlice'
const Button = (props) => {
	const dispatch = useDispatch()
	return (
		<div className='button_container' onClick={() => {
			dispatch(updateStep(1))
		}}>{props.buttonText || "Create Workspace"} </div>
	)
}

export default Button