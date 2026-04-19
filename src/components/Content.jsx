import Sidebar from "../components/Sidebar";
import ProductList from "./ProductList";
import { products } from "../data/products";

function Content() {
  return (
    <>
      <main>
        <ProductList products={products} />
      </main>
      <aside>
        <Sidebar />
      </aside>
    </>
  );
}

export default Content;
