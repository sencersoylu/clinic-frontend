<template>
	<!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full overflow-hidden">
    ```
  -->
	<div class="h-full flex">
		<!-- Narrow sidebar -->
		<div class="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
			<div class="w-full py-6 flex flex-col items-center">
				<div class="flex-shrink-0 flex items-center">
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
						alt="Workflow"
					/>
				</div>
				<div class="flex-1 mt-6 w-full px-2 space-y-1">
					<a
						v-for="item in sidebarNavigation"
						:key="item.name"
						:href="item.href"
						:class="[
							item.current
								? 'bg-indigo-800 text-white'
								: 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
							'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium',
						]"
						:aria-current="item.current ? 'page' : undefined"
					>
						<component
							:is="item.icon"
							:class="[
								item.current
									? 'text-white'
									: 'text-indigo-300 group-hover:text-white',
								'h-6 w-6',
							]"
							aria-hidden="true"
						/>
						<span class="mt-2">{{ item.name }}</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Mobile menu -->
		<TransitionRoot as="template" :show="mobileMenuOpen">
			<Dialog as="div" class="md:hidden" @close="mobileMenuOpen = false">
				<div class="fixed inset-0 z-40 flex">
					<TransitionChild
						as="template"
						enter="transition-opacity ease-linear duration-300"
						enter-from="opacity-0"
						enter-to="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leave-from="opacity-100"
						leave-to="opacity-0"
					>
						<DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
					</TransitionChild>
					<TransitionChild
						as="template"
						enter="transition ease-in-out duration-300 transform"
						enter-from="-translate-x-full"
						enter-to="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leave-from="translate-x-0"
						leave-to="-translate-x-full"
					>
						<div
							class="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col"
						>
							<TransitionChild
								as="template"
								enter="ease-in-out duration-300"
								enter-from="opacity-0"
								enter-to="opacity-100"
								leave="ease-in-out duration-300"
								leave-from="opacity-100"
								leave-to="opacity-0"
							>
								<div class="absolute top-1 right-0 -mr-14 p-1">
									<button
										type="button"
										class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
										@click="mobileMenuOpen = false"
									>
										<XIcon class="h-6 w-6 text-white" aria-hidden="true" />
										<span class="sr-only">Close sidebar</span>
									</button>
								</div>
							</TransitionChild>
							<div class="flex-shrink-0 px-4 flex items-center">
								<img
									class="h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
									alt="Workflow"
								/>
							</div>
							<div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
								<nav class="h-full flex flex-col">
									<div class="space-y-1">
										<a
											v-for="item in sidebarNavigation"
											:key="item.name"
											:href="item.href"
											:class="[
												item.current
													? 'bg-indigo-800 text-white'
													: 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
												'group py-2 px-3 rounded-md flex items-center text-sm font-medium',
											]"
											:aria-current="item.current ? 'page' : undefined"
										>
											<component
												:is="item.icon"
												:class="[
													item.current
														? 'text-white'
														: 'text-indigo-300 group-hover:text-white',
													'mr-3 h-6 w-6',
												]"
												aria-hidden="true"
											/>
											<span>{{ item.name }}</span>
										</a>
									</div>
								</nav>
							</div>
						</div>
					</TransitionChild>
					<div class="flex-shrink-0 w-14" aria-hidden="true">
						<!-- Dummy element to force sidebar to shrink to fit close icon -->
					</div>
				</div>
			</Dialog>
		</TransitionRoot>

		<!-- Content area -->
		<div class="flex-1 flex flex-col overflow-hidden">
			<header class="w-full">
				<div
					class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex"
				>
					<button
						type="button"
						class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
						@click="mobileMenuOpen = true"
					>
						<span class="sr-only">Open sidebar</span>
						<MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
					</button>
					<div class="flex-1 flex justify-between px-4 sm:px-6">
						<div class="flex-1 flex">
							<form class="w-full flex md:ml-0" action="#" method="GET">
								<label for="search-field" class="sr-only"
									>Search all files</label
								>
								<div
									class="relative w-full text-gray-400 focus-within:text-gray-600"
								>
									<div
										class="pointer-events-none absolute inset-y-0 left-0 flex items-center"
									>
										<SearchIcon
											class="flex-shrink-0 h-5 w-5"
											aria-hidden="true"
										/>
									</div>
									<input
										name="search-field"
										id="search-field"
										class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400"
										placeholder="Search"
										type="search"
									/>
								</div>
							</form>
						</div>
						<div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
							<!-- Profile dropdown -->
							<Menu as="div" class="relative flex-shrink-0">
								<div>
									<MenuButton
										class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										<span class="sr-only">Open user menu</span>
										<img
											class="h-8 w-8 rounded-full"
											src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
											alt=""
										/>
									</MenuButton>
								</div>
								<transition
									enter-active-class="transition ease-out duration-100"
									enter-from-class="transform opacity-0 scale-95"
									enter-to-class="transform opacity-100 scale-100"
									leave-active-class="transition ease-in duration-75"
									leave-from-class="transform opacity-100 scale-100"
									leave-to-class="transform opacity-0 scale-95"
								>
									<MenuItems
										class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
									>
										<MenuItem
											v-for="item in userNavigation"
											:key="item.name"
											v-slot="{ active }"
										>
											<a
												:href="item.href"
												:class="[
													active ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700',
												]"
												>{{ item.name }}</a
											>
										</MenuItem>
									</MenuItems>
								</transition>
							</Menu>

							<button
								type="button"
								class="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								<PlusSmIcon class="h-6 w-6" aria-hidden="true" />
								<span class="sr-only">Add file</span>
							</button>
						</div>
					</div>
				</div>
			</header>

			<slot />
		</div>
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
