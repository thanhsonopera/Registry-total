import express from 'express';
import { getLoginInfo } from '../controller/login.js';

const router = express.Router();

router.get('/', getLoginInfo);

// router.post('/', getLoginInfo);

export default router;