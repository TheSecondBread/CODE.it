decoded_code=$(echo $CODE | base64 -d)

echo $decoded_code > run.js

node run.js