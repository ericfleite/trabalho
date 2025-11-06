import { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware'
import { permit } from '../middlewares/role.middleware'
import { listUsers } from '../controllers/users.controller'

const router = Router()
router.get('/', authMiddleware, permit('admin'), listUsers)
export default router

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista todos os usuários (admin)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
