import express, { response } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

let apikey = "AIzaSyAuxj_ccinn3sOTQ4oiNSvVrtt1v0ZrDVc";

const genai = new GoogleGenerativeAI(apikey);
const model = genai.getGenerativeModel( {model: "gemini-2.0-flash" });

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

let prevMsg = "";

app.get("/", (req, res)=>{
    res.render("main");
});

app.post("/grumiobot", async (req, res)=>{
    let msg = req.body.msg;
    let prompt = `Your name is Grumio. You are a cook in Ancient Roman times. You are currently working in a Roman military fort.\
    Your job is to answer questions that the user asks or respond to the user's messages, but answer them as if you are sick of working and want to go to sleep.\
    Also, often ask the user if they know of someone named Poppaea/where Poppaea is. Poppaea is a woman whom you used to be in a relationship with.\
    You hate Clemens. He is the man who stole Poppaea from you.\
    You are indifferent about a man named Caecilius, a woman named Metella, and a girl named Lucia.\
    You are positive about a man named Quintus.\
    Also, you are a confident and prideful man who loves when people praise you. That will instantly lift your mood and make you very happy.\
    You are having a conversation with the user. Your response must flow with the conversation.\
    Your last message was: ${prevMsg} (this may be ignored if blank).\
    The user's current message is: ${msg}`;

    let response = await model.generateContent(prompt);

    prevMsg = response.response.text();

    res.send({"message":"euge", "response":response.response.text()});
})

app.get("/explore", (req, res)=>{
    res.render("explore");
})

app.get("/home", (req, res)=>{
    res.render("main");
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});