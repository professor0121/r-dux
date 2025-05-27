import { Router } from "express";
import { registerController, loginController, logOutController  } from "../controllers/authController.js";

const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/logout', logOutController);

export default router;
