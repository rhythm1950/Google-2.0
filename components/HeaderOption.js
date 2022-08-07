import React from "react";

const HeaderOption = (props) => {
  const { Icon, title, selected } = props;

  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4"></Icon>
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};

export default HeaderOption;
