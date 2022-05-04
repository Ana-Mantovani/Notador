import sys


data = sys.stdin.readline()

print(data)

filename = "data\\" + data.strip() + ".txt"

new_file = open(filename, 'x')

new_file.close()

print("Quadro criado com sucesso!")






