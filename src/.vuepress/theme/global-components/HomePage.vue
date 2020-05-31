<template>
  <div>
    <div class="section text-paragraph">
      <div class="w-full max-w-screen-lg mx-auto p-8">
        <h1>
          Hi, i'm <br />
          Fernando <br />
          Montero
        </h1>
        <p>Software Engineer & <br />Full-stack Developer</p>
        <a href="#" class="btn">Github</a>
        <a href="#" class="btn">Github</a>
        <a href="#" class="btn">Github</a>
      </div>
    </div>

    <div class="sectionAlt text-paragraph">
      <div class="w-full max-w-screen-lg mx-auto p-8">
        <h2>About Me</h2>
        <p>I am a full-stack developer from the Canary Islands, Spain.</p>

        <p>
          I have a Masters in Software Engineering from The University of
          Sheffield, UK
        </p>

        <p>I am currently <a href="#" class="underline">unemployed.</a></p>
      </div>
    </div>

    <div class="section text-paragraph">
      <div class="w-full max-w-screen-lg mx-auto p-8">
        <h2>Things I've Done</h2>
        <div class="card mb-8">
          <a href="https://csgoconsole.com">
            <div
              class="rounded-sm mb-4 h-40 bg-cover bg-center"
              style="
                background-image: url('https://csgoconsole.com/assets/posts/launch-post.png');
              "
            ></div>
          </a>
          <h3><a href="https://csgoconsole.com">CSGOConsole.com</a></h3>
          <p>
            This is a side-project I developed to share my knowledge on Counter
            Strike configuration.
          </p>
          <div class="flex flex-wrap">
            <div class="pill">Vue</div>
            <div class="pill">Vuepress</div>
            <div class="pill">Markdown</div>
            <div class="pill">SSG</div>
            <div class="pill">Netlify</div>
          </div>
        </div>

        <div class="card mb-8">
          <a href="https://eoi-blackjack.netlify.app/">
            <div
              class="rounded-sm mb-4 h-40 bg-cover"
              style="background-image: url('https://i.imgur.com/J3GvAQv.png');"
            ></div>
          </a>

          <h3>
            <a href="https://eoi-blackjack.netlify.app/">EOI Blackjack</a>
          </h3>
          <p>
            This is a side project developed by me and a group of friends during
            a Frontend Course we were enrolled in.
          </p>
          <p>
            We built a game of blackjack on top of the
            <a href="https://deckofcardsapi.com/">Deck of Cards API</a> using
            Parcel and Javascript.
          </p>

          <div class="flex flex-wrap">
            <div class="pill">Parcel</div>
            <div class="pill">Typescript</div>
            <div class="pill">Axios</div>
            <div class="pill">Netlify</div>
          </div>
        </div>

        <div class="card">
          <div
            class="rounded-sm mb-4 h-40 bg-cover"
            style="background-image: url('https://i.imgur.com/NESnhxV.png 1');"
          ></div>

          <h3>
            <a href="https://eoi-blackjack.netlify.app/">
              Virtual Reality Crime Scene Investigation
            </a>
          </h3>
          <p>
            I had the chance to develop a virtual reality game for the NCA as my
            dissertation project.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=SjfPPY-abPg/">
              Playthrough
            </a>
            -
            <a href="/Investiganting_Crime_Scenes_In_Virtual_Reality.pdf">
              Dissertation
            </a>
          </p>

          <div class="flex flex-wrap">
            <div class="pill">Unity3D</div>
            <div class="pill">C#</div>
            <div class="pill">VRTK</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped></style>
