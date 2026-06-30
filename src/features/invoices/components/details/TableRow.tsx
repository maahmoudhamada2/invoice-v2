import clsx from "clsx";

type HeaderRowProps = {
  isHeader: true;
  rowData: string[];
};

type DataRowProps = {
  isHeader: false;
  rowData: { name: string; quantity: number; price: number; total: number };
};

type TableRowProps = HeaderRowProps | DataRowProps;

const TableRow = ({ isHeader, rowData }: TableRowProps) => {
  const rowCells = isHeader
    ? rowData
    : [
        rowData.name,
        rowData.quantity,
        `£ ${rowData.price.toFixed(2)}`,
        `£ ${rowData.total.toFixed(2)}`,
      ];

  return (
    <tr
      className={clsx(
        `text-text-secondary text-right **:nth-of-type-1:text-left **:nth-of-type-2:text-center`,
        isHeader ? ` text-body` : `text-body-bold`,
      )}>
      {rowCells.map((cell, idx) =>
        isHeader ? (
          <th key={`cell-${idx + 1}`}>{cell}</th>
        ) : (
          <td
            key={`cell-${idx + 1}`}
            className="first:text-text-primary last:text-text-primary">
            {cell}
          </td>
        ),
      )}
    </tr>
  );
};

export default TableRow;
