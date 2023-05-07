import './randomChar.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService'
import mjolnir from '../../resources/img/mjolnir.png';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from "../spinner/Spinner";


class RandomChar extends Component{
    state = {
        char: {},
        loading: true,
        error: false,
    }

    marvelService = new MarvelService();

  
    componentDidMount(){
        this.updateChar();
    }
    
    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })                 
    }

    onError = () => {
        this.setState({
            error: true
        })
    }
    updateChar = () => {
        this.setState({
            loading: true
        })
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)       
    }
    

    render(){
        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char}/> : null       
        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?     
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button onClick={this.updateChar} className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }    
}

const View = ({char}) => {
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
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} target="_blank" className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default RandomChar;