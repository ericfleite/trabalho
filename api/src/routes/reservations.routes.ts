import { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware'
import { createReservation, listReservations, getReservation, deleteReservation } from '../controllers/reservations.controller'

const router = Router()
router.get('/', authMiddleware, listReservations)
router.post('/', authMiddleware, createReservation)
router.get('/:id', authMiddleware, getReservation)
router.delete('/:id', authMiddleware, deleteReservation)
export default router

/**
 * @swagger
 * tags:
 *   name: Reservations
 *   description: Agendamento de laboratórios
 */

/**
 * @swagger
 * /api/reservations:
 *   get:
 *     summary: Lista todas as reservas do usuário
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de reservas
 */

/**
 * @swagger
 * /api/reservations:
 *   post:
 *     summary: Cria uma nova reserva
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [labId, startAt, endAt]
 *             properties:
 *               labId:
 *                 type: string
 *               startAt:
 *                 type: string
 *                 format: date-time
 *               endAt:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Reserva criada
 */
