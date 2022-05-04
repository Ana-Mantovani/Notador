import sys,os, json

my_data = "data"
files = os.listdir("data")
my_files = []
for file in files:
    if ".txt" in file:
        my_files.append(file)

answer = json.dumps({"boards": my_files})

print(answer)

