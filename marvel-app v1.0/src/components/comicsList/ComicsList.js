import './ComicsList.scss';
import { useState, useEffect, useRef } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import { Link } from 'react-router-dom'
import useMarvelService from '../../services/MarvelService';
import {CSSTransition, TransitionGroup} from 'react-transition-group';



export const ComicsList = (props) => {

    const [charList, setCharList] = useState([]);
    const [loadingNew, setLoadingNew] = useState(false);
    const [offset, setOffset] = useState(Math.floor(Math.random(0, 1) * 250));
    const [charEnded, setCharEnded] = useState(false);


    const {loading, error, getAllComics, clearError} = useMarvelService();


    useEffect(() => {
        onRequest(offset, true);
    },[]);


    const onCharListLoaded = (newChar) => {   
        let ended = false;
        if(newChar.length < 8) {
            ended = true
        }
        setCharList(charList => [...charList, ...newChar]);
        setLoadingNew(loadingNew => false);
        setOffset(offset => offset + Math.floor(Math.random(0, 1) * 250));
        setCharEnded(ended)
    };


    const onRequest = (offset, loadingNew) => {
        setLoadingNew(!loadingNew);
        getAllComics(offset)
            .then(onCharListLoaded)
            .then(clearError)
            .then(setLoadingNew(!loadingNew))
    };


    const itemRefs = useRef([]);



    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('comics__item_selected'));
        itemRefs.current[id].classList.add('comics__item_selected');
        itemRefs.current[id].focus();
    };




    const renderCharList = () => {
        const items = charList.map((item, i) => {
            return (
                <CSSTransition key={item.id} timeout={500} classNames="comics__item">
                        <li
                            ref={el => itemRefs.current[i] = el}
                            tabIndex={0}
                            className={`comics__item`}
                            key={item.id}
                            onKeyDown={(e) => {
                                if (e.key === ' ' || e.key === "Enter") {
                                    focusOnItem(i);
                                }
                            }}
                            onClick={() => {props.onCharSelected(item.id);  focusOnItem(i)}}>
                                <Link to={`/comics/${item.id}`}>
                                    <img src={item.thumbnail} alt={item.title} />
                                    <div className="comics__name">
                                        {item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}
                                    </div>
                                    <div className="comics__price" style={{fonSize: "14px"}}>
                                        {item.pricePrint <= 1 ? 'NOT AVAILABLE' : item.pricePrint +' $'}
                                    </div>
                                </Link>
                            
                            
                        </li> 
                </CSSTransition> 
            );
        
        });

        const errorMessage = error ? <div><ErrorMessage /></div> : null;
        const spinner = loading && charList.length < 2 ? (
            <div>
              <Spinner />
            </div>
          ) : null;


        return (
            <>
            
                <ul style={{position: 'relative'}} className="comics__grid">
                    {errorMessage}
                    <TransitionGroup component={null}>
                       {items} 
                    </TransitionGroup>
                    
                </ul>
                <div className='spinner' style={{width: '100px', height: '100px', position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '-15vh'}} >
                   {spinner} 
                </div>
            </>
            
        );
    }

    return (
        <div className="char__list">
            {renderCharList()}
            <button  disabled={loadingNew} style={{'display': charEnded ? 'none' : 'block', 'visibility': loading ? 'hidden': 'visible'}} onClick={() => onRequest(offset)} className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
    
}
