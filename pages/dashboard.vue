<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
	<!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full overflow-hidden">
    ```
  -->
	<!-- Main content -->
	<div class="flex-1 flex items-stretch overflow-hidden">
		<main class="flex-1 overflow-y-auto">
			<!-- Primary column -->

			<div class="bg-white">
				<!-- <div class="max-w mx-auto px-6 sm:px-6 lg:px-6">
							<h3 class="text-lg leading-6 font-medium text-gray-900">
								Last 30 days
							</h3>
							<dl
								class="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x"
							>
								<div class="px-4 py-5 sm:p-6">
									<dt class="text-base font-normal text-gray-900">Patient</dt>
									<dd
										class="mt-1 flex justify-between items-baseline md:block lg:flex"
									>
										<div
											class="flex items-baseline text-2xl font-semibold text-indigo-600"
										>
											120
										</div>
									</dd>
								</div>
								<div class="px-4 py-5 sm:p-6">
									<dt class="text-base font-normal text-gray-900">Patient</dt>
									<dd
										class="mt-1 flex justify-between items-baseline md:block lg:flex"
									>
										<div
											class="flex items-baseline text-2xl font-semibold text-indigo-600"
										>
											120
										</div>
									</dd>
								</div>
								<div class="px-4 py-5 sm:p-6">
									<dt class="text-base font-normal text-gray-900">Patient</dt>
									<dd
										class="mt-1 flex justify-between items-baseline md:block lg:flex"
									>
										<div
											class="flex items-baseline text-2xl font-semibold text-indigo-600"
										>
											120
										</div>
									</dd>
								</div>
							</dl>
						</div> -->
				<div class="mt-4">
					<div class="max-w mx-auto px-6 sm:px-6 lg:px-6">
						<div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
							<div class="bg-white overflow-hidden shadow rounded-lg">
								<div class="p-5">
									<div class="flex justify-between items-center mb-4">
										<h5
											class="text-xl leading-none text-gray-800 dark:text-white"
										>
											Chamber Schedule
										</h5>
										<a
											href="#"
											class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
										>
											View all
										</a>
									</div>
									<div class="flex items-center">
										<div class="w-0 flex-1">
											<vue-cal
												:time="false"
												class="vuecal--blue-theme"
												active-view="month"
												style="height: 400px"
												:disable-views="['years', 'year', 'month']"
											>
												<template v-slot:no-event>
													<div>No Session</div>
												</template>
											</vue-cal>
										</div>
									</div>
								</div>
							</div>
							<div class="bg-white overflow-hidden shadow rounded-lg">
								<div class="p-5">
									<div class="flex justify-between items-center mb-4">
										<h5
											class="text-xl leading-none text-gray-800 dark:text-white"
										>
											Doctor Schedule
										</h5>
										<a
											href="#"
											class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
										>
											View all
										</a>
									</div>
									<div class="flex items-center">
										<div class="w-0 flex-1">
											<vue-cal
												:time="false"
												class="vuecal--blue-theme"
												active-view="month"
												style="height: 400px"
												:disable-views="['years', 'year', 'month']"
											>
												<template v-slot:no-event>
													<div>No Apoint.</div>
												</template>
											</vue-cal>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>

		<!-- Secondary column (hidden on smaller screens) -->
		<aside
			class="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block"
		>
			<DailyJournal> </DailyJournal>

			<!-- Your content -->
		</aside>
	</div>
</template>

<script>
import { ref } from 'vue';
import {
	Dialog,
	DialogOverlay,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	TransitionChild,
	TransitionRoot,
} from '@headlessui/vue';
import {
	CogIcon,
	CollectionIcon,
	HomeIcon,
	MenuAlt2Icon,
	PhotographIcon,
	PlusSmIcon,
	UserGroupIcon,
	ViewGridIcon,
	XIcon,
	CalendarIcon,
	DocumentReportIcon,
	ClipboardCheckIcon,
	DotsVerticalIcon,
} from '@heroicons/vue/outline';
import { SearchIcon } from '@heroicons/vue/solid';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';
import DailyJournal from '~~/components/dashboard/dailyJournal.vue';

const days = [
	{ date: '2021-12-27' },
	{ date: '2021-12-28' },
	{ date: '2021-12-29' },
	{ date: '2021-12-30' },
	{ date: '2021-12-31' },
	{ date: '2022-01-01', isCurrentMonth: true },
	{ date: '2022-01-02', isCurrentMonth: true },
	{ date: '2022-01-03', isCurrentMonth: true },
	{ date: '2022-01-04', isCurrentMonth: true },
	{ date: '2022-01-05', isCurrentMonth: true },
	{ date: '2022-01-06', isCurrentMonth: true },
	{ date: '2022-01-07', isCurrentMonth: true },
	{ date: '2022-01-08', isCurrentMonth: true },
	{ date: '2022-01-09', isCurrentMonth: true },
	{ date: '2022-01-10', isCurrentMonth: true },
	{ date: '2022-01-11', isCurrentMonth: true },
	{ date: '2022-01-12', isCurrentMonth: true, isToday: true },
	{ date: '2022-01-13', isCurrentMonth: true },
	{ date: '2022-01-14', isCurrentMonth: true },
	{ date: '2022-01-15', isCurrentMonth: true },
	{ date: '2022-01-16', isCurrentMonth: true },
	{ date: '2022-01-17', isCurrentMonth: true },
	{ date: '2022-01-18', isCurrentMonth: true },
	{ date: '2022-01-19', isCurrentMonth: true },
	{ date: '2022-01-20', isCurrentMonth: true },
	{ date: '2022-01-21', isCurrentMonth: true, isSelected: true },
	{ date: '2022-01-22', isCurrentMonth: true },
	{ date: '2022-01-23', isCurrentMonth: true },
	{ date: '2022-01-24', isCurrentMonth: true },
	{ date: '2022-01-25', isCurrentMonth: true },
	{ date: '2022-01-26', isCurrentMonth: true },
	{ date: '2022-01-27', isCurrentMonth: true },
	{ date: '2022-01-28', isCurrentMonth: true },
	{ date: '2022-01-29', isCurrentMonth: true },
	{ date: '2022-01-30', isCurrentMonth: true },
	{ date: '2022-01-31', isCurrentMonth: true },
	{ date: '2022-02-01' },
	{ date: '2022-02-02' },
	{ date: '2022-02-03' },
	{ date: '2022-02-04' },
	{ date: '2022-02-05' },
	{ date: '2022-02-06' },
];
const meetings = [
	{
		id: 1,
		name: 'Leslie Alexander',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		start: '1:00 PM',
		startDatetime: '2022-01-21T13:00',
		end: '2:30 PM',
		endDatetime: '2022-01-21T14:30',
	},
	// More meetings...
];

const sidebarNavigation = [
	{ name: 'Dashboard', href: '#', icon: HomeIcon, current: false },
	{ name: 'Tasks', href: '#', icon: ClipboardCheckIcon, current: false },
	{ name: 'Patients', href: '#', icon: UserGroupIcon, current: true },
	{ name: 'Schedule', href: '#', icon: CalendarIcon, current: false },
	{ name: 'Reports', href: '#', icon: DocumentReportIcon, current: false },
	{ name: 'Settings', href: '#', icon: CogIcon, current: false },
];
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Sign out', href: '#' },
];

export default {
	components: {
		Dialog,
		DialogOverlay,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		TransitionChild,
		TransitionRoot,
		MenuAlt2Icon,
		PlusSmIcon,
		SearchIcon,
		XIcon,
		VueCal,
		ChevronLeftIcon,
		ChevronRightIcon,
		DotsVerticalIcon,
		DailyJournal,
	},
	layout: 'default',

	setup() {
		const mobileMenuOpen = ref(false);

		return {
			sidebarNavigation,
			userNavigation,
			mobileMenuOpen,
			days,
			meetings,
		};
	},
};
</script>
<style>
.vuecal__header {
	font-size: 0.75rem !important;
}
.vuecal__body {
	font-size: 0.75rem !important;
}

.vuecal__title-bar {
	font-size: 0.75rem !important;
}
</style>
