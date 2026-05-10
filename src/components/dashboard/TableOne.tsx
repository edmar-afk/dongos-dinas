import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

// Define the TypeScript interface for the table rows
interface Product {
  id: number; // Unique identifier for each product
  purok: string; // Purok name
  total: number; // Total population
  male: number; // Number of males
  female: number; // Number of females
  household_no: number; // Number of households
}

// Define the table data using the interface
const tableData: Product[] = [
  {
    id: 1,
    purok: "Purok 1",
    total: 226,
    male: 113,
    female: 113,
    household_no: 50,
  },
  {
    id: 2,
    purok: "Purok 2",
    total: 226,
    male: 113,
    female: 113,
    household_no: 50,
  },
  {
    id: 3,
    purok: "Purok 3",
    total: 226,
    male: 113,
    female: 113,
    household_no: 50,
  },
  {
    id: 4,
    purok: "Purok 4",
    total: 226,
    male: 113,
    female: 113,
    household_no: 50,
  },
];

export default function TableOne() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] xl:px-6">
      <div className="flex flex-col gap-2 mb-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Household Population Distribution by sex, by purok
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell className="w-1/5 py-3 font-bold text-gray-500 text-theme-lg dark:text-gray-400 text-start">
                Purok
              </TableCell>
              <TableCell className="w-1/5 py-3 font-bold text-gray-500 text-theme-lg dark:text-gray-400 text-center">
                Total
              </TableCell>
              <TableCell className="w-1/5 py-3 font-bold text-gray-500 text-theme-lg dark:text-gray-400 text-center">
                Male
              </TableCell>
              <TableCell className="w-1/5 py-3 font-bold text-gray-500 text-theme-lg dark:text-gray-400 text-center">
                Female
              </TableCell>
              <TableCell className="w-1/5 py-3 font-bold text-gray-500 text-theme-lg dark:text-gray-400 text-center">
                No. of Household
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((product) => (
              <TableRow key={product.id} className="">
                <TableCell className="py-3">
                  <p className="font-medium text-gray-800 text-theme-xl dark:text-white/90 text-start">
                    {product.purok}
                  </p>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-xl dark:text-gray-400 text-center">
                  {product.total}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-xl dark:text-gray-400 text-center">
                  {product.male}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-xl dark:text-gray-400 text-center">
                  {product.female}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-xl dark:text-gray-400 text-center">
                  {product.household_no}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
