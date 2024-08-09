import React, { useState } from "react";
import TextInputForm from "./TextInputform"; // Make sure the path is correct

function TextInputFormContainer({ onSubmit }) {
    const [inputType, setInputType] = useState('password');
    const [value, setValue] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form submitted", value);
        onSubmit?.(value);
    }

    function handleTextInputChange(event) {
        console.log("Text input changed:", event.target.value);
        setValue(event.target.value);
    }

    return (
        <TextInputForm
            value={value}
            inputType={inputType}
            setInputType={setInputType} // Correctly pass setInputType
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
        />
    );
}

export default TextInputFormContainer;
