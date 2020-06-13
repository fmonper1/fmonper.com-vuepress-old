<template>
  <div>
    <div class="section text-paragraph">
      <div class="w-full max-w-screen-lg mx-auto p-8">
        <h1 class="text-5xl md:text-6xl">
          Hi, i'm <br />
          Fernando <br />
          Montero
        </h1>
        <p>Software Engineer & <br />Full-stack Developer</p>
        <div class="flex flex-col sm:flex-row">
          <a
            href="https://www.linkedin.com/in/fmonper1/"
            class="btn inline-block my-2 sm:my-0 sm:mr-2"
          >
            <fa-icon icon="linkedin" />
            LinkedIn
          </a>
          <a
            href="https://github.com/fmonper1"
            class="btn inline-block my-2 sm:my-0 sm:mx-2"
          >
            <fa-icon icon="github" />
            Github
          </a>
          <a
            href="https://codepen.io/fmonper1"
            class="btn inline-block my-2 sm:my-0 sm:ml-2"
          >
            <fa-icon icon="codepen" />
            Codepen
          </a>
        </div>
      </div>
    </div>

    <div class="sectionAlt text-paragraph">
      <div class="w-full max-w-screen-lg mx-auto p-8">
        <div class="flex flex-wrap">
          <div class="w-full md:w-2/3 md:pr-4">
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
            <div class="flex justify-between md:w-1/2 my-4 text-alternative">
              <i class="devicon-express-original text-5xl"></i>
              <i class="devicon-vuejs-plain text-5xl"></i>
              <i class="devicon-react-plain text-5xl"></i>
              <i class="devicon-javascript-plain text-5xl"></i>
            </div>
          </div>
          <div class="w-full md:w-1/3">
            <h2>My Skills</h2>
            <ul>
              <li>Vue / Vuepress</li>
              <li>React</li>
              <li>JavaScript ES6 / jQuery</li>
              <li>CSS / SCSS / Tailwind</li>
              <li>RESTful API Services</li>
              <li>SQL / MySql</li>
              <li>MongoDb / Mongoose</li>
            </ul>
            <p>
              Some more buzzwords of tech I've worked and I work with: Node.js,
              npm, git, Docker, Ubuntu, Ruby, Rails, Jira...
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section text-paragraph">
      <div class="w-full max-w-screen-lg mx-auto p-8">
        <h2>Timeline</h2>
        <timeline></timeline>
      </div>
    </div>
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
