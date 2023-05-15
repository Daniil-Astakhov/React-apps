import { useState, useEffect } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton'
import SkeletonLoad from '../skeleton/SkeletonLoad'
import './charInfo.scss';
import useMarvelService from '../../services/MarvelService'

const CharInfo = (props) => {
    const [char, setChar] = useState(null);
    const {loading, error, getCharacter, clearError} = useMarvelService();
    useEffect(() => {
        updateChar();
    }, [props.charId]);

    useEffect(() => {
        const handleError = (error, info) => {
          console.log(error, info);
    }});
    const updateChar = () => {
        const {charId} = props
        if (!charId) {
            return
        }
        getCharacter(charId)
        .then(onCharListLoaded)
        .then(clearError)
    }

    const onCharListLoaded = (char) => {
        setChar(char)
    }
        const skeleton =  char || loading || error ? null : <Skeleton/>
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <SkeletonLoad/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null    

        return (
                <div className="char__info">
                    {skeleton}
                    {errorMessage}
                    {spinner}
                    {content}    
                </div>          
        )
    }
const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    return (
            <>
            <div className="char__basics">
                <img src={thumbnail} alt={thumbnail}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} target="_blank" rel="noopener noreferrer" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} target="_blank" rel="noopener noreferrer"className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description.length > 0 ? null : "Well well well... In your multiverse, there is no information available about this hero. Try clicking the Wiki button to search in other multiverses."}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : "Wow! It seems that in your universe, these comics don't exist yet. Well, wait a couple of years then. Or you can create it!"}
            
                {comics.map((item, i) => {
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
            </>

    )
}

export default CharInfo;