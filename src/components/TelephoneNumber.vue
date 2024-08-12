<template>
	<div class="input-container">
		<label class="input-container__label"> Telephone Number:
			<input class="input-container__input" v-model="telephoneNumber" type="tel" placeholder="Input digits" />
		</label>

		<span v-if="computedErrorMessage" class="input-container__error">{{ computedErrorMessage }}</span>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from "pinia";
import { useUserFormStore } from "../store/UserFormStore.js";

const store = useUserFormStore();

// The value of the text input field for phone number
const { telephoneNumber } = storeToRefs(store);

// Error message validation
const computedErrorMessage = computed(() => {
	telephoneNumber.value = telephoneNumber.value.replace(/\D/g, '').slice(0, 10);

	return telephoneNumber.value.length < 10 ? 'Telephone Number is required' : ''
})
</script>

<style scoped>
.input-container {
	margin-bottom: 16px;
}

.input-container__label {
	display: block;
	font-weight: bold;
	margin-bottom: 8px;
}

.input-container__input {
	width: 100%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	background-color: white;
	color: #333;
}

.input-container__error {
	color: red;
	font-size: 12px;
	margin-top: 4px;
	display: block;
}
</style>
