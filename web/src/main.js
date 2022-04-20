import { createApp } from 'vue'
import App from '@/App.vue'
import Echo from '@/client/service.js'

Echo
    .ping()
    .then(function (data) {
        console.log('Success');
        console.log(data);
    })
    .catch(function (data) {
        console.log('Failed');
        console.log(data);
    });

createApp(App).mount('#app')
