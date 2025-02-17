import React from 'react';

const Searchbox = ({searchfield,searchChange}) => {
    return (
        <div className="pa2">
        <input className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        style={{outline:"none"}}
        placeholder='Search robots' 
        onChange={searchChange}
        />
        </div>
    )
}

export default Searchbox;