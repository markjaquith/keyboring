<script lang="ts">
	import type { KeyEvent } from '$lib/Schemas'

	type Props = KeyEvent
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
</script>

<div class="flex flex-row rounded-lg bg-gray-100 p-2">
	{#each metas as meta}
		<div
			class="align-center flex size-10 justify-center rounded-lg border border-gray-400 bg-white px-2 py-1 text-lg"
		>
			{meta}
		</div>
		<div class="align-center flex justify-center px-2 py-1 text-lg">&plus;</div>
	{/each}

	{#each press as key}
		<div
			class="align-center flex size-10 justify-center rounded-lg border border-gray-400 bg-white px-2 py-1 text-lg"
			class:font-bold={/^[A-Z]$/.exec(key) !== null}
		>
			{key}
		</div>
	{/each}
</div>
