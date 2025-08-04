"use client";

import React, { useState } from "react";

const panelWidth = 320;

export default function InfoPanel({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Sliding Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: panelWidth,
          background: "#fff",
          boxShadow: open ? "-2px 0 8px rgba(0,0,0,0.15)" : "none",
          transform: open ? "translateX(0)" : `translateX(${panelWidth}px)`,
          transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
            borderBottom: "1px solid #eee",
            background: "#f7f7f7",
          }}
        >
          <span style={{ fontWeight: 700, fontSize: "2rem" }}>{title} </span>
        </div>
        <div
          style={{
            padding: "1rem",
            flex: 1,
            overflowY: "auto",
            fontSize: "1.5rem",
          }}
        >
          <p>{content}</p>
        </div>
      </div>

      {/* Tab/Button */}
      <button
        aria-label={open ? "Hide info panel" : "Show info panel"}
        onClick={() => setOpen((v) => !v)}
        style={{
          position: "fixed",
          top: "40%",
          right: open ? panelWidth : 0,
          transform: "translateY(-50%)",
          zIndex: 1001,
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "8px 0 0 8px",
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          cursor: "pointer",
          transition: "right 0.3s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Info Icon (SVG) */}
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </button>
    </div>
  );
}
