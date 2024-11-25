import React, { useState, useEffect } from 'react'
import {headers, headerTitle} from '../data/product.json'
import axios from 'axios'


const Product = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchProducts = async() => {
            const response = await axios.get("https://dummyjson.com/products");
            setData(response.data.products);
        }

        fetchProducts();
    }, []);

  return (
    <div>
        <table>
            <thead>
                {headerTitle.map((header) => (
                        <th className='font-semibold text-lg'>{header}</th>
                    ))
                }
            </thead>
            <tbody>
                { data.map((item) => (
                <tr key={item.id}>
                    {headers.map((header) => (    
                        <td>{item[header]}</td>
                    ))
                    }
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Product