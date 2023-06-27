var jwt = require('jsonwebtoken');
const UserService = require("../service/user");
// const config = require("../config");

const signUp = async (req, res) => {

}

const logIn = async (req, res) => {
  
}

const updateProfile = async (req, res) => {
  
}

const nonce = async (req, res) => {
  const { pubAddress } = req.body;
  let nonce = await UserService.getNonce(pubAddress);
  res.json({
		nonce,
	});
}

const authMetamask = async (req, res) => {
  const { pubAddress, signature } = req.body;
  const isRecovered = await UserService.authMetamask(pubAddress, signature);
  
  //TODO if recovered===TRUE - generate jwt token and send to user
  res.json({
		isRecovered,
	});
}


module.exports = {
  signUp,
  logIn,
  updateProfile,
  nonce,
  authMetamask
}