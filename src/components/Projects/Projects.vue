<template>
  <section id="projects" ref="comp">
    <h2 class="sec-title">{{ $t("projects.header") }}</h2>

    <div ref="project1" class="project-wrapper animate-2 reveal">
      <div class="project">
        <a
          href="https://github.com/FrederikLandtved/UCLStudievejleder"
          target="_blank"
          aria-label="Link to my first project"
          ><img src="../../assets//img/UCL-case.jpg" alt=""
        /></a>
      </div>

      <div class="desc">
        <h2>UCL Studievejleder</h2>
        <p>{{ $t("projects.ucl_desc1") }}</p>
        <br />
        <p>{{ $t("projects.ucl_desc2") }}</p>
        <p>{{ $t("projects.ucl_desc3") }}</p>
        <a
          href="https://github.com/FrederikLandtved/UCLStudievejleder"
          target="_blank"
          aria-label="Link to my first project"
          ><button class="visit-button">
            {{ $t("projects.git_btn") }}
          </button></a
        >
      </div>
    </div>
    <!-- project-wrapper -->

    <div class="project-wrapper animate-3 reveal">
      <div class="desc">
        <h2>RTID by Ludo</h2>
        <p>{{ $t("projects.rtid_desc1") }}</p>
        <p>{{ $t("projects.rtid_desc2") }}</p>
        <br />
        <p>{{ $t("projects.rtid_desc3") }}</p>

        <a
          href="https://www.rtidbyludo.com/"
          target="_blank"
          aria-label="Link to my second project"
          ><button class="visit-button">
            {{ $t("projects.visit_web") }}
          </button></a
        >
      </div>

      <div class="project">
        <a
          href="https://www.rtidbyludo.com/"
          target="_blank"
          aria-label="Link to my first project"
          ><img src="../../assets/img/rtid-2.jpg" alt="RTID by Ludo"
        /></a>
      </div>
    </div>
    <!-- project-wrapper -->

    <div class="project-wrapper reveal">
      <div class="project">
        <a
          href="https://www.lifeline.sej.one"
          target="_blank"
          aria-label="Link to my third project"
          ><img src="../../assets/img/llr-2.jpg" alt="Lifeline Robotics"
        /></a>
      </div>

      <div class="desc">
        <h2>Lifeline Robotics</h2>
        <p>{{ $t("projects.lr_desc1") }}</p>
        <p>{{ $t("projects.lr_desc2") }}</p>
        <br />
        <p>{{ $t("projects.lr_desc3") }}</p>

        <a
          href="https://www.lifeline.sej.one"
          target="_blank"
          aria-label="Link to my third project"
          ><button class="visit-button">
            {{ $t("projects.visit_web") }}
          </button></a
        >
      </div>
    </div>
    <!-- project-wrapper -->

    <div class="project-wrapper reveal">
      <div class="desc">
        <h2>Webdock</h2>
        <p>{{ $t("projects.wbd_desc1") }}</p>
        <p>{{ $t("projects.wbd_desc2") }}</p>
        <br />
        <p>{{ $t("projects.wbd_desc3") }}</p>
        <a
          href="http://www.bachelor.sej.one"
          target="_blank"
          aria-label="Link to my fourth project"
          ><button class="visit-button">
            {{ $t("projects.visit_web") }}
          </button></a
        >
      </div>

      <div class="project">
        <a
          href="http://www.bachelor.sej.one"
          target="_blank"
          aria-label="Link to my fourth project"
          ><img src="../../assets/img/webdock-2.jpg" alt="Bachelor project"
        /></a>
      </div>
    </div>
    <!-- project-wrapper -->
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
$darkColor: #212222;
$headerColor: #333333;
$orangeColor: #e08814;
$lightBlue: #203c98;
$darkBlue: #192b66;
$lightGreenColor: #39b54a;
$darkGreenColor: #228a30;

#projects {
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 2em;
  width: 100%;

  .project-wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 5em;
    width: 100%;

    .project {
      background-color: black;
      height: 500px;
      width: 50%;

      a {
        img {
          height: 500px;
          opacity: 0.8;
          transition: 0.2s ease-out;
          width: 100%;
        }

        img:hover {
          outline: 3px solid $lightGreenColor;
          cursor: pointer;
          opacity: 1;
        }
      }
    }

    .desc {
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 500px;
      text-align: center;
      width: 50%;

      h2 {
        color: $lightGreenColor;
        font-size: 1.8rem;
      }

      p {
        font-size: 1.1rem;
        padding-left: 1em;
        padding-top: 1em;
      }

      p:nth-child(3) {
        line-height: 1.6rem;
        padding-left: 100px;
        padding-right: 100px;
      }

      a {
        margin-top: 50px;

        .visit-button {
          background-color: transparent;
          border: 3px solid $lightGreenColor;
          border-radius: 30px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: bold;
          height: 40px;
          transition: 0.2s;
          min-width: 220px;
        }

        .visit-button:hover {
          background-color: #ffffff;
          color: #000000;
          cursor: pointer;
        }
      }
    }
  }

  .reveal {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: all 1s ease;
  }

  .reveal.active {
    transform: translateY(0px);
    opacity: 1;
  }
}
@import "@/assets/sass/responsive.scss";
</style>
