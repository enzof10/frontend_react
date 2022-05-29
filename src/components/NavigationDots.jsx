import React from "react";

const NavigationDots = ({ active }) => {
  const sections = [
    "home",
    "about",
    "work",
    "contact",
    "skills",
    "testimonial",
  ];
  return (
    <div className="app__navigation">
      {sections.map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        > </a>
      ))}
    </div>
  );
};

export default NavigationDots;
