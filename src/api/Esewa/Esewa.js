import React from 'react'


export default function Esewa(){
    return(
        <>
        <form action="https://uat.esewa.com.np/epay/main" method="POST">
        <input value="100" name="tAmt" type="hidden"/>
        <input value="90" name="amt" type="hidden"/>
        <input value="5" name="txAmt" type="hidden"/>
        <input value="2" name="psc" type="hidden"/>
        <input value="3" name="pdc" type="hidden"/>
        <input value="EPAYTEST" name="scd" type="hidden"/>
        <input value="MacBook202020" name="pid" type="hidden"/>
        <input value="http://localhost:3000/success?q=su" type="hidden" name="su"/>
        <input value="http://localhost:3000/failed?q=fu" type="hidden" name="fu"/>
        <input value="Submit" type="submit" className="btn btn-primary"/>
        </form>
        </>
    )
}