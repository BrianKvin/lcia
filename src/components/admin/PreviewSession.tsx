import { useState, type ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { PreviewContext, usePreview } from "./preview-context";

export function PreviewProvider({ children }: { children: ReactNode }) {
  // This state is navigation convenience only, not an authentication boundary.
  const [active, setActive] = useState(() => {
    try {
      return sessionStorage.getItem("mulembe-admin-preview") === "open";
    } catch {
      return false;
    }
  });
  function update(value: boolean) {
    setActive(value);
    try {
      if (value) sessionStorage.setItem("mulembe-admin-preview", "open");
      else sessionStorage.removeItem("mulembe-admin-preview");
    } catch {
      /* The preview still works when browser storage is unavailable. */
    }
  }
  return (
    <PreviewContext.Provider
      value={{ active, enter: () => update(true), leave: () => update(false) }}
    >
      {children}
    </PreviewContext.Provider>
  );
}

export function PreviewGate() {
  const { active } = usePreview();
  const location = useLocation();
  return active ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
}
