import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import cors from 'cors';
// import Vue from 'vue';
import router from './routers'
import { createPinia } from 'pinia'
import { createPersistedState } from "pinia-plugin-persistedstate";
// import  express  from 'express'
const pinia = createPinia()
pinia.use(createPersistedState({

'auto': true,

'storage': localStorage

}))

// const app = express();
// app.use(cors());
createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(pinia)
    .provide("cors",cors)
    .mount('#app')


// const port = 5174;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
