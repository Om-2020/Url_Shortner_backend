import express from "express";

import { isAuthenticated } from "../middlewares/auth.js";

import { UrlShortcode_generator, Visit_Original_Long_Url, deleteShortUrl, getMyShortUrl, updateShortUrl } from "../controllers/url.js";

const router = express.Router();

router.post("/shorten", isAuthenticated, UrlShortcode_generator);
router.get("/my", isAuthenticated, getMyShortUrl);

router.delete("/:id",isAuthenticated, deleteShortUrl);
router.put("/:id", isAuthenticated, updateShortUrl);



router.get("/:shortcode",isAuthenticated,Visit_Original_Long_Url);




export default router;
