import AppBanner from '../appBanner/AppBanner'
import { ComicsList } from "../comicsList/ComicsList";
import { useState } from 'react';
const ComicsPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
      setChar(id)
    }
    return(
        <>
            <AppBanner />
            <ComicsList onCharSelected={onCharSelected}/> 
        </>
        
    )
}
export default ComicsPage;