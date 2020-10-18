import React from 'react';
import {CSVLink, CSVDownload} from 'react-csv';
import axios from 'axios';

export default function CsvUpload () {

    let count = 0;
    let data = [];
    const [csvList, setcsvList] = React.useState([]);


    // const callAgain = (obj) =>{
    //     axios.post(`http://localhost:3021/csvupload`,obj)
    //     .then(res => {
    //         if(data.length < 5){
    //             data.push(res.data.data)
    //             obj.count += 10;
    //             callAgain(obj);
    //         }
    //     })
    //     console.log(data);
    //     if(data.length === 5){
    //         setcsvList(data)
    //     }
    // }


    // const handleCsvUpload = () => {
    // console.log('hi');
    // var obj = {
    //     count: count
    // }
    // callAgain(obj)
    // };

    return (
        // <div>
        // <button onClick={handleCsvUpload}>Start Download</button>
        // <div>
        // {csvList.length === 5 ? <CSVLink data={csvList} >Download me</CSVLink> : ''}
        // </div>
        // </div>
        <div style={{margin:"5em"}}>
           <h1> Content Wrapper </h1>
        </div>
    );
}