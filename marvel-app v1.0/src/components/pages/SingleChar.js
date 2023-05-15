import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './SingleComicPage.scss';
import useMarvelService from '../../services/MarvelService';


const SingleChar = () => {
    const {charName} = useParams();
    
    
    const [char, setChar] = useState(null);

    const {loading, error, getByNameCharacters, clearError} = useMarvelService();

    useEffect(() => {
        updateComic();
    }, [charName]);

    useEffect(() => {
        const handleError = (error, info) => {
          console.log(error, info);
    }});

    const updateComic = () => {
        console.log(charName)
        getByNameCharacters(charName)
        .then(onComicListLoaded)
        .then(clearError)
    }

    
    const onComicListLoaded = (char) => {
        setChar(char)
        console.log(char)
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null    

    return (
        <div className="comic__info">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = (char) => {
    console.log(char)
   
    return (
        <div className="single-comic">
            <img src={char.char.thumbnail} alt={char.char.name} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{char.char.name}</h2>
                <p className="single-comic__descr">{char.char.description.length < 10 ? 'This character is missing from our database.' : char.char.description}</p>
                <ul className="char__comics-list">
                {char.char.comics.length > 0 ? null : "Wow! It seems that in your universe, these comics don't exist yet. Well, wait a couple of years then. Or you can create it!"}
                {char.char.comics.map((item, i) => {
                    // eslint-disable-next-line
                    if(i > 19){
                        return null
                    }
                    return(
                        <li key ={i} className="char__comics-item">
                            {i+1+". "} {item.name} 
                        </li>
                    )
                })}
            </ul>
            </div>
            <Link to="/" className="single-comic__back">Back</Link>
        </div>
    )
}

export default SingleChar;