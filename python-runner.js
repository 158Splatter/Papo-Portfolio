//Run Python code pls














// Load Pyodide only once
/*let pyodideReady = loadPyodide();

async function runNthRoot() {


    const pyodide = await pyodideReady;

    // Get user input
    const userInput = document.getElementById("rootInput").value.trim();

    // Python code as string
    const pythonCode = `
import math

number = "${userInput}"

try:
    value = float(number)
except:
    words_to_numbers = {
        "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
        "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
        "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15,
        "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19, "twenty": 20,
        "thirty": 30, "forty": 40, "fifty": 50, "sixty": 60,
        "seventy": 70, "eighty": 80, "ninety": 90, "hundred": 100
    }
    value = words_to_numbers.get(number.lower(), None)

if value:
    x = math.log10(value)
    found = False
    for y in range(2, int(value) + 1):
        Y = math.log10(y)
        n = x / Y
        if abs(n - round(n)) < 0.0001:
            print(f"{y} ** {round(n)} = {int(value)}")
            found = True
    if not found:
        print("No perfect root found.")
else:
    print("Invalid input.")
`;

    try {
        // Run code in Pyodide
        const result = await pyodide.runPythonAsync(pythonCode);
        document.getElementById("rootOutput").textContent = result || "Code ran successfully.";
    } catch (err) {
        document.getElementById("rootOutput").textContent = "Error:\n" + err;
    }
}*/

