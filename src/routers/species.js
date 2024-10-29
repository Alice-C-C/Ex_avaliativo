import express from "express"
import cliente from "../controllers/species.js"
const router = express.Router()

router.get('/', cliente.index)
router.get('/:id', cliente.show)
router.post('/', cliente.store)
router.put('/:id', cliente.update)
router.delete('/:id', cliente.destroy)

export default router