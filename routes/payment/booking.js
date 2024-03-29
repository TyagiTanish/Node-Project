// server.js
const { log } = require("console");
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51Li8s7BQTREDaPxY7AUklpQjHmx29Nzcxquawr3KJEHWy3i4TQiVrftMnH0zLTgwnt9t1hVZrhN64OI10GrG39Fc00cR4utdeX"
);
module.exports = async (req, res) => {
  try {
    const  {token} = JSON.parse(req.body.body.token)
    const price = req.body.body.price
    const charge = await stripe.charges.create({
      amount: req.body.body.price, // amount in cents
      currency: "usd",
      description: "Example Charge",
      source: token.id,
    });
    res.send({ success: true, charge });
  } catch (err) {
    console.error(err);
    res.send({ success: false, error: err.message });
  }
};
