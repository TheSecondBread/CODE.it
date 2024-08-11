const { exec } = require('child_process');

function handleCompile(req, res) {
  const code = Buffer.from(req.body.code).toString('base64');

  const dockerCommand = `docker run -e CODE="${code}" js:0.0.1`;

  exec(dockerCommand, { cwd: 'D:/prac/Node-js/Projects/Leetcode clone/dockerfiles/js' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Docker command: ${error}`);
      res.json({result:stderr})
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (stderr) {
      console.error(`Docker command stderr: ${stderr}`);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(`Docker command stdout: ${stdout}`);
    res.json({ result: stdout });
  });
}

module.exports = { handleCompile };
