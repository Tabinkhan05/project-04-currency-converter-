// project 04 currency converter 



import inquirer from "inquirer";

const currency_conversion : any = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "AED": 0.013,
        "SAR": 0.013,
        "INR": 0.3,
        "EUR": 0.0034,
        "CNY": 0.026,
    },
    "GBP": {
        "USD": 1.27,
        "PKR": 352.47,
        "AED": 4.65,
        "SAR": 4.75,
        "INR": 105.77,
        "EUR": 1.19,
        "CNY": 9.19,
    },
    "USD": {
        "GBP": 0.79,
        "PKR": 278.48,
        "AED": 3.67,
        "SAR": 3.75,
        "INR": 83.55,
        "EUR": 0.94,
        "CNY": 7.26,
    },
    "AED": {
        "USD": 0.27,
        "GBP": 0.22,
        "PKR": 75.82,
        "SAR": 1.02,
        "INR": 22.75,
        "EUR": 0.26,
        "CNY": 1.98,
    },
    "SAR": {
        "USD": 0.27,
        "PKR": 74.22,
        "AED": 0.98,
        "GBP": 0.21,
        "INR": 22.27,
        "EUR": 0.25,
        "CNY": 1.93,
    },
    "INR": {
        "USD": 0.012,
        "PKR": 3.33,
        "AED": 0.045,
        "SAR": 0.013,
        "GBP": 0.0095,
        "EUR": 0.011,
        "CNY": 0.087,
    },
    "EUR": {
        "USD": 1.07,
        "PKR": 297.34,
        "AED": 3.92,
        "SAR": 4.01,
        "INR": 89.2,
        "GBP": 1.19,
        "CNY": 7.75,
    },
    "CNY": {
        "USD": 0.14,
        "PKR": 38.38,
        "AED": 0.51,
        "SAR": 0.52,
        "INR": 0.095,
        "EUR": 0.13,
        "GBP": 0.11,
    },
};

// Prompt user for currency conversion details
(async () => {
    const answer: {
        from: "PKR" | "CNY" | "AED" | "SAR" | "GBP" | "USD" | "INR" | "EUR",
        to: "PKR" | "CNY" | "AED" | "SAR" | "GBP" | "USD" | "INR" | "EUR",
        amount: number,
    } = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            message: "Select your currency:",
            choices: ["PKR", "CNY", "AED", "SAR", "GBP", "USD", "INR", "EUR"],
        },
        {
            type: "list",
            name: "to",
            message: "Select your conversion currency:",
            choices: ["PKR", "CNY", "AED", "SAR", "GBP", "USD", "INR", "EUR"],
        },
        {
            type: "number",
            name: "amount",
            message: "Type the amount you want to convert:",
        },
    ]);

    const { from, to, amount } = answer;

    if (from && to && amount) {
        const conversionRate = currency_conversion[from][to];
        if (conversionRate) {
            const result = conversionRate * amount;
            console.log(`Your conversion from ${from} to ${to} is ${result}`);
        } else {
            console.log(`Conversion rate from ${from} to ${to} is not available.`);
        }
    } else {
        console.log("Invalid conversion details provided.");
    }
})();



