Vue.component('char-list', {
    template: `
        <div class="container">
            <div>
                <h1 class="title">{{ titulo }}</h1>
                <div class="char__list">
                    <character 
                        v-for="char in charList"
                        :char="char">
                    </character>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            titulo: 'Rick & Morty Characters',
            charList: [],
        }
    },
    created() {
        const pagRqst = async _ => {
            let urlApi = 'https://rickandmortyapi.com/api/character/';
            let res = await fetch(urlApi);
            let toJson = await res.json();

            this.charList = toJson.results;
        };
        pagRqst();
    },
    components: {
        character,
    }
});