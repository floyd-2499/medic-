import React, { useState } from "react";
import styles from './styles.module.scss'
import { ExcelFileUploader } from '../pdf/index'

const Excel = () => {
    const [jsonData, setJsonData] = useState([])
    const [sheetNumber, setSheetNumber] = useState()

    const downloadJsonData = () => {
        const jsonContent = JSON.stringify(jsonData, null, 2);
        const blob = new Blob([jsonContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className={styles['excel-page']}>
            <h1>EXCEL Helper</h1>
            <br />
            <small className={styles['input-label']}>Sheet Number:</small>
            <input type="number" onChange={(e) => setSheetNumber(e.target.value)} className={!sheetNumber && styles['highlight-input']} />
            <br />
            <br />
            <div className={!sheetNumber && styles['disable-upload']}>
                <ExcelFileUploader onFileUpload={setJsonData} sheetKey={sheetNumber} />
            </div>
            {jsonData?.length > 0 && <h3 className={styles['success-text']}>Data Converted to JSON Successfully!!</h3>}
            <br />
            <br />
            <br />
            <br />
            {jsonData?.length > 0 && <button onClick={downloadJsonData}>Download JSON Data</button>}
        </div>
    )
}

export default Excel