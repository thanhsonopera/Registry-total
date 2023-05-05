import './phrase1.css';
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function ExcelReader() {
    const [excelData, setExcelData] = useState([]);
    const [fileName, setFileName] = useState("");

    const handleFile = (e) => {
        const file = e.target.files[0];
        setFileName(file.name);
        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
            setExcelData(data);
        };
        reader.readAsBinaryString(file);
    };

    const exportFile = () => {
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        const excelFileName = fileName || "export.xlsx";
        saveAs(
            new Blob([XLSX.write(wb, { bookType: "xlsx", type: "binary" })], {
                type: "application/octet-stream"
            }),
            excelFileName
        );
    };

    return (
        <div>
            <input type="file" onChange={handleFile} />
            {excelData.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            {excelData[0].map((item, index) => (
                                <th key={index}>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {excelData.slice(1).map((row, index) => (
                            <tr key={index}>
                                {row.map((item, index) => (
                                    <td key={index}>{item}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button onClick={exportFile}>Export to Excel</button>
        </div>
    );
}

export default ExcelReader;
    