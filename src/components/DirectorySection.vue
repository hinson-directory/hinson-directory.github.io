<template>
	<div class="directory-section card mb-3">
		<div class="card-header">
			<h3 class="cart-title">
				<input type=checkbox
					class="form-check-input"
					v-model="section.includeSection" />
				{{ sectionName }}
			</h3>
		</div>

		<div class="card-body">
			<div class="row g-3 mb-3">
				<div class="col">
					<label>Header</label>
					<input type="text"
						class="form-control"
						v-model="section.header" />
				</div>
				<div class="col">
					<label>List Name</label>
					<input type="text"
						class="form-control"
						v-model="section.listName" />
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
