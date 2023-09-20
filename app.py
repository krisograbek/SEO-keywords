from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = "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"


@app.route("/generate-keywords", methods=["POST"])
def generate_keywords():
    data = request.json
    target_keyword = data["keyword"]
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Generate SEO keyword suggestions based on '{target_keyword}':",
        max_tokens=150,
    )

    # Here, we assume each new line in response is a new keyword.
    keywords = response.choices[0].text.strip().split("\n")
    return jsonify(keywords)


if __name__ == "__main__":
    app.run(debug=True)
