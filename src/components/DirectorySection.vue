<template>
	<div class="directory-section card mb-3">
		<div class="card-header">
			<h3 class="cart-title">
				<input type=checkbox
					id="show"
					class="form-check-input"
					checked />
				{{ sectionName }}
			</h3>
		</div>

		<div class="card-body">
			<div class="row g-3 mb-3">
				<div class="col">
					<label>Header</label>
					<input type="text"
						id="header"
						class="form-control"
						value="Hinson Members: In Area" />
				</div>
				<div class="col">
					<label>List Name</label>
					<input type="text"
						id="list_name"
						class="form-control"
						value="Directory: In-Area Members" />
				</div>
			</div>

			<div class="row g-3 mb-3">
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="job_title">
							Job Title?
						</label>
						<input type="checkbox"
							id="job_title"
							class="form-check-input" />
					</div>
				</div>
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="employer">
							Employer?
						</label>
						<input type="checkbox"
							id="employer"
							class="form-check-input" />
					</div>
				</div>
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="school">
							School?
						</label>
						<input type="checkbox"
							id="school"
							class="form-check-input" />
					</div>
				</div>
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="occupation">
							Occupation?
						</label>
						<input type="checkbox"
							id="occupation"
							class="form-check-input" />
					</div>
				</div>
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="children">
							Children?
						</label>
						<input type="checkbox"
							id="children"
							class="form-check-input"
							checked />
					</div>
				</div>
			</div>

			<div class="row g-3 mb-3">
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="phones">
							Phone #?
						</label>
						<input type="checkbox"
							id="phones"
							class="form-check-input"
							checked />
					</div>
				</div>
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="email">
							Email Address?
						</label>
						<input type="checkbox"
							id="email"
							class="form-check-input"
							checked />
					</div>
				</div>
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="address">
							Address?
						</label>
						<input type="checkbox"
							id="address"
							class="form-check-input"
							checked />
					</div>
				</div>
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="city">
							City?
						</label>
						<input type="checkbox"
							id="city"
							class="form-check-input"
							checked />
					</div>
				</div>
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="state">
							State?
						</label>
						<input type="checkbox"
							id="state"
							class="form-check-input"
							checked />
					</div>
				</div>
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="postal_code">
							Postal Code?
						</label>
						<input type="checkbox"
							id="postal_code"
							class="form-check-input"
							checked />
					</div>
				</div>
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="country">
							Country?
						</label>
						<input type="checkbox"
							id="country"
							class="form-check-input" />
					</div>
				</div>
			</div>

			<div class="row g-3 mb-3">
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="new_member_footnote">
							New Member Footnote?
						</label>
						<input type="checkbox"
							id="new_member_footnote"
							class="form-check-input" />
					</div>
				</div>
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="baptism_footnote">
							Pending Baptism Footnote?
						</label>
						<input type="checkbox"
							id="baptism_footnote"
							class="form-check-input" />
					</div>
				</div>
			</div>

			<div class="row g-3 mb-3">
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="birthday">
							Birthday?
						</label>
						<input type="checkbox"
							id="birthday"
							class="form-check-input" />
					</div>
				</div>
				<div class="col-auto">
					<div class="form-check">
						<label class="form-check-label"
							for="date_joined">
							Date Joined?
						</label>
						<input type="checkbox"
							id="date_joined"
							class="form-check-input"
							checked />
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
	},
	computed: {
		sectionName() {
			return `Section ${this.sectionId + 1}`;
		},
	},
};
</script>
