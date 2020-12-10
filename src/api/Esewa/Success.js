import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function Success(props){
    const query = new URLSearchParams(props.location.search);
    const productId = query.get('oid')
    const amount = query.get('amt')
    const esewaRefId = query.get('refId')
    console.log("OID :", productId)
    console.log("AMT", amount)
    console.log("REFID", esewaRefId)

//     var path="https://uat.esewa.com.np/epay/transrec";
//     var params= {
//         amt: '445',
//         rid: {esewaRefId},
//         pid: 'HelloNepal12345',
//         scd: "EPAYTEST"
//     }

// function post(path, params) {
//     var form = document.createElement("form");
//     form.setAttribute("method", "POST");
//     form.setAttribute("action", path);

//     for(var key in params) {
//         var hiddenField = document.createElement("input");
//         hiddenField.setAttribute("type", "hidden");
//         hiddenField.setAttribute("name", key);
//         hiddenField.setAttribute("value", params[key]);
//         form.appendChild(hiddenField);
//     }

//     document.body.appendChild(form);
//     form.submit();
// }

    return(
<>

</>
    )
}