from email import message
import sys,os, json

message = sys.stdin.readline()

data = json.loads(message)

filename = "data\\" + data["name"].strip() + ".txt"
content = data["content"]

if os.path.exists(filename):
    with open(filename, 'w') as file: 
        file.write(content)
        answer = {'answer' : 'Quadro atualizado!'}
        print(json.dumps(answer))