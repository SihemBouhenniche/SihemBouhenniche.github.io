<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';
	import { ChevronRightIcon } from 'lucide-svelte';
	import { quartOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	export let company: string = '';
	export let title: string = '';
	export let subtitle: string = '';
	export let description: string = '';
	export let links: readonly {
			icon?: any;
			title: string;
			href: string;
		}[] = [];
</script>

<div class="flex rounded-lg bg-card text-card-foreground">
	<div class="group ml-4 flex-grow flex-col items-center">
		<div class="flex flex-col">
			<div class="flex items-center justify-between gap-x-2 text-base">
				<h3 class="inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm">
					{company}
						
				</h3>
			</div>
			{#if title}
				<div class="font-sans text-xs">{@html title}</div>
			{/if}
		</div>
		{#if description}
			<div class="mt-2 text-xs sm:text-sm"> {description} </div>
		{/if}
		{#if links && links.length > 0}
			<div class="mt-2 flex flex-row flex-wrap items-start gap-2">
				{#each links as link, idx}
					<a href={link.href}>
						<Badge key={idx} title={link.title} class="flex gap-2">
							<svelte:component this={link.icon} class="h-4 w-4 " strokeWidth={1.6} />
								{link.title}
						</Badge>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
