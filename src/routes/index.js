import express from 'express';

import booksRouter from './books.router.js';

const router = express();

router.use(booksRouter);

export default router;