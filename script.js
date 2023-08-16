const convertButton = document.getElementById("convertButton");
const kmInput = document.getElementById("kmInput");
const result = document.getElementById("result");

convertButton.addEventListener("click", () => {
    const km = parseFloat(kmInput.value);
    if (!isNaN(km)) {
        const miles = km * 0.621371;
        result.innerText = `${km.toFixed(2)} kilometers is equal to ${miles.toFixed(2)} miles.`;
    } else {
        result.innerText = "Please enter a valid kilometer value.";
    }
});
