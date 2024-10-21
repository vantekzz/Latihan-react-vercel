import React from "react";

function production () {
    const products = {
        { id: "P001", nama: "Asus", harga: 8000000},
        { id: "P002", nama: "Acer", harga: 9000000},
        { id: "P003", nama: "Lenovo", harga: 1850000},

    }

    return (
        <table>
            <thead>
                <tr>
                    <th> ID</th>
                    <th> Nama Produk</th>
                    <th> harga </th>
                </tr>
            </thead>
            <tbody>
{products.legth > 0 && products.map((product) > {
    <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.nama}</td>
        <td>{product.harga}</td>
    </tr>
))}

            </tbody>

        </table>
    )
}
export default Product;