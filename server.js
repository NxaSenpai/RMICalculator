const express = require("express");
const app = express();
app.use(express.json());

app.use(express.static(__dirname));

app.post("/calculate", (req, res) => {
    const { a, b, op } = req.body;
    let result = 0;

    switch (op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = b !== 0 ? a / b : "Error: divide by zero"; break;
        case "%": result = a % b; break;
        case "^": result = Math.pow(a, b); break;
        default: result = "Invalid operator";
    }

    res.json({ result });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
