<template>
	<div class="flex-1 relative z-0 flex overflow-hidden">
		<main
			class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last bg-slate-50"
		>
			<!-- Start main area-->
			<div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
				<Transition name="fade" mode="out-in" appear>
					<task-card :data="selectedTask" v-if="selectedTask"></task-card>
				</Transition>
				<NewTask v-if="newTask" />
			</div>
			<!-- End main area -->
		</main>

		<aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">
			<div
				class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-slate-50 overflow-y-auto"
			>
				<!-- Your content -->
				<div class="grid grid-cols-1 p-4">
					<div id="header" class="mb-4">
						<h3 class="text-lg leading-6 font-bold text-slate-600">Tasks</h3>
					</div>

					<task-list :data="tasks" @selectedTask="getTask"> </task-list>
				</div>
			</div>
		</aside>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import NewTask from '../components/Task/NewTask.vue';
const tasks = [
	{
		id: 1,
		title: 'Task 1',
		description: 'Task 1 description',
		status: 'todo',
		assignee: 'John Doe',
		dueDate: '2020-01-01',
	},
	{
		id: 2,
		title: 'Task 2',
		description: 'Task 2 description',
		status: 'todo',
		assignee: 'John Doe',
		dueDate: '2020-01-01',
	},
	{
		id: 3,
		title: 'Task 3',
		description: 'Task 3 description',
		status: 'todo',
		assignee: 'John Doe',
		dueDate: '2020-01-01',
	},
];

export default {
	name: 'Tasks',
	setup() {
		const state = reactive({
			count: 0,
			tasks,
			selectedTask: null,
			newTask: true,
		});
		return {
			...toRefs(state, tasks),
		};
	},
	methods: {
		selectEvent(event) {
			console.log(event.target.key);
		},
		getTask(item) {
			this.selectedTask = this.tasks.find((task) => task.id === item.id);
		},
	},
	components: { NewTask },
};
</script>

<style lang="scss" scoped></style>
