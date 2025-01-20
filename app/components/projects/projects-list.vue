<template>
  <div class="flex justify-center mt-10">
    <UCard class="w-full w-2/3">
      <UTable :rows="projects" />
    </UCard>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 1,
    name: "E-commerce Platform Redesign",
    description: "Modernizing the user interface and improving checkout flow",
    status: "In Progress",
  },
  {
    id: 2,
    name: "API Authentication Service",
    description: "Implementing OAuth2 and JWT token-based authentication",
    status: "Active",
  },
  {
    id: 3,
    name: "Mobile App Performance Optimization",
    description: "Reducing load times and improving React Native rendering",
    status: "Review",
  },
  {
    id: 4,
    name: "Customer Dashboard Analytics",
    description: "Building real-time data visualization dashboard",
    status: "Planning",
  },
  {
    id: 5,
    name: "Cloud Infrastructure Migration",
    description: "Migrating on-premise services to AWS cloud infrastructure",
    status: "Active",
  },
  {
    id: 6,
    name: "Automated Testing Framework",
    description: "Setting up end-to-end testing with Cypress and Jest",
    status: "Completed",
  },
];
</script>
