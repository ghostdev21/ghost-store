import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectItemToAdd() {
  return (
    <Select>
      <SelectTrigger className="lg:max-w-xs w-full bg-primary-foreground">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem  value="US">Estados unidos</SelectItem>
        <SelectItem value="MX">México</SelectItem>
      </SelectContent>
    </Select>
  );
}
