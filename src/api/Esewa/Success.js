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

    return(
        <>
        <h1> Yeah Succeded</h1>
        <p>{productId}</p>
        <p>{amount}</p>
        <p>{esewaRefId}</p>
        </>
    )
}