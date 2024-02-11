import React, { useState } from "react";
import "../styles/App.css";
import styles from "../styles/Stack.module.css";
import StackDiv from "../components/stack_comps/StackDiv";

import {
  frontStack,
  backStack,
  dbStack,
  toolsStack,
} from "../static/satckArrays";

const Stack = () => {
  const [activeButton, setActiveButton] = useState(0); // Состояние активной кнопки
  const list_items = [
    <StackDiv stack={frontStack} />,
    <StackDiv stack={backStack} />,
    <StackDiv stack={dbStack} />,
    <StackDiv stack={toolsStack} />,
  ];

  // Функция для установки активной кнопки
  const handleSetActiveButton = (index) => {
    setActiveButton(index);
  };

  return (
    <div className={`${styles.stack__page} page`}>
      <div className={`${styles.stack__div}`}>
        <div className={`${styles.stack__nav}`}>
          <div className={`${styles.stack__title}`}>
            <h1>STACK</h1>
          </div>
          <ul className={`${styles.stack__items_wrapper}`}>
            {/* Перебираем элементы списка */}
            {["Frontend", "Backend", "Databases", "Tools"].map(
              (item, index) => (
                <li
                  key={index}
                  // Проверяем, является ли кнопка активной, и применяем соответствующий класс
                  className={`${styles.stack__item} ${
                    index === activeButton ? styles.active : styles.unactive
                  }`}
                  // При клике на кнопку вызываем функцию для установки активной кнопки
                  onClick={() => handleSetActiveButton(index)}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        <div className={`${styles.stack__win}`}>{list_items[activeButton]}</div>
      </div>
    </div>
  );
};

export default Stack;
