<template>
  <div class="section">
    <div class="w-full max-w-screen-lg mx-auto p-8 flex">
      <div class="w-full md:w-4/5 md:pr-2">
        <ul id="default-layout">
          <li v-for="page in $pagination.pages" class="card">
            <h2>
              <router-link class="page-link" :to="page.path">
                {{ page.title }}
              </router-link>
            </h2>
            <div class="flex flex-wrap">
              <div class="pill" v-for="tag in page.frontmatter.tag">
                {{ tag }}
              </div>
            </div>
          </li>
        </ul>

        <div id="pagination" v-if="$pagination" class="flex">
          <div class="w-1/2 pr-2">
            <router-link
              v-if="$pagination.hasPrev"
              :to="$pagination.prevLink"
              class="btn block"
            >
              Prev
            </router-link>
          </div>

          <div class="w-1/2 pl-2">
            <router-link
              v-if="$pagination.hasNext"
              :to="$pagination.nextLink"
              class="btn block"
            >
              Next
            </router-link>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/5 md:pl-2">
        <ul>
          <li v-for="tag in $tag.list">
            <router-link class="page-link" :to="tag.path">
              {{ tag.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
