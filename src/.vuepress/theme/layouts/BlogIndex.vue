<template>
  <div class="section">
    <div class="w-full max-w-screen-lg mx-auto p-8">
      <ul id="default-layout">
        <li v-for="page in $pagination.pages" class="card">
          <h2>
            <router-link class="page-link" :to="page.path">
              {{ page.title }}
            </router-link>
          </h2>
        </li>
      </ul>

      <div id="pagination" v-if="$pagination">
        <router-link
          v-if="$pagination.hasPrev"
          :to="$pagination.prevLink"
          class="btn block"
        >
          Prev
        </router-link>
        <router-link
          v-if="$pagination.hasNext"
          :to="$pagination.nextLink"
          class="btn block"
        >
          Next
        </router-link>
      </div>
      <ul>
        <li v-for="tag in $tag.list">
          <router-link class="page-link" :to="tag.path">
            {{ tag.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
