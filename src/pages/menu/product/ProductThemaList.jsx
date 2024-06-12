import productThemaData from "../../../assets/api/productThemaData";
import ProductThemaItem from "./productThemaItem";
import { ProductUl } from "./ProductStyle";
const ProductThemaList = ({ currentThema }) => {
  const currentThemaData = productThemaData.find(
    (item) => item.thema === currentThema
  );
  return (
    <ProductUl>
      {currentThemaData.data.map((data) => (
        <ProductThemaItem key={data.index} data={data} />
      ))}
    </ProductUl>
  );
};

export default ProductThemaList;
