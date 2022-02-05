import React, { useState } from "react";

import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => {
  const [shopData, setShopData] = useState(SHOP_DATA);

  // const { collections } = shopData;
  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

export default ShopPage;
