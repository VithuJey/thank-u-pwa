import React from "react";
// Import images
import logo from "./images/icons/fiverr2.png";
// Import stylesheets
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./fonts/iconic/css/material-design-iconic-font.min.css";
import "./vendor/animate/animate.css";
import "./vendor/select2/select2.min.css";
import "./css/util.css";
import "./css/main.css";

function App() {
  return (
    <div>
      <div class="flex-w flex-str size1 overlay1">
        <div class="flex-w flex-col-sb wsize1 bg0 p-l-65 p-t-37 p-b-50 p-r-80 respon1">
          <div class="wrappic1">
            <a href="index.html">
              <h3
                class="m2-txt1 respon3"
                Style="font-size: 3rem; color: black;"
              >
                <b>
                  <mark Style="background: linear-gradient(180deg, rgba(255,255,255,0) 62%, gold 62%);">
                    {" "}
                    Vithushan Jey{" "}
                  </mark>
                </b>
              </h3>
            </a>
          </div>

          <div class="w-full flex-c-m p-t-120 p-b-90">
            <div class="wsize2">
              <h3 class="l1-txt1 p-b-48 respon3">Thank You</h3>

              <p class="m2-txt1 p-b-30 text-justify">
                I’m so grateful to be working with you. Thanks for putting your
                trust on me. Please keep me in mind for future projects. 🤝
              </p>
            </div>
          </div>

          <div class="flex-w">
            <a
              target="blank"
              href="https://www.fiverr.com/vithushanjey"
              class="size3 flex-c-m how-social trans-8 m-r-15 m-b-10"
            >
              <img
                src={logo}
                alt="fiver"
                Style="width: 1.2rem; height: 1.2rem;"
              ></img>
            </a>
          </div>
        </div>

        <div class="wsize1 simpleslide100-parent respon2">
          <div class="simpleslide100">
            <div class="simpleslide100-item bg-img1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
