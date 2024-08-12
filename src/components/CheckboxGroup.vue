<template>
	<div class="checkbox-group">
		<span class="checkbox-group__label">Transport:</span>
		<div class="checkbox-group__container">
			<div v-for="transport in transports" :key="transport" class="checkbox-group__item">
				<input
					type="checkbox"
					:id="transport"
					:value="transport"
					v-model="selectedTransport"
					class="checkbox-group__input"
				/>
				<label class="checkbox-group__label">
					{{ transport }}
				</label>
			</div>
		</div>
		<p
			v-if="computedErrorMessage"
			class="checkbox-group__error"
		>
			{{ computedErrorMessage }}
		</p>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from "pinia";
import { useUserFormStore } from "../store/UserFormStore.js";

const store = useUserFormStore()

// The value of selected transport, can be multiple, array type
const { selectedTransport } = storeToRefs(store)
const transports = ['Car', 'Bus', 'Train']

// Error message validation
const computedErrorMessage = computed(() => {
	// Clear message if passed validation or assigned if not
	return selectedTransport.value.length ? '' : 'Please enter valid transport'
})
</script>

<style scoped>
.checkbox-group {
	margin-top: 16px;
}

.checkbox-group__label {
	font-weight: bold;
}

.checkbox-group__container {
	margin-top: 8px;
}

.checkbox-group__item {
	display: inline-flex;
	margin-right: 16px;
}

.checkbox-group__input {
	margin-right: 4px;
}

.checkbox-group__error {
	color: red;
	font-size: 12px;
	display: block;
	margin-top: 2px;
}
</style>
