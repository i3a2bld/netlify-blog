import React from "react";
import Rss from './Rss';

const Copyright = ({ copyright }) => (
  <div className="copyright-container margin-half color-grey">
    <small>
        © {new Date().getFullYear()} - {copyright}
        &emsp;<Rss /></small>
  </div>
)

export default Copyright;