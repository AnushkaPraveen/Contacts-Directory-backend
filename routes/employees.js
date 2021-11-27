import express from 'express'

import {
	getEmployeeProfiles,
	getEmployeeProfile,
	addEmployeeProfile,
	updateEmployeeProfile,
	deleteEmployeeProfile,
} from '../controllers/employees.js'

const router = express.Router()

router.get('/', getEmployeeProfiles)
router.get('/:id', getEmployeeProfile)
router.post('/', addEmployeeProfile)
router.put('/:id', updateEmployeeProfile)
router.delete('/:id', deleteEmployeeProfile)

export default router
