<template>
  <section id="skills">
    <h2 class="sec-title">{{ $t("skills.title") }}</h2>
    <div class="skills-wrapper">
      <div class="skills-box">
        <div class="skills-box-content">
          <div class="skills-box-content-list">
            <h4>{{ $t("skills.c_language") }}</h4>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/html.png" alt="HTML and CSS" />
              <p>HTML/CSS</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/sass.png" alt="Sass" />
              <p>Sass</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/js.png" alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/ts.png" alt="TypeScript" />
              <p>TypeScript</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/php.png" alt="PHP" />
              <p>PHP</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/c-sharp.png" alt="C sharp" />
              <p>C#</p>
            </div>
          </div>
          <div class="skills-box-content-divider"></div>
          <div class="skills-box-content-list">
            <h4>{{ $t("skills.frameworks") }}</h4>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/vue.png" alt="Vue" />
              <p>Vue</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/angular.png" alt="Angular" />
              <p>Angular</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/react.png" alt="ReactJS" />
              <p>ReactJS</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/bootstrap.png" alt="Bootstrap" />
              <p>Bootstrap</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/tailwind.png" alt="Tailwind" />
              <p>Tailwind</p>
            </div>
          </div>
        </div>
      </div>
      <div class="skills-box">
        <div class="skills-box-content">
          <div class="skills-box-content-list">
            <h4>{{ $t("skills.databases") }}</h4>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/mysql.png" alt="MySQL" />
              <p>MySQL</p>
            </div>
            <div class="skills-box-content-list-item">
              <img
                src="../../assets/img/icons/mongodb.png"
                alt="Mongo Database"
              />
              <p>MongoDB</p>
            </div>
            <div class="skills-box-content-list-item">
              <img
                src="../../assets/img/icons/firebase.png"
                alt="Google Firebase"
              />
              <p>Firebase</p>
            </div>
            <div class="skills-box-content-list-item">
              <img
                src="../../assets/img/icons/sql.png"
                alt="Azure SQL Database"
              />
              <p>Azure SQL</p>
            </div>
          </div>
          <div class="skills-box-content-divider"></div>
          <div class="skills-box-content-list">
            <h4>{{ $t("skills.o_tools") }}</h4>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/git.png" alt="Git" />
              <p>Git</p>
            </div>
            <div class="skills-box-content-list-item">
              <img
                src="../../assets/img/icons/wordpress-green.png"
                alt="WordPress"
              />
              <p>WordPress</p>
            </div>
            <div class="skills-box-content-list-item">
              <img
                src="../../assets/img/icons/azuredevops.png"
                alt="Azure DevOps"
              />
              <p>Azure DevOps</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/cypress.png" alt="Cypress" />
              <p>Cypress</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/rest.png" alt="Restful API" />
              <p>Rest API</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="skills-wrapper">
      <div class="skills-box">
        <div class="skills-box-content">
          
          <div class="skills-box-content-list">
            <h4>{{ $t("skills.adobe") }}</h4>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/adobe-xd.png" alt="Vue" />
              <p>XD</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/adobe-photoshop.png" alt="Angular" />
              <p>Photoshop</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/adobe-indesign.png" alt="ReactJS" />
              <p>InDesign</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/adobe-illustrator.png" alt="Bootstrap" />
              <p>Illustrator</p>
            </div>
          </div>
          <div class="skills-box-content-divider"></div>
          <div class="skills-box-content-list">
            <h4>{{ $t("skills.design") }}</h4>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/figma.png" alt="HTML and CSS" />
              <p>Figma</p>
            </div>
            <div class="skills-box-content-list-item">
              <img src="../../assets/img/icons/canva.png" alt="Sass" />
              <p>Canva</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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

#skills {
  min-height: 60vh;
  width: 100%;

  .skills-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    max-width: 100%;

    .skills-box {
      align-items: flex-start;
      border: 2px solid $lightGreenColor;
      border-radius: 10px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      display: flex;
      min-height: 320px;
      justify-content: center;
      margin-top: 2em;
      padding: 1.5rem;
      width: 450px;

      .skills-box-content {
        align-items: flex-start;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;

        .skills-box-content-list {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          width: 100%;

          h4 {
            color: #ffffff;
            font-size: 1.4rem;
            text-align: left;
          }

          .skills-box-content-list-item {
            align-items: center;
            display: flex;
            flex-direction: row;
            margin-top: 1em;

            img {
              width: 24px;
            }

            p {
              color: #ffffff;
              margin-inline-start: 0.75rem;
              text-align: left;
            }
          }
        }
      }

      .skills-box-content:nth-child(1) {
        width: 90%;
      }

      .skills-box-content-divider {
        align-self: stretch;
        border: 1px solid $lightGreenColor;
        border-width: 1px;
        height: auto;
        margin: 0 3.5rem;
        width: auto;
      }
    }
  }
}
</style>
