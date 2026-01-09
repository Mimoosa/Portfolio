"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return <Navbar />;
}
