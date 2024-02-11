import Css_img from "../static/img/stack/front_stack/css.svg";
import JS_img from "../static/img/stack/front_stack/js.svg";
import Html_img from "../static/img/stack/front_stack/html.svg";
import React_img from "../static/img/stack/front_stack/react.svg";

import Dj_img from "../static/img/stack/back_stack/django.svg";

import PostgreSQL_img from "../static/img/stack/db_stack/postgresql.svg";
import MongoDB_img from "../static/img/stack/db_stack/mongodb.svg";

import VScode from "../static/img/stack/tools_stack/vsCode.svg";
import Figma from "../static/img/stack/tools_stack/figma.svg";

// export const example = {
//   stackArray: [{ name: "", image:  }],
//   description: {
//     title: "",
//     text: "",
//   },
// };

export const frontStack = {
  stackArray: [
    { name: "React", image: React_img },
    { name: "JavaScript", image: JS_img },
    { name: "Html", image: Html_img },
    { name: "Css", image: Css_img },
  ],
  description: {
    title: "Frontend",
    text: "With a year track record in front-end development, I specialize in JavaScript, React, HTML, and CSS. My focus on crafting sleek and user-friendly interfaces is evident in my concise and impactful code. Explore my portfolio to witness the synergy of technical expertise and user-centric design.",
  },
};

export const backStack = {
  stackArray: [{ name: "Django", image: Dj_img }],
  description: {
    title: "Backend",
    text: "With extensive backend web development experience, I specialize in architecting scalable data solutions, integrating secure authentication, and optimizing performance. My focus on clean code and scalability ensures seamless backend infrastructure for compelling user experiences.",
  },
};

export const dbStack = {
  stackArray: [
    { name: "PostgreSQL", image: PostgreSQL_img },
    { name: "MongoDB", image: MongoDB_img },
  ],
  description: {
    title: "Databases",
    text: "Experienced in SQLite3, PostgreSQL, and MongoDB, I specialize in database management, including schema design, query optimization, and data integrity. Proficient in both relational and NoSQL databases, I architect robust data solutions tailored to project requirements.",
  },
};

export const toolsStack = {
  stackArray: [
    { name: "VScode", image: VScode },
    { name: "Figma", image: Figma },
  ],
  description: {
    title: "Tools",
    text: "Experienced in Figma and VSCode, I streamline design and development. Figma supports collaborative UI design, while VSCode boosts coding efficiency. Explore my portfolio for examples of how I leverage these tools for innovative designs and robust web solutions.",
  },
};
