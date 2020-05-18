new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Ryu'

    },
    methods: {
        objectName(e) {
            console.log(e.target.value)
        }
        
        
    }
})