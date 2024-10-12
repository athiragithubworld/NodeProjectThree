const express = require('express')

const router = express.Router()


router.get("/login", (req, res) => {
  res.send(
    `<h1>Login Page</h1><form action="/login" method="POST"><label>UserName</label><input type='text' name='name'/><button type="submit">Login</button></form>`
  );
});

router.post("/login", (req, res) => {
  res.send(`<html>
   <script>
        localStorage.setItem("username", "${req.body.name}");
        alert("Username stored in localStorage!");
        window.location.href = "/chat";
      </script>
    </html>`);
});

module.exports = router;
