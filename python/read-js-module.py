import ast

with open("js-module.js") as dataFile:
    data = dataFile.read()
    str = data[data.find('{') : data.rfind('}')+1]
    li = ast.literal_eval(str)

print(str)