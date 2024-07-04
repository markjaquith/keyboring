<script lang="ts">
	import type { Press } from '$lib/Schemas'

	type Props = Press
	let { press, shift, ctrl, opt, cmd }: Props = $props()
	let metas = $derived(
		Object.entries({
			'⇧': shift,
			'^': ctrl,
			'⌥': opt,
			'⌘': cmd,
		})
			.filter(([, used]) => used)
			.map(([display]) => display)
	)
	let isCombo = $derived(press.length > 1 || metas.length > 0)
</script>

<div
	class="flex flex-row rounded-lg rounded-lg py-1"
	class:bg-gray-200={isCombo}
	class:px-1={isCombo}
>
	{#each metas as meta}
		<div
			class="align-center text-md flex size-9 justify-center rounded-lg border border-gray-400 bg-white px-2 py-1"
		>
			{meta}
		</div>
		<div class="align-center text-md flex justify-center px-0.5 py-1">&plus;</div>
	{/each}

	{#each press as key, i}
		{#if i > 0}
			<div class="align-center text-md flex justify-center px-0.5 py-1">&plus;</div>
		{/if}
		<div
			class="align-center text-md flex size-9 justify-center rounded-lg border border-gray-400 bg-white px-2 py-1"
			class:font-bold={/^[A-Z]$/.exec(key) !== null}
		>
			{key}
		</div>
	{/each}
</div>
