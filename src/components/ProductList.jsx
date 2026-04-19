import ProductCard from "../components/ProductCard";

function ProductList({ products }) {
    const displayedProducts = products.slice(0, 8);
  return (
    <>
      <p className="total-amount">{displayedProducts.length} products</p>
      <div className="products-container">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;