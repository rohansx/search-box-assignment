"use client"
import React, { useState } from 'react';
import './globals.css';

const ChipComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const items = ['Rohan Sharma', 'Haider Patanwala', 'Chetan Divekar', 'Hanish Patil', 'Bhushan Chavan'];

  const updateFilteredItems = (input) => {
    const filtered = items.filter(item => item.toLowerCase().includes(input.toLowerCase()));
    setFilteredItems(filtered);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    updateFilteredItems(newValue);
  };

  const handleItemClick = (item) => {
    const newChip = { id: chips.length + 1, text: item };
    const newChips = [...chips, newChip];
    setChips(newChips);
    setInputValue('');
    updateFilteredItems('');
  };

  const handleChipRemove = (chipId) => {
    const updatedChips = chips.filter(chip => chip.id !== chipId);
    setChips(updatedChips);
  };

  return (
    <div className="chip-component">
      <div className="chips">
        {chips.map(chip => (
          <div key={chip.id} className="chip">
            {chip.text}
            <button onClick={() => handleChipRemove(chip.id)}>x</button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      {filteredItems.length > 0 && (
        <ul>
          {filteredItems.map(item => (
            <li key={item} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChipComponent;
