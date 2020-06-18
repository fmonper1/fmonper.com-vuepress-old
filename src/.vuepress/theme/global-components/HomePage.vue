<template>
  <div>
    <div class="section text-paragraph">
      <div class="w-full max-w-screen-lg p-8 mx-auto md:text-center">
        <h1 class="text-5xl md:text-6xl">
          Hi, i'm <br />
          Fernando <br />
          Montero
        </h1>
        <p class="text-2xl">Software Engineer & <br />Full-stack Developer</p>
        <div class="flex flex-col mt-2 sm:flex-row md:justify-center">
          <a
            href="https://www.linkedin.com/in/fmonper1/"
            class="inline-block my-2 btn sm:my-0 sm:mr-2"
          >
            <fa-icon icon="linkedin" />
            LinkedIn
          </a>
          <a
            href="https://github.com/fmonper1"
            class="inline-block my-2 btn sm:my-0 sm:mx-2"
          >
            <fa-icon icon="github" />
            Github
          </a>
          <a
            href="https://codepen.io/fmonper1"
            class="inline-block my-2 btn sm:my-0 sm:ml-2"
          >
            <fa-icon icon="codepen" />
            Codepen
          </a>
        </div>
      </div>
    </div>

    <div class="sectionAlt text-paragraph">
      <div class="w-full max-w-screen-md p-8 mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full">
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
            <div class="flex justify-between my-4 md:w-1/2 text-alternative">
              <i class="text-5xl devicon-express-original"></i>
              <i class="text-5xl devicon-vuejs-plain"></i>
              <i class="text-5xl devicon-react-plain"></i>
              <i class="text-5xl devicon-javascript-plain"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section text-paragraph">
      <div class="w-full max-w-screen-lg p-8 mx-auto flex flex-wrap">
        <div class=" w-full ">
          <h2>My Skills</h2>
        </div>
        <div class=" w-full md:w-1/2 px-2">
          <div class="card flex">
            <div>
              <i class="text-5xl devicon-react-plain"></i>
            </div>
            <div class="pl-4">
              <h3>Front-end</h3>
              <div class="flex">
                <pill-item class="rounded-full font-normal">react</pill-item>
                <pill-item class="rounded-full font-normal">vue</pill-item>
                <pill-item class="rounded-full font-normal">parcel</pill-item>
              </div>
            </div>
          </div>
        </div>

        <div class=" w-full md:w-1/2 px-2">
          <div class="card flex">
            <div>
              <i class="text-5xl devicon-nodejs-plain"></i>
            </div>
            <div class="pl-4">
              <h3>Back-end</h3>
              <div class="flex">
                <pill-item class="rounded-full font-normal">REST</pill-item>
                <pill-item class="rounded-full font-normal">node.js</pill-item>
                <pill-item class="rounded-full font-normal">mongo</pill-item>
                <pill-item class="rounded-full font-normal">sql</pill-item>
              </div>
            </div>
          </div>
        </div>

        <div class=" w-full md:w-1/2 px-2">
          <div class="card flex">
            <div>
              <i class="text-5xl devicon-devicon-plain"></i>
            </div>
            <div class="pl-4">
              <h3>Analysis</h3>
              <div class="flex flex-wrap">
                <pill-item class="rounded-full font-normal">
                  google analytics
                </pill-item>
                <pill-item class="rounded-full font-normal">
                  search console
                </pill-item>
              </div>
            </div>
          </div>
        </div>
        <div class=" w-full md:w-1/2 px-2">
          <div class="card flex">
            <div>
              <i class="text-5xl devicon-photoshop-plain"></i>
            </div>
            <div class="pl-4">
              <h3>Design</h3>
              <div class="flex flex-wrap">
                <pill-item class="rounded-full font-normal">
                  photoshop
                </pill-item>
                <pill-item class="rounded-full font-normal">
                  illustrator
                </pill-item>
                <pill-item class="rounded-full font-normal">
                  figma
                </pill-item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full max-w-screen-lg p-8 mx-auto">
        <h2>Timeline</h2>
        <timeline />
      </div>
    </div>
  </div>
</template>

<script>
import FaIcon from "./Atoms/fa-icon";
import Timeline from "./Molecules/Timeline";
import PillItem from "./Atoms/pill-item";
export default {
  name: "HomePage",
  components: { Timeline, FaIcon, PillItem },
};
</script>

<style scoped></style>
