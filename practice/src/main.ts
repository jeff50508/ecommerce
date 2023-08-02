import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import cors from 'cors';
// import Vue from 'vue';
import router from './routers'
import { createPinia } from 'pinia'

const pinia = createPinia()

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
