const express = require("express");

const router = express.Router();
const fs = require("fs");


router.get("/chat", (req, res) => {
  const data = fs.readFileSync("chat.txt", "utf8").split("\n");
  let msgs = ``;
  for (let msg of data) {
    if (msg === "") continue;

    msgs += `<li>${msg}</li>`;
  }

  res.send(`
    <html>
    <h1>Chat App</h1>
    <form id="chatForm">
      <input type="text" name="chat" /> 
      <button id="submitId" type="submit">Submit</button>
    </form>
    <ul id="chatLog">
    ${msgs}
    </ul>
    <script>
    const form = document.getElementById("chatForm");
    form.addEventListener("submit", async function(event) {
      event.preventDefault(); // Prevent default form submission
      
      const userName = localStorage.getItem("username") || "";
      const chat = document.querySelector("input[name='chat']").value;

      // Send data to the server
      const response = await fetch("http://localhost:7000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, chat }) // Correct body format
      });

      const result = await response.json()
      console.log(result)
      

     

       // Reload the page to see the updated chat log
    });
   
   const id =  setTimeout(()=>{
   window.location.reload();
      
      },10000)
     
    </script>
    </html>
  `);
});

router.post("/chat", (req, res) => {
  addMessage(req);
  res.send(req.body);
  res.redirect("/chat");
});

function addMessage(req) {
  try {
    const data = req.body;
    const { chat, userName } = data;
    const message = `${userName}: ${chat}\n`;

    // Append the message to chat.txt
    fs.appendFileSync("chat.txt", message, "utf8");
    console.log("Message added to chat.txt");
  } catch (error) {
    console.error("Error writing message to file:", error);
  }
}

module.exports = router