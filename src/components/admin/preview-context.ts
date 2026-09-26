import { createContext, useContext } from "react";

export const PreviewContext = createContext({
  active: false,
  enter: () => {},
  leave: () => {},
});
export const usePreview = () => useContext(PreviewContext);
