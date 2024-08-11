const express = require("express");
const { handleProblem } = require("../controllers/problemController");
const QUESTION = require("../models/questions");

const problemRouter = express.Router();

problemRouter.post("/problem", handleProblem);

problemRouter.get("/problems",async (req,res)=>{
    const problems = await QUESTION.find({})
    res.json(problems)
})

problemRouter.get("/question",async(req,res)=>{
    const { title } = req.query;
    const question = await QUESTION.findOne({title:title})

    res.json(question)
})

//Add Question 
problemRouter.post("/add", async (req,res)=>{

    //Example for Question
//     const markdown= `
// # SUBTRACT TWO INTEGERS

// Difficulty: __Easy__

// Find the difference between two given integers

// **Input Format**

// You are given two integers A and B

// **Output Format**

// Print the difference between two integers

// #### **Test Case-1**

// **Input**

// \`\`\`python
// 5 3
// \`\`\`

// **Output**

// \`\`\`python
// 2
// \`\`\`
//     `

    const q = await QUESTION.create({
        title:req.title,
        diff:req.diff,
        question:req.markdown,
        solstatus:"Not Solved"
    })
    res.send("queston added")
})


module.exports = problemRouter;
