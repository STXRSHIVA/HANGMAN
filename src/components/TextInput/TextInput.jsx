import React from 'react';

function TextInput({ label, type = 'text', value, onChange }) {
    return (
        <label className="block">
            {label && <span>{label}</span>}
            <input
                className="px-4 py-2 border border-gray-500 text-black rounded-md w-full"
                onChange={onChange}
                placeholder={label}
                type={type}
                value={value}
            />
        </label>
    );
}

export default TextInput;
