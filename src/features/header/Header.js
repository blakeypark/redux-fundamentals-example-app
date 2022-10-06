import React, { useState} from "react";

const Header = () => {
    const [text, setText] = useState('') //Hook

    const handleChange = (e) => setText(e.target.value)

    return (
        <header classname="header">
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={text}
                onChange={handleChange} 
            />
        </header>
    )
}

export default Header