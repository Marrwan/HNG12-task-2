# Number Classification API

This API classifies numbers with interesting mathematical properties and a fun fact.

## **🌐 Live URL**
[https://hng12-task-2.onrender.com/api/classify-number?number=371](https://hng12-task-2.onrender.com/api/classify-number?number=371)

## **🛠️ Tech Stack**
- Node.js
- Express.js
- Axios
- Render (Deployment)

## **📌 API Usage**
### **Endpoint:**

GET /api/classify-number?number={number}

### **Example Response (200 OK)**

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (400 Bad Request)

```json
{
    "number": "alphabet",
    "error": true
}
```

### 🚀 Running Locally
```sh
git clone https://github.com/Marrwan/HNG12-task-2.git
cd number-api
npm install
npm start
```


💼 Hire Me!
https://hng.tech/hire/nodejs-developers