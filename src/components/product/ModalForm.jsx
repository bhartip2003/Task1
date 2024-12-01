/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Loading from "../coreComponents/Loading";

const ModalForm = ({
  buttonText,
  title,
  setModal,
  formField,
  onSubmit,
  productDetails,
  loading,
  
}) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (productDetails) {
      setFormData(productDetails);
    }
  }, [productDetails]);

  
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 text-gray-700">
        <div className="py-4 px-6 bg-slate-300 rounded-lg flex flex-col justify-between">
          <h1 className="text-lg font-semibold capitalize text-center">{title}</h1>
          <div className="flex flex-col gap-y-2 my-2">
            {loading ? (
              <Loading />
            ) : (
              formField.map((field) => (
                <div key={field.name} className="flex justify-between">
                  <label className="font-light capitalize text-sm">
                    {field.name}:
                  </label>
                  <input
                    type={field.type}
                    value={formData[field.name] || ""}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                    className="rounded-sm p-1"
                  />
                </div>
              ))
            )}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <button
              className="px-2 py-1 bg-blue-400 text-white rounded-md hover:bg-blue-500 capitalize"
              onClick={() => onSubmit(formData)}
            >
              {buttonText}
            </button>
            <button
              className="px-2 py-1 bg-red-300 text-white rounded-md hover:bg-red-500"
              onClick={() => setModal(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
