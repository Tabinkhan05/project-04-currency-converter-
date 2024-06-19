"use strict";
// project 04 currency converter 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var currency_conversion = {
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
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var answer, from, to, amount, conversionRate, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
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
                ])];
            case 1:
                answer = _a.sent();
                from = answer.from, to = answer.to, amount = answer.amount;
                if (from && to && amount) {
                    conversionRate = currency_conversion[from][to];
                    if (conversionRate) {
                        result = conversionRate * amount;
                        console.log("Your conversion from ".concat(from, " to ").concat(to, " is ").concat(result));
                    }
                    else {
                        console.log("Conversion rate from ".concat(from, " to ").concat(to, " is not available."));
                    }
                }
                else {
                    console.log("Invalid conversion details provided.");
                }
                return [2 /*return*/];
        }
    });
}); })();
