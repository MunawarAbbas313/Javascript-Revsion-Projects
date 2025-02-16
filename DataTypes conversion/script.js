function convertType() {
    // Get input elements
    const inputElement = document.getElementById('inputValue');
    const inputValue = inputElement.value;
    const toType = document.getElementById('toType').value;
    
    // Determine actual input type based on content
    let originalValue = inputValue;
    let originalType = 'string';

    // Try to determine the actual type
    if (inputValue.toLowerCase() === 'true' || inputValue.toLowerCase() === 'false') {
        originalValue = inputValue.toLowerCase() === 'true';
        originalType = 'boolean';
    } else if (!isNaN(inputValue) && inputValue.trim() !== '') {
        originalValue = Number(inputValue);
        originalType = 'number';
    } else if (inputValue === 'null') {
        originalValue = null;
        originalType = 'object'; // null is typeof 'object' in JavaScript
    } else if (inputValue === 'undefined') {
        originalValue = undefined;
        originalType = 'undefined';
    }
    
    // Initialize converted value
    let convertedValue;
    
    // Perform conversion based on selected type
    switch(toType) {
        case 'string':
            convertedValue = String(originalValue);
            break;
        case 'number':
            convertedValue = Number(originalValue);
            break;
        case 'boolean':
            convertedValue = Boolean(originalValue);
            break;
        case 'undefined':
            convertedValue = undefined;
            break;
        case 'null':
            convertedValue = null;
            break;
    }
    
    // Generate explanation
    let explanation = generateExplanation(originalValue, toType, convertedValue);
    
    // Update the display
    document.getElementById('inputType').textContent = originalType;
    document.getElementById('originalValue').textContent = String(originalValue);
    document.getElementById('convertedType').textContent = typeof convertedValue;
    document.getElementById('convertedValue').textContent = 
        convertedValue === null ? 'null' : 
        convertedValue === undefined ? 'undefined' : 
        String(convertedValue);
    document.getElementById('explanation').textContent = explanation;
}

function generateExplanation(input, targetType, result) {
    let explanation = `Converting ${typeof input === 'string' ? `'${input}'` : input} to ${targetType}:\n`;
    
    switch(targetType) {
        case 'string':
            explanation += "String conversion creates a text representation of the value.";
            break;
        case 'number':
            if (isNaN(result)) {
                explanation += "The input cannot be converted to a valid number.";
            } else {
                explanation += "Numeric conversion attempts to parse the input as a number.";
            }
            break;
        case 'boolean':
            if (result) {
                explanation += "Values that are non-empty, non-zero, or non-null convert to true.";
            } else {
                explanation += "Empty values, 0, null, and undefined convert to false.";
            }
            break;
        case 'undefined':
            explanation += "The value becomes undefined.";
            break;
        case 'null':
            explanation += "The value becomes null.";
            break;
    }
    
    return explanation;
}