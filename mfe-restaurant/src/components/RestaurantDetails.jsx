import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const smallScreen = `@media(max-width: 1080px)`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  ${smallScreen} {
    flex-direction: column;
    align-items: center;
  }
`;

const MenuColumn = styled.section`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  ${smallScreen} {
    width: 100%;
  }
`;

const ImageColumn = styled.section`
  max-width: 100%;
  ${smallScreen} {
    order: -1;
  }
`;

const RestaurantName = styled.h1`
  font-size: 40px;
  margin: 10px 0 20px;
`;

const Img = styled.img`
  width: 500px;
  max-width: 100%;
  margin-bottom: 10px;
`;

const Figure = styled.figure`
  margin: 0;
`;

const Caption = styled.figcaption`
  width: 500px;
  max-width: 100%;
  font-size: 30px;
`;

const Total = styled.div`
  align-self: flex-end;
  font-size: 30px;
  margin: 50px 0 0;
  ${smallScreen} {
    margin: 0;
  }
`;

const OrderButton = styled.button`
  padding: 10px 15px;
  margin-top: 15px;
  align-self: flex-end;
  border: none;
  background-color: #e79652;
  font-size: 25px;
`;

const initialQuantities = (restaurant) =>
  restaurant.menu.reduce(
    (result, menuItem) => ({
      ...result,
      [menuItem.item]: 0,
    }),
    {}
  );

const RestaurantDetails = ({
  restaurant: {
    menu,
    name,
    imageSrc,
    imageDescription,
    description,
  },
  restaurant
}) => {
  const [quantities, setQuantities] = useState(() =>
    initialQuantities(restaurant)
  );

  const change = (delta) => (item) => () => {
    setQuantities({ ...quantities, [item]: quantities[item] + delta });
  };

  const submitOrder = () => {
    alert(
      `Thank you for your order of the following delicious JSON:\n
      ${JSON.stringify(quantities)}\n
      (This is the end of the demo)`
    );
  };

  const total = menu.reduce(
    (sum, menuItem) =>
      sum + quantities[menuItem.item] * menuItem.price,
    0
  );

  return (
    <Container>
      <MenuColumn>
        <Menu
          menu={menu}
          quantities={quantities}
          increase={change(1)}
          decrease={change(-1)}
        />
        <Total>Total: ${total}</Total>
        <OrderButton onClick={submitOrder}>Order now</OrderButton>
      </MenuColumn>
      <ImageColumn>
        <RestaurantName>{name}</RestaurantName>
        <Figure>
          <Img src={imageSrc} alt={imageDescription} />
          <Caption>{description}</Caption>
        </Figure>
      </ImageColumn>
    </Container>
  );
};
export default RestaurantDetails;
