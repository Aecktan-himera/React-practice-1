//import {product} from "../data/products";

function ProductCard({ product }) {
  const { id, category, make, model, price, images, isSpecialOffer, brand } =
    product;

  return (
    <div>
      <img src={images[0]} />
      <p>{model}</p>
      <p>{make}</p>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
