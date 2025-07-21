import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/avatar_girl6.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "../mode-toggler";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white">
      <img src={logo} alt="" className="w-10 rounded " />
      <div className="text-xl font-bold">My ToDo App</div>

      {/* Desktop Links */}

      <div className="hidden md:flex gap-6 text-sm font-medium">
        <a href="" className="hover:text-blue-600">
          <ModeToggle></ModeToggle>
        </a>
        <a href="/user" className="hover:text-blue-600">
          User
        </a>
        <a href="/tasks" className="hover:text-blue-600">
          Tasks
        </a>
        {/* <a href="#" className="hover:text-blue-600">
          Contact
        </a> */}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <ModeToggle></ModeToggle>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/user">User</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/tasks">Tasks</a>
            </DropdownMenuItem>
            {/* <DropdownMenuItem>
              <a href="#">Contact</a>
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
