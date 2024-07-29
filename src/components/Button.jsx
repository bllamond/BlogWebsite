import React from 'react';

function Button({
    children,
    type = 'button',
    backgcolor = 'bg-blue-600',
    textcolor = 'text-white',
    className= '',
    ...props

}) {
    return (
        <button className={`px-4 py-2rounded-lg h-11 ${backgcolor} ${textcolor} ${className}`} {...props}
        onSubmit={console.log("submitted")}
        > 
            {children}
        </button>
    );
}

export default Button