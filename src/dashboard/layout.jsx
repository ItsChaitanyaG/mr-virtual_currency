import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";

import Dash_Sidebar from "@/components/DashComps/Dash_Sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <Dash_Sidebar />
      <SidebarInset>
        <header>
          <SidebarTrigger />
        </header>
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
