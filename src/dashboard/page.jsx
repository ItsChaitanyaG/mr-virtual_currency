import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import StatsCard from "@/components/DashComps/StatsCard";
import TransactionList from "@/components/DashComps/TransactionList";
import Layout from "./layout";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <section>Dashboard</section>

        <div className="p-8 bg-slate-950-50 min-h-screen">
          <h1 className="text-3xl font-bold mb-8">Finance Dashboard</h1>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2 text-white">
                <CardDescription>
                  <Avatar className="h-9 w-9">
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                </CardDescription>
                <CardTitle className="text-3xl">ABC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">abc@gmail.com</p>
              </CardContent>
            </Card>

            <StatsCard
              title="Balance"
              value="$45,231.89"
              change="+20.1% from last month"
            />
            <StatsCard
              title="Total Revenue"
              value="$123,456.78"
              change="+180.1% from last month"
            />
            <StatsCard
              title="Expenses"
              value="-12,234"
              change="+19% from last month"
            />
          </div>

          {/* Recent Transactions */}
          <Card className="bg-slate-800 text-white border-slate-700">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>
                You made 265 transactions this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TransactionList />
            </CardContent>
          </Card>
        </div>
      </Layout>
    </>
  );
}
