import React from 'react';

class Input extends Component {
    render() {
        return (
            <div className="input">
                <input>
                <label>Color</label>
            </div>
        )
    }
}

export default Input;

const Input = ({title, state, name}, onChange) => {
    return (
        <div key={index} className="input">
        <label className="input__number"> {index + 1} </label>
            <input name={name} value={state} onChange={onChange}/>
            <label className="input_title">{title}</label>
        </div>
    )
}
