import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import "./NavBar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Travel
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
          <DropdownMenu>
            <DropdownMenuTrigger className="selectItems text-white cursor-pointer">
              Services
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0f172a] text-white rounded-md shadow-lg mt-5">
              <DropdownMenuItem asChild className="selectMenu">
                <Link to="/services/reservation" className="dropdown-item">
                  Reservation Billet
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="selectMenu">
                <Link to="/services/colis" className="dropdown-item">
                  Livraison Colis
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="selectMenu">
                <Link to="/services/courrier" className="dropdown-item">
                  Service Courrier
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="selectMenu">
                <Link to="/services/locationBus" className="dropdown-item">
                  Location de Bus
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
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#0f172a] text-white rounded-md shadow-lg mt-2 w-48">
            <DropdownMenuItem asChild className="selectMenu">
              <Link to="/profile">Profil</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="selectMenu">
              <Link to="/transactions">Transactions</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="selectMenu">
              <Link to="/reservations">Réservations</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="selectMenu">
              <Link to="/notifications">Notifications</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="selectMenu">
              <Link to="/coaching">Coaching</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="selectMenu">
              <Link to="/support-faq">Support & FAQ</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="selectMenu">
              <Link to="/Dashboard">dashboard</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
