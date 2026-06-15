"use client";

import useCanvasCursor from "@/hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();

  // Adicionamos z-50 para ficar por cima de tudo e mudámos o id para evitar conflitos
  return (
    <canvas 
      className="pointer-events-none fixed inset-0 z-50" 
      id="canvas-cursor" 
    />
  );
};

export default CanvasCursor;