<template>
  <div class="section">
    <div class="w-full max-w-lg mx-auto p-8">
      <ul id="default-layout">
        <li v-for="tag in $tag.list">
          <router-link class="page-link" :to="tag.path">{{
            tag.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
