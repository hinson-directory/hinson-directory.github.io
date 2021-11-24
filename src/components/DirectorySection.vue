<template>
	<div class="directory-section card mb-3">
		<div class="card-header">
			<h2 class="cart-title d-flex justify-content-between">
				{{ sectionName }}
				<input type=checkbox
					class="form-check-input"
					v-model="section.includeSection" />
			</h2>
		</div>

		<div class="card-body">
			<div class="row g-3 mb-3">
				<div v-for="text in section.textRow"
					class="col">
					<label>
						{{ text.name }}
					</label>
					<input type="text"
						class="form-control"
						v-model="text.value" />
				</div>
			</div>

			<div v-for="flagRow in section.flagRows"
				class="row g-3 mb-3">
				<div v-for="flag in flagRow"
					class="col-auto">
					<div class="form-check">
						<label class="form-check-label">
							{{ flag.name }}
						</label>
						<input type="checkbox"
							class="form-check-input"
							v-model="flag.value" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		sectionId: {
			type: Number,
			required: true,
		},
		section: {
			type: Object,
			required: true,
		},
	},
	computed: {
		sectionName() {
			return `Section ${this.sectionId + 1}`;
		},
	},
};
</script>
