import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Briefcase, FolderGit2, Menu, Popcorn, Rss } from "lucide-react";
import { Button } from "./button";

export const Navbar: React.FC = () => {
  return (
    <nav
      className={`
        flex
        bg-[#20202380]
        backdrop-blur-sm
        text-white
        justify-between
        align-baseline
        p-4
        place-items-center
      `}
    >
      <p className="hidden sm:block">Jholdy Damasceno</p>
      <nav className="hidden sm:block">
        <div className="flex flex-row items-center gap-2">
          <Button variant="ghost">
            <Briefcase size={12} /> Works
          </Button>
          <Button variant="ghost">
            <Rss size={12} /> Posts
          </Button>
          <Button variant="ghost">
            <Popcorn size={12} /> Uses
          </Button>
          <Button variant="ghost">
            <FolderGit2 size={12} /> Source
          </Button>
        </div>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu className="sm:hidden" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 sm:hidden">
          <DropdownMenuItem>
            <Briefcase size={12} /> Works
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Rss size={12} /> Posts
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Popcorn size={12} /> Uses
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FolderGit2 size={12} /> Source
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
