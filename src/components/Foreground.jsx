import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".3mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];
  return (
      <div ref={ref} className="fixed w-full h-full top-0 left-0 z-[3] flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={index} reference={ref} data={item} />
      ))}
      </div>
  );
};

export default Foreground;
