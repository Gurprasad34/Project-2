import React from 'react';
import FavoriteButton from './FavoriteButton';

interface PizzaShopItemProps {
  shop: {
    id: number;
    name: string;
    location: string;
  };
}

const PizzaShopItem = ({ shop }: PizzaShopItemProps) => {
  return (
    <div className="pizza-shop-item">
      <h3>{shop.name}</h3>
      <p>{shop.location}</p>
      <FavoriteButton shopId={shop.id} />
    </div>
  );
};

export default PizzaShopItem;
