# CODE.it

### Description

I started this project inspired by platforms like LeetCode and CodeChef, where users can practice and submit solutions to coding problems.
While solving challenges on these platforms, I became curious about how they work behind the scenes. 
I realized that the best way to learn was by building something similar myself.

Through this journey, I gained a deep understanding of various technologies, including HTML, CSS, React, Node.js, MongoDB, and Docker. 
I learned about containerization, sandboxing, and the importance of creating isolated environments for code execution. 
This knowledge helped me understand how crucial it is to prevent malicious activities on the server by ensuring that each user's code runs in a separate, secure environment.

This project not only sharpened my technical skills but also gave me valuable insights into building scalable, secure platforms. 
I'm excited to continue expanding and enhancing this project, making it bigger and better.

### Feautures
- Fully responsive interface, accessible on both desktop and mobile devices.
- Users can practice and submit coding problems directly in the browser.
- Secure, isolated environments using Docker to run user-submitted code, preventing potential security threats.

### Technologies Used

- *HTML*: For structuring the content of the web pages.
- *Tailwind CSS*: A utility-first CSS framework for styling the user interface with ease and flexibility.
- *React*: A JavaScript library for building dynamic, interactive user interfaces.
- *Node.js*: A runtime environment for executing JavaScript code on the server side.
- *MongoDB*: A NoSQL database for storing user data, problem sets, and submissions in a flexible, scalable manner.
- *Docker*: Containerization technology to create isolated, secure environments for running and testing user-submitted code.

## Run Locally

To run the project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Setting Up the Client
Navigate to the client folder and install the dependencies.

```bash
cd client
npm install
npm run dev
// Edit dot env folder and add your MONGOURI and a SECRET for jwt 
```

This will start the React development server on localhost

### 3. Setting Up the Server
Navigate to the server folder and install the dependencies.

```bash
cd server
npm install
npm start
```
### 4. Setting Up Docker
Navigate to the dockerfiles/js folder.

```bash
cd dockerfiles/js
docker build -t js:0.0.1` .
// In Server change the cwd based on your computer at line 8 and line 37 of compilerController and problemController
```

## TODO

- [ ] Add support for other programming languages.
- [ ] Improve handling of Docker outputs.
- [ ] Add a contest page and enable users to create contests.
- [ ] Update user profile functionality and ensure solved problems are displayed correctly.
