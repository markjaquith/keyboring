<script lang="ts">
	import Press from '$lib/components/Press.svelte'
	import type { Shortcut } from '$lib/Schemas'
	import { preventDefault } from '$lib/utils'

	let newName = $state('')
	let shortcuts: Shortcut[] = $state([
		{
			action: 'Single key',
			sequences: [[{ press: [','] }]],
		},
		{
			action: 'Uppercase key',
			sequences: [[{ press: ['C'] }]],
		},
		{
			action: 'Multiple sequences',
			sequences: [
				[{ press: ['g'] }, { press: ['h'] }],
				[{ press: ['g'] }, { press: ['h'] }],
			],
		},
		{
			action: 'Multiple sequences (complex)',
			sequences: [
				[{ press: ['g'] }, { press: ['h'], opt: true }],
				[{ press: ['z', 'x'], cmd: true }, { press: ['L'] }],
			],
		},
	])
</script>

<form onsubmit={preventDefault(() => (newName = ''))} class="m-4">
	<input type="text" bind:value={newName} class="rounded-sm border border-gray-200 p-2" />
</form>

<div class="grid grid-cols-[min-content,1fr]">
	{#each shortcuts as shortcut}
		<div class="flex flex-col border-t border-gray-300 p-1">
			{#each shortcut.sequences as sequence}
				<div class="flex flex-row justify-end gap-1 p-1">
					{#each sequence as presses}
						<Press {...presses} />
					{/each}
				</div>
			{/each}
		</div>
		<div class="flex flex-col justify-center border-t border-gray-300 pl-2">
			{shortcut.action}
		</div>
	{/each}
</div>
