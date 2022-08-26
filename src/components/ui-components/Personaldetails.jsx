import React, { useState } from 'react'
import Button from '../helper-components/Button'
import '../../assests/css/personaldetails.css'
import { useDispatch } from 'react-redux'
import { updatePersonalDetails } from '../../redux/formSlice'
import { handleChange } from '../../utils/util'
const Personaldetails = (props) => {
	const dispatch = useDispatch()

	const [fields, setFields] = useState({
		firstName: "",
		displayName: ""
	})

	const dispatchPersonalDetails = (e) => {
		dispatch(updatePersonalDetails(fields))
	}
	return (
		<div className='personal_details_container'>
			<header>
				<h2>Welcome! First things first..</h2>
				<small>You can always can them later</small>
			</header>
			<div className="input_details_container">
				<small >First Name</small>
				<input type="text" name="firstName" className="input_class" placeholder="Steve Jobs" onChange={(e) => handleChange(e, fields, setFields)} />
				<small >Display Name</small>
				<input type="text" name="displayName" className="input_class" placeholder='Steve' onChange={(e) => handleChange(e, fields, setFields)} />
			</div>
			<div onClick={(e) => dispatchPersonalDetails(e)}>
				<Button />
			</div>
		</div>
	)
}

export default Personaldetails