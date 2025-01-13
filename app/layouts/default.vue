<template>
  <div class="min-h-[40rem] h-full bg-surface-50 dark:bg-surface-950">
    <div
      class="bg-surface-0 dark:bg-surface-900 py-4 px-12 shadow flex items-center justify-between relative lg:static"
    >
      <svg
        class="h-12 fill-surface-700 dark:fill-surface-200"
        viewBox="0 0 30 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.7207 6.18211L14.9944 3.11148L3.46855 9.28678L0.579749 7.73444L14.9944 0L23.6242 4.62977L20.7207 6.18211ZM14.9996 12.3574L26.5182 6.1821L29.4216 7.73443L14.9996 15.4621L6.37724 10.8391L9.27337 9.28677L14.9996 12.3574ZM2.89613 16.572L0 15.0196V24.2656L14.4147 32V28.8953L2.89613 22.7132V16.572ZM11.5185 18.09L0 11.9147V8.81001L14.4147 16.5376V25.7904L11.5185 24.2312V18.09ZM24.2086 15.0194V11.9147L15.5788 16.5377V31.9998L18.475 30.4474V18.09L24.2086 15.0194ZM27.0969 22.7129V10.3623L30.0004 8.81V24.2653L21.3706 28.895V25.7904L27.0969 22.7129Z"
        />
      </svg>
      <a
        v-styleclass="{
          selector: '@next',
          enterFromClass: 'hidden',
          leaveToClass: 'hidden',
          hideOnOutsideClick: true,
        }"
        class="cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100 mt-1"
      >
        <i class="pi pi-bars text-3xl" />
      </a>
      <div
        class="items-center grow justify-between hidden lg:flex absolute lg:static w-full bg-surface-0 dark:bg-surface-900 left-0 top-full px-12 lg:px-0 z-50 shadow lg:shadow-none"
      >
        <section />
        <ul
          class="list-none p-0 m-0 flex lg:items-center text-surface-900 dark:text-surface-0 select-none flex-col lg:flex-row cursor-pointer"
        >
          <li>
            <NuxtLink
              to="/"
              class="flex px-0 lg:px-8 py-4 hover:text-primary font-medium transition-colors duration-150"
            >
              <span>Home</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/blog"
              class="flex px-0 lg:px-8 py-4 hover:text-primary font-medium transition-colors duration-150"
            >
              <span>Blog</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="flex px-0 lg:px-8 py-4 hover:text-primary font-medium transition-colors duration-150"
            >
              <span>About</span>
            </NuxtLink>
          </li>
        </ul>
        <div
          class="flex justify-between lg:block border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0"
        >
          <Button label="Login" text />
          <Button label="Register" outlined class="ml-4" />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>
