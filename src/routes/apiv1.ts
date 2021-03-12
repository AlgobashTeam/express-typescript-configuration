import express from 'express';

const r = express.Router();

r.get('/', (_, res) => res.json({
  message: 'This is apiv1',
}));

export default r;
