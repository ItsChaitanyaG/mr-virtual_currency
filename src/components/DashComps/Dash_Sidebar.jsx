import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home,
  Settings,
  Users,
  BanknoteArrowUp,
  BanknoteArrowDown,
  ArrowLeftRight,
  History,
} from "lucide-react";

const items = [
  { title: "Home", url: "/wallet/dashboard", icon: Home },
  { title: "Earn", url: "/wallet/earn", icon: BanknoteArrowUp },
  { title: "Withdraw", url: "/wallet/withdraw", icon: BanknoteArrowDown },
  { title: "Transaction", url: "/wallet/transaction", icon: ArrowLeftRight },
  {
    title: "Transfer History",
    url: "/wallet/transaction-history",
    icon: History,
  },
  // { title: "Users", url: "/users", icon: Users },
];
import { Link } from "react-router-dom";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-slate-800 text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-2xl font-semibold mb-4 mt-4">
            <div className="font-bold text-1xl flex flex-row items-center justify-center gap-4  ">
              <div className=" text-center border-4 size-9 border-amber-500 rounded-full flex justify-center items-center  ">
                <div className="bg-yellow-400 size-7 text-center rounded-full flex justify-center items-center">
                  <p className="text-[20px] text-center  flex  text-amber-200">
                    V
                  </p>
                </div>
              </div>
              V-currency
            </div>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className={`relative py-4`}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-3 ">
                      <span>
                        <item.icon size={28} />
                      </span>

                      <span className="text-2xl ">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {/* wait */}
              <SidebarMenuItem className={`fixed  bottom-0 py-4`}>
                <SidebarMenuButton asChild>
                  <Link
                    to="/wallet/profile"
                    className="flex items-center gap-3 "
                  >
                    {/* <a href={"/profile"} className="flex items-center gap-3 "> */}
                    <span>
                      <Users size={28} />
                    </span>

                    <span className="text-2xl "> Profile </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* wait */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
