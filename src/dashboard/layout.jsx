import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";

import Dash_Sidebar from "@/components/DashComps/Dash_Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <SidebarProvider>
      <Dash_Sidebar />
      <SidebarInset>
        <header>
          <SidebarTrigger />
          {/* button ^  */}
        </header>
        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
