<template>
	<div id="panel">
		<div class="page-card">
			<div class="header">
				<h4>New Task</h4>
			</div>
			<div class="description">
				<input
					type="text"
					class="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					id="exampleInput90"
					placeholder="Name"
				/>
			</div>
			<div class="description">
				<textarea
					class="form-control block w-full text-sm px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					id="exampleFormControlTextarea1"
					rows="3"
					placeholder="Description"
				></textarea>
			</div>
			<div class="actions">
				<div class="item flex">
					<label
						for="about"
						class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mr-10"
					>
						Asignee
					</label>
					<div class="ml-10 w-full">
						<Select
							:options="options"
							:title="'Assignee'"
							:keyName="'type'"
							:multiSelect="false"
						/>
					</div>
				</div>
				<div class="item flex">
					<label
						for="about"
						class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mr-10"
					>
						Due Date
					</label>
					<div class="w-full">
						<Datepicker v-model="date"></Datepicker>
					</div>
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
import Select from '../Select.vue';
import Datepicker from '@vuepic/vue-datepicker';

export default {
	props: {
		data: {
			type: Object,
		},
	},
	components: { Select, Datepicker },

	setup() {
		const state = reactive({
			count: 0,
			date: null,
			options: [
				{ name: 'Vue.js', language: 'JavaScript' },
				{ name: 'Rails', language: 'Ruby' },
				{ name: 'Sinatra', language: 'Ruby' },
				{ name: 'Laravel', language: 'PHP', $isDisabled: true },
			],
			selected: null,
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
