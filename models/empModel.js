import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
			unique: true,
		},
		jobTitleName: {
			type: String,
			required: true,
		},
		preferredFullName: {
			type: String,
			required: true,
		},
		emailAddress: {
			type: String,
		},
		phoneNumber: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
)

const EmpProfile = mongoose.model('profile', ProfileSchema)

export default EmpProfile
