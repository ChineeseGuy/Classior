from flask import Flask, render_template

app = Flask(__name__)

@app.get("/")
def home():
    # Pass any initial values you want React to read
    return render_template("result.html", initial_text="Hello from Flask", initial_align="left")

if __name__ == "__main__":
    app.run(port=5000, debug=True)
