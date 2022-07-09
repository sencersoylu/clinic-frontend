<template>
	<div id="panel">
		<div class="page-card">
			<div class="header">
				<h4>{{ data.title }}</h4>
			</div>
			<div class="description">
				<p>{{ data.description }}</p>
			</div>
			<div class="actions">
				<div class="item">
					<font-awesome-icon class="icon" icon="fa-solid fa-calendar" /> 5 Jul
					2022
				</div>

				<div class="item">
					<font-awesome-icon class="icon" icon="fa-solid fa-user" />
					<span class="font-bold">Ismail</span>
					<span class="ml-1">created a task.</span>
					<span
						class="ml-2"
						data-rel="always-tooltip"
						data-container="body"
						title=""
						data-original-title="3 July 2022 15:41"
						>3 Jul</span
					>
				</div>
			</div>
		</div>

		<div class="page-card">
			<div class="header">
				<font-awesome-icon class="icon" icon="fa-solid fa-comments" />

				<h4>Comments</h4>
			</div>
			<div class="bg-white mt-1 p-3">
				<div>
					<textarea
						name="text"
						placeholder="Enter your message..."
						rows="3"
						class="h-20 overflow-hidden break-words rounded-sm border-2 px-2 py-3 w-full text-sm border-solid"
					></textarea>
				</div>
				<div class="flex flex-row-reverse mt-3">
					<button class="btn btn-active btn-primary">Save</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	setup() {
		const state = reactive({
			count: 0,
		});

		return {
			...toRefs(state),
		};
	},
};
</script>

<style lang="postcss" scoped>
.page-card > .header {
	@apply bg-white border rounded-sm h-16 px-4 flex items-center;
}

.page-card > .actions > .item {
	@apply bg-white border rounded-sm h-16 px-4 flex items-center;
}
.page-card > .header > h4 {
	@apply mt-1;
}
.page-card > .description {
	@apply bg-white border rounded-sm p-3;
}
.page-card > .description p {
	@apply text-gray-600 text-sm pb-2;
}
.page-card > .actions {
	@apply text-gray-600 text-sm pb-2;
}
.font-awesome-icon {
	@apply mr-2;
}
.icon {
	@apply mr-2;
}
</style>
