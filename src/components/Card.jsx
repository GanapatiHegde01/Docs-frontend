import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import {motion} from "framer-motion";

const Card = ({ data,reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{bounceStiffness:600, bounceDamping:10}} className="relative w-52 h-64 rounded-[40px] bg-zinc-900/80 text-white py-10 px-5 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>

      <div className="footer absolute left-0 w-full   bottom-0">
        <div className="flex items-center justify-between py-3 px-8 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdClose color="black" />
            ) : (
              <LuDownload size="0.7em" color="black" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 flex items-center justify-center`}
            style={{backgroundColor:data.tag.tagColor }}
          >
            <h5 className="text-sm font-semibold">{data.tag.tagTitle}</h5>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
