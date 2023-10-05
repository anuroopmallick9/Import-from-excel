import React from "react";

export const IndividualData = ({ individualExcelData }) => {
  return (
    <>
      <th className="text-left pr-6 py-2">{individualExcelData.__EMPTY}</th>
      <th className="text-left pr-6 py-2">{individualExcelData.__EMPTY_1}</th>
      <th className="text-left pr-6 py-2">{individualExcelData.__EMPTY_2}</th>
      <th className="text-left pr-6 py-2">{individualExcelData[65]}</th>
      <th className="text-left pr-6 py-2">{individualExcelData.__EMPTY_3}</th>
    </>
  );
};
