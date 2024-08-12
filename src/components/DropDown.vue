<template>
	<div class="input-container">
		<label class="input-container__label"> Interest:
			<select
				class="input-container__select"
				v-model="selectedInterest"
				name="Interest"
			>
				<option disabled value=""> Please select interest </option>
				<option
					v-for="interest in interests"
					:key="interest"
					:value="interest"
				>
					{{ interest }}
				</option>
			</select>
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

// The value of selected interest
const {selectedInterest} = storeToRefs(store)

const interests = ["Mountains", "Oceans", "Deserts"]

// Error message validation
const computedErrorMessage = computed(() => {
	// Clear the error message if validation passes, assign value if not
	return selectedInterest.value.length ? '' : 'Please enter valid interest'
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

.input-container__select {
	width: 100%;
	padding: 8px;
	margin-top: 4px;
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
