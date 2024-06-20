import { useBasket } from "../../providers/basket";

export default function Footer() {
  const basket = useBasket();

  return (
    <footer className="footer">
      <p>
        <strong>Total: </strong>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(basket.total)}
      </p>
    </footer>
  );
}
