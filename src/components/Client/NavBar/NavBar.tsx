// src/components/Client/Navbar.tsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";




import "./NavBar.css"
export const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
      <Link to="/" className="title">
        Site
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about">A-Propos</NavLink>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className=" selectItems  text-white cursor-pointer">
              Services
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0f172a] text-white rounded-md shadow-lg mt-5">
              <DropdownMenuItem asChild className="selectMenu">
                <Link to="/services/reservation" className="dropdown-item">
                  Service 1
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="selectMenu">
                <Link to="/services/colis" className="dropdown-item">
                  Service 2
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="selectMenu">
                <Link to="/services/courrier" className="dropdown-item">
                  Service 3
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="flex mr-8 connect_avatar">
        <Button asChild className="bg-purple-500">
          <Link
            to="/login"
            className="text-white rounded-xl mr-2  hover:bg-blue-400"
          >
            SE CONNECTER
          </Link>
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
