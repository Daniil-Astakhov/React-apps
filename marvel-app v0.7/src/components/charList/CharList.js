import './charList.scss';
import { Component } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import MarvelService from '../../services/MarvelService';


class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        loadingNew: false,
        error: false,
        offset: 250,
        charEnded: false
    }


    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();

    }

    onCharListLoading = () => {
        this.setState({
            loadingNew: true
        })
    }
    onCharListLoaded = (newChar) => {   
        let ended = false;
        if(newChar.length < 9) {
            ended = true
        }


    
        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newChar],
            loading: false,
            loadingNew: false,
            offset: offset + Math.floor(Math.random(0, 1) * 250),
            charEnded: ended
        }))                 
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError);
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
            
        })
    }
    itemRefs = [];

    setRef = (ref) => {
        this.itemRefs.push(ref);
    }

    focusOnItem = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus();
    }



      renderCharList() {
        const { charList, loading, error } = this.state;
        const items = charList.map((item, i) => {
            return (
                <li
                    ref={this.setRef}
                    tabIndex={0}
                    className={`char__item`}
                    onClick={() => {this.props.onCharSelected(item.id);  this.focusOnItem(i)}}
                    key={item.id}
                    onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i);
                        }
                    }}>
                    <img src={item.thumbnail} alt={item.name} />
                    <div className="char__name">
                        {item.name.length > 15 ? item.name.slice(0, 15) + '...' : item.name}
                    </div>
                </li>
            );
        });
        const errorMessage = error ? <div><ErrorMessage /></div> : null;
        const spinner = loading ? 
            <div style={{position: 'relative', display:'block', left: '135%'}}>
                <Spinner />
            </div> : null;
        const content = charList.length > 0 ? items : null;
        return (
            <ul style={{position: 'relative'}} className="char__grid">
                {errorMessage}
                {spinner}
                {content}
            </ul>
        );
    }
    render() {
        const {offset, loadingNew, charEnded} = this.state
        return (
        
            <div className="char__list">
                {this.renderCharList()}
                <button disabled={loadingNew} style={{'display': charEnded ? 'none' : 'block'}} onClick={() => this.onRequest(offset)} className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;