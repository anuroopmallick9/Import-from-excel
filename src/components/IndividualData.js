import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export const IndividualData = ({ individualExcelData, excelData }) => {
  const [open, setOpen] = useState(false);
  const [objectKey, setObjectKey] = useState("");
  function handleOncloseDialog() {
    setOpen(false);
  }

  return (
    <>
      <th className="text-left pr-6 py-2">{individualExcelData["#"]}</th>
      <th className="text-left pr-6 py-2">
        <button
          onClick={() => {
            setObjectKey(
              individualExcelData["Workshops Required by Subject Areas"]
            );
            excelData = excelData[objectKey];
            console.log(excelData);

            setOpen(true);
          }}
        >
          {individualExcelData["Workshops Required by Subject Areas"]}
        </button>
      </th>
      <th className="text-left pr-6 py-2">{individualExcelData.Bucket}</th>
      <th className="text-left pr-6 py-2">
        {individualExcelData["Recommended SMEs"]}
      </th>
      <th>
        <Transition appear show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50"
            onClose={handleOncloseDialog}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="flex justify-between text-lg font-medium leading-6 text-gray-900"
                    >
                      Table
                    </Dialog.Title>
                    <div>
                      <table className="table-fixed border-1">
                        <tbody>
                          {excelData[objectKey] === undefined ? (
                            <tr>
                              <th>Empty Data</th>
                            </tr>
                          ) : (
                            excelData[objectKey] &&
                            excelData[objectKey].forEach((element) => {
                              <tr className="border border-solid border-l-0 border-r-0">
                                <td className="text-left pr-6 py-2">
                                  {element.__EMPTY}
                                </td>
                                <td className="text-left pr-6 py-2">
                                  {element.__EMPTY_1}
                                </td>
                              </tr>;
                            })
                          )}
                        </tbody>
                      </table>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </th>
      ;
    </>
  );
};
