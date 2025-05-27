import { Router } from "express";
import { principalRegister ,loginPrincipal} from "../controllers/principalController.js";


const router = Router();

router.post('/register', principalRegister);
router.post('/login', loginPrincipal);

export default router;