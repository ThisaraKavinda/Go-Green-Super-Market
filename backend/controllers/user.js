import { User } from "../models/user.js";

export const addUser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const type = req.body.type;

  let newUser = new User({
    name,
    email,
    type,
  });

  newUser = await newUser
    .save()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ status: "Error with deleting item" });
    });
};

export const findUserByEmail = async (req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  const email = req.params.email;
  User.findOne({ email: email })
    .then((user) => {
      if (user) res.status(200).send(user);
      else res.status(500).json({ error: "use not found" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with deleting item" });
    });
};
