


class MarvelService {
    keyApi = '7ff5c59122f6eb6dc8c5f443abf6a04f';
    apiBase = 'https://gateway.marvel.com:443/v1/public';
    limit = 'limit=9';
    offset =  Math.floor(Math.random(0, 1) * 250);


    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`failed to get data from ${url}, code ${res.status}`)
        }
        return await res.json()
    }

    getAllCharacters = async (offset = this.offset) => {
        const res = await this.getResource(`${this.apiBase}/characters?${this.limit}&offset=${offset}&apikey=${this.keyApi}`)
        return res.data.results.map(this._transfornAllCharacter)
    }
    getCharacter = async (id) => {
        const res = await this.getResource(`${this.apiBase}/characters/${id}?apikey=${this.keyApi}`)
        return this._transfornCharacter(res)
    }

    _transfornCharacter = (res) => {
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
    _transfornAllCharacter = (res) => {
        return {
            id: res.id,
            name: res.name,
            description: res.description,
            thumbnail: res.thumbnail.path + '.'+ res.thumbnail.extension,
            homepage: res.urls[0].url,
            wiki: ` https://www.google.com/search?q=site%3Amarvel.fandom.com+${res.name}`
        }

    }
}

export default MarvelService;