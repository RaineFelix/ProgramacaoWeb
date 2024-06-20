// Components
import ItemForm from "../item-form";

// Hooks
import { useBasket } from "../../providers/basket";

export default function Header({ items }) {
  const basket = useBasket();

  const buildText = () => {
    return [
      "Hey! Olha só a minha lista de compras:",
      "=======================",
      items.map((item) => {
        return `${item.name} - ${item.quantity}x - R$ ${item.price} = R$ ${item.subTotal}`;
      }),
      "-----------------------",
      `Total: R$ ${basket.total}`,
      "=======================",
      `🎉 Lista gerada em ${new Date().toLocaleDateString(
        "pt-BR"
      )} às ${new Date().toLocaleTimeString("pt-BR")}`,
    ];
  };

  const copyBasket = () => {
    const content = buildText();

    try {
      navigator.clipboard.writeText(content.flat().join("\n"));
      alert("Lista copiada com sucesso! 🎉");
    } catch (error) {
      alert("Não foi possível copiar a lista. 😢");
    }
  };

  const shareBasket = () => {
    const content = buildText();

    try {
      navigator.share({
        title: "Minha lista de compras",
        text: content.flat().join("\n"),
      });
    } catch (error) {
      alert("Não foi possível compartilhar a lista. 😢");
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <header className="title flex gap-1">
        <h1>🛒 Carrinho ({items.length})</h1>
      </header>
      <section className="action-buttons gap-1 p-1">
        <ItemForm />
        <button
          onClick={copyBasket}
          className="primary-button"
          disabled={items.length === 0}
        >
          ↪ Copiar lista
        </button>
        <button
          onClick={shareBasket}
          className="primary-button"
          disabled={items.length === 0}
        >
          ✨ Compartilhar lista
        </button>
        <button
          onClick={basket.resetBasket}
          className="primary-button"
          disabled={items.length === 0}
        >
          X Limpar lista
        </button>
      </section>
    </div>
  );
}
