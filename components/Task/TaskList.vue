<template>
	<ul
		class="w-full bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
	>
		<li
			class="w-full border-b border-gray-200 dark:border-gray-600 float-none relative block hover:bg-gray-100"
			:class="{ active: item === selectedItem }"
			v-for="item in data"
			:key="item.id"
			@click="selectTask(item)"
		>
			<a class="p-1.5 flex flex-row items-center">
				<div id="card-content" class="flex-grow ml-1">
					<div>
						<div id="card-header" class="font-normal text-xs">
							{{ item.title }}
						</div>
						<div id="card-comment" class="font-normal text-xs">Test</div>
						<div id="card-comment" class="font-normal text-xs">Test</div>
					</div>
				</div>
				<div id="card-buttons" class="flex">buttons</div></a
			>
		</li>
	</ul>
</template>

<script>
import { reactive, toRefs, defineProps } from 'vue';
import { MailIcon, PhoneIcon } from '@heroicons/vue/solid';

export default {
	components: { MailIcon, PhoneIcon },
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	setup() {
		const state = reactive({
			count: 0,
			selectedItem: null,
		});

		return {
			...toRefs(state),
		};
	},
	methods: {
		selectTask(item) {
			this.selectedItem = item;
			this.$emit('selectedTask', item);
		}, 
	},
};
</script>

<style lang="postcss" scoped>
.active {
	@apply before:block before:w-0.5 before:absolute before:h-full before:bg-blue-500 before:content-['\00a0'] bg-gray-100;
}
</style>
