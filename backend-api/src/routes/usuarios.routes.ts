import { Router } from 'express'

import * as usuarioController from '../routes/usuarios.controller'

const router = Router();

router.get('/Usuario', usuarioController.getUsuarios);
router.get('/Usuario/:id', usuarioController.getUsuario);
router.post('/Usuario', usuarioController.createUsuario);
router.put('/Usuario/:id', usuarioController.updateUsuario);
router.delete('/Usuario/:id', usuarioController.deleteUsuario);

export default router