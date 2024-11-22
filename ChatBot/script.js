var prompt = document.querySelector("#prompt")
var ChatArea = document.querySelector(".container")



function createChatBox(html, classes){
    let div = document.createElement("div")
    div.innerHTML = html
    div.classList.add(classes)
    return div
}

function handleUserChat(message){

    let msg = message ;
    let html = `<img src="user.png" alt="user-image" width="50px"   id="userIMG"><div class="user-chat">${msg}</div>`

    prompt.value = ""

    let UserChatBox = createChatBox(html, "user-chat-area")

    ChatArea.appendChild(UserChatBox)

    setTimeout(() => {

        let response ;
        let msg = message.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
        response = `How can I help you?`;
    } else if (msg.includes("who are you") || msg.includes("tell me about yourself")) {
        response = "I am a ChatBot , created by Swaraj Mohite.";
    } else if (msg.includes("who is swaraj")) {
        response ="Swaraj, a second-year student from G P Pune. He is a tech enthusiast as he created me.";
    } else if (msg.includes("what can you do") || msg.includes("what are your abilities") || msg.includes("capabilities")) {
        response ="I can answer your basic questions and perform simple tasks as a ChatBot.";
    } else if (msg.includes("what is your name") || msg.includes("your name")) {
        response ="My name is Spark. What is your name?";
    } else if (msg.includes("my name is")) {
        response =`Nice to meet you, ${userName}!`;
    } else if (msg.includes("open youtube")) {
        response ="Opening YouTube...";
        window.open("https://www.youtube.com/", "_blank");
    } else if (msg.includes("open google")) {
        response = "Opening Google...";
        window.open("https://www.google.com/", "_blank");
    } else if (msg.includes("open facebook")) {
        response = "Opening Facebook...";
        window.open("https://www.facebook.com/", "_blank");
    } else if (msg.includes("open twitter")) {
        response = "Opening Twitter...";
        window.open("https://www.twitter.com/", "_blank");
    } else if (msg.includes("open instagram")) {
        response = "Opening Instagram...";
        window.open("https://www.instagram.com/", "_blank");
    } else if (msg.includes("open github")) {
        response = "Opening GitHub...";
        window.open("https://www.github.com/", "_blank");
    } else if (msg.includes("open linkedin")) {
        response = "Opening LinkedIn...";
        window.open("https://www.linkedin.com/", "_blank");
    } else if (msg.includes("open youtube channel of swaraj")) {
        response = "Opening YouTube Channel of Swaraj named Techh Spark...";
        window.open("https://www.youtube.com/@Techh-Spark", "_blank");
    } else if (msg.includes("open github account of swaraj")) {
        response = "Opening GitHub Account of Swaraj...";
        window.open("https://github.com/SwarajMohite", "_blank");
    } else if (msg.includes("open linkedin account of swaraj")) {
        response ="Opening LinkedIn Account of Swaraj...";
        window.open("https://www.linkedin.com/in/swaraj-mohite-04050731a/", "_blank");
    } else if (msg.includes("open instagram account of swaraj") || msg.includes("open twitter account of swaraj")) {
        response = "Sorry! Swaraj is not on the mentioned media...";
    } else if (msg.includes("open calculator")) {
        response = "Opening Calculator...";
        window.open("calculator://");
    } else if (msg.includes("open word") || msg.includes("open microsoft word")) {
        response = "Opening Microsoft Word...";
        window.open("word://");
    } else if (msg.includes("open")) {
        let text = msg.replace("open", "").trim();
        response = "Opening...";
        window.open(`${text}://`);
    } else if (msg.includes("tell me a joke") || msg.includes("make me laugh")) {
        let jokes = [
            "Why did the chicken cross the road? To get to the other side!",
            "What do you call a bear with no teeth? A gummy bear!",
            "Why don’t scientists trust atoms? Because they make up everything!",
            "Why did the bicycle fall over? Because it was two-tired!",
            "What do you call fake spaghetti? An impasta!",
            "Why can't you give Elsa a balloon? Because she will let it go!",
            "How does a penguin build its house? Igloos it together!",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
            "What do you call cheese that isn't yours? Nacho cheese!",
            "Why did the math book look sad? Because it had too many problems!",
            "What did one wall say to the other wall? I'll meet you at the corner!",
            "Why was the broom late? It swept in!",
            "Why don't skeletons fight each other? They don't have the guts!",
            "What did the zero say to the eight? Nice belt!",
            "Why was the computer cold? It left its Windows open!"
        ];
        let joke = jokes[Math.floor(Math.random() * jokes.length)];
        response = joke;
    } else if (msg.includes("okay") || msg.includes("nice") || msg.includes("good") || msg.includes("great")) {
        response = "Glad to hear that! How can I assist you further?";
    } else if (msg.includes("bye") || msg.includes("quit") || msg.includes("exit") || msg.includes("see you")) {
        response = "Goodbye! Have a great day!";
    } else if (msg.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        response = `The current time is ${time}.`;
    } else if (msg.includes("play")) {
        let text = msg.replace("play", "").trim();
        response = `This is what I found on YouTube regarding ${text}.`;
        window.open(`https://www.youtube.com/results?search_query=${text}`, "_blank");
    } else if (msg.includes("help") || msg.includes("commands")) {
        response = "Here are some commands you can use: " +
              "Say 'hello', 'who are you', 'what can you do', 'open youtube', 'tell me a joke', " +
              "'time', or 'play' followed by a topic. " +
              "You can also say 'bye' to exit.";
    } else {
        let text = msg.replace("spark", "").trim();
        response = `This is what I found on the internet regarding ${text}.`;
        window.open(`https://www.google.com/search?q=${text}`, "_blank");
    }



        let html = `<img src="ai.png" alt="ai-image" width="50px" id="aiIMG">
            <div class="ai-chat">
                ${response}
            </div>`
        let AIChatBox = createChatBox(html, "ai-chat-area")
        ChatArea.appendChild(AIChatBox)

    }, 300)

}

prompt.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        console.log(prompt.value);

        handleUserChat(prompt.value);
    }
})

