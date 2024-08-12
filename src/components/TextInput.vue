<template>
	<div class="input-container">
		<label class="input-container__label"> Full Name:
			<input
				class="input-container__input"
				v-model="fullName"
				type="text"
				placeholder="Input full name"
			>
		</label>

		<span
			v-if="computedErrorMessage"
			class="input-container__error"
		>
			{{ computedErrorMessage }}
		</span>
	</div>
</template>

<script setup>
import {computed} from 'vue';
import {storeToRefs} from "pinia";
import {useUserFormStore} from "../store/UserFormStore.js";

const store = useUserFormStore()

//The value of the text input field for full name
const { fullName } = storeToRefs(store)

// Error message validation
//done as computed, so error show up for required fields
// can be done as regular function declaration, but will need
// add event listener on the field, then will be triggered upon interaction with field
const computedErrorMessage = computed(() => {
	if (!fullName.value?.length) {
		return 'Full Name is required'

	} else if (fullName.value.length < 3) {
		return 'Full Name must be at least 3 characters long.'

	} else {
		return ''
	}
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
