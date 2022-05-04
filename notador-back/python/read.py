from email import message
import sys,os, json

message = sys.stdin.readline()

data = json.loads(message)

filename = "data\\" + data["name"].strip() + ".txt"

if os.path.exists(filename):
    with open(filename, 'r') as file: 
        content =  file.read()

        print(json.dumps(content))





