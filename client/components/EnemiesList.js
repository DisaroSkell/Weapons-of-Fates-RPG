app.component('enemies-list', {
    props: {},
    data() {
        return {
            enemiesTab: []
        }
    },
    methods: {
        fetchData() {
            try {
                const request = axios({
                    method: 'get',
                    url: 'http://localhost:6942/enemies',
                    reponseType: 'stream'
                })
                request.then((res) => {
                    console.log(res)
                })
            } catch (err) {
                console.error(err)
            }
        }
    },
    created() {
        this.fetchData()
    },
    template:
    /*html*/
    `
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div>
        <p>{{ this.enemiesTab }}</p>
    </div>
    `
})