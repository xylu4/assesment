<template>
	<div class="form__container">
		<p class="form__data"> Full Name: {{ fullName }}</p>
		<p class="form__data"> Telephone Number: {{ telephoneNumber }}</p>
		<p class="form__data"> Selected Interest: {{ selectedInterest }}</p>
		<p v-if="description" class="form__data"> Description: {{ description }}</p>
		<p class="form__data"> Selected Transport: {{ selectedTransport.join(', ') }}</p>
	</div>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useUserFormStore} from "../store/UserFormStore.js";

const store = useUserFormStore()

const {
	fullName,
	telephoneNumber,
	selectedInterest,
	description,
	selectedTransport
} = storeToRefs(store);
</script>

<style scoped>
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
