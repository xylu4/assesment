import {computed, ref} from 'vue';
import { defineStore } from 'pinia';

export const useUserFormStore = defineStore('userForm', () => {
	const fullName = ref('');
	const telephoneNumber = ref('');
	const selectedInterest = ref('');
	const description = ref('');
	const selectedTransport = ref([]);

const computedValidation = computed(() => {
	return !!(fullName.value
		&& telephoneNumber.value
		&& selectedInterest.value.length
		&& selectedTransport.value.length)
})

	return { fullName, telephoneNumber, selectedInterest, description, selectedTransport, computedValidation };
});
