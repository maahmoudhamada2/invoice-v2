import ItemsTable from "./ItemsTable";

interface ItemsListProps {
  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  total: number;
}

const ItemsContainer = ({ items, total }: ItemsListProps) => {
  return (
    <div className="text-body-bold leading-3.75">
      <div
        className="px-6 pt-6.25 pb-5.75 rounded-tl-md rounded-tr-md 
                    bg-ghost flex flex-col gap-6 md:gap-8 ">
        {items.map((item, idx) => (
          <div
            key={`item-${idx + 1}`}
            className="md:hidden flex justify-between items-center gap-20.25">
            <div>
              <h2 className="text-text-primary mb-2">{item.name}</h2>
              <p className="text-text-muted">
                {item.quantity} x £{item.price.toFixed(2)}
              </p>
            </div>
            <p className="text-text-primary">£ {item.total.toFixed(2)}</p>
          </div>
        ))}
        <ItemsTable items={items} />
      </div>
      <section
        className="flex justify-between items-center text-white bg-neutral dark:bg-[#0c0e16] 
                        px-6 pt-8 pb-7.5 rounded-br-md rounded-bl-md">
        <h2 className=" text-body">
          <span className="md:hidden">Grand Total</span>
          <span className="max-md:hidden">Amount Due</span>
        </h2>
        <p className="text-[24px] leading-8 font-bold tracking-[-0.5px]">
          £ {total.toFixed(2)}
        </p>
      </section>
    </div>
  );
};

export default ItemsContainer;
