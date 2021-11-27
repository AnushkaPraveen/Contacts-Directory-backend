import mongoose from 'mongoose'
import EmpProfile from '../models/empModel.js'

// @desc   Get all employee profiles
// @route  GET /api/emp-profiles
//@access  Public
export const getEmployeeProfiles = async (req, res) => {
	try {
		const profile = await EmpProfile.find()
		res.status(200).json(profile)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

// @desc   Get Profile by user ID
// @route  GET /api/emp-profiles/:emp_id
//@access  Public
export const getEmployeeProfile = async (req, res) => {
	const { id: _id } = req.params
	try {
		const profile = await EmpProfile.findById(_id)
		res.status(200).json(profile)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

// @desc   Add a new employee
// @route  POST /api/emp-profiles
//@access  Public
export const addEmployeeProfile = async (req, res) => {
	const { userId, jobTitleName, preferredFullName, emailAddress, phoneNumber } =
		req.body

	try {
		const empExists = await EmpProfile.findOne({ userId })
		if (empExists) {
			res.status(400).json({ errors: [{ msg: 'User already Exists' }] })
		}

		const employee = await EmpProfile.create({
			userId,
			jobTitleName,
			preferredFullName,
			emailAddress,
			phoneNumber,
		})

		res.status(201).json({
			_id: employee._id,
			userId: employee.userId,
			jobTitleName: employee.jobTitleName,
			preferredFullName: employee.preferredFullName,
			emailAddress: employee.emailAddress,
			phoneNumber: employee.phoneNumber,
		})
	} catch (error) {
		res.status(409).json({ message: error.message })
	}
}

// @desc   Update a employee profile
// @route  PUT /api/emp-profiles
//@access  Public
export const updateEmployeeProfile = async (req, res) => {
	const { id: _id } = req.params
	const profile = req.body

	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send('No profile found')

	const updatedProfile = await EmpProfile.findByIdAndUpdate(_id, profile, {
		new: true,
	})
	res.status(200).json(updatedProfile)
}

// @desc   Delete a employee profile
// @route  DELETE /api/emp-profiles/:emp_id
//@access  Public
export const deleteEmployeeProfile = async (req, res) => {
	const { id: _id } = req.params

	if (user) {
		await user.remove()
		res.json({ message: 'User removed' })
	} else {
		res.status(404)
		res.json({ message: 'User not found' })
	}
}
