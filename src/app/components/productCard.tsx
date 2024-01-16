

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  getProductData,
  getColorData,
  getMaterialData,
} from "../services/apiService";

interface ProductData {
  id: number;
  name: string;
  colorId: number;
  materialId: number;
  price: number;
  image: string;
}

interface ColorData {
  id: number;
  name: string;
}

interface MaterialData {
  id: number;
  name: string;
}

interface ProductListProps {
  onCartItemCountChange: (count: number) => void;
  cartItemCount: number;
}

const ProductList: React.FC<ProductListProps> = ({
  onCartItemCountChange,
  cartItemCount,
}) => {
  const itemsPerPage = 6;

  const [productData, setProductData] = useState<ProductData[]>([]);
  const [colorData, setColorData] = useState<ColorData[]>([]);
  const [materialData, setMaterialData] = useState<MaterialData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<{ [productId: number]: number }>(
    {}
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await getProductData();
        setProductData(productResponse.products);

        const colorResponse = await getColorData();
        setColorData(colorResponse);

        const materialResponse = await getMaterialData();
        setMaterialData(materialResponse);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = productData.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddToCart = (productId: number) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      updatedCartItems[productId] = (updatedCartItems[productId] || 0) + 1;

      const newCartItemCount = Object.values(updatedCartItems).reduce(
        (total, count) => total + count,
        0
      );

      onCartItemCountChange(newCartItemCount);

      return updatedCartItems;
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[productId] > 0) {
        updatedCartItems[productId] -= 1;
      }

 
      const newCartItemCount = Object.values(updatedCartItems).reduce(
        (total, count) => total + count,
        0
      );


      onCartItemCountChange(newCartItemCount);

      return updatedCartItems;
    });
  };

  const renderProductCards = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return currentProducts.map((product) => {
      const productColor = Array.isArray(colorData)
        ? colorData.find((color) => color.id === product.colorId)
        : undefined;

      const productMaterial = Array.isArray(materialData)
        ? materialData.find((material) => material.id === product.materialId)
        : undefined;

      const isItemInCart = cartItems[product.id] > 0;

      return (
        <div
          className="product-card col-lg-3 col-md-6 col-sm-12 col-xs-12"
          key={product.id}
        >
          <div className="product-image">
            <Image src={product.image} alt={product.name} />
            <div className="Image-overlay">
              {isItemInCart ? (
                <span onClick={() => handleRemoveFromCart(product.id)}>
                  Remove from Cart
                </span>
              ) : (
                <span onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </span>
              )}
            </div>
          </div>
          <div className="product-desc">
            <h2>{product.name}</h2>
            <div className="cat-container">
              <span>{productColor?.name}</span>
              <span>{productMaterial?.name}</span>
            </div>
            <span>INR {product.price}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="main-product-container col-lg-10 col-md-12 col-sm-12 col-xs-12">
      <div className="product-container">{renderProductCards()}</div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(productData.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={
                index + 1 === currentPage
                  ? "activePagination paginationNumber"
                  : "paginationNumber"
              }
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
