import React from "react";
import { HiXMark } from "react-icons/hi2";

const ModalForm = ({ setModal }) => {
    

  return (
    <>
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="">
            <div onClick={setModal}>
              <HiXMark className="w-4 h-4" />
            </div>
            <div>input</div>
            <div>buttons</div>
          </div>
        </div>
      
    </>
  );
};

export default ModalForm;
