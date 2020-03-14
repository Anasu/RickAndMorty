Vue.component('contador', {
  template: `
      <div class="whiteBG">
          <h1 class="title">{{ titulo }}</h1>
          
      </div>
  `,
  data() {
      return {
          titulo: 'Rick & Morty Database',
      }
  },
  components: {
      
  }
});