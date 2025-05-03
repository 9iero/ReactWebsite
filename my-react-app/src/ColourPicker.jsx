import React, {useState} from 'react';

function ColourPicker(){

    const [color, setColour] = useState("#FFFFFF"); 

    function handleColorChange(event){
        setColour(event.target.value);
    }

    return(
    <>
    <div className='colour-picker-container'>
        <h1>Colour Picker</h1>
        <div className='colour-display' style={{backgroundColor: color}}>
            <p>Selected Colour: {color}</p>
        </div>
        <label>Select a Colour:</label>
        <input type='color' value={color} onChange={handleColorChange}/>
    </div>
    </>
    );

}

export default ColourPicker
