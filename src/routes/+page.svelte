<script lang="ts">
	import KeyEvent from '$lib/components/KeyEvent.svelte'
	import type { Shortcut } from '$lib/Schemas'
	import { preventDefault } from '$lib/utils'

	let newName = $state('')
	let shortcuts: Shortcut[] = $state([
		{
			action: 'Remove additional cursors',
			sequences: [{ press: [','], cmd: true }, { press: [','] }],
		},
		{
			action: 'Duplicate cursor below',
			sequences: [{ press: ['C'] }],
		},
	])
</script>

<form onsubmit={preventDefault(() => (newName = ''))} class="m-4">
	<input type="text" bind:value={newName} class="rounded-sm border border-gray-200 p-2" />
</form>

<div class="flex flex-col gap-8">
	{#each shortcuts as shortcut}
		<div class="flex flex-row gap-4">
			<div class="flex flex-col gap-2">
				{#each shortcut.sequences as sequence}
					<KeyEvent {...sequence} />
				{/each}
			</div>
			<div class="flex flex-col justify-center">
				{shortcut.action}
			</div>
		</div>
	{/each}
</div>
