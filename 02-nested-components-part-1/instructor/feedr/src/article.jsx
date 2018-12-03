import React from "react";
const Article = props => {
  return (
    <article className="article">
      <section className="featuredImage">
        <img src={props.image} alt="" />
      </section>
      <section className="articleContent">
        <a href="#" id="40">
          <h3>{props.title}</h3>
        </a>
        <h6 className="tags">{props.tags}</h6>
      </section>
      <section className="impressions">
        {props.impressions}
      </section>
      <div className="clearfix" />
    </article>
  );
};

export default Article;
