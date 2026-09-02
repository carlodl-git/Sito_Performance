"use client";

import * as CookieConsent from "vanilla-cookieconsent";

/**
 * Riapre il pannello delle preferenze dal footer. Il consenso va potuto
 * revocare con la stessa facilità con cui lo si dà, quindi questo
 * bottone sta accanto alla privacy policy su ogni pagina.
 */
export function PreferenzeCookie({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => CookieConsent.showPreferences()}
      className={className}
    >
      Preferenze cookie
    </button>
  );
}
