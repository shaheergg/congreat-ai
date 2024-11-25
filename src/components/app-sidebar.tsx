import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CongreatLogo from "@/assets/congreatai.png";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center py-4">
          <Link to="/">
            <img
              className="h-8 w-auto"
              src={CongreatLogo}
              alt="Congreat AI Logo"
            />
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-col px-4 gap-4 pb-4">
          <Button>Get a demo</Button>
          <Link to={"/login"} className="w-full">
            <Button className="rounded-full w-full" variant={"outline"}>
              Login
            </Button>
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
