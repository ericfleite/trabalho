import { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware'
import { permit } from '../middlewares/role.middleware'
import { createLab, listLabs, getLab, updateLab, deleteLab } from '../controllers/labs.controller'

const router = Router()
router.get('/', authMiddleware, listLabs)
router.get('/:id', authMiddleware, getLab)
router.post('/', authMiddleware, permit('admin'), createLab)
router.put('/:id', authMiddleware, permit('admin'), updateLab)
router.delete('/:id', authMiddleware, permit('admin'), deleteLab)
export default router

/**
 * @swagger
 * tags:
 *   name: Labs
 *   description: Gerenciamento de laboratórios
 */

/**
 * @swagger
 * /api/labs:
 *   get:
 *     summary: Lista todos os laboratórios
 *     tags: [Labs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de laboratórios
 */

/**
 * @swagger
 * /api/labs/{id}:
 *   get:
 *     summary: Obtém um laboratório específico
 *     tags: [Labs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes do laboratório
 */

/**
 * @swagger
 * /api/labs:
 *   post:
 *     summary: Cria um novo laboratório (admin)
 *     tags: [Labs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, capacity]
 *             properties:
 *               name:
 *                 type: string
 *               capacity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Laboratório criado
 */
