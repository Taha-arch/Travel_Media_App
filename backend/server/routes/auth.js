import express from "express";
import { login, test, teardown} from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post('/test-api/setup', test)
router.post('/test-api/teardown', teardown)

export default router;