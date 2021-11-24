<template>
	<div class="api-key card mb-3">
		<div class="card-header">
			<h2>Planning Center API Key</h2>
		</div>
		<div class="card-body">
			<input type="text"
				class="form-control"
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
