<template>
  <section id="contact">
    <h2 class="sec-title">{{ $t("contact.title") }}</h2>

    <main class="contact-container reveal">
      <form
        action="https://formspree.io/f/mnqybnwq"
        method="post"
        class="form-box"
        id="form-box"
      >
        <div class="field" tabindex="0">
          <label for="fname"
            ><img src="../../assets/img/icons/man.png" alt="man icon" />
            {{ $t("contact.name") }}</label
          >
          <input
            autocomplete="name"
            id="fname"
            required
            name="name"
            type="text"
            placeholder="firstname surname"
          />
        </div>

        <div class="field" tabindex="0">
          <label for="femail"
            ><img src="../../assets/img/icons/mail.png" alt="mail icon" />
            {{ $t("contact.email") }}</label
          >
          <input
            autocomplete="email"
            required
            id="femail"
            name="email"
            type="email"
            placeholder="email@domain.com"
          />
        </div>

        <div class="field" tabindex="0">
          <label for="message"
            ><img
              src="../../assets/img/icons/pen-paper.png"
              alt="pen and paper icon"
            />
            {{ $t("contact.message") }}</label
          >
          <textarea
            name="message"
            minlength="10"
            id="message"
            cols="30"
            rows="4"
            placeholder="type here"
          ></textarea>
        </div>
        <button name="submit" value="Send" type="submit">
          {{ $t("contact.send_btn") }}
        </button>
      </form>
    </main>
  </section>
</template>

<style lang="scss" scoped>

$darkColor: #212222;
$darkGreenColor: #228a30;
$lightBlue: #203c98;
$darkBlue: #172c73;
$lightGreenColor: #39b54a;

$all: all 0.5s ease;

.justify-center {
  justify-content: center;
}

#contact {
  margin-top: 5em;
  min-height: 50vh;
  width: 100%;

  .contact-container {
    height: 500px;
    margin: 0 auto;
    width: 50%;

    .form-box {
      align-items: center;
      display: flex;
      flex-flow: column wrap;
      height: 500px;
      justify-content: center;
      width: 480px;
      margin: 0 auto;

      .field {
        font-size: 1.2rem;
        margin-top: 0.5em;
        padding-bottom: 10px;
        width: 100%;

        label,
        input,
        textarea {
          padding: 10px;
        }

        label {
          color: #ffffff;

          img {
            width: 20px;
          }
        }

        input,
        textarea {
          border: 0;
          border-radius: 3px;
          box-shadow: 0 10px 6px -6px rgb(56, 179, 31);
          outline: none;
        }

        input {
          font-size: 1rem;
          height: 35px;
          width: 450px;
        }

        textarea {
          font-size: 1rem;
          resize: vertical;
          max-height: 210px;
          width: 450px;
        }
      }

      button {
        background-color: transparent;
        border: 3px solid $lightGreenColor;
        border-radius: 30px;
        color: #ffffff;
        font-size: 1.1rem;
        font-weight: bold;
        height: 40px;
        margin-top: 10px;
        transition: 0.2s;
        width: 200px;
      }

      button:hover {
        background-color: #ffffff;
        border-color: $lightGreenColor;
        color: #000000;
        cursor: pointer;
      }
    }
  }
}
@import "@/assets/sass/responsive.scss";
</style>
