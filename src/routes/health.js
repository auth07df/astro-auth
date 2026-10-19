import { Router } from 'express';

const router = Router();
router.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'astro-auth', maintainer: 'auth07df', timestamp: new Date().toISOString() });
});

export default router;