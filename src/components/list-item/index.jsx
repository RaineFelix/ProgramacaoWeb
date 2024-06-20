// Hooks
import { useBasket } from "../../providers/basket";

export default function ListItem(item) {
  const { updateItem, deleteItem } = useBasket();

  const handleUpdate = (e) => {
    const fieldName = e.target.name;
    const newValue = e.target.value;

    const newItem = { ...item };
    newItem[fieldName] = newValue;

    updateItem({ ...newItem });
  };

  return (
    <li className="list-item items-center flex-break-mobile">
      <form className="flex gap-1 items-center flex-break-mobile justify-center">
        <label>
          <p>#{item.id} 🍓</p>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleUpdate}
            required
          />
        </label>
        <div className="flex gap-1 w-full">
          <label>
            <p>Quantidade</p>
            <input
              type="number"
              name="quantity"
              value={item.quantity}
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
              value={item.price}
              onChange={handleUpdate}
              required
              step="0.01"
            />
          </label>
        </div>
      </form>
      <p className="text-center">
        <br />
        <strong>Subtotal: </strong>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(item.subTotal)}
      </p>
      <br />
      <hr />
      <button onClick={() => deleteItem({ id: item.id })} className="remove">
        X Remover Item
      </button>
    </li>
  );
}
