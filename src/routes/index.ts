import { Hono } from "hono";
import {
  deletePlayer,
  getPlayer,
  getPlayerById,
  postPlayer,
  putPlayer,
} from "../controllers/player_c";

const router = new Hono();

router.get("/", (c) => getPlayer(c));
router.get("/:id", (c) => getPlayerById(c));
router.post("/", (c) => postPlayer(c));
router.put("/:id", (c) => putPlayer(c));
router.delete("/", (c) => deletePlayer(c));

export const Routes = router;
