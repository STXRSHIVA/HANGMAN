import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ handleFormSubmit, handleTextInputChange,value,inputType,setInputType }) {

    return (

        <form className="flex items-end" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput
                    value={value}
                    label="Enter a word or phrase"
                    type={inputType}
                    onChange={handleTextInputChange}
                />
            </div>

            <div>
                <Button
                    styleType="warning"
                    text={inputType === 'password' ? 'Show' : 'Hide'}
                    onClickHandler={()=>setInputType(inputType === 'password' ? 'text' : 'password')}
                />
            </div>

            <div className="flex">
                <Button
                    text="OK"
                    buttonType="submit"
                />
            </div>
        </form>
    );
}

export default TextInputForm;
