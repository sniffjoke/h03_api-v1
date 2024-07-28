import express from "express";
import TestingController from "../controllers/testingController";

const router = express.Router();

router.route('/')
    .delete(
        TestingController.deleteAll
    )

export default router;
