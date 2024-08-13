import { createMemoryHistory, createRouter } from 'vue-router'
import Form from "./components/Form.vue";
import Data from "./components/Data.vue";


const routes = [
	{ path: '/', component: Form },
	{ path: '/data', component: Data },
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router
