import "./styles/style.css";
import json from "./assets/json.json";
import Post from "./Post";
import Logo from "./assets/1.png";
import "./styles/scss.scss";
import "./babel";

const post = new Post("Webpack Post Title", Logo);

console.log(post);
console.log("JSON", json);
