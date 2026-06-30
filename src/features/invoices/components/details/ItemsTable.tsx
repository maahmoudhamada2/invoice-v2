import TableRow from "./TableRow";

interface ProjectItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

const ItemsTable = ({ items }: { items: ProjectItem[] }) => {
  const colHeadings = ["Item Name", "QTY.", "Price", "Total"];
  return (
    <table className="max-md:hidden w-full">
      <thead className="text-text-secondary">
        <TableRow isHeader={true} rowData={colHeadings} />
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <TableRow key={`item-${idx + 1}`} isHeader={false} rowData={item} />
        ))}
      </tbody>
    </table>
  );
};

export default ItemsTable;
