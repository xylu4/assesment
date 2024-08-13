import { createApp } from 'vue'
import {createPinia} from "pinia";
import './style.css'
import App from './App.vue'
import TextInput from "./components/TextInput.vue";
import TelephoneNumber from "./components/TelephoneNumber.vue";
import Dropdown from "./components/Dropdown.vue";
import Form from './components/Form.vue'
import TextField from "./components/TextField.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";
import router from "./router";

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
//components registered globally, as per requirements
//no need for direct import
app.component('Form', Form)
app.component('TextInput', TextInput)
app.component('TelephoneNumber', TelephoneNumber)
app.component('Dropdown', Dropdown)
app.component('TextField', TextField)
app.component('CheckboxGroup', CheckboxGroup)
app.mount('#app')
