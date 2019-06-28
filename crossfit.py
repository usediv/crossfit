from functions import getList, getClue
import csv
from flask import request, url_for, jsonify
from flask_api import FlaskAPI, status, exceptions
from flask_cors import CORS

app = FlaskAPI(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})

# read data from CSV and populate in bigList
bigList = getList()

wrongList = []
listIndex = 0
counter = 0

def clueGen():
    global listIndex
    global counter
    # check counter to see if fifth clue
    if counter%5 == 0:
        # check wrongList
        if len(wrongList) != 0:
            clue = wrongList.pop(0)
            counter+=1
        else:
            # otherwise, iterate through list
            clue = bigList[listIndex]
            listIndex+=1
            counter+=1
    else:
        clue = bigList[listIndex]
        listIndex+=1
        counter+=1
    # reset index at end of list to keep looping
    if listIndex > len(bigList)-1:
        listIndex=0
    # check if we've been round once already and if wrongList is empty
    if counter > len(bigList)-1 and len(wrongList) == 0:
        return None
    return clue



    # answer = input()
    # if answer == "0":
    #     wrongList.append(clue)


def note_repr(clue):
    return {
        'Clue': clue['Clue'],
        'Word': clue['Word'],
        'Explanation': clue['Explanation']
    }



@app.route("/", methods=['GET', 'POST'])
def notes_list():
    """
    List or create notes.
    """
    global wrongList

    if request.method == 'POST':
        print(request.data)

    clue = clueGen()
    # request.method == 'GET'
    return jsonify(note_repr(clue))


# @app.route("/<int:key>/", methods=['GET', 'PUT', 'DELETE'])
# def notes_detail(key):
#     """
#     Retrieve, update or delete note instances.
#     """
#     # if request.method == 'PUT':
#     #     note = str(request.data.get('text', ''))
#     #     notes[key] = note
#     #     return note_repr(key)
#     #
#     # elif request.method == 'DELETE':
#     #     notes.pop(key, None)
#     #     return '', status.HTTP_204_NO_CONTENT
#
#     # request.method == 'GET'
#     if key not in notes:
#         raise exceptions.NotFound()
#     return note_repr(key)


if __name__ == "__main__":
    app.run(host="localhost", port=8000, debug=True)
