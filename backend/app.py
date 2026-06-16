from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
from flask import Flask, jsonify, request

app = Flask(__name__)
CORS(app)

@app.route("/students")
def students():

    df = pd.read_csv("datasets/std_career_data.csv")

    return jsonify(df.to_dict(orient="records"))

@app.route("/internships")
def internships():

    df = pd.read_csv("datasets/internships.csv")

    return jsonify(df.to_dict(orient="records"))

@app.route("/register", methods=["POST"])
def register():

    data = request.json

    print(data)

    return jsonify({
        "message": "Student Registered Successfully"
    })

@app.route("/stats")
def stats():

    students = pd.read_csv("datasets/std_career_data.csv")

    total_students = len(students)

    internship_matches = len(
        students[students["InternshipMatched"] == "Yes"]
    )

    roadmaps = len(
        students[students["RoadmapGenerated"] == "Yes"]
    )

    volunteers = len(
        students[students["VolunteerApplied"] == "Yes"]
    )

    return jsonify({
        "students": total_students,
        "internships": internship_matches,
        "roadmaps": roadmaps,
        "volunteers": volunteers
    })
@app.route("/")
def home():
    return "NayePankh Backend Running Successfully"
if __name__ == "__main__":
    app.run(debug=True)
