<template>
  <div class="section">
    <div class="w-full max-w-screen-lg mx-auto p-8">
      <ul id="default-layout" v-if="$pagination.pages">
        <li v-for="page in $pagination.pages">
          <router-link class="page-link" :to="page.path">
            {{ page.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
