 alert("Welcome!");
 document.getElementById("demo").innerHTML = new Date().getFullYear();


 function getStock(id){
    let check=document.getElementById(id).textContent;
    if (check.includes ('In Stock')){
        alert ("Item is in stock");
    }else{
        alert ("Item is out of stock");
    }
 }
 function sendMessage() {
  let input = document.getElementById("user-input").value.toLowerCase().trim();
  let chatLog = document.getElementById("chat-log");

  if (input === "") return; 
  let userMsg = document.createElement("p");
  userMsg.innerHTML = "<strong>You:</strong> " + input;
  chatLog.appendChild(userMsg);
  let botResponse = getBotResponse(input);
  let botMsg = document.createElement("p");
  botMsg.innerHTML = "<strong>Bot:</strong> " + botResponse;
  chatLog.appendChild(botMsg);
  chatLog.scrollTop = chatLog.scrollHeight;
  document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I help you?";
  } else if (input.includes("price")) {
    return "Our prices are very reasonable. Please visit our products page!";
  } else if (input.includes("bye") || input.includes("goodbye")) {
    return "Goodbye! Have a nice day!";
  } else if (input.includes("help")) {
    return "Sure! You can ask me about products, pricing, or contact info.";
  } else {
    return "I'm not sure about that. Please try asking something else.";
  }
}
