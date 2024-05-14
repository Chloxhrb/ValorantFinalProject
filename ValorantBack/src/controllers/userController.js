const User = require("../models/userModel");
const bcrypt = require("bcrypt"); // bcrypt va transformer le mdp de l'user en mdp haché dans la base de donné
const jwt = require("jsonwebtoken"); // jsonwebtoken va stocké toute les info de l'user et va le stocker dans le local storage
const dotenv = require("dotenv");

dotenv.config(); //dans ce fichier on utilise les variable de fichier.env

const getallusers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // bcrypt va hacher le pwd et 10 est le niveau le plus elever pour hacher le password
    const user = new User({
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      password: hashedPassword,
      userRank: req.body.userRank,
    }); // on dit que le user a besoin du username et du password
    await user.save(); // attend que l'user soit bien creer et ensuite le sauvegarde ds la base de donnée
    res.json(user); // envoie un msg qui dis que c'est bien creer
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ userEmail: req.body.userEmail }); //va cherhcer le userName dans les infos qui sont envoyer par une requete
    if (!user) return res.status(404).send("User not found");

    const validpassword = await bcrypt.compare(
      req.body.password,
      user.password
    ); //compare est une methode de bcrypt qui va comparer le passeword entré par l'user avec celui enregistrer dans la base de donné
    if (!validpassword) return res.status(400).send("Invalid password");
console.log(user)
    const token = jwt.sign({ user,  isAdmin: user.isAdmin }, process.env.SECRET_KEY); // le token stock les info du user, on lui dis qu'on a l'obj de user, va crypter l'objet user et on a besoin du secretkey pr le decrypter
    res.json({ token, isAdmin: user.isAdmin }); // { } car c'est un objet
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).send("User not found");
    }

    // Réponse de succès
    res.status(200).send("User successfully deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      userName: user.userName,
      userEmail: user.userEmail,
      userRank: user.userRank,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  registerUser,
  loginUser,
  getallusers,
  deleteUser,
  getUserProfile,
};
