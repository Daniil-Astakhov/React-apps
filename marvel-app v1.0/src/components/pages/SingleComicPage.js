import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './SingleComicPage.scss';
import useMarvelService from '../../services/MarvelService';


const SingleComicPage = () => {
    const {comicId} = useParams();
    

    const [comic, setComic] = useState(null);

    const {loading, error, getComic, clearError} = useMarvelService();

    useEffect(() => {
        updateComic();
    }, [comicId]);

    useEffect(() => {
        const handleError = (error, info) => {
          console.log(error, info);
    }});

    const updateComic = () => {
        getComic(comicId)
        .then(onComicListLoaded)
        .then(clearError)
    }

    
    const onComicListLoaded = (comic) => {
        setComic(comic)
    }


    console.log(comic)
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null    

    return (
        <div className="comic__info">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({comic}) => {
    console.log(comic)
    const {title, description, pageCount, thumbnail, language, price} = comic;
    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{comic.title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount.replace('p', 'pages')}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleComicPage;