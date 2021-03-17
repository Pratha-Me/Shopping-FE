import React, { useEffect } from "react";
import axios from "axios";
import { Redirect, useParams, withRouter } from "react-router-dom";
import { esewaVerification } from "../../services/InventoryService";

function Success(props) {
  const query = new URLSearchParams(props.location.search);
  const productId = query.get("oid");
  const amount = query.get("amt");
  const esewaRefId = query.get("refId");
  var path = "https://uat.esewa.com.np/epay/transrec";
  const testAmt = localStorage.getItem("AMT");
  const testID = localStorage.getItem("PID");
  var params = {
    amt: Number(testAmt),
    rid: esewaRefId,
    pid: testID,
    scd: "EPAYTEST",
  };

  // if (esewaVerification(path, params)) {
  //   window.location.href = '/';
  // }
  esewaVerification(path, params);
  // if (esewaVerification(path, params)) {
  //   console.log("Verifiresd");
  // }
  // axios
  //   .post(path, params)
  //   .then((res) => {
  //     console.log('REQUEST SENT', res);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return (
    <>
      {/* <h1> Success</h1>
      <form action='https://uat.esewa.com.np/epay/transrec' method='POST'>
        <input value={Number(testAmt)} name='amt' type='hidden' />
        <input value='EPAYTEST' name='scd' type='hidden' />
        <input value={testID} name='pid' type='hidden' />
        <input value={esewaRefId} name='rid' type='hidden' />
        <input value='Submit' type='submit'></input>
      </form> */}
      {/* <h1> Success</h1>
      <form action='https://uat.esewa.com.np/epay/transrec' method='POST'>
        <input value={Number(testAmt)} name='amt' type='hidden' />
        <input value='EPAYTEST' name='scd' type='hidden' />
        <input value={testID} name='pid' type='hidden' />
        <input value={esewaRefId} name='rid' type='hidden' />
        <input value='Submit' type='submit'></input>
      </form> */}
    </>
  );
}

export default withRouter(Success);
