from flask import Flask, request, jsonify
import json
app = Flask(__name__)

#Function to replace words in string
#temps = ["[Company Name]", "[Rep Name]"]
#fillers = ["Lockheed", "Tyler"]
def replace(string, temps, fillers):
    for idx, temp in enumerate(temps):
        string = string.replace(temp, fillers[idx])
    print("New String: " + string)
    return string
# Members API Route
@app.route("/backend", methods=['POST', 'GET'])
def backend():
    string = ""
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        temps = data["temps"].split(",")
        fillers = data["fillers"].split(",")
        string = data["string"]
        string = replace(string, temps, fillers) 
    return {"string": string}

if __name__ == "__main__":
    app.run(debug=True)