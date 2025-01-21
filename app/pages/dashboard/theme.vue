<template>
  <div>
    <UCard>
      <template #header>
        <h3 class="text-2xl font-semibold">Color palette</h3>
      </template>
      <div class="flex flex-wrap gap-4">
        <div class="flex flex-col gap-2 w-full">
          <div
            class="bg-gray-100 dark:bg-gray-900 p-8 w-full rounded-lg flex justify-center items-center"
          >
            <div class="flex gap-4">
              <div
                class="w-24 h-24 bg-info-500 dark:bg-info-400 dark:text-black rounded-lg text-white flex items-center justify-center"
              >
                Info
              </div>
              <div
                class="w-24 h-24 bg-secondary-500 dark:bg-secondary-400 dark:text-black rounded-lg text-white flex items-center justify-center"
              >
                Secondary
              </div>
              <div
                class="w-24 h-24 bg-primary-500 dark:bg-primary-400 dark:text-black rounded-lg text-white flex flex-col items-center justify-center text-center"
              >
                <span>Primary</span>
                <span class="font-semibold">{{ primaryColor }}</span>
              </div>
              <div
                class="w-24 h-24 bg-danger-500 dark:bg-danger-400 dark:text-black rounded-lg text-white flex items-center justify-center"
              >
                Danger
              </div>
              <div
                class="w-24 h-24 bg-warning-500 dark:bg-warning-400 dark:text-black rounded-lg text-white flex items-center justify-center"
              >
                Warning
              </div>
            </div>
          </div>
        </div>
      </div>
    </UCard>
    <UCard class="mt-8">
      <template #header>
        <h3 class="text-2xl font-semibold">Buttons</h3>
      </template>
      <div class="flex flex-col gap-2">
        <p class="text-md font-semibold flex items-center gap-2">
          <UToggle v-model="isOpen" color="primary" />
          {{ isOpen ? "all" : "used" }}
        </p>
        <div class="flex flex-wrap gap-4 mt-8">
          <div class="flex gap-4 w-full">
            <span class="font-semibold w-24">Primary</span>
            <UButton color="primary">Primary: solid</UButton>
            <UButton color="primary" variant="soft">Primary: soft</UButton>
            <UButton color="primary" variant="link">Primary: link</UButton>
          </div>
          <div class="flex gap-4 w-full">
            <span class="font-semibold w-24">Cancel</span>
            <UButton color="gray" variant="soft">Cancle: soft</UButton>
          </div>
          <div class="flex gap-4 w-full">
            <span class="font-semibold w-24">Secondary</span>
            <UButton color="secondary" variant="soft">Secondary: soft</UButton>
            <UButton color="secondary" variant="link">Secondary: link</UButton>
          </div>
          <div class="flex gap-4 w-full">
            <span class="font-semibold w-24">Danger</span>
            <UButton color="danger" variant="outline">Danger: outline</UButton>
            <UButton color="warning" variant="ghost">Warning: ghost</UButton>
            <UButton color="info" variant="ghost">Info: ghost</UButton>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-4">
          <span class="font-semibold">Note:</span>
          Use <span class="text-primary-500">Primary</span> with
          <span class="font-semibold">solid</span>,
          <span class="font-semibold">soft</span>, and
          <span class="font-semibold">link</span> variants.
          <span class="text-gray-500">Cancel</span> with
          <span class="font-semibold">soft</span> variant.
          <span class="text-secondary-500">Secondary</span> with
          <span class="font-semibold">soft</span> and
          <span class="font-semibold">link</span> variants.
          <span class="text-danger-500">Danger</span> with
          <span class="font-semibold">outline</span> and
          <span class="font-semibold">ghost</span> variants.
          <span class="text-warning-500">Warning</span> with
          <span class="font-semibold">ghost</span> variant.
          <span class="text-info-500">info</span> with
          <span class="font-semibold">ghost</span> variant.
        </p>
      </div>
      <div class="flex flex-col gap-2 mt-8" v-if="isOpen">
        <div class="flex flex-wrap gap-4">
          <!-- Solid Buttons -->
          <div class="flex flex-col gap-2">
            <span class="font-medium">Solid</span>
            <UButton>Default</UButton>
            <UButton color="primary">Primary</UButton>
            <UButton color="secondary">Secondary</UButton>
            <UButton color="danger">Danger</UButton>
            <UButton color="warning">Warning</UButton>
            <UButton color="info">Info</UButton>
          </div>

          <!-- Ghost Buttons -->
          <div class="flex flex-col gap-2">
            <span class="font-medium">Ghost</span>
            <UButton variant="ghost">Default</UButton>
            <UButton variant="ghost" color="primary">Primary</UButton>
            <UButton variant="ghost" color="secondary">Secondary</UButton>
            <UButton variant="ghost" color="danger">Danger</UButton>
            <UButton variant="ghost" color="warning">Warning</UButton>
            <UButton variant="ghost" color="info">Info</UButton>
          </div>

          <!-- Outline Buttons -->
          <div class="flex flex-col gap-2">
            <span class="font-medium">Outline</span>
            <UButton variant="outline">Default</UButton>
            <UButton variant="outline" color="primary">Primary</UButton>
            <UButton variant="outline" color="secondary">Secondary</UButton>
            <UButton variant="outline" color="danger">Danger</UButton>
            <UButton variant="outline" color="warning">Warning</UButton>
            <UButton variant="outline" color="info">Info</UButton>
          </div>

          <!-- Soft Buttons -->
          <div class="flex flex-col gap-2">
            <span class="font-medium">Soft</span>
            <UButton variant="soft">Default</UButton>
            <UButton variant="soft" color="primary">Primary</UButton>
            <UButton variant="soft" color="secondary">Secondary</UButton>
            <UButton variant="soft" color="danger">Danger</UButton>
            <UButton variant="soft" color="warning">Warning</UButton>
            <UButton variant="soft" color="info">Info</UButton>
          </div>

          <!-- Link Buttons -->
          <div class="flex flex-col gap-2">
            <span class="font-medium">Link</span>
            <UButton variant="link">Default</UButton>
            <UButton variant="link" color="primary">Primary</UButton>
            <UButton variant="link" color="secondary">Secondary</UButton>
            <UButton variant="link" color="danger">Danger</UButton>
            <UButton variant="link" color="warning">Warning</UButton>
            <UButton variant="link" color="info">Info</UButton>
          </div>
        </div>
      </div>
    </UCard>
    <UCard class="mt-8">
      <template #header>
        <h3 class="text-2xl font-semibold">Typography</h3>
      </template>
      <p class="text-md font-semibold flex items-center gap-2">
        <UToggle v-model="isTypoOpen" color="primary" />
        {{ !isTypoOpen ? "examples" : "description" }}
      </p>
      <div class="flex flex-col gap-4 mt-8" v-if="isTypoOpen">
        <div class="text-base">
          Tailwind provides a default font size scale that maps classes like
          text-sm, text-base, text-lg, etc., to specific px/rem values. By
          default (assuming root font-size is 16px):
          <ul class="list-disc pl-6 mt-2">
            <li>text-xs → 0.75rem (12px)</li>
            <li>text-sm → 0.875rem (14px)</li>
            <li>text-base → 1rem (16px)</li>
            <li>text-lg → 1.125rem (18px)</li>
            <li>text-xl → 1.25rem (20px)</li>
            <li>text-2xl → 1.5rem (24px)</li>
            <li>And so on…</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col gap-4 mt-8" v-if="!isTypoOpen">
        <div class="text-base">
          <code class="text-sm text-info-500">text-base (16px)</code>
          <div class="text-base">
            Body text: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </div>
        </div>
        <div class="text-sm">
          <code class="text-sm text-info-500">text-sm (14px)</code>
          <div class="text-sm">
            Small text (labels, minor notes): Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos.
          </div>
        </div>
        <div class="flex flex-col gap-2 mt-4">
          <h1 class="text-2xl">
            <code class="text-sm text-info-500">text-2xl (24px)</code>
            <br />
            H1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </h1>
          <h2 class="text-xl">
            <code class="text-sm text-info-500">text-xl (20px)</code>
            <br />
            H2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </h2>
          <h3 class="text-lg">
            <code class="text-sm text-info-500">text-lg (18px)</code>
            <br />
            H3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </h3>
        </div>
      </div>
    </UCard>
    <UCard class="mt-8">
      <template #header>
        <h3 class="text-2xl font-semibold">Spacing</h3>
      </template>
      <p class="text-md font-semibold flex items-center gap-2">
        <UToggle v-model="isSpacingOpen" color="primary" />
        {{ !isSpacingOpen ? "examples" : "description" }}
      </p>
      <div class="flex flex-col gap-4 mt-8" v-if="!isSpacingOpen">
        <p class="mb-2 text-base font-semibold">Minimal recommendation:</p>
        <div class="space-y-2">
          <ul class="list-disc pl-6 space-y-2">
            <li class="p-2">
              Use <span class="text-sm text-info-500">4px (p-1)</span> or
              <span class="text-sm text-info-500">8px (p-2)</span> for small
              internal spacing.
            </li>
            <li class="p-4">
              Use <span class="text-sm text-info-500">16px (p-4)</span> for
              standard sections or containers.
            </li>
            <li class="p-8">
              Use <span class="text-sm text-info-500">32px (p-8)</span> for
              larger sections or page-level padding.
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col gap-4 mt-8" v-if="isSpacingOpen">
        <p class="text-base font-semibold mb-2">Common utility classes:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            Padding:
            <span class="text-sm text-info-500"
              >p-1, p-2, p-4, px-4, py-2, etc.</span
            >
          </li>
          <li>
            Margin:
            <span class="text-sm text-info-500"
              >m-1, m-2, m-4, mb-2, mt-4, etc.</span
            >
          </li>
          <li>
            Gap (for flex/grid):
            <span class="text-sm text-info-500">gap-2, gap-4...</span>
          </li>
        </ul>
      </div>
    </UCard>
  </div>
</template>
<script setup>
const isOpen = ref(false);
const isTypoOpen = ref(false);
const isSpacingOpen = ref(false);
const appConfig = useAppConfig();
const primaryColor = computed(() => appConfig.ui.primary);
</script>
