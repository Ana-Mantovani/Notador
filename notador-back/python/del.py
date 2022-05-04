import sys, os


data = sys.stdin.readline()

filename = "data\\" + data.strip() + ".txt"

if os.path.exists(filename):
    os.remove(filename)
    print("Quadro removido!")