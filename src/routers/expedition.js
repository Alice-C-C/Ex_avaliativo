import express from "express"
import Expedition from "../controllers/expedition.js"
const router = express.Router()

router.get('/', Expedition.index)
router.get('/:id', Expedition.show)
router.post('/', Expedition.store)
router.put('/:id', Expedition.update)
router.delete('/:id', Expedition.destroy)

export default router