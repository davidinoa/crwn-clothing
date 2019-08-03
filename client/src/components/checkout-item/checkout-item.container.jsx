import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import CheckoutItem from './checkout-item.component';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($item: Item!) {
    removeItemFromCart(item: $item) @client
  }
`;

const CLEAR_ITEM_FROM_CART = gql`
  mutation ClearItemFromCart($item: Item!) {
    clearItemFromCart(item: $item) @client
  }
`;

const CheckoutItemContainer = props => {
  const { cartItem } = props;
  return (
    <Mutation mutation={ADD_ITEM_TO_CART} variables={{ item: cartItem }}>
      {addItemToCart => (
        <Mutation mutation={REMOVE_ITEM_FROM_CART} variables={{ item: cartItem }}>
          {removeItemFromCart => (
            <Mutation mutation={CLEAR_ITEM_FROM_CART} variables={{ item: cartItem }}>
              {clearItemFromCart => (
                <CheckoutItem
                  cartItem={cartItem}
                  addItem={addItemToCart}
                  removeItem={removeItemFromCart}
                  clearItem={clearItemFromCart}
                />
              )}
            </Mutation>
          )}
        </Mutation>
      )}
    </Mutation>
  );
};

export default CheckoutItemContainer;
