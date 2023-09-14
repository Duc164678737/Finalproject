import React from "react";

const HideMore = ({ hide, onClick }: any) => {

  return (
    <button
      className="display-flex-2 border-radius-1 showMore"
      onClick={onClick}
    >
      {hide ? "More" : "Less"}
    </button>
  );
};

export default HideMore;
