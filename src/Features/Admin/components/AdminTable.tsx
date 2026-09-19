import type { ReactNode } from "react";

type AdminTableColumn<Row> = {
  header: string;
  cell: (row: Row) => ReactNode;
  className?: string;
};

type AdminTableProps<Row extends { id: string }> = {
  rows: Row[];
  columns: AdminTableColumn<Row>[];
  emptyMessage: string;
};

const AdminTable = <Row extends { id: string }>({
  rows,
  columns,
  emptyMessage,
}: AdminTableProps<Row>) => {
  if (rows.length === 0) {
    return (
      <div className="rounded-xl border border-primary-100 bg-primary-50/50 p-8 text-center text-sm font-bold text-neutral-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-primary-100 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-primary-50 text-xs font-extrabold uppercase tracking-[0.12em] text-primary-700">
            <tr>
              {columns.map((column) => (
                <th key={column.header} className={`px-4 py-3 ${column.className ?? ""}`}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-primary-100">
            {rows.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-primary-50/40">
                {columns.map((column) => (
                  <td key={column.header} className={`px-4 py-4 align-middle ${column.className ?? ""}`}>
                    {column.cell(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
