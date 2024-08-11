const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

function handleProblem(req, res) {
  const userCode = req.body.code;
  const title = req.body.title;

  const formattedTitle = title.replace(/\s+/g, '-');
  const problemFolderPath = path.join(__dirname, '../Problems', formattedTitle);

  const testcasesPath = path.join(problemFolderPath, 'testcases.json');
  const baseCodePath = path.join(problemFolderPath, 'basecode.txt');

  let testcases, baseCode;
  try {
    testcases = JSON.parse(fs.readFileSync(testcasesPath, 'utf8'));
    baseCode = fs.readFileSync(baseCodePath, 'utf8');
  } catch (error) {
    console.error(`Error reading files: ${error}`);
    res.status(500).json({ error: 'Internal Server Error' });
    return;
  }

  const finalCode = `
  ${baseCode}
  
  ${userCode}
  
  const results = runTestcases(${JSON.stringify(testcases)});
  console.log(JSON.stringify(results));
  `;

  const encodedCode = Buffer.from(finalCode).toString('base64');
  const dockerCommand = `docker run -e CODE="${encodedCode}" js:0.0.1`;

  exec(dockerCommand, { cwd: 'D:/prac/Node-js/Projects/Leetcode clone/dockerfiles/js' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Docker command: ${error}`);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (stderr) {
      console.error(`Docker command stderr: ${stderr}`);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    try {
      if (!stdout.trim()) {
        throw new Error('Empty output from Docker');
      }

      const result = JSON.parse(stdout);
      res.json({ result });
    } catch (parseError) {
      console.error(`Error parsing Docker output: ${parseError}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
}

module.exports = { handleProblem };
