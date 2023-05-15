import './randomChar.scss';
import React, { useState } from 'react';
import useMarvelService from '../../services/MarvelService'
import { Link } from 'react-router-dom';


const CharSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState('');

    const {loading, error, getByNameCharacters, clearError} = useMarvelService();


    const handleInputChange = (e) => {
      setSearchText(e.target.value);
    };
  
    const handleSearch = () => {
        getByNameCharacters(searchText)
            .then(item => {setSearchResult(item.name)});
    };
    return (
        <>
             <p className="randomchar__title">
                Or you can find your <br />
                favorite character     
            </p>
            <input 
                className='char__search-input' 
                style={{margin: '0 auto'}} 
                type="text" 
                name='text' 
                value={searchText}
                onChange={handleInputChange}    
                />
                <span>{searchResult}</span>
            <Link to={`/${searchText}`} className="button button__search" onClick={handleSearch}>
                <div className="inner">try it</div>
            </Link>
        </>
       
    )
}
export default CharSearch;