import { useHttp } from "../hooks/http.hook";


const useMarvelService = () => {

    const {loading, request, error, clearError } = useHttp();


    const keyApi = '7ff5c59122f6eb6dc8c5f443abf6a04f';
    const apiBase = 'https://gateway.marvel.com:443/v1/public';
    const limit = 'limit=9';
    const baseOffset =  Math.floor(Math.random(0, 1) * 250);


    const getByNameCharacters = async (name) => {
        const res = await request(`${apiBase}/characters?name=${name}&apikey=${keyApi}`)
        return _transformCharacter(res)
    }


    const getAllCharacters = async (offset = baseOffset) => {
        const res = await request(`${apiBase}/characters?${limit}&offset=${offset}&apikey=${keyApi}`)
        return res.data.results.map(_transformAllCharacter)
    }

    const getCharacter = async (id) => {
        const res = await request(`${apiBase}/characters/${id}?apikey=${keyApi}`)
        return _transformCharacter(res)
    }
    const getComic = async (id) => {
        const res = await request(`${apiBase}/comics/${id}?apikey=${keyApi}`)
        return _transformComics(res.data.results[0]);
    }

    const getAllComics = async (offset = baseOffset) => {
        const res = await request(`${apiBase}/comics?limit=${8}&offset=${offset}&apikey=${keyApi}`)
        return res.data.results.map(_transformgetAllComics)
    }

    const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
		};
	};

    const _transformgetAllComics = (res) => {
        return {
            id: res.id,
            title: res.title,
            description: res.description,
            format: res.format,
            issueNumber: res.issueNumber,
            thumbnail: res.thumbnail.path + '.'+ res.thumbnail.extension,
            homepage: res.urls[0].url,
            wiki: ` https://www.google.com/search?q=site%3Amarvel.fandom.com+${res.title}`,
            pricePrint: res.prices[0].price
        }

    }

    const _transformCharacter = (res) => {
        const currPath = res.data.results[0]
        return {
            name: currPath.name,
            description: currPath.description,
            thumbnail: currPath.thumbnail.path + '.'+ currPath.thumbnail.extension,
            homepage: currPath.urls[0].url,
            wiki: ` https://www.google.com/search?q=site%3Amarvel.fandom.com+${currPath.name}`,
            comics: currPath.comics.items
        }

    }
    const _transformAllCharacter = (res) => {
        return {
            id: res.id,
            name: res.name,
            description: res.description,
            thumbnail: res.thumbnail.path + '.'+ res.thumbnail.extension,
            homepage: res.urls[0].url,
            wiki: ` https://www.google.com/search?q=site%3Amarvel.fandom.com+${res.name}`
        }

    }
	return {
		loading,
		error,
		clearError,
		getAllCharacters,
		getCharacter,
        getAllComics,
        getComic,
        getByNameCharacters
	};
};

export default useMarvelService;