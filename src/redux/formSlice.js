import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	firstName: "",
	displayName: "",
	workSpaceName: "",
	workSpaceURL: "",
	workSpaceSharing: "",
	step: 1
}

export const formSlice = createSlice({
	name: 'formReducer',
	initialState,
	reducers: {
		updateStep: (state, action) => {
			return { ...state, step: state.step + 1 }
		},
		updatePersonalDetails: (state, action) => {
			return { ...state, firstName: action.payload.firstName, displayName: action.payload.displayName }
		},
		updateWorkSpace: (state, action) => {
			return { ...state, workSpaceName: action.payload.name, workSpaceURL: action.payload.url }
		},
		updateSharingType: (state, action) => {
			return { ...state, workSpaceSharing: action.payload }
		},
	},
})

export const { updatePersonalDetails, updateSharingType, updateWorkSpace, updateStep } = formSlice.actions

export default formSlice.reducer