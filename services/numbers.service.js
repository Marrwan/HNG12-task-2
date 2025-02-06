const axios = require("axios");

const classifyNumber = async (num) => {
    const isPrime = isPrimeNumber(num);
    const isPerfect = isPerfectNumber(num);
    const isArmstrong = isArmstrongNumber(num);
    const digitSum = getDigitSum(num);
    const properties = [
        isPrime ? "prime" : "composite",
        isPerfect ? "perfect" : "imperfect",
        isArmstrong ? "armstrong" : null,
        num % 2 === 0 ? "even" : "odd"
    ].filter(Boolean);

    
    const funFact = await getFunFact(num);

    return {
        number: num,
        is_prime: isPrime,
        is_perfect: isPerfect,
        properties,
        digit_sum: digitSum,
        fun_fact: funFact
    };
};

const isPrimeNumber = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isPerfectNumber = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
};

const isArmstrongNumber = (num) => {
    const digits = num.toString().split('');
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), digits.length), 0);
    return sum === num;
};

const getDigitSum = (num) => {
    return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
};

const getFunFact = async (num) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching fun fact:", error);
        return "Fun fact not available";
    }
};

module.exports = { classifyNumber };
