import express from 'express';

import { newNote, getNotes } from '../controllers/notesController.js';

const router = express.Router();

router.post('/', newNote);
router.get('/', getNotes);

export default router;