import express from "express";
import multer from "multer";
import {register, login, test, teardown} from "../controllers/auth.js";
import { verifyToken } from "../middleware/auth.js";
import { createPost } from "../controllers/posts.js";


const router = express.Router();
/* FILE STORAGE */

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "public/assets");
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });


/* ROUTES WITH FILES */
router.post("/register", upload.single("picture"), register);
router.post("/posts", verifyToken, upload.single("picture"),createPost);




router.post("/login", login);
router.post('/test-api/setup', test)
router.post('/test-api/teardown', teardown)

export default router;