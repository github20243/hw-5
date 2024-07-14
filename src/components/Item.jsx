import React, { useState } from 'react';
import Button from './UI/Button'; // Убедитесь, что путь к вашему компоненту Button правильный

const Item = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h2>Жетинчи уй тапшырма</h2>
      <div>
        <Button onClick={() => handleItemClick("Item 1")}>Item 1</Button>
        <Button onClick={() => handleItemClick("Item 2")}>Item 2</Button>
        <Button onClick={() => handleItemClick("Item 3")}>Item 3</Button>
        <Button onClick={() => handleItemClick("Item 4")}>Item 4</Button>
        <Button onClick={() => handleItemClick("Item 5")}>Item 5</Button>
      </div>
      <br />
      {selectedItem && <p>You selected: {selectedItem}</p>}
    <br />
      <hr />
    </div>
  );
};

export default Item;
