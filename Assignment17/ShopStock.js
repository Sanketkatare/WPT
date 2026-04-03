import React, { useState } from 'react';
import data from './shopstock.json';

function ShopStock() {
    const [items, setItems] = useState([]);

    const loadData = () => {
        setItems(data);
    };

    return (
        <div>
            <h2>Shop Stock</h2>

            <button onClick={loadData}>Load Data</button>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShopStock;