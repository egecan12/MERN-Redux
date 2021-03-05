import styled from "@emotion/styled";

const LandingPage2Container = styled.div`
.wrapper {
    background-color: #ebebeb;
    --main-post-border-radius: 15px;
    --main-post-border: 1px solid #c9c9c9;
    --main-post-font-size: 16px;
    --custom-blue: #005dff;
    --custom-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    --web-font: Open Sans, Arial, Helvetica, sans-serif;
    font-family: var(--web-font);
  }
  
  .wrapper {
    margin: 0;
  }
  
  .wrapper {
    margin: 20px;
  }
  
  .wrapper2 {
    margin: auto;
    max-width: 1000px;
  }
  
  .all-posts {
    /* Create a CSS grid */
    display: grid;
    grid-template-columns: 1fr;
  
    grid-gap: 10px;
    max-width: 1600px;
  }
  
  .main-post {
    background-color: white;
    border-radius: var(--main-post-border-radius);
    margin: auto;
    min-width: 200px;
    width: 100%;
    max-width: 600px;
    box-shadow: var(--custom-box-shadow);
  }
  
  .header-post > div {
    padding: 1em;
  }
  
  .header-post > div > .material-icons {
    float: right;
    font-size: 25px;
  }
  
  .picture-post {
    display: inline-block;
    border-radius: 100px;
    background-color: var(--custom-blue);
    color: white;
    width: 50px;
    height: 50px;
    text-decoration: none;
    outline: none;
  }
  
  .picture-post:focus {
    box-shadow: inset 0 1px 0px 6px rgba(0, 0, 0, 0.12),
      inset 0 1px 2px 4px rgba(0, 0, 0, 0.24);
  }
  
  .name-date-post {
    /* Create an inline CSS grid */
    display: inline-grid;
    margin-left: 10px;
    /* And a 10px gap between the elements */
    grid-gap: 10px;
    /* Grid row height */
    grid-auto-rows: 15px;
    /* Map the elements to the row */
    grid-template-areas: "name" "date";
  }
  
  .name-post {
    /* Map the div to it's right place */
    grid-area: name;
    text-align: left;
    text-decoration: none;
    color: black;
    outline: none;
  }
  
  .name-post:hover {
    text-decoration: underline;
  }
  
  .name-post:focus {
    text-decoration: underline;
  }
  
  .date-post {
    /* Map the div to it's right place */
    grid-area: date;
    text-align: left;
    color: black;
  }
  
  .content-post {
    padding: 15px;
    font-size: 19px;
    border-bottom: var(--main-post-border);
    border-top: var(--main-post-border);
    word-wrap: break-word;
  }
  
  .hashtag:before {
    content: "#";
  }
  
  .hashtag {
    color: dodgerblue;
    text-decoration: none;
    outline: none;
  }
  
  .hashtag:hover {
    color: dodgerblue;
    text-decoration: underline;
  }
  
  .hashtag:focus {
    color: dodgerblue;
    text-decoration: underline;
  }
  
  .person:before {
    content: "@";
  }
  
  .person {
    color: dodgerblue;
    text-decoration: none;
    outline: none;
  }
  
  .person:hover {
    color: dodgerblue;
    text-decoration: underline;
  }
  
  .person:focus {
    color: dodgerblue;
    text-decoration: underline;
  }
  
  .bottom-post {
    /* Create a CSS grid */
    display: grid;
    /* And a 10px gap between the elements */
    grid-gap: 0;
    /* Grid row height */
    grid-auto-rows: 50px;
    /* Map the elements to the row */
    grid-template-areas: "like comment share";
  }
  
  .bottom-post > div {
    /*border: 0;*/
    border-radius: 0px;
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-top: 0.8em;
    padding-bottom: 0;
    text-align: center;
    color: #333333;
    font-weight: 400;
    font-size: var(--main-post-font-size);
  }
  
  .bottom-post > div > .material-icons {
    font-size: var(--main-post-font-size);
  }
  
  .bottom-post > div:hover {
    /* Text color of the element */
    color: var(--custom-blue);
    background: #f7f7f7;
  }
  
  .bottom-post > div:first-of-type {
    border-radius: 0 0 0 var(--main-post-border-radius);
    border-right: var(--main-post-border);
  }
  
  .bottom-post > div:last-child {
    border-radius: 0 0 var(--main-post-border-radius) 0;
    border-left: var(--main-post-border);
  }
  
  .like-post {
    /* Map the div to it's right place */
    grid-area: like;
  }
  
  .like-post:after {
    /* Text that should be displayed */
    content: " LIKE";
  }
  
  .comment-post {
    /* Map the div to it's right place */
    grid-area: comment;
  }
  
  .comment-post:after {
    /* Text that should be displayed */
    content: " COMMENT";
  }
  
  .share-post {
    /* Map the div to it's right place */
    grid-area: share;
  }
  
  .share-post:after {
    /* Text that should be displayed */
    content: " SHARE";
  }
  
  .main-form {
    background-color: white;
    border-radius: var(--main-post-border-radius);
    margin: 10px;
    box-shadow: var(--custom-box-shadow);
  }
  
  .form-wrapper {
    margin: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  .form-wrapper > .input {
    font-size: 20px;
    margin: 5px;
    padding: 5px;
    font-family: Open Sans, Arial, Helvetica, sans-serif;
    border-radius: 15px;
    border: 1px solid;
    box-shadow: var(--custom-box-shadow);
    outline: none;
  }
  
  .form-control {
    font-family: Open Sans, Arial, Helvetica, sans-serif;
    width: 100%;
    min-height: 50px;
    border: none;
    border-radius: 0;
    box-shadow: none;
    height: auto;
    font-size: 16px;
    outline: none;
    max-width: 100%;
    min-width: 100%;
    resize: none;
  }
  
  .form-control-name {
    font-family: Open Sans, Arial, Helvetica, sans-serif;
    width: 100%;
    border: none;
    border-radius: 0;
    box-shadow: none;
    height: auto;
    font-size: 16px;
    outline: none;
  }
  
  .submit-button {
    background: #000000;
    color: white;
    border: 0;
    border-radius: 10px;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    outline: none;
  }
  
  .submit-button:hover {
    background: var(--custom-blue);
    cursor: pointer;
  }
  
  .submit-button:focus {
    background: var(--custom-blue);
  }
  
  textarea:required:valid {
    color: var(--custom-blue);
  }
  
  input:required:valid {
    color: var(--custom-blue);
  }
  
  nav {
    width: 100%;
    color: black;
    background: white;
    font-weight: bold;
    letter-spacing: 0.025em;
    box-shadow: var(--custom-box-shadow);
    text-align: center;
  }
  
  nav ul {
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    display: inline-block;
    padding: 0 3em;
    line-height: 3em;
    font-size: 18px;
  }
  
  nav ul li:hover > Link {
    color: white;
  }
  
  nav Link:focus {
    color: var(--custom-blue);
  }
  
  nav ul li:hover {
    background: var(--custom-blue);
    color: white;
    cursor: pointer;
  }
  
  .right {
    float: right;
  }
  
  .menu {
    font-size: 16px !important;
    margin-right: 10px;
  }
  
  nav Link {
    text-decoration: none;
    outline: none;
    color: black;
  }
  
`;

export default LandingPage2Container;