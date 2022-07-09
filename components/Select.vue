<template>
	<VueMultiselect
		v-model="value"
		:options="options"
		:multiple="multiSelect"
		:close-on-select="true"
		:placeholder="multiSelect ? 'Pick one or more' : 'Pick one'"
		label="name"
		track-by="name"
		class="text-sm"
	/>
</template>

<script>
import { ref, toRefs } from '@vue/reactivity';
import VueMultiselect from 'vue-multiselect';
import { watch } from '@vue/runtime-core';
export default {
	emits: ['updateFilter'],
	props: ['options', 'title', 'keyName', 'multiSelect'],
	components: { VueMultiselect },
	setup(props, { emit }) {
		const { keyName, options } = toRefs(props);
		const value = ref([]);
		watch(value, () => {
			emit('updateFilter', keyName.value, value.value);
		});
		watch(options, () => (value.value = []));
		return { value };
	},
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style lang="postcss" scoped>
.multiselect__option .multiselect__element {
	@apply text-sm !important;
}
.multiselect multiselect__input {
	@apply text-sm;
}

.multiselect__tags {
	font-size: 12px !important;
}

.multiselect__tag {
	font-size: 0.725rem;
}

.multiselect__placeholder {
	@apply text-sm !important;
}
.multiselect .multiselect__single {
	@apply text-sm !important;
}
.multiselect__single {
	@apply text-sm !important;
}
</style>
