## Unveiling Climate Change Dynamics through Earth Surface Temperature Analysis

This project focuses on analyzing Earth surface temperature data to understand and unveil climate change dynamics. It leverages machine learning, specifically deep learning models, to process historical temperature data and potentially forecast future trends or identify significant patterns related to climate change.

**Project Phases:**
The project is structured into several key phases, documented in their respective directories:
1.  **Project Initialization and Planning Phase:** Defines problem statements, initial planning, and project proposals.
2.  **Data Collection and Preprocessing Phase:** Involves gathering raw temperature data, performing exploratory data analysis, and rigorous preprocessing to ensure data quality.
3.  **Model Development Phase:** Focuses on building and training various machine learning models. Given the nature of temperature data (time series), Recurrent Neural Networks (RNN), Gated Recurrent Units (GRU), and Long Short-Term Memory (LSTM) networks are explored for their effectiveness in sequence prediction.
4.  **Model Optimization and Tuning Phase:** Dedicated to fine-tuning the developed models to achieve optimal performance through hyperparameter tuning and advanced optimization techniques.
5.  **Project Executable Files:** Contains the deployable components of the project, including the trained machine learning model (`best_model.keras`), data scalers (`scaler_x.pkl`, `scaler_y.pkl`), and a Flask web application (`app.py`) for interactive demonstration and prediction. This phase also includes the `requirements.txt` detailing all necessary Python dependencies.
6.  **Documentation & Demonstration:** Houses the final project report and additional documentation.

**Key Technologies and Libraries Used:**
*   **TensorFlow:** For building and training deep learning models (RNN, GRU, LSTM).
*   **scikit-learn:** For data preprocessing tasks, including scaling.
*   **joblib:** For saving and loading trained models and scalers.
*   **Flask:** For developing the web application to serve the machine learning model.
*   **Pandas:** For data manipulation and analysis.

**Dataset Used:**
*   **Kaggle:** https://www.kaggle.com/datasets/berkeleyearth/climate-change-earth-surface-temperature-data
*   **Raw Data Source:** https://berkeleyearth.org/data/

This project aims to provide insights into climate change by analyzing historical temperature data and offering a practical application for interacting with the trained models.

## Authors

- OZA ASHWIN
- RUTHWIK SAI
- ANUSHA T
- RAGHAVVRAM J
