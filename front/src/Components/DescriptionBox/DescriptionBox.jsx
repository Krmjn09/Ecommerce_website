import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nax-box">Description</div>
        <div className="descriptionbox-nax-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          neque obcaecati inventore exercitationem esse odit recusandae maxime
          quia impedit pariatur, corporis delectus temporibus fugit voluptatum
          similique labore, doloribus nobis veritatis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Minus dolorem animi ipsum
          accusantium commodi quae ut cupiditate enim iusto. Beatae aliquid
          culpa cupiditate! Est pariatur illum delectus eveniet maiores impedit!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
