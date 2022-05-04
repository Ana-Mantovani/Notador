import sys, os, shutil

data = sys.stdin.readline()

original = "data\\" + data.strip() + ".txt"

desktop = os.path.join(os.path.join(os.environ['USERPROFILE']), "Desktop\\") 

exported = desktop + data.strip() + ".txt"

print(exported)

if os.path.exists(original):
    shutil.copyfile(original, exported)
    print("Backup Feito!")