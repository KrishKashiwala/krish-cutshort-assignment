import React, { useEffect, useState } from 'react'
import Button from '../helper-components/Button'
import Sharingtext from '../helper-components/Sharingtext'
import user from "../../assests/images/user.png"
import group from '../../assests/images/group.png'
import "../../assests/css/sharing.css"
import { updateSharingType } from '../../redux/formSlice'
import { useDispatch } from 'react-redux'
import { handleSelectedType } from '../../utils/util'
const Sharing = (props) => {
	const [flag, setFlag] = useState(false)
	const dispatch = useDispatch()


	const dispatchSharingType = (flag) => {
		flag ? dispatch(updateSharingType
			("group")) : dispatch(updateSharingType("user"))
	}
	useEffect(() => {
		handleSelectedType(flag)
		dispatchSharingType(flag)
		//eslint-disable-next-line
	}, [flag])

	return (
		<div className='sharing_container'>
			<header>
				<h2>How are you planning to use Eden?</h2>
				<small>We'll streamline your setup experience accordingly</small>
			</header>
			<div className='sharing_type'>
				<div className="sharing_user" onClick={() => setFlag(false)}>
					<Sharingtext img={user} title="For myself" des="Write better. Think more clearly. Stay organized." />
				</div>
				<div className="sharing_group" onClick={() => setFlag(true)}>
					<Sharingtext img={group} title="With my team" des="Wikis, docs, tasks & projects, all in one place." />
				</div>
			</div>
			<Button />
		</div>
	)
}

export default Sharing