
export default class gotService {
    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api'
    };

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}`);
        }

        return await res.json();

    }

    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5`);
        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(res)
    }

    getHouses = async () => {
        return await this.getResource('/houses/')    
    }

    getHouse = async (id) => {
        return await this.getResource(`/houses/${id}`)
    }

    
    getBooks = async () => {
        return await this.getResource('/books/')    
    }

    getBook = async (id) => {
        return await this.getResource(`/books/${id}`)
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,
            gender: char.gender,
            culture: char.culture,
            born: char.born,
            died: char.died,
        }
    }
}
