import React from "react";
import { IndividualData } from "./IndividualData";

export const Data = ({ excelData }) => {
  return excelData.map((individualExcelData) => (
    <tr
      className="border border-solid border-l-0 border-r-0"
      key={individualExcelData.Id}
    >
      <IndividualData individualExcelData={individualExcelData} />
    </tr>
  ));
};
