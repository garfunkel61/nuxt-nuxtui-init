<template>
  <UContainer class="mt-20">
    <UCard>
      <template #header>
        <h1 class="text-2xl font-bold">About Us</h1>
      </template>

      <div class="space-y-4">
        <p class="text-lg">
          We are passionate about creating innovative solutions that make a
          difference. Our team is dedicated to delivering high-quality products
          and exceptional service.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <UCard v-for="(stat, index) in stats" :key="index">
            <div class="text-center">
              <div class="text-3xl font-bold">{{ stat.value }}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ stat.label }}
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
interface Stat {
  value: string | number;
  label: string;
}

const stats: Stat[] = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];
</script>
