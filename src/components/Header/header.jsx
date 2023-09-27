"use client";
import React, { useEffect, useState } from "react";
import { Cart, Logo, MenuBarr } from "../icons";
import "./page.scss";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
function Header() {
  const pathname = usePathname();
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const [token, settoken] = useState(false)
  const [bar, setbar] = useState(false);
  const router = useRouter()
  useEffect(() => {
    settoken(JSON.parse(localStorage.getItem('token') || false))
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderShrunk(true);
      } else {
        setIsHeaderShrunk(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderShrunk]);
  const logout =()=>{
  localStorage.removeItem('token')
  router.push('/login')
  }
console.log(token);
  return (
    <header className={`  ${isHeaderShrunk ? "shrink" : "noshrink"} `}>
      <div className="container header">
        <div className="logo">
          <Logo />
        </div>
        <nav className={`${bar && "show"}`}>
          <div className="navOne">
            <Link className={`${pathname === "/" ? "active" : ""}`} href={"/"}>
              Home
            </Link>
            <Link
              className={`${pathname === "/dishes" ? "active" : ""}`}
              href={"/dishes"}
            >
              Dishes
            </Link>
          </div>
          <div className="navTwo">
            <Link
              className={`${pathname === "/cart" ? "active" : ""}`}
              href={"/cart"}
            >
              <Cart />
            </Link>
           {
            token ? <div onClick={logout} className="logout" >Log out</div> :<>
             <Link
              className={`whiteBtn ${pathname === "/" ? "active" : ""}`}
              href={"/login"}
            >
              Login
            </Link>
            <Link href={"/register"} className="prBtn">
              Sign up
            </Link></>
           }
          </div>
        </nav>
        <button onClick={() => setbar(!bar)} className="menubar">
          <MenuBarr />
        </button>
      </div>
    </header>
  );
}

export default Header;
