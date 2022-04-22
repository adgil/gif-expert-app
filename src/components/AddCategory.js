import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
    }
  return (
    <>
        <form onSubmit={ HandleSubmit }>
        <input
            type="text"
            placeholder="Add Category"
            value={inputValue}
            onChange={handleInputChange}
        />
        <button onClick={HandleSubmit}>Add</button>
        </form>
        
    </>
  )
  
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};