import React from 'react'
import Button from '../helper-components/Button'
import "../../assests/css/button.css"
import "../../assests/css/workspace.css"
import { updateWorkSpace } from '../../redux/formSlice'
import { useDispatch } from 'react-redux'
import { handleChange } from '../../utils/util'
const Workspace = (props) => {
	const dispatch = useDispatch()
	const [workSpaceFields, setWorkSpaceFields] = React.useState({
		name: "",
		url: ""
	})

	const handleDispatchWorkSpaceDetails = (e) => {
		e.preventDefault()
		dispatch(updateWorkSpace(workSpaceFields))
	}
	return (
		<div className='workspace_container' >
			<header>
				<h2>Let's set up a home for all your work</h2>
				<small>You can always create another workspace later.</small>
			</header>
			<div className="workspace_details_container">
				<small >Workspace Name</small>
				<input type="text" name="name" className="input_class" placeholder='Eden'
					onChange={(e) => { handleChange(e, workSpaceFields, setWorkSpaceFields) }}
				/>
				<div>
					<small >Workspace URL <small>(optional)</small></small>
					<div className='workspace_input_group'>
						<input type="text" disabled placeholder='www.eden.com/' />
						<input type="text" name="url" className="input_class_next" placeholder='Steve' onChange={(e) => { handleChange(e, workSpaceFields, setWorkSpaceFields) }} />
					</div>
				</div>
			</div>
			<div onClick={(e) => handleDispatchWorkSpaceDetails(e)}>
				<Button /></div>
		</div >

	)
}

export default Workspace

