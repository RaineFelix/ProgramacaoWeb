export default function NoData() {
    return (
      <div className="flex flex-col items-center">
        <img src="/img/no-data.webp" alt="Nenhum item adicionado" className="img" />
        <p>Nada por aqui ainda...</p>
        <p>Tente adicionar novos itens!</p>
      </div>
    );
}