<template>
  <div id="timeline">
    <div>
      <h3>Medano Solutions</h3>
      <p class="my-0">Front-end developer</p>
      <p>
        Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub
        very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe
        shoober what a nice floof, borking doggo.
      </p>
    </div>
    <div>
      <h3>Programming & front-end web design course</h3>
      <p class="my-0">Escuela Organización Industrial</p>
      <p>
        Shoober shooberino adorable doggo many pats, heckin good boys many pats
        pupper wrinkler, corgo maximum borkdrive. A frighten puggo wow very
        biscit.
      </p>
      <div class="flex justify-between md:w-1/2 my-4">
        <i class="devicon-babel-original text-5xl"></i>
        <i class="devicon-vuejs-plain text-5xl"></i>
        <i class="devicon-react-plain text-5xl"></i>
        <i class="devicon-javascript-plain text-5xl"></i>
      </div>
    </div>
    <div>
      <h3>Chiquitaweb</h3>
      <p class="my-0">Software Engineer</p>
      <p>
        Big ol h*ck adorable doggo vvv smol borking doggo with a long snoot for
        pats big ol, he made many woofs doing me a frighten puggo wow very
        biscit, ruff fat boi ruff long doggo.
      </p>
      <div class="flex justify-between md:w-1/2 my-4">
        <i class="devicon-wordpress-plain text-5xl"></i>
        <i class="devicon-photoshop-plain text-5xl"></i>
        <i class="devicon-illustrator-plain text-5xl"></i>
        <i class="devicon-vuejs-plain text-5xl"></i>
      </div>
    </div>
    <div>
      <h3>Masters in Software Engineering</h3>
      <p class="my-0">University of Sheffield</p>
      <p>
        Big ol h*ck adorable doggo vvv smol borking doggo with a long snoot for
        pats big ol, he made many woofs doing me a frighten puggo wow very
        biscit, ruff fat boi ruff long doggo.
      </p>
      <div class="flex justify-between md:w-1/2 my-4">
        <i class="devicon-nodejs-plain text-5xl"></i>
        <i class="devicon-android-plain text-5xl"></i>
        <i class="devicon-javascript-plain text-5xl"></i>
        <i class="devicon-rails-plain text-5xl"></i>
      </div>
    </div>
    <div>
      <h3>Preeze</h3>
      <p class="my-0">Full-stack Developer</p>
      <p>
        Long bois mlem I am bekom fat wrinkler puggo maximum borkdrive big ol
        pupper I am bekom fat, fluffer vvv adorable doggo lotsa pats snoot. I am
        bekom fat ur givin me a spook length boy wow very biscit very good spot.
      </p>
      <div class="flex justify-between md:w-1/2 my-4">
        <i class="devicon-javascript-plain text-5xl"></i>
        <i class="devicon-express-original text-5xl"></i>
        <i class="devicon-mongodb-plain text-5xl"></i>
        <i class="devicon-heroku-original text-5xl"></i>
      </div>
    </div>
    <div>
      <h3>Degree in Software Engineering</h3>
      <p class="my-0">University of Sheffield</p>
      <p>
        Big ol h*ck adorable doggo vvv smol borking doggo with a long snoot for
        pats big ol, he made many woofs doing me a frighten puggo wow very
        biscit, ruff fat boi ruff long doggo.
      </p>
      <div class="flex flex-wrap justify-between w-full sm:w-1/2 my-4">
        <i class="devicon-git-plain text-5xl"></i>
        <i class="devicon-java-plain text-5xl"></i>
        <i class="devicon-ruby-plain text-5xl"></i>
        <i class="devicon-python-plain text-5xl"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
};
</script>

<style lang="scss" scoped>
//Colors
$black: #34435e;
$white: #ffffff;

#timeline > div {
  font-size: 1em;
  line-height: 1.75em;
  border-top: 3px solid;
  border-image: linear-gradient(to right, #7f5af0 0%, #d53a9d 100%);
  border-image-slice: 1;
  border-width: 3px;
  margin: 0;
  padding: 40px;
  counter-increment: section;
  position: relative;
  @apply text-paragraph;

  //numbers
  &:before {
    @apply bg-accent text-heading;
    content: counter(section);
    position: absolute;
    border-radius: 50%;
    height: 2em;
    width: 2em;
    text-align: center;
    line-height: 2em;
    color: #ffffff;
    font-size: 1em;
  }
}
//odd number borders
#timeline > div:nth-child(odd) {
  border-right: 3px solid;
  border-left: 0;
  padding-left: 0;

  &:before {
    left: 100%;
    margin-left: -17px;
    background: #d53a9d;
  }
}
//even number borders
#timeline > div:nth-child(even) {
  border-left: 3px solid;
  border-right: 0;

  padding-right: 0;

  &:before {
    right: 100%;
    margin-right: -17px;
  }
}
//handle first and last
#timeline > div:first-child {
  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
#timeline > div:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
