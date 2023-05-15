import './randomChar.scss';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService'
import ErrorMessage from '../errorMessage/ErrorMessage';
import CharSearch  from './CharSearch';


const RandomChar = () => {

    const [char, setChar] = useState(null);

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])   
        

    
    const onCharLoaded = (char) => {
        setChar(char);        
    }

 
    const updateChar = () => {
        try{
            const block = document.querySelector('.randomchar__block')
            setTimeout(() => {
                try {
                   block.style.transform = 'translateX(100%)';
                   block.style.opacity = 0 
                } catch(e) {}
                setTimeout(() => {
                    try {
                        block.style.transform = 'translateX(0%)';
                        block.style.opacity = 1
                    } catch(e) {}
                  
                },600)
            },200)
        } catch (e) {}
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded)
            .then(clearError)  
        
                
    }
    const errorMessage = error ? <ErrorMessage /> : null;
    const content = !(error || !char) ? (
          <View updateChar={updateChar} char={char} />
      ) : null;

    return (
        <div className="randomchar">
                <div>
                    {errorMessage}

                    {content}  
                </div>
                                       
            <div className="randomchar__static">
                <CharSearch />
            </div>
        </div>
    )
}

const View = ({char, updateChar}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    return (
            <div className="randomchar__block">
                <img src={thumbnail} alt="Random character" className="randomchar__img"/>
                <div className="randomchar__info">
                    <p style={{maxHeight: '30px'}} className="randomchar__name">{name.slice(0, 14)}</p>
                    <p className="randomchar__descr">
                    {description.length < 5 ? 'Little information about this character. Try searching on google.' : description.length > 175 ? description.slice(0, 175) + '...' : description}
                    </p>
                    <div className="randomchar__btns">
                        <button className="button button__main" onClick={updateChar}>
                            <div className="inner">Go random</div>
                        </button>
                        <a href={wiki} target="_blank" rel="noopener noreferrer" className="button button__secondary">
                        
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
    )

}

export default RandomChar;