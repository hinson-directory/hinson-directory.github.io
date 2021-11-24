<template>
	<div class="api-key card mb-3">
		<div class="card-header">
				Planning Center API Key
		</div>
		<div class="card-body">
			<input type="text"
				class="form-control"
				placeholder="Planning Center API Key"
				v-model="apiKey" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			apiKey: this.value,
		};
	},
	watch: {
		apiKey(val) {
			this.$emit('input', val)
		},
	},
};
</script>
