// Common Functions
function getInputFieldValueById(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue1 = parseFloat(inputFieldString);
    const inputFieldValueFixedDecimals = inputFieldValue1.toFixed(2);
    const inputFieldValue = parseFloat(inputFieldValueFixedDecimals);
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textValueString = textElement.innerText;
    const textValue = parseFloat(textValueString);
    return textValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}