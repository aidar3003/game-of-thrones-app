
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

    getAllCharacters() {
        return this.getResource(`/characters?page=5`);
    }

    getCharacter(id) {
        return this.getResource(`/characters/${id}`)
    }
}
