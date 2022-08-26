// @ts-nocheck
export const handleChange = (e, fields, setFields) => {
	setFields({
		...fields,
		[e.target.name]: e.target.value
	})
}

export const handleSelectedType = (flag) => {
	const user = document.getElementsByClassName("sharing_group")[0]
	const group = document.getElementsByClassName("sharing_user")[0]
	if (flag) {
		group.classList.remove("active")
		if (user)
			user.classList.add("active")
	} else {
		user.classList.remove("active")
		if (group)
			group.classList.add("active")
	}
}