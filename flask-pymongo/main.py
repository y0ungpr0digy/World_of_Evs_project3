from flask import Flask 
from flask import render_template
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase.inventory"
db = PyMongo(app).db


@app.route("/")
def hello_world():
    db.inventory.insert_one({"a": 1})
    a =db.inventory.find({})
    print(a, type(a))
    for item in a:
        print(['a'])
    return "<p>Hello, World!</p>"

@app.route("/home")
def home():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)