"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Stato condiviso dalle due barre di navigazione (centro e aree).
 *
 * In cima alla pagina la barra galleggia sull'hero: trasparente, testo
 * bianco, nessun filetto. Appena si scorre diventa una barra vera: fondo
 * avorio velato, filetto, testo scuro, e si accorcia.
 *
 * Funziona perché ogni pagina del sito comincia con un hero scuro (foto
 * velata o blocco `bg-area-deep`). Se un domani una pagina partisse con
 * un fondo chiaro, lì la barra andrebbe forzata allo stato "scrolled".
 */
export function useHeaderState() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); // al primo render la pagina può già essere scrollata
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cambiando pagina il menu deve chiudersi da solo.
  useEffect(() => setMenuOpen(false), [pathname]);

  // Col menu a tutto schermo aperto, la pagina sotto non deve scorrere.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return { scrolled, menuOpen, setMenuOpen, pathname };
}
