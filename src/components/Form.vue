<template>
	<div >
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
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserFormStore } from "../store/UserFormStore.js";
import {useRouter} from "vue-router";

const store = useUserFormStore()
const $router = useRouter()
const { computedValidation } = storeToRefs(store);

function submitForm() {
	// changes the view to data submitted
	$router.push(`/data`)
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
</style>
