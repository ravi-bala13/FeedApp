// const User = require("../models/user.model");

// const express = require("express");
// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const user = await User.create(req.body);

//     console.log("user:", user);
//     return res.status(201).send(user);
//   } catch (e) {
//     // console.log(e);
//     return res.status(500).send({ message: e.message, status: "failed" });
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const users = await User.findAll();

//     console.log("user:", usesr);
//     return res.status(201).send(users);
//   } catch (e) {
//     // console.log(e);
//     return res.status(500).send({ message: e.message, status: "failed" });
//   }
// });

// router.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const users = await User.findOneAndUpdate(
//       { _id: req.params.id },
//       req.boady
//     );

//     console.log("user:", usesr);
//     return res.status(201).send(users);
//   } catch (e) {
//     // console.log(e);
//     return res.status(500).send({ message: e.message, status: "failed" });
//   }
// });
