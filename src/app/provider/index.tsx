import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <Routes>{children}</Routes>
    </BrowserRouter>
  );
};
