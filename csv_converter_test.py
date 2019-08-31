import csv
import json

entries = []

with open('#CHANGE PATH TO .CSV FILE', encoding='utf-8') as csvDataFile:
    csvReader = csv.DictReader(csvDataFile)
    for row in csvReader:
        entries.append(row)
    with open('result.txt', mode='w', encoding='utf-8') as result:
        result.write(json.dumps(entries))
    
