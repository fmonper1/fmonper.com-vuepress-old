<template>
  <div class="section">
    <div class="w-full max-w-screen-lg mx-auto p-8">
      <ul id="default-layout" v-if="$pagination">
        <li v-for="page in $pagination.pages" class="card">
          <h2>
            <router-link class="page-link" :to="page.path">
              {{ page.title }}
            </router-link>
          </h2>
        </li>
      </ul>
      <Content />
      <div id="pagination" v-if="$pagination">
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">
          Prev
        </router-link>
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">
          Next
        </router-link>
      </div>
    </div>
  </div>
</template>
