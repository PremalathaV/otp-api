const express = require("express");
const bodyParser = require("body-parser");
const speakeasy = require("speakeasy");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/generate-otp", (req, res) => {
  const otp = speakeasy.totp({
    secret: "userid",
    digits: 6,
    step: 30,
  });

//   currentOtp = otp;
  console.log("Generated otp");
  res.json({ otp });
});

app.post("/verify-otp", (req, res) => {
    const { otp } = req.body;

    const verified = speakeasy.totp.verify({
        secret: "userid",
        token: otp,
        window: 1,
      });

      res.json({ verified });
})