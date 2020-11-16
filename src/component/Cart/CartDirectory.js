import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {addItem, getCart, updateItem} from '../../helpers/CartHelpers'
import '../../styles/css/CartDirectory.css'
import '../../styles/scss/CartDirectory.scss'

const CartDirectory = () => {
    const [items, setItems] = useState([])
    const [count, setCount] = useState(items.count)

    useEffect(()=> {
        setItems(getCart())
    }, [])
    console.log("chaieko items",items)

    const handleChange = itemId => event => {
        setCount(event.target.value < 1 ? 1 : event.target.value)
        if(event.target.value >=1){
            updateItem(itemId, event.target.value)
        }
    }

    const showItems = items => {
        return (
            <div className="container">
    <h1>Responsive Cart</h1>
    <table className="table table-xs">
        <tr>
            <th></th>
            <th>Description</th>
            <th className="text-right">Amount</th>
            <th className="text-right">Price</th>
            <th className="text-right">Total</th>
        </tr>
        {items.map((product, i) => (
             <tr className="item-row">
             <td> <img src={product.imageUrl} style={{width:'80px', height:'100px'}} /></td>
             <td>
                 <p> <strong>{product.title}</strong></p>
                 {/* <p>Amet et esse do nostrud id irure cupidatat labore nulla irure laboris</p> */}
             </td>
             <td className="text-right" title="Amount">
                 <div className="input-group mb-3">
                     <div className="input-group-prepend">
                         <span className="input-group-text">Adjust Quantity</span>
                     </div>
                     <input type="number" className="form-control" value={count} onChange={handleChange(items.id)}/>
                 </div>
             </td>
             <td className="text-right" title="Price">{product.price}</td>
             <td className="text-right" title="Total">6.00</td>
         </tr>
        ))}
        <tr className="total-row info">
            <td className="text-right" colspan="4">Total</td>
            <td className="text-right">18.00</td>
        </tr>
    </table>
</div>
        )
    }

    const noItemsMessage = () => (
        <h2>Your cart is empty. <br/> <Link to="/"></Link></h2>
    )

    return(
        <>
            {items.length > 0 ? showItems(items) : noItemsMessage()}
        </>
    )
}

export default CartDirectory;