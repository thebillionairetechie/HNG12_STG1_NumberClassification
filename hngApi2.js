const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // Fixed environment variable issue

app.use(cors());

app.get("/", (req, res) => {
  res.send(`Number Classification API is running on port ${PORT}`);
});

app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide a valid number." });
  }

  const num = parseInt(number);

  const isPrime = isPrimeNumber(num);
  const isPerfect = isPerfectNumber(num);
  const isArmstrong = isArmstrongNumber(num);
  const parity = num % 2 === 0 ? "even" : "odd";
  const digitSum = num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  let properties = [parity];
  if (isArmstrong) properties.unshift("armstrong");

  try {
    const funFact = await getFunFact(num);
    res.status(200).json({
      number: num,
      is_prime: isPrime,
      is_perfect: isPerfect,
      properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fun fact." });
  }
});

function isPrimeNumber(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function isPerfectNumber(n) {
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n && n !== 1;
}

function isArmstrongNumber(n) {
  const digits = n.toString().split("");
  const power = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), power),
    0
  );
  return sum === n;
}

async function getFunFact(n) {
  try {
    const response = await axios.get(`http://numbersapi.com/${n}/math`);
    return response.data;
  } catch (error) {
    return "No fun fact available.";
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
