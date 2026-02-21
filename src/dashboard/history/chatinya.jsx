import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TransactionList from "@/components/DashComps/TransactionList";

export default function History() {
  return (
    <>
      <Card className="bg-slate-800 text-white border-slate-700 my-5.5 ">
        <CardHeader className="flex justify-between">
          <div className="text-3xl">
            <CardTitle>Transfer History</CardTitle> <br />
            <CardDescription>
              You made 699 transactions this month.
            </CardDescription>
          </div>
          <div className="flex gap-5">
            <Select className="" id="months" placeholder="Month">
              <SelectTrigger className="w-25">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="light">Jan</SelectItem>
                  <SelectItem value="dark">Feb</SelectItem>
                  <SelectItem value="system">Mar</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select className="" id="year" placeholder="Year">
              <SelectTrigger className="w-25">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="light">2026</SelectItem>
                  <SelectItem value="dark">2025</SelectItem>
                  <SelectItem value="system">2024</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-25">
              Filter
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <TransactionList />
        </CardContent>
      </Card>
    </>
  );
}
