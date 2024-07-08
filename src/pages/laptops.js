import { useState } from "react";
import ProductCard from "../components/common/ProductCard";
function Laptops() {

    const [laptopDetails, setLaptopDetails] = useState(
        [{
            product_desc: 'Pilates 14" Touch Screen Laptop 12GB Memory',
            price: '$85.00',
            rating: '3',
        },
        {
            product_desc: 'Pilates 14" Touch Screen Laptop 12GB Memory',
            price: '$85.00',
            rating: '3',
        },
        {
            product_desc: 'Pilates 14" Touch Screen Laptop 12GB Memory',
            price: '$85.00',
            rating: '3',
        },
        {
            product_desc: 'Pilates 14" Touch Screen Laptop 12GB Memory',
            price: '$85.00',
            rating: '3',
        },]
    )
    // let laptop_details = {
    //     product_desc: 'Pilates 14" Touch Screen Laptop 12GB Memory',
    //     price: '$85.00',
    //     rating: '3',
    // }

    return (
        <ProductCard Props={laptopDetails} />
    )
}

export default Laptops;