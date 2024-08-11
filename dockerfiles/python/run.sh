decoded_code=$(echo $CODE | base64 -d)

echo "$decoded_code" > run.py

python run.py
