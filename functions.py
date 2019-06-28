import csv, random

def getList():
    '''read data from CSV and populate in bigList'''

    bigList = []

    with open('NYT Crossword_2009_2016.csv', 'r') as csv_file:
        fieldnames = ['Year','Weekday','Clue','Word','Total','Explanation']
        csv_reader = csv.DictReader(csv_file,fieldnames=fieldnames)
        limit = 1
        for item in csv_reader:
            if item['Weekday'] == 'Wed' and limit < 12000:
                bigList.append(item)
                limit+=1
    random.shuffle(bigList)
    return bigList

def getClue():
    '''return a clue'''
    list = getList()
    return list[0]
