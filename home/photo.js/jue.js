const app = Vue.createApp({
    data() {
        return {
            gameImages: [
                { src: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/462558131_560815213183482_3840801369131715031_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEJM4CLowoeyPNnhpC_vXPWzRsONujcoXzNGw426NyhfI2KWaZ7Y49HYZbLzxtuYZOtNZhl5pgxnUXB6brClWOD&_nc_ohc=q_Gl4cRi8toQ7kNvgEXdWrK&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gH2nBbnGYC0pfj0Autmm34wieIM6s74fqPxRgImTqOMEA&oe=67ABD471', alt: 'Game 1' },
                { src: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/465852478_1274167503678110_6094345511009744033_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGz6_Iu2HzfvdW5UorMh6qrUiQNwsju6c5SJA3CyO7pzk7elJmrrSR3fnr0fwSeWbC2WhBCjB25n-FSoWIlZWQV&_nc_ohc=l4_ZbpeKSq0Q7kNvgEiFC95&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGrOtjsV8dI1LcjvwxknaCD18SzX8dK9WKXu3nzS7RzTw&oe=67ABF561', alt: 'Game 2' },
                { src: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/462569017_894979586090479_975850147867504019_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEnUD9Z3K3b6G7XgrrFV-jAgJFcRmuBhaeAkVxGa4GFp35n_WR3of4l-KL6PNJwI__3mAhVYSgG80iMJ1jXSlsR&_nc_ohc=ls0d2vl5shUQ7kNvgGkM216&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEiDc9mk5EhpK6wh1DtjCkk0FAQaP2oVKw7Mj3lzOvBpg&oe=67ABCCFB', alt: 'Game 3' },
                { src: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/116938331_223212318950727_7865015564925416403_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEooJj3PfDdmCPF_9IGPusECMivSsUB-3QIyK9KxQH7dJGPK8DAxPykipilJlQ9fb4Hqq_WlpSlfLbzhslRVcXi&_nc_ohc=vz63vna_zlcQ7kNvgFXyxmR&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFpxvEyx05FgeTnN6e-cizzk5OoMSW_ES6YA9TO-QIR3A&oe=67ABDBFC', alt: 'Game 4' },
            ],
        };
    },
});

app.component('picture-gallery', {
    props: ['images'],
    template: `
        <div class="gallery">
            <img v-for="image in images" :src="image.src" :alt="image.alt" class="gallery-img">
        </div>
    `,
});

app.component('survey-form', {
    template: `
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Your Name">

            <label for="comments">Comments:</label>
            <textarea id="comments" placeholder="Your Comments"></textarea>

            <button type="submit">Submit</button>
        </form>
    `,
});

app.mount('#app');
