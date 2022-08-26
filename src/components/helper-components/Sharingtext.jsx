import React from 'react'
import "../../assests/css/button.css"
import "../../assests/css/sharingtext.css"
const Sharingtext = (props) => {
	return (
		<div className='sharing_text_container'>
			<img src={props.img} alt="" />
			<h3>{props.title}</h3>
			<span>{props.des}</span>
		</div >
	)
}

export default Sharingtext