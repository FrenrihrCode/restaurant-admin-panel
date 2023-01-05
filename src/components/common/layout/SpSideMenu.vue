<script lang="ts" setup></script>

<template>
	<div class="flex h-screen w-16 flex-col justify-between border-r bg-white">
		<div>
			<div class="inline-flex h-16 w-16 items-center justify-center">
				<span class="block h-10 w-10 rounded-lg bg-gray-200"></span>
			</div>
			<div class="border-t border-gray-100">
				<nav aria-label="Main Nav" class="flex flex-col p-2">
					<div class="py-4">
						<a
							v-tooltip.right="'Inicio'"
							href="#"
							class="t group relative flex justify-center rounded bg-primary/10 px-2 py-1.5 text-primary"
						>
							<icon-material-symbols:space-dashboard />
						</a>
					</div>
					<ul class="space-y-1 border-t border-gray-100 pt-4">
						<li>
							<a
								href=""
								class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
							>
								<icon-material-symbols:restaurant-menu />
							</a>
						</li>
						<li>
							<a
								href=""
								class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
							>
								<icon-material-symbols:fastfood />
							</a>
						</li>
						<li>
							<a
								href=""
								class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
							>
								<icon-mdi:chef-hat />
							</a>
						</li>
						<li>
							<a
								href=""
								class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
							>
								<icon-material-symbols:settings />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<div
			class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2"
		>
			<form action="/logout">
				<button
					type="button"
					class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
				>
					<icon-material-symbols:logout />
				</button>
			</form>
		</div>
	</div>
</template>
