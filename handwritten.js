:root {
    --color-purple: #90a8ed;
    --color-yellow: #ffd02c;
    --color-green: #1fa95b;
    --color-lightblue: #f0f5fe;
    --color-gray: #efefef;
    --color-darkgray: gray;
    --color-black: #000;
    --font-size-default: 18px;
    --font-size-small: 16px;
    --font-size-xsmall: 14px;
    --font-size-h1: 42px;
    --font-size-h2: 36px;
    --font-size-h3: 28px;
    --font-size-h4: 24px;
    --font-size-h5: 22px;
    --border-radius-large: 12px;
    --border-radius-default: 7px;
    --fontweight-light: 300;
    --fontweight-regular: 500;
    --fontweight-semibold: 600;
    --fontweight-bold: 700;
    --fontweight-black: 900;
    --border-default: 1px solid #000;
    --box-shadow: 2px 2px 0px #000
}

body::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
    cursor: pointer;
    border: 1px solid #c4c4c4;
    cursor: pointer !important
}

body::-webkit-scrollbar-thumb {
    background: gray;
    cursor: pointer !important
}

* {
    box-sizing: border-box
}

body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0
}

.darkmode {
    background: #2e2e2c !important
}

.darkmode .edtpd-feedback-modal .modal-content input {
    background: #202020 !important
}

.darkmode div#chat-widget-container {
    background: 0 0 !important;
    background-color: transparent !important;
    background-color: transparent !important
}

.darkmode div:not(#paper *),
.darkmode span:not(#paper *),
.darkmode div:not(#chat-widget-container),
.darkmode div:not(#chat-widget-container *),
.darkmode .content div,
.darkmode .content span,
.darkmode .btnSec button,
.darkmode .btnSec button span,
.darkmode .ql-title,
.darkmode #filter__notes,
.darkmode .download__popup>div>div>div,
.darkmode .download__popup>div>div>a,
.darkmode #contentSec,
.darkmode .footer *,
.darkmode #contentSec>div {
    background-color: #2e2e2c !important;
    color: #fff !important
}

.darkmode div#chat-widget-container {
    background: 0 0 !important;
    background-color: transparent !important;
    background-color: transparent !important
}

.darkmode #mceu_15 * {
    background-color: #eee8aa !important;
    color: #000 !important
}

.darkmode #contentSec {
    border: 1px solid #d3d3d3
}

.darkmode #contentSec a {
    color: #007bff !important
}

.darkmode .download__popup {
    background: #51514f !important
}

.darkmode .download__popup>* {
    background: #51514f !important
}

.darkmode .download__popup a {
    border: 1px solid #d3d3d3 !important
}

.darkmode a:not(.nav__premium) {
    color: #fff
}

.darkmode .nav__right__btn a {
    color: #000 !important
}

.darkmode .mob-menu-icon div {
    background: #fff !important
}

.darkmode #topnavbar {
    background: #2e2e2c !important
}

.darkmode textarea {
    background-color: #202020 !important;
    color: #fff !important
}

.darkmode .content img {
    opacity: .8
}

.darkmode svg {
    fill: #fff
}

.darkmode #btnSec {
    display: flex;
    align-items: center
}

#btnSec .uplBtn2 {
    margin: 0 !important
}

.darkmode #uplBtn img,
.darkmode #btnSec button img {
    filter: brightness(0) saturate(100%) invert(99%) sepia(3%) saturate(1108%) hue-rotate(239deg) brightness(116%) contrast(100%) !important;
    margin: 0 5px !important
}

.footer {
    width: 100%;
    display: block;
    text-align: center;
    font-family: arial;
    font-size: 14px;
    margin-top: 50px
}

.footer li {
    list-style: none;
    display: inline-block;
    margin-bottom: 5px
}

@media(max-width:600px) {
    .header .logo {
        margin: 0;
        margin-top: 7px;
        display: block;
        text-align: center;
        order: 0
    }

    .header .navbar {
        display: none;
        margin: 0;
        text-align: center;
        width: 100%;
        order: 2
    }

    .header .navbar li {
        display: block
    }

    .header .navbar li a {
        display: block;
        padding: 10px
    }

    .header {
        justify-content: space-between
    }
}

@media only screen and (max-width:1024px) {
    .sticky__sidebar__add {
        margin-left: 0;
        margin-right: 10px
    }
}

.menBtn {
    border-radius: 4px;
    background: grey;
    cursor: pointer;
    border: none;
    color: #fff;
    display: inline-block;
    padding: 5px 13px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.gg-sun {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    background: linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px -6px/2px 6px, linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px 14px/2px 6px, linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat -8px 5px/6px 2px, linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 14px 5px/6px 2px;
    border-radius: 100px;
    box-shadow: inset 0 0 0 2px;
    border: 6px solid transparent
}

.app__header--dark--span {
    transition: all .2s;
    width: 26px;
    display: flex;
    height: 26px;
    justify-content: center;
    align-items: center;
    transform: rotate(0);
    cursor: pointer
}

.gg-sun::before {
    transform: rotate(-45deg)
}

.gg-sun::after,
.gg-sun::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 2px;
    border-right: 4px solid;
    border-left: 4px solid;
    left: -6px;
    top: 5px
}

.gg-sun::after {
    transform: rotate(45deg)
}

.gg-sun::after,
.gg-sun::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 2px;
    border-right: 4px solid;
    border-left: 4px solid;
    left: -6px;
    top: 5px
}

#app__header--dark:hover .app__header--dark--span {
    transform: rotate(-25deg)
}

#app__header--dark::before {
    border-left-color: #fff
}

#app__header--dark:hover::after {
    background: #fff;
    color: #fff;
    display: none
}

#app__header--dark::after {
    content: attr(tooltip);
    text-align: center;
    min-width: 3rem;
    max-width: 21rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1.4ch 2.5ch;
    border-radius: .8ch;
    box-shadow: 0 .1rem .2rem -.5em rgb(0 0 0/35%);
    background: var(--hover-color);
    color: var(--main-bg);
    z-index: 1000;
    display: none
}

#app__header--dark {
    height: 26px;
    padding: 0;
    width: 26px;
    margin: 0
}

.uplBtn {
    border-radius: 4px;
    background: grey;
    cursor: pointer;
    border: none;
    color: #fff;
    display: inline-block;
    padding: 3px 13px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.darkmode #search-bar-global .autocomplete-items a {
    background: #565656 !important;
    color: #fff !important
}

#search-bar-global .autocomplete-items a pre {
    margin: auto 0;
    overflow: hidden;
    font-family: arial
}

.darkmode .search-icon-image {
    filter: invert(1)
}

.search-top {
    cursor: pointer;
    margin-left: 20px
}

.darkmode #search-bar-global,
#search-bar-global {
    display: none;
    height: 100%;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 88888888;
    padding: 10px;
    background: #000a !important
}

.search-icon-image {
    height: 24px;
    width: 24px
}

#search-bar-global input[type=search] {
    width: 100%;
    border: 0;
    padding: 15px;
    font-size: 18px;
    outline: 0;
    border-radius: 0 !important;
    box-shadow: 3px 3px 0 #000;
    border: 1px solid #000
}

#search-bar-global .close-search {
    position: absolute;
    top: 70px !important;
    right: 28px !important;
    cursor: pointer;
    font-size: 3em !important;
    line-height: 0;
    color: #fff !important
}

#search-bar-global .close-search:hover {
    color: red !important
}

#search-bar-global .autocomplete {
    position: relative;
    background: 0 0 !important;
    display: inline-block;
    width: 100%;
    padding: 35px 80px 0 !important
}

#search-bar-global .autocomplete-items {
    padding: 10px;
    position: absolute;
    z-index: 99;
    background: #fff;
    top: 100%;
    margin: 0 80px;
    display: flex;
    flex-wrap: wrap;
    left: 0;
    right: 0;
    align-content: flex-start;
    max-height: 70vh;
    overflow-y: auto
}

#search-bar-global .autocomplete-items a {
    text-decoration: none;
    color: #000;
    margin: 5px;
    cursor: pointer;
    width: 24%;
    font-size: 14px;
    background: #e9e9e9;
    display: flex !important;
    flex-wrap: wrap;
    align-items: center !important
}

#search-bar-global .autocomplete-active {
    background-color: DodgerBlue !important;
    color: #fff
}

.search__bar__other__lan {
    display: flex;
    margin-top: 10px;
    border-top: 1px solid #d9d9d9;
    flex-wrap: wrap;
    padding-top: 10px;
    width: 100%
}

@media(max-width:767px) {
    #search-bar-global .autocomplete-items {
        overflow-y: scroll;
        height: 400px
    }

    #search-bar-global .autocomplete {
        padding: 50px 30px 0 !important
    }

    #search-bar-global .autocomplete-items {
        margin: 0 30px
    }

    #search-bar-global .autocomplete-items a {
        width: 100%
    }

    #search-bar-global .close-search {
        top: 85px !important;
        right: 10px !important;
        font-size: 4em
    }

    .footer {
        padding: 0 !important
    }
}

* {
    outline: 0;
    box-sizing: border-box
}

#edpd_global_copy_alert {
    position: fixed;
    right: 0;
    top: 50px;
    z-index: 9999;
    background: #60cc79;
    color: #fff;
    padding: 10px;
    box-shadow: 2px 2px 10px -2px #aaa;
    border: 1px solid #5aca75;
    border-radius: 5px;
    font-size: 16px;
    transition: opacity .5s
}

#edpd_global_copy_alert.edpd-deactive-alert {
    transform: translate(210px);
    transition: transform 1s ease
}

#edpd_global_copy_alert.edpd-active-alert {
    transition: transform 1s ease;
    transform: translate(-20px)
}

#adngin-sidebar_4-0 {
    margin-right: 6rem
}

.bg-gry {
    background: #a9a9a9 !important
}

.flex-row~.flex-row>.flex-col {
    order: 2
}

.flex-row~.flex-row>.flex-col~.flex-col {
    order: 1
}

.shine-box {
    position: relative;
    overflow: hidden
}

.shine-box:before {
    position: absolute;
    top: 0;
    left: -500px;
    width: 120px;
    height: 500px;
    background: rgba(255, 255, 255, .6)
}

@-webkit-keyframes shine {
    from {
        left: -500px
    }

    to {
        left: 655px
    }
}

@keyframes shine {
    from {
        left: -500px
    }

    to {
        left: 655px
    }
}

.shine-box-before-avtive::before {
    content: "";
    -webkit-transform: skew(-50deg);
    -ms-transform: skew(-50deg);
    transform: skew(-50deg);
    -webkit-animation: shine 3s ease infinite;
    animation: shine 3s ease infinite
}

.loginfadeInDown a {
    color: #92badd;
    display: inline-block;
    text-decoration: none;
    font-weight: 400
}

.login-model h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    margin: 10px 8px;
    color: #ccc
}

.loginfadeInDown {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 20px
}

.loginfadeInDown #formContent {
    background: #fff;
    padding: 30px;
    width: 90%;
    max-width: 450px;
    position: relative;
    padding: 0;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6% !important;
    border: 1px solid #000;
    -webkit-box-shadow: 3px 3px 0 #000;
    box-shadow: 3px 3px 0 #000
}

.loginfadeInDown #formFooter {
    background-color: #f6f6f6;
    border-top: 1px solid #dce8f1;
    padding: 25px;
    text-align: center;
    -webkit-border-radius: 0 0 10px 10px;
    border-radius: 0 0 10px 10px
}

.loginfadeInDown h2.inactive {
    color: #ccc
}

.loginfadeInDown h2.active {
    color: #2c3e4f;
    border-bottom: 2px solid #9b9797
}

.loginfadeInDown input[type=button],
.loginfadeInDown input[type=submit],
.loginfadeInDown input[type=reset],
.loginfadeInDown .verifybtn {
    background-color: #007bff;
    border: none;
    color: #fff;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 20px
}

.loginfadeInDown input[type=button]:hover,
.loginfadeInDown input[type=submit]:hover,
.loginfadeInDown input[type=reset]:hover {
    background-color: #d83634;
    cursor: pointer
}

.loginfadeInDown input[type=text],
.loginfadeInDown input[type=password],
.loginfadeInDown input[type=email] {
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    border: unset;
    background-color: #fff;
    color: #000;
    border-bottom: 2px solid #9b9797
}

.loginfadeInDown input[type=text]::placeholder,
.loginfadeInDown input[type=email]::placeholder,
.loginfadeInDown input[type=password]::placeholder {
    color: #ccc
}

.loginfadeInDown form {
    margin-top: 0
}

.loginfadeInDown {
    position: fixed;
    z-index: 999;
    top: 0;
    display: none
}

#close_login_popup:hover,
.loginfadeInDown h2:hover {
    cursor: pointer
}

#close_login_popup-word:hover,
.loginfadeInDown h2:hover {
    cursor: pointer
}

.login_form_tab,
.signup_form_tab {
    color: #2c3e4f
}

.loginfadeInDown .googleBtn {
    padding-top: 11px;
    background: #fff 0 0 no-repeat padding-box;
    box-shadow: 0 3px 8px #00000036;
    border-radius: 32px;
    opacity: 1;
    width: 200px;
    height: 49px;
    border: 2px solid #fff;
    color: #000;
    text-decoration: none;
    margin-bottom: 5px
}

.loginfadeInDown .alert-danger,
.loginfadeInDown .alert-success {
    margin-left: 50px;
    margin-right: 50px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    color: #fff;
    display: none
}

.loginfadeInDown .alert-danger {
    background: #d108089c
}

.loginfadeInDown .alert-success {
    background-color: #c9302c
}

.btn-login:hover {
    color: #fff
}

.loginfadeInDown #icon {
    width: 100px;
    margin-top: 10px;
    margin-bottom: 15px
}

@media only screen and (max-width:500px) {
    .loginfadeInDown #icon {
        width: 80px
    }
}

.loginfadeInDown input[type=button]:hover,
.loginfadeInDown input[type=submit]:hover,
.loginfadeInDown input[type=reset]:hover {
    background-color: #007bff;
    cursor: pointer
}

.loginfadeInDown a:hover {
    color: #c9302c;
    cursor: pointer
}

.alert-danger {
    color: #000;
    background-color: #ebf6ff !important;
    border-color: #f5c6cb;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px
}

.alert {
    position: relative;
    padding: .75rem 1.25rem;
    text-align: center;
    border: 1px solid transparent;
    border-radius: .25rem
}

.alertimg {
    width: 275px !important
}

@media screen and (max-width:320px) {
    .alertimg {
        width: 239px !important
    }
}

.menBtn {
    border-radius: 4px;
    background: grey;
    cursor: pointer;
    border: none;
    color: #fff;
    display: inline-block;
    padding: 5px 13px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.shine-box-before-avtive::before {
    content: "";
    -webkit-transform: skew(-50deg);
    -ms-transform: skew(-50deg);
    transform: skew(-50deg);
    -webkit-animation: shine 3s ease infinite;
    animation: shine 3s ease infinite
}

.shinebox:before {
    position: absolute;
    top: 0;
    left: -500px;
    width: 120px;
    height: 500px;
    background: rgba(255, 255, 255, .6)
}

.g-recaptcha {
    -ms-transform: scale(.85);
    transform: scale(.85);
    -webkit-transform: scale(.85);
    width: 304px !important;
    height: 78px !important;
    margin: 0 auto !important
}

.captcha-model {
    background: rgba(0, 0, 0, .4);
    display: none;
    height: 100%;
    position: fixed;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10000
}

.captcha-model .helper-span {
    display: inline-block;
    height: 100%;
    vertical-align: middle
}

.captcha-model>div {
    background-color: #fff;
    -webkit-box-shadow: 10px 10px 60px #555;
    box-shadow: 10px 10px 60px #555;
    display: inline-block;
    padding: 0 !important;
    height: auto;
    max-height: 100%;
    max-width: 360px;
    min-width: 300px;
    vertical-align: middle;
    width: 50%;
    position: relative;
    border-radius: 20px;
    padding: 0 0 40px
}

.ppsbox-heading {
    font-size: 25px;
    color: #000;
    text-transform: capitalize;
    font-weight: 500
}

#ppsbox>div>p {
    margin-top: 12px !important
}

textarea {
    resize: none
}

.labels__ads {
    text-align: center;
    margin-top: 25px
}

.labels,
.top_ad_box {
    display: block
}

.gigaparts-sale-banner {
    width: 100%;
    height: 40px;
    background-image: url(/web_assets/frontend/images/generic_banner.svg);
    background-size: 100%;
    background-color: #000;
    text-align: center;
    background-position: center
}

.gigaparts-sale-banner span {
    font-family: arial;
    font-size: 20px;
    margin-top: 0;
    line-height: 40px;
    color: #fff
}

.banner-link:hover {
    text-decoration: none
}

.footer {
    width: 100%;
    display: block;
    text-align: center;
    font-family: arial;
    font-size: 14px;
    margin-top: 50px
}

.footer li {
    list-style: none;
    display: inline-block;
    margin-bottom: 5px
}

.langanmes {
    font-size: 12px
}

.content {
    width: 1100px;
    max-width: 100%;
    margin: 0 auto;
    background: #fff;
    padding: 5px;
    border: 0;
    box-sizing: border-box
}

.content p,
.content li {
    line-height: 2
}

.content img {
    max-width: 100%
}

.text-center {
    text-align: center
}

.donate {
    margin: 0 auto;
    text-align: center
}

.donate a {
    color: #000;
    font-weight: 700;
    text-decoration: underline
}

.btn {
    border-radius: 0
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-top: 30px;
    padding-right: 30px !important;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px
}

.submit__btn {
    color: #fff;
    font-size: 17px;
    background: #44c4c4 !important;
    display: inline-block;
    padding: 6px 12px;
    margin-top: 30px;
    margin-bottom: 0;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 4px
}

#contsent .btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    height: 30px !important
}

.mul li {
    border-bottom: 1px solid #ddd;
    opacity: .6
}

.mul li a {
    color: #000;
    text-decoration: none;
    font-size: 16px;
    display: block
}

.mul li:hover {
    opacity: 1
}

.langSec:hover {
    opacity: 1 !important;
    text-decoration: underline !important
}

.selectdiv {
    position: relative;
    border: 1px solid;
    border-radius: 5px;
    width: 115px;
    margin-bottom: 3px;
    height: 27px
}

.selectdiv:after {
    content: "<>";
    cursor: pointer;
    font: 17px consolas, monospace;
    color: #333;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 11px;
    top: 2px;
    padding: 0 0 2px;
    border-bottom: 1px solid #999;
    position: absolute;
    pointer-events: none
}

.selectdiv span {
    text-align: left;
    position: absolute;
    left: 7px;
    font-size: 13px;
    top: 5px !important;
    font-family: inherit
}

.selectdiv ul {
    background: #fff;
    font-family: inherit;
    text-align: left;
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    bottom: 26px;
    max-height: 200px;
    border: 1px solid;
    left: -1px;
    width: 115px;
    overflow-y: auto
}

.selectdiv ul li {
    padding-left: 12px;
    padding-top: 3px;
    cursor: pointer;
    font-size: 13px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 3px
}

.langbar__active {
    display: block !important
}

.alert-danger-error {
    background: #ffabab;
    color: darkred
}

@media screen and (max-width:426px) {
    .toolsSec {
        width: 100%;
        margin-top: 40px;
        border: 1px solid #000;
        box-shadow: 2px 2px 0 #000;
        padding-left: 10px;
        padding-top: 10px;
        margin-bottom: 20px
    }
}

@media screen and (max-width:2560px) and (min-width:426px) {
    .contentDiv {
        display: inline-flex;
        align-items: flex-start
    }

    .toolsSec {
        width: 25%;
        padding: 10px;
        border: var(--border-default);
        box-shadow: var(--box-shadow)
    }
}

@media screen and (max-width:2560px) and (min-width:768px) {
    .toolsSec {
        min-width: 220px
    }
}

.api__btn {
    width: 90%;
    margin: auto;
    border: var(--border-default);
    box-shadow: var(--box-shadow);
    padding: 10px;
    margin-bottom: 20px;
    text-align: center
}

.toolsSec .api__btn a {
    text-align: center;
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px
}

.toolsSec .api__btn a img {
    width: 24px !important
}

.mob-menu-icon {
    height: 30px;
    margin-top: -3px;
    display: none
}

.mob-menu-icon {
    background: #f7f7f7;
    width: fit-content;
    padding: 3px 5px;
    border-radius: 6px;
    cursor: pointer
}

.mob-menu-icon div {
    width: 26px;
    height: 3px;
    background-color: #adadad;
    border-radius: 50px;
    margin: 4px 0
}

@media(max-width:590px) {
    .mob-menu-icon {
        display: block;
        float: right;
        order: 1
    }
}

@media(max-width:800px) {
    .content {
        max-width: 90%
    }
}

.darkmode {
    background: #2e2e2c !important
}

.darkmode .btn {
    border-radius: 4px;
    background: #3a9ff4 !important;
    padding: 12px 20px;
    margin-top: 7px;
    cursor: pointer;
    border: none;
    color: #fff;
    font-size: 20px
}

.darkmode a {
    color: #fff !important
}

.darkmode .mob-menu-icon div {
    background: #fff !important
}

.darkmode #topnavbar {
    background: #2e2e2c !important
}

.darkmode textarea {
    background-color: #202020 !important;
    color: #fff !important
}

.darkmode .content img {
    opacity: .8
}

.darkmode #selectdiv {
    color: #fff !important
}

.darkmode #selectdiv:after {
    color: #fff !important
}

.darkmode #lang_bar {
    color: #000 !important
}

.darkmode .mode_active {
    background: #000 !important
}

.darkmode .popover__menu {
    background: #000 !important
}

.edpd-tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted #000
}

.inlinADs {
    min-height: 250px;
    min-width: 300px;
    background: #f7f7f7
}

@media screen and (max-width:426px) {
    .scndAdd {
        display: none !important
    }

    .inlinADs {
        display: block
    }

    .inlinADs ins {
        margin-top: 10px
    }
}

@media screen and (max-width:2560px) and (min-width:426px) {
    .inlinADs {
        display: inline-flex
    }

    .scndAdd {
        margin-left: 30px !important
    }
}

.edpd-tooltip .tooltiptext {
    visibility: hidden;
    width: 100px;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    font-size: 12px;
    border-radius: 6px;
    position: absolute;
    top: -5px;
    left: 105%;
    z-index: 1
}

.edpd-tooltip:hover .tooltiptext {
    visibility: visible
}

svg {
    fill: #000
}

.darkmode svg {
    fill: #fff
}

p {
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 0
}

.h-350 {
    height: 100%;
    min-height: 350px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 10px
}

.flex-row {
    display: flex;
    margin: 1em auto;
    width: 100%;
    max-width: 1100px
}

.labels {
    text-align: center;
    margin-top: 10px
}

.top_ad_box {
    text-align: center;
    margin-bottom: 25px;
    min-height: 90px;
    background: #f7f7f7
}

.flex-col {
    display: flex;
    width: 50%;
    flex-direction: column;
    position: relative
}

#output {
    text-align: center
}

.copybtn,
.loadSample {
    position: absolute;
    right: 5px;
    top: 0;
    cursor: pointer
}

.loadSample {
    font-size: 11px;
    top: 5;
    border-bottom: 1px solid
}

i.globalcopybtn {
    padding-right: 22px
}

.globalcopybtn:before {
    content: "";
    position: absolute;
    right: 0;
    background: url(/web_assets/frontend/images/copy.png);
    height: 16px;
    width: 16px
}

body.darkmode .globalcopybtn:before {
    filter: invert(1)
}

.flag-n {
    position: relative;
    cursor: pointer
}

.flag-n::before {
    width: 110px;
    height: 21px;
    z-index: 10;
    position: absolute;
    background: #3c5057;
    left: -11px;
    font-weight: 700;
    content: attr(data-title);
    top: -37px;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    font-size: 12px;
    padding-top: 5px;
    display: none
}

.flag-n::after {
    width: 0;
    height: 0;
    position: absolute;
    left: 18px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-top: 5px solid #3c5057;
    top: -11px;
    display: none;
    content: ""
}

.flag-n:hover::after,
.flag-n:hover::before {
    display: block
}

@media(max-width:992px) {
    table {
        width: 100% !important
    }

    .flex-row {
        flex-direction: column;
        margin: 1em auto;
        row-gap: 30px;
        width: 98%
    }

    .flex-col {
        width: 100% !important
    }

    .flex-col textarea,
    textarea.h-350 {
        height: 240px !important
    }

    .btn {
        padding: 7px !important;
        height: unset !important
    }

    .before__btn__add,
    .sticky__sidebar__add,
    .sidebar__add {
        display: none !important
    }
}

.flex-row {
    max-width: 1320px
}

.gg-sun {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    background: linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px -6px/2px 6px, linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px 14px/2px 6px, linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat -8px 5px/6px 2px, linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 14px 5px/6px 2px;
    border-radius: 100px;
    box-shadow: inset 0 0 0 2px;
    border: 6px solid transparent
}

.app__header--dark--span {
    transition: all .2s;
    width: 26px;
    display: flex;
    height: 26px;
    justify-content: center;
    align-items: center;
    transform: rotate(0);
    cursor: pointer
}

.gg-sun::before {
    transform: rotate(-45deg)
}

.gg-sun::after,
.gg-sun::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 2px;
    border-right: 4px solid;
    border-left: 4px solid;
    left: -6px;
    top: 5px
}

.gg-sun::after {
    transform: rotate(45deg)
}

.gg-sun::after,
.gg-sun::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 2px;
    border-right: 4px solid;
    border-left: 4px solid;
    left: -6px;
    top: 5px
}

#app__header--dark:hover .app__header--dark--span {
    transform: rotate(-25deg)
}

#app__header--dark::before {
    border-left-color: #fff
}

#app__header--dark:hover::after {
    background: #fff;
    color: #fff;
    display: none
}

#app__header--dark::after {
    content: attr(tooltip);
    text-align: center;
    min-width: 3rem;
    max-width: 21rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1.4ch 2.5ch;
    border-radius: .8ch;
    box-shadow: 0 .1rem .2rem -.5em rgb(0 0 0/35%);
    background: var(--hover-color);
    color: var(--main-bg);
    z-index: 1000;
    display: none
}

#app__header--dark {
    height: 26px;
    padding: 0;
    width: 26px;
    margin: 0
}

.uplBtn {
    border-radius: 4px;
    background: grey;
    cursor: pointer;
    border: none;
    color: #fff;
    display: inline-block;
    padding: 3px 13px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

#checkPlag {
    width: max-content !important
}

#edtpd_feedback_moddel_trigger_btn {
    background: #222;
    color: #fff;
    padding: 10px 20px;
    position: fixed;
    float: right;
    transform: rotate(90deg);
    right: -40px;
    border: 0;
    cursor: pointer;
    transition: box-shadow .3s ease;
    top: calc(50% - 20px);
    z-index: 12;
    box-shadow: 0 0 0 0 transparent;
    font-size: 16px
}

#edtpd_feedback_moddel_trigger_btn:hover {
    box-shadow: 0 -2px 10px -1px #aaa
}

.edtpd-feedback-modal {
    display: none;
    position: fixed;
    z-index: 1000;
    padding-top: 40px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #000;
    background-color: rgba(0, 0, 0, .4)
}

.edtpd-feedback-modal .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #000;
    width: 100%;
    max-width: 480px;
    box-shadow: 3px 3px 0 #000
}

.edtpd-feedback-modal .modal-content input::placeholder,
.edtpd-feedback-modal .modal-content textarea::placeholder {
    color: #708090
}

.edtpd-feedback-modal .modal-content>p {
    font-size: 28px;
    font-weight: 600;
    margin: auto;
    text-align: center
}

.edtpd-feedback-modal .modal-content .feedback-form {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-top: 20px;
    justify-content: right;
    position: relative
}

.edtpd-feedback-modal .modal-content .feedback-form.loader-element:before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #0007;
    content: "Sending Feedback....";
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center
}

.edtpd-feedback-modal .modal-content .feedback-form input[type=email],
.edtpd-feedback-modal .modal-content .feedback-form textarea {
    font-size: 16px;
    border: 1px solid #000;
    padding: 10px;
    box-shadow: 2px 2px 0 #000
}

.edtpd-feedback-modal .modal-content .feedback-form input[type=email]:focus,
.edtpd-feedback-modal .modal-content .feedback-form textarea:focus {
    border-color: #333
}

.edtpd-feedback-modal .modal-content .feedback-form textarea {
    height: 120px;
    font-family: Arial, Helvetica, sans-serif
}

.edtpd-feedback-modal .modal-content .feedback-form button {
    width: 120px;
    padding: 5px;
    background: #222;
    color: #fff;
    border: 0;
    cursor: pointer;
    min-width: fit-content !important;
    font-size: 18px;
    padding: 10px 50px !important;
    margin: auto;
    margin-top: 20px
}

.edtpd-feedback-modal .modal-content p.responseMsg {
    text-align: center;
    display: none;
    color: green;
    border: 1px solid green;
    background: #edffed;
    box-shadow: 2px 2px 0 green;
    padding: 10px
}

.navbar .toolDiv2 a,
.navbar .toolDiv a {
    position: relative;
    display: flex;
    justify-content: center;
    transition: .3s ease;
    overflow-x: hidden;
    min-height: 26px;
    margin-bottom: -10px
}

.navbar .toolDiv a::before,
.navbar .toolDiv2 a::before {
    transition: .3s ease;
    width: 0%;
    height: 1px;
    position: absolute;
    display: flex;
    background: #414141;
    bottom: 0;
    transition: .3s ease;
    content: ""
}

.navbar .toolDiv a:hover::before {
    width: 100%
}

.edtpd-feedback-modal .edtpd-feedback-close {
    color: #aaa;
    float: right;
    font-size: 28px;
    line-height: 10px;
    font-weight: 700
}

.edtpd-feedback-modal .edtpd-feedback-close:hover,
.edtpd-feedback-modal .edtpd-feedback-close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer
}

.shaker-element {
    animation: shake .5s;
    animation-iteration-count: infinite
}

@keyframes shake {
    0% {
        transform: translate(1px, 1px) rotate(0deg)
    }

    10% {
        transform: translate(-1px, -2px) rotate(-1deg)
    }

    20% {
        transform: translate(-3px, 0px) rotate(1deg)
    }

    30% {
        transform: translate(3px, 2px) rotate(0deg)
    }

    40% {
        transform: translate(1px, -1px) rotate(1deg)
    }

    50% {
        transform: translate(-1px, 2px) rotate(-1deg)
    }

    60% {
        transform: translate(-3px, 1px) rotate(0deg)
    }

    70% {
        transform: translate(3px, 1px) rotate(-1deg)
    }

    80% {
        transform: translate(-1px, -1px) rotate(1deg)
    }

    90% {
        transform: translate(1px, 2px) rotate(0deg)
    }

    100% {
        transform: translate(1px, -2px) rotate(-1deg)
    }
}

@media screen and (max-width:992px) {
    #edtpd_feedback_moddel_trigger_btn {
        display: none
    }
}

.alert_box_awdws {
    box-shadow: 0 2px 8px 8px #cccccc6e;
    padding: 0 0 20px;
    max-width: 500px;
    top: 100px;
    position: absolute;
    margin: auto;
    border-radius: 10px;
    border: 1px solid #ccc;
    overflow: hidden;
    left: 33%;
    background: #fff;
    z-index: 9999
}

.alert_box_awdws button {
    padding: 10px 50px;
    font-weight: 100;
    background: #3a9ff4;
    border: none;
    border-radius: 5px;
    color: #fff
}

.show {
    display: block !important
}

#recaptchaFeedback {
    transform: scale(.77);
    -webkit-transform: scale(.77);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    height: 70px;
    width: 200px;
    margin-top: 10px;
    min-height: 70px
}

.feedback_top_form {
    width: 100%;
    text-align: center
}

.feedback_top_form p {
    text-align: center
}

.feedback_top_form input,
.feedback_top_form textarea {
    width: 100%;
    margin-bottom: 10px
}

.feedback_top_form textarea {
    height: 80px
}

.feedback_top_form input[type=email] {
    height: 30px
}

.feedback_top_form .responseMsg {
    display: none
}

.feedback_top_form button {
    text-align: center;
    width: 80px;
    height: 30px;
    margin-left: auto
}

.dont-break-out h3 strong,
.dont-break-out h2 strong,
.dont-break-out h4 strong,
.dont-break-out h3,
.dont-break-out h2,
.dont-break-out h4 {
    margin-top: 35px;
    margin-bottom: 0
}

.dont-break-out h3 {
    margin-top: 15px !important
}

.dont-break-out table {
    border-collapse: collapse;
    min-width: 90%
}

.dont-break-out table,
th,
td {
    border: 1px solid #666
}

.dont-break-out table th,
table td {
    padding: 10px
}

.dont-break-out ul,
.dont-break-out ol {
    margin: 0
}

.dont-break-out h1 {
    margin-top: 0
}

.langSec {
    color: #000;
    opacity: .6;
    text-decoration: none;
    border: 1px solid #ccc;
    padding: 2px 4px;
    font-size: 18px;
    box-shadow: 1px 1px 2px -1px #ccc
}

element.style {
    margin: 0 auto;
    display: block;
    margin-top: 10px;
    cursor: pointer;
    box-sizing: border-box;
    width: 250px
}

#checkPlag {
    width: max-content !important
}

.btn {
    border-radius: 4px;
    background: #3a9ff4;
    padding: 12px 20px;
    margin-top: 7px;
    cursor: pointer;
    border: none;
    color: #fff;
    font-size: 20px
}

.btn {
    background: #44c4c4 !important;
    font-size: 22px !important;
    display: inline-block;
    padding: 6px 12px;
    margin-top: 30px;
    padding-right: 30px !important;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px
}

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    margin: 0
}

.tool__row {
    margin: 0 auto;
    border: var(--border-default) !important;
    box-shadow: var(--box-shadow) !important
}

.tool__row__s {
    margin: 0 auto;
    border: var(--border-default);
    box-shadow: var(--box-shadow)
}

.tool__row__s>div>p {
    padding: 10px !important
}

.tool__row__s>div:nth-child(1) {
    border-right: 1px solid #000
}

.tool__row__s>div:nth-child(2)>p {
    border-bottom: 1px solid #000
}

.tool__row__s .copybtn {
    margin-top: 10px
}

.tool__row__s .loadSample {
    top: 7px;
    padding: 5px !important;
    font-size: 14px !important
}

.tool__row__s #sampBtn {
    right: 10px;
    top: 10px;
    padding-bottom: 0
}

.tool__row__s .responsive-buttnons {
    border-bottom: 1px solid #000 !important
}

.tool__row__s .counts {
    padding: 10px
}

.tool__row__s textarea {
    resize: none;
    border: none;
    border-top: 1px solid #000 !important;
    width: 100% !important;
    max-width: 100%;
    margin: 0 auto;
    padding: 10px;
    height: 100%;
    max-height: 273px
}

.tool__rb {
    border-right: 1px solid #000 !important
}

.tool__tb {
    border-top: 1px solid #000 !important
}

.tool__lb {
    border-left: 1px solid #000 !important
}

.tool__bb {
    border-bottom: 1px solid #000 !important
}

.tool__html__editor__row .mce-tinymce {
    border: var(--border-default) !important;
    box-shadow: 0 2px 0 #000
}

.tool__html__editor__row .CodeMirror {
    border: var(--border-default) !important;
    box-shadow: 2px 2px 0 #000;
    height: 480px !important
}

.tool__row .tool__input {
    border-right: var(--border-default) !important
}

.tool__input__s {
    border: var(--border-default);
    box-shadow: 0 2px 0 #000;
    border-right: 0;
    height: 100%
}

.tool__output__s {
    border: var(--border-default);
    box-shadow: 2px 2px 0 #000
}

.tool__row textarea {
    padding: 10px !important
}

.tool__row .modes_div {
    position: absolute;
    top: -74px !important;
    width: 100%;
    left: 0 !important;
    border: 1px solid #000;
    justify-content: flex-start;
    padding: 6px 9px
}

.tool__row .tool__input .modes_div {
    border-bottom: 0;
    border-right: 0 !important
}

.tool__row .tool__output .modes_div {
    width: 100.8% !important;
    box-shadow: 2px 0 0 #000;
    border-left: 1px solid #000 !important;
    left: -2px !important
}

.border-top {
    border-top: var(--border-default) !important
}

.tool__input {
    border: var(--border-default);
    box-shadow: 2px 2px 0 #000;
    width: 100%;
    padding: 8px;
    font-size: var(--font-size-small)
}

#checkPlag,
.tool__buttons input,
.tool__btn {
    font-size: var(--font-size-default);
    background-color: var(--color-green) !important;
    border: var(--border-default) !important;
    box-shadow: 2px 2px 0 #000 !important;
    padding: 12px 10px !important;
    min-width: 200px !important;
    color: #fff !important;
    border-radius: 0 !important
}

.tool__row .btn-row-actions {
    background-color: transparent !important
}

#checkPlag {
    padding: 8px 10px !important
}

.custom__scroll::-webkit-scrollbar {
    width: 10px;
    background: #f5f5f5
}

.custom__scroll::-webkit-scrollbar-thumb {
    background: #34a370;
    border-radius: 10px
}

.getStarted__button {
    cursor: pointer
}

.custom__copy__button {
    display: flex !important;
    align-items: center !important;
    gap: 5px !important;
    border: 1px solid #000 !important;
    padding: 0 5px !important;
    font-size: 14px !important;
    color: #615a5a !important;
    background: 0 0 !important
}

.custom__copy__button img {
    width: 16px !important
}
