# HNG12_STG1_NumberClassification
# Number Classification API
This project is built using Express, Axios, and CORS to provide a simple API that classifies numbers as prime, perfect, Armstrong, and determines whether they're even or odd. It also calculates the sum of digits and fetches fun facts for numbers.

# Content
Express: A fast and lightweight Node.js framework to build the server and handle routing.
CORS: Enables cross-origin requests to allow access from different domains.
Axios: Used to fetch fun facts from the Numbers API.
Node.js: The environment running this app.

# How to Get It Running Locally
1. Clone the repository
2. Navigate to the project's folder
3. Install all dependencies

# How to Use It
1. Start the server with this command:
   npm start
2. The server will be running, and you can visit it at:
   http://localhost:5000
3. Use the /api/classify-number endpoint to classify a number by sending a query parameter like this:
   http://localhost:5000/api/classify-number?number=153
4. The API will return a suitable response.

# Available Endpoints
* # GET /: 
Returns a simple response indicating that the server is running. 
* # GET /api/classify-number?number=<number>: 
Classifies the number and provides its properties, such as:
Whether it's prime, perfect, or Armstrong.
Whether it's even or odd.
The sum of its digits.
A fun fact related to the number (from Numbers API).

# License
This project is open-source, licensed under the MIT License.



