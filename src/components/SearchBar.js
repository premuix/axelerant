import React from 'react';
//import { useRef } from "react";
//import Logo from '../components/Logo';
//import { NavLink, Link } from 'react-router-dom';
//import { FaSearch } from "react-icons/fa";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const SearchBar = () => {
  const items = [
    {
      id: 0,
      name: 'Understanding color theory',
    },
    {
      id: 0,
      name: 'RGD Design Thinkers',
    },
    {
      id: 0,
      name: 'What Design Can Do',
    },
    {
      id: 0,
      name: 'Perth UX Camp',
    },
    {
      id: 0,
      name: 'Sofia Design',
    },
    {
      id: 0,
      name: 'Design Indaba',
    },
    {
      id: 0,
      name: 'TYPO Berlin',
    },
    {
      id: 0,
      name: 'AIGA Design Conference',
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  return (
    <>
      <div className="searchBar py-2">
        <div className="container">
          <form>
            <div className="input_item w-50 ">
              <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                placeholder="Type: RGD Design Thinkers"
                showIcon={true}
                styling={{
                  border: '1px solid #D5D5D5',
                  borderRadius: '4px',
                  boxShadow: 'none',
                  hoverBackgroundColor: '#ededed',
                  color: '#212121',
                  fontSize: '16px',
                  fontFamily: 'Almarai',
                  iconColor: '#FC732F',
                  lineColor: '#D5D5D5',
                  placeholderColor: '#D5D5D5',
                  clearIconMargin: '3px 8px 0 0',
                  lineheight: '27px',
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
