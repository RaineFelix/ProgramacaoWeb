// Components
import Header from "../../components/header";
import Footer from "../../components/footer";
import ListView from "../../components/list-view";

// Hooks
import { useBasket } from "../../providers/basket";

export default function Home() {
  const basket = useBasket();

  return (
    <section className="layout">
      <main>
        <Header items={basket.items} />
        <ListView items={basket.items} />
      </main>
      <Footer />
    </section>
  );
}
