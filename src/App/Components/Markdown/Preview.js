import React from "react";
import Markdown from "react-remarkable";
import hljs from "highlight.js";
import "highlight.js/styles/github-gist.css";
const highlight = (str, lang) => {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value;
    } catch (err) {
      console.error(err);
    }
  }

  try {
    return hljs.highlightAuto(str).value;
  } catch (err) {
    console.error(err);
  }

  return "";
};

export default ({ source, children }) => {
  return (
      <Markdown
        source={source}
        options={{ highlight, html: true, linkify: true }}
      >
        {children}
      </Markdown>
  );
};
