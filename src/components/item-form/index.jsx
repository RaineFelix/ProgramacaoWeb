// Hooks
import { useState } from "react";
import { useBasket } from "../../providers/basket";

export default function ItemForm() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { addItem } = useBasket();

  const [mutableItem, setMutableItem] = useState({
    name: "",
    price: 0,
    quantity: 1,
  });

  const subTotal = Number(mutableItem.price) * Number(mutableItem.quantity);

  const handleUpdate = (e) => {
    const fieldName = e.target.name;
    const newValue = e.target.value;

    const newItem = { ...mutableItem };
    newItem[fieldName] = newValue;

    setMutableItem({ ...newItem });
  };

  const resetForm = () => {
    setMutableItem({
      name: "",
      price: 0,
      quantity: 1,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({
      ...mutableItem,
      price: Number(mutableItem.price),
      quantity: Number(mutableItem.quantity),
    });

    setDialogOpen(false);
    resetForm();
  };

  return (
    <>
      {dialogOpen && <div className="backdrop"></div>}
      <button onClick={() => setDialogOpen(true)} className="primary-button">
        + Adicionar novo item
      </button>
      <dialog open={dialogOpen}>
        <div className="flex justify-between">
          <h3>Adicionar novo item</h3>
          <button onClick={() => setDialogOpen(false)} className="remove">
            X
          </button>
        </div>
        <hr />
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-1 flex-break-mobile"
        >
          <label>
            <p>Nome</p>
            <input
              type="text"
              name="name"
              value={mutableItem.name}
              onChange={handleUpdate}
              required
            />
          </label>
          <label>
            <p>Quantidade</p>
            <input
              type="number"
              name="quantity"
              value={mutableItem.quantity}
              onChange={handleUpdate}
              required
              min={1}
            />
          </label>
          <label>
            <p>Preço (R$)</p>
            <input
              type="number"
              name="price"
              value={mutableItem.price}
              onChange={handleUpdate}
              required
              step="0.01"
            />
          </label>
          <p>
            <strong>Subtotal: </strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(subTotal)}
          </p>
          <button type="submit" className="primary-button">
            Adicionar
          </button>
        </form>
      </dialog>
    </>
  );
}
