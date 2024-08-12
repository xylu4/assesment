<template>
	<div v-if="!isSubmitted">
		<TextInput />
		<TelephoneNumber />
		<Dropdown />
		<TextField />
		<CheckboxGroup />
		<button
			:disabled="!computedValidation"
			type="submit"
			class="form__submit-button"
			@click="submitForm"
		>
			Submit
		</button>
	</div>
	<!-- Form data will show up upon submitting, could be done through vue router -->
	<div v-else class="form__container">
		<p class="form__data"> Full Name: {{ fullName }}</p>
		<p class="form__data"> Telephone Number: {{ telephoneNumber }}</p>
		<p class="form__data"> Selected Interest: {{ selectedInterest }}</p>
		<p v-if="description" class="form__data"> Description: {{ description }}</p>
		<p class="form__data"> Selected Transport: {{ selectedTransport.join(', ') }}</p>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserFormStore } from "../store/UserFormStore.js";
import { ref } from "vue";

const store = useUserFormStore()
const {
	computedValidation,
	fullName,
	telephoneNumber,
	selectedInterest,
	description,
	selectedTransport
} = storeToRefs(store);

const isSubmitted = ref(false)

function submitForm() {
	// Toggle value upon submitting form
	// Changes view on the screen
	isSubmitted.value = !isSubmitted.value
}
</script>

<style scoped>
.form__submit-button {
	margin-left: 49%;
	padding: 10px 20px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
}

.form__container {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-wrap: wrap;
	word-break: break-all;
}

.form__data {
	margin-bottom: 10px;
}
</style>
