import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function AddressReady() {
  return (
    <div  className="w-full">
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Shipping Address</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Billing Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Daniel Ramos / independencia S/N barrio san bartolo</TableCell>
              <TableCell>951 152 1133</TableCell>
              <TableCell>Billing- and delivery address are the same.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
