import './charList.scss';
import { useState, useEffect, useRef } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/MarvelService';

import {CSSTransition, TransitionGroup} from 'react-transition-group';


const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [loadingNew, setLoadingNew] = useState(false);
    const [offset, setOffset] = useState(Math.floor(Math.random(0, 1) * 350));
    const [charEnded, setCharEnded] = useState(false);


    const {loading, error, getAllCharacters, clearError} = useMarvelService();


    useEffect(() => {
        onRequest(offset, true);
    },[]);


    const onCharListLoaded = (newChar) => {   
        let ended = false;
        if(newChar.length < 9) {
            ended = true
        }
        setCharList(charList => [...charList, ...newChar]);
        setLoadingNew(loadingNew => false);
        setOffset(offset => offset + Math.floor(Math.random(0, 1) * 250))
        setCharEnded(charEnded => ended)
    };


    const onRequest = (offset, loadingNew) => {
        loadingNew ? setLoadingNew(false) : setLoadingNew(true)
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(clearError)
    };


    const itemRefs = useRef([]);



    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    };



    const renderCharList = () => {
        const items = charList.map((item, i) => {
            return (
                <CSSTransition key={item.id} timeout={500} classNames="char__item">
                   <li
                        ref={el => itemRefs.current[i] = el}
                        tabIndex={0}
                        className={`char__item`}
                        onClick={() => {props.onCharSelected(item.id);  focusOnItem(i)}}
                        key={item.id}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === "Enter") {
                                props.onCharSelected(item.id);
                                focusOnItem(i);
                            }
                        }}>
                        <img src={item.thumbnail} alt={item.name} />
                        <div className="char__name">
                            {item.name.length > 15 ? item.name.slice(0, 15) + '...' : item.name}
                        </div>
                    </li> 
                </CSSTransition>
            );
        
        });

        const errorMessage = error ? <div><ErrorMessage /></div> : null;
        const spinner = loading && !setLoadingNew ?
        

            <div style={{position: 'relative', display:'block', left: '135%'}}>
                <Spinner />
            </div> : null;


        return (
            <ul style={{position: 'relative'}} className="char__grid">
                <TransitionGroup component={null}>
                    {errorMessage}
                    {spinner}
                    {items}
                </TransitionGroup>    
            </ul>
        );
    }

    return (
        <div className="char__list">
            {renderCharList()}
            <button disabled={loadingNew} style={{'display': charEnded ? 'none' : 'block'}} onClick={() => onRequest(offset)} className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
    
}

export default CharList;