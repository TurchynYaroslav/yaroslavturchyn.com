import React from "react";
import styles from "../../styles/Stack.module.css";

const StackDiv = ({ stack }) => {
  return (
    <div className={`${styles.stack__win_div}`}>
      <div className={`${styles.stack__techs}`}>
        {stack.stackArray.map((tech) => (
          <div className={`${styles.stack__tech}`}>
            <img src={tech.image} alt="css" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
      <div className={`${styles.stack__desc_techs}`}>
        <h1>{stack.description.title}</h1>
        <p>{stack.description.text}</p>
      </div>
    </div>
  );
};

export default StackDiv;
