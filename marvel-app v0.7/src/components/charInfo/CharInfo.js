import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton'
import './charInfo.scss';
import MarvelService from '../../services/MarvelService'


class CharInfo extends Component{
    state = {
        char: null,
        loading: false,
        error: false,
    }

    marvelService = new MarvelService();


    componentDidMount(){
        this.updateChar();
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }
    componentDidCatch(error, info) {
        console.log(error, info)
        this.setState({
            error: true
        })
    }

    updateChar = () => {

        const {charId} = this.props
        if (!charId) {
            return
        }
        this.onCharListLoading()

        this.marvelService
        .getCharacter(charId)
        .then(this.onCharListLoaded)
        .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            loading: true
        })
    }
    onCharListLoaded = (char) => {
        this.setState({
            char: char,
            loading: false
            
            
        })
    }
    

    onError = () => {
        this.setState({

            error: true,
        });
    }

    render(){
        const {char, loading, error} = this.state;

        const skeleton =  char || loading || error ? null : <Skeleton/>
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
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
                        <a href={homepage} target="_blank" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} target="_blank" className="button button__secondary">
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
                        return
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