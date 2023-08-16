
export default class gotService {
    constructor(props) {
        super(props)
        this._apiBase = 'https://anapioficeandfire.com/api'
    };

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}`);
        }

    }

    getAllCharacters() {
        return this.getResource('/characters?page=5');
    }

    getCharacter(id) {
        return this.getResource(`/characters/${id}`)
    }
}

const got = new gotService();

got.getAllCharacters()
    .then(res => {
        res.forEach(item => console.log(item.name))
    })

got.getCharacter()
    .then(res => console.log(res))
