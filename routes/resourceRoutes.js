const express = require("express");
const {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
} = require("../controllers/resourceController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/rolemiddleware");
const router = express.Router();

//  Description: Routes for resources
// create a resource
router.post("/create", authMiddleware, roleMiddleware(["Admin"]), createResource);
// get all resources
router.get("/all", getAllResources);
// get a resource by id
router.get("/byId/:id", getResourceById);
// update a resource by id
router.put("/update/:id", authMiddleware, roleMiddleware(["Admin"]), updateResource);
// delete a resource by id
router.delete("/delete/:id", authMiddleware, roleMiddleware(["Admin"]), deleteResource);

module.exports = router;
