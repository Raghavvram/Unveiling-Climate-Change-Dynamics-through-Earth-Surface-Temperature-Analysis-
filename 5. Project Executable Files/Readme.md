# Earth Surface Temperature Prediction Flask App

This Flask web application allows users to predict Earth's surface temperature based on various input parameters. It utilizes a pre-trained machine learning model (`best_model.keras`) and scalers (`scaler_x.pkl`, `scaler_y.pkl`) to make predictions.

## Functionality

The application provides a simple web interface where users can input several temperature-related values. Upon submission, the application processes these inputs, scales them using pre-trained scalers, feeds them into a deep learning model (Keras), and then displays the predicted Land Average Temperature.

Key features:
- **Input Form**: Collects necessary temperature data from the user.
- **Machine Learning Integration**: Uses a pre-trained Keras model for temperature prediction.
- **Data Preprocessing**: Employs `MinMaxScaler` to prepare input data for the model and inverse transform predictions.
- **Responsive UI**: The web interface is designed to be visually appealing and responsive, adapting to different screen sizes.
- **Theme Switching**: Supports light and dark themes for user preference.

## Project Structure

```
flask_app/
├── app.py
├── best_model.keras
├── Readme.md
├── requirements.txt
├── scaler_x.pkl
├── scaler_y.pkl
├── .venv/ (Python virtual environment)
├── MODELS/ (Contains Jupyter notebooks and other model-related files)
├── static/
│   └── minimal-theme-switcher.js
└── templates/
    ├── index.html
    └── response.html
```

- `app.py`: The main Flask application file, defining routes, handling input, performing predictions, and rendering templates.
- `best_model.keras`: The pre-trained Keras deep learning model used for temperature prediction.
- `requirements.txt`: Lists all Python dependencies required to run the application.
- `scaler_x.pkl`: A pickled `MinMaxScaler` object used to scale the input features before feeding them to the model.
- `scaler_y.pkl`: A pickled `MinMaxScaler` object used to inverse transform the model's output prediction back to the original temperature scale.
- `static/minimal-theme-switcher.js`: JavaScript for handling theme switching in the frontend.
- `templates/index.html`: The main input form for the application.
- `templates/response.html`: Displays the prediction results.

## Setup and Installation

To set up and run this application, follow these steps:

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository_url>
    cd flask_app
    ```

2.  **Create a Python Virtual Environment:**
    It's highly recommended to use a virtual environment to manage dependencies.
    ```bash
    python3 -m venv .venv
    ```

3.  **Activate the Virtual Environment:**
    - On macOS/Linux:
      ```bash
      source .venv/bin/activate
      ```
    - On Windows:
      ```bash
      .venv\Scripts\activate
      ```

4.  **Install Dependencies:**
    Install all required Python packages using `pip`:
    ```bash
    pip install -r requirements.txt
    ```

## How to Run the Application

Once the setup is complete and your virtual environment is activated, you can run the Flask application:

```bash
python app.py
```

This will start the Flask development server, usually on `http://127.0.0.1:5000/`.

## Dockerization

This application can be easily containerized using Docker. A `Dockerfile` is provided to build a Docker image for the Flask application.

### Build the Docker Image

To build the Docker image, navigate to the root directory of the project (where the `Dockerfile` is located) and run the following command:

```bash
docker build -t flask-temperature-app .
```

This command builds a Docker image named `flask-temperature-app` using the `Dockerfile` in the current directory.

### Run the Docker Container

After building the image, you can run the application in a Docker container using the following command:

```bash
docker run -p 5000:5000 flask-temperature-app
```

This command runs the `flask-temperature-app` image and maps port 5000 of your host machine to port 5000 inside the container, allowing you to access the application in your browser at `http://localhost:5000`.

## Usage

1.  **Access the Application**: Open your web browser and navigate to `http://127.0.0.1:5000/`.
2.  **Input Data**: On the `index.html` page, fill in all the required numerical fields for the temperature parameters.
3.  **Submit**: Click the "Submit for Prediction" button.
4.  **View Results**: You will be redirected to the `response.html` page, which will display the predicted Land Average Temperature based on your inputs.
5.  **Go Back**: Use the "Go Back" button on the results page to return to the input form.

## Authors

- OZA ASHWIN
- RUTHWIK SAI
- ANUSHA T
- RAGHAVVRAM J