import express from 'express';

import { newNote } from '../controllers/notes.js';

const router = express.Router();

router.post('/', newNote);

export default router;