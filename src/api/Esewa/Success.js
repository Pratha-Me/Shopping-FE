import React, { useEffect } from 'react';
import axios from 'axios';
import { Redirect, useParams, withRouter } from 'react-router-dom';
import { esewaVerification } from '../../services/InventoryService';

function Success(props) {
  const query = new URLSearchParams(props.location.search);
  const productId = query.get('oid');
  const amount = query.get('amt');
  const esewaRefId = query.get('refId');
  var path = 'https://uat.esewa.com.np/epay/transrec';
  var params = {
    amt: Number(amount),
    rid: esewaRefId,
    pid: productId,
    scd: 'EPAYTEST',
  };

  // if (esewaVerification(path, params)) {
  //   window.location.href = '/';
  // }
  esewaVerification(path, params);
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
      <h1> Success</h1>
      {/* <form target='_blank' action='https://uat.esewa.com.np/epay/transrec' method='POST'>
        <input value={Number(amount)} name='amt' type='hidden' />
        <input value='EPAYTEST' name='scd' type='hidden' />
        <input value={productId} name='pid' type='hidden' />
        <input value={esewaRefId} name='rid' type='hidden' />
        <input onclick="window.location.href = '/';" type='submit' value='Submit' />
      </form> */}
    </>
  );
}

export default withRouter(Success);
