# SEO Keyword Suggestions App

This application provides SEO keyword suggestions based on a target keyword using Flask, React, and the OpenAI API.

## Prerequisites

- Python 3
- Node.js and npm
- OpenAI API Key

## Setting Up and Running the Application

### Backend Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/krisograbek/SEO-keywords.git flask_react_openai
   cd flask_react_openai
   ```

2. **Create and Activate a Python Virtual Environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Required Libraries**:
   ```bash
   pip install Flask Flask-Cors openai
   ```

4. **Set Up the OpenAI API Key**:

   In the `app.py` file, replace `"YOUR_OPENAI_API_KEY"` with your actual OpenAI API key.

5. **Run the Flask Backend**:
   ```bash
   python app.py
   ```

### Frontend Setup

1. **Navigate to the Frontend Directory**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the React Frontend**:
   ```bash
   npm start
   ```

Once both the backend and frontend servers are running, navigate to `http://localhost:3000/` in your browser. Input a target keyword, hit `Enter`, and observe the generated SEO keyword suggestions.


## Initial prompt

```
I want to create a Full-stack application using Flask and React from scratch.

Also, the application must use OpenAI API.

The idea is to generate SEO keyword suggestions based on a target keyword.

GUI must contain of 3 parts:

1. Input box for the target keyword.
2. Submit button to initiate the search.
3. Display area for the suggested keywords in bullet points.

On submit, the backend should make an API request to OpenAI.

In code also provide a good prompt to get keywords from an OpenAI model.

Give me a step-by-step guide on how to do it, including bash commands and code snippets.

I'm using Ubuntu 20.04
```

### Improvements
```
Let's make the following improvements:

1. Let's make the design more modern. But do not install any packages.
2. I want to submit on enter, without necessary clicking on the button
```

### Generate a Readme file

```
Let's generate a README.md file for the project. Include all steps required to run the project locally.
```
