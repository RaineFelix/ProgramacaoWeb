// Components
import ListItem from "../list-item";
import NoData from "./partials/no-data";

export default function ListView({ items }) {
  return (
    <section>
      <ul className="flex flex-col">
        {items?.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </ul>
      {items.length === 0 && <NoData />}
    </section>
  );
}
