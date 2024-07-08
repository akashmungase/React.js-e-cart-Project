import { useState } from "react";
import ProductCard from "../components/common/ProductCard";
function Laptops() {

    const [laptopDetails, setLaptopDetails] = useState(
        [{
            image_url: '/assets/images/laptop.webp',
            product_desc: 'Pilates 14" Touch Screen Laptop 12GB Memory',
            price: '$85.00',
            rating: '3',
        },
        {
            image_url: '/assets/images/laptop-2.webp',
            product_desc: 'Pilates 14" Touch Screen Laptop 12GB Memory',
            price: '$85.00',
            rating: '3',
        },
        {
            image_url: '/assets/images/laptop.webp',
            product_desc: 'Pilates 14" Touch Screen Laptop 12GB Memory',
            price: '$85.00',
            rating: '3',
        },
        {
            image_url: '/assets/images/laptop-2.webp',
            product_desc: 'Pilates 14" Touch Screen Laptop 12GB Memory',
            price: '$85.00',
            rating: '3',
        },]
    )

    return (
        <ProductCard Props={laptopDetails} />
    )
}

export default Laptops;