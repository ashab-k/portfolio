import React from "react";

interface Props {
  title: string;
  description: string;
}

const ProjectComponent = ({ title, description }: Props) => {
  return (
    <div className="w-[100%] hover:outline outline- gap-4 hover:bg-g py-5 px-5 rounded-md bg-[rgba(255,255,255,0.1)] ">
      <h3 className="text-xl font-bold py-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectComponent;
