<template>
	<div class="input-container">
		<label class="input-container__label"> Description:
			<textarea
				v-model="description"
				placeholder="Input description"
				class="input-container__textarea"
			/>
		</label>
		<span class="input-container__char-counter">
			{{ computedCharCounter }} / {{ 500 - computedCharCounter}}
		</span>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from "pinia";
import { useUserFormStore } from "../store/UserFormStore.js";

const store = useUserFormStore()

// The value of description input
const { description } = storeToRefs(store)

// The count of characters in the textarea
const computedCharCounter = computed(() => {
	description.value = description.value.slice(0, 500)

	return description.value.length
})
</script>

<style scoped>
.input-container__label {
	display: block;
	font-weight: bold;
}

.input-container__textarea {
	width: 100%;
	height: 160px;
	resize: none;
	padding: 8px;
	margin-top: 4px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	background-color: transparent;
	color: #333333;
}

.input-container__char-counter {
	display: flex;
	justify-content: flex-end;
	font-size: 12px;
	margin-top: -30px;
	margin-right: 8px;
	text-align: right;
	color: #333333;
}
</style>
