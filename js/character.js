let character = {
    template: `
        <div class="char">
            <img :src="char.image" alt="Imagen PJ">
            <div class="char__details">
                <h3>{{ char.name }}</h3>
                <p>{{ char.status }}, {{char.species}} </p>   
            </div>
        </div>
    `,
    props: ['char'],
}