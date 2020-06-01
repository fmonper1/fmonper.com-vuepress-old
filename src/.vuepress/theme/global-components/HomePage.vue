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
        <a
          href="https://www.linkedin.com/in/fmonper1/"
          class="btn inline-block"
        >
          <fa-icon icon="linkedin" />
          LinkedIn
        </a>
        <a href="https://github.com/fmonper1" class="btn inline-block">
          <fa-icon icon="github" />
          Github
        </a>
        <a href="https://codepen.io/fmonper1" class="btn inline-block">
          <fa-icon icon="codepen" />
          Codepen
        </a>
      </div>
    </div>

    <div class="sectionAlt text-paragraph">
      <div class="w-full max-w-screen-lg mx-auto p-8">
        <h2>About Me</h2>
        <p>I am a Full-Stack Developer from the Canary Islands, Spain.</p>

        <p>
          I studied a masters in Software Engineering @ The University of
          Sheffield, UK.
        </p>

        <p>
          Currently working as a Front-End Developer @
          <a href="https://medanosol.es" class="underline" target="_blank">
            MedanoSolutions.
          </a>
        </p>
        <div class="flex justify-between md:w-1/2 my-4">
          <i class="devicon-express-original text-5xl"></i>
          <i class="devicon-vuejs-plain text-5xl"></i>
          <i class="devicon-react-plain text-5xl"></i>
          <i class="devicon-javascript-plain text-5xl"></i>
        </div>
      </div>
    </div>
    <div class="section text-paragraph">
      <div class="w-full max-w-screen-lg mx-auto p-8">
        <h2>Timeline</h2>
        <timeline></timeline>
      </div>
    </div>

    <!--    <div class="section text-paragraph">-->
    <!--      <div class="w-full max-w-screen-lg mx-auto p-8">-->
    <!--        <h2>Things I've Done</h2>-->
    <!--        <div class="flex flex-wrap">-->
    <!--          <div class="w-full md:w-1/3 pr-2 mb-2">-->
    <!--            <div class="card mb-8">-->
    <!--              <a href="https://csgoconsole.com" target="_blank">-->
    <!--                <div-->
    <!--                  class="rounded-sm mb-4 h-40 bg-cover bg-center"-->
    <!--                  style="-->
    <!--                    background-image: url('https://csgoconsole.com/assets/posts/launch-post.png');-->
    <!--                  "-->
    <!--                ></div>-->
    <!--              </a>-->
    <!--              <h3>-->
    <!--                <a href="https://csgoconsole.com" target="_blank"-->
    <!--                  >CSGOConsole.com</a-->
    <!--                >-->
    <!--              </h3>-->
    <!--              <p>-->
    <!--                This is a side-project I developed to share my knowledge on-->
    <!--                Counter Strike configuration.-->
    <!--              </p>-->
    <!--              <div class="flex flex-wrap">-->
    <!--                <div class="pill">Vue</div>-->
    <!--                <div class="pill">Vuepress</div>-->
    <!--                <div class="pill">Markdown</div>-->
    <!--                <div class="pill">SSG</div>-->
    <!--                <div class="pill">Netlify</div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="w-full md:w-1/3 pr-2 mb-2">-->
    <!--            <div class="card mb-8">-->
    <!--              <a href="https://preeze.co.uk" target="_blank">-->
    <!--                <div-->
    <!--                  class="rounded-sm mb-4 h-40 bg-cover bg-top bg-center"-->
    <!--                  style="-->
    <!--                    background-image: url('https://i.imgur.com/3V5Uvs4.png');-->
    <!--                  "-->
    <!--                ></div>-->
    <!--              </a>-->
    <!--              <h3><a href="https://preeze.co.uk" target="_blank">Preeze</a></h3>-->
    <!--              <p>-->
    <!--                I developed a tailored e-commerce solution for a startup in-->
    <!--                Sheffield.-->
    <!--              </p>-->
    <!--              <p>-->
    <!--                The application would allow users to purchase alcoholic-->
    <!--                beverages and get them delivered to them.-->
    <!--              </p>-->
    <!--              <div class="flex flex-wrap">-->
    <!--                <div class="pill">Node</div>-->
    <!--                <div class="pill">Express</div>-->
    <!--                <div class="pill">MongoDB</div>-->
    <!--                <div class="pill">Stripe</div>-->
    <!--                <div class="pill">Heroku</div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->

    <!--          <div class="w-full md:w-1/3 pr-2 mb-2">-->
    <!--            <div class="card mb-8">-->
    <!--              <a href="https://eoi-blackjack.netlify.app/" target="_blank">-->
    <!--                <div-->
    <!--                  class="rounded-sm mb-4 h-40 bg-cover"-->
    <!--                  style="-->
    <!--                    background-image: url('https://i.imgur.com/J3GvAQv.png');-->
    <!--                  "-->
    <!--                ></div>-->
    <!--              </a>-->

    <!--              <h3>-->
    <!--                <a href="https://eoi-blackjack.netlify.app/" target="_blank"-->
    <!--                  >EOI Blackjack</a-->
    <!--                >-->
    <!--              </h3>-->
    <!--              <p>-->
    <!--                This is a side project developed by me and a group of friends-->
    <!--                during a Frontend Course we were enrolled in.-->
    <!--              </p>-->
    <!--              <p>-->
    <!--                We built a game of blackjack on top of the-->
    <!--                <a href="https://deckofcardsapi.com/" target="_blank"-->
    <!--                  >Deck of Cards API</a-->
    <!--                >-->
    <!--                using Parcel and Javascript.-->
    <!--              </p>-->

    <!--              <div class="flex flex-wrap">-->
    <!--                <div class="pill">Parcel</div>-->
    <!--                <div class="pill">Typescript</div>-->
    <!--                <div class="pill">Axios</div>-->
    <!--                <div class="pill">Netlify</div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="w-full md:w-1/3">-->
    <!--            <div class="card">-->
    <!--              <div-->
    <!--                class="rounded-sm mb-4 h-40 bg-cover"-->
    <!--                style="-->
    <!--                  background-image: url('https://i.imgur.com/NESnhxV.png 1');-->
    <!--                "-->
    <!--              ></div>-->

    <!--              <h3>-->
    <!--                <a href="https://eoi-blackjack.netlify.app/" target="_blank">-->
    <!--                  Virtual Reality Crime Scene Investigation-->
    <!--                </a>-->
    <!--              </h3>-->
    <!--              <p>-->
    <!--                I had the chance to develop a virtual reality game for the-->
    <!--                <a-->
    <!--                  href="https://www.nationalcrimeagency.gov.uk/"-->
    <!--                  target="_blank"-->
    <!--                  >NCA</a-->
    <!--                >-->
    <!--                as my dissertation project.-->
    <!--              </p>-->
    <!--              <p>-->
    <!--                <a-->
    <!--                  href="https://www.youtube.com/watch?v=SjfPPY-abPg/"-->
    <!--                  target="_blank"-->
    <!--                >-->
    <!--                  Playthrough-->
    <!--                </a>-->
    <!--                - -->
    <!--                <a-->
    <!--                  href="/Investiganting_Crime_Scenes_In_Virtual_Reality.pdf"-->
    <!--                  target="_blank"-->
    <!--                >-->
    <!--                  Dissertation-->
    <!--                </a>-->
    <!--              </p>-->

    <!--              <div class="flex flex-wrap">-->
    <!--                <div class="pill">Unity3D</div>-->
    <!--                <div class="pill">C#</div>-->
    <!--                <div class="pill">VRTK</div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import FaIcon from "./Atoms/fa-icon";
import Timeline from "./Molecules/Timeline";
export default {
  name: "HomePage",
  components: { Timeline, FaIcon },
};
</script>

<style scoped></style>
