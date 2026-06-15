"use client";

import { useState } from "react";

interface InputContatoProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  rows?: number;
}

export default function InputContato({
  id, name, label, type = "text", value, placeholder, onChange, textarea = false, rows = 5
}: InputContatoProps) {
  const [focado, setFocado] = useState(false);

  const estiloBase = {
    backgroundColor: "var(--color-surface-container-high)",
    borderColor: focado ? "var(--color-primary)" : "rgba(255,255,255,0.1)",
    color: "var(--color-on-surface)",
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[14px] font-medium"
        style={{ color: "var(--color-on-surface-variant)", fontFamily: "JetBrains Mono, monospace" }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setFocado(true)}
          onBlur={() => setFocado(false)}
          className="w-full px-4 py-3 rounded-lg border resize-none"
          style={estiloBase}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setFocado(true)}
          onBlur={() => setFocado(false)}
          className="w-full min-h-[48px] px-4 py-3 rounded-lg border"
          style={estiloBase}
        />
      )}
    </div>
  );
}