// ===================================
// STYLES & HELPER FUNCTIONS
// ===================================
// File ini berisi semua styling untuk node dan komponen
// Edit file ini untuk mengubah tampilan visual

import React from "react";

// ==========================================
// STYLE UNTUK NODE BERDASARKAN LEVEL
// ==========================================

// Level 1: Pimpinan Tertinggi (Bos, Ketua)
export const topNodeStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #B0DAFF, #72B4E8)", // Biru muda ke biru sedang
  border: "2px solid #72B4E8",
  borderRadius: "20px",
  padding: "10px 24px",
  fontWeight: "bold",
  color: "#1a3a6b", // Biru tua untuk text
  textAlign: "center",
  fontSize: "12px",
  width: 180,
  whiteSpace: "pre-line",
};

// Level 2: Wakil & Bendahara
export const midNodeStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #B0DAFF, #72B4E8)",
  border: "2px solid #72B4E8",
  borderRadius: "20px",
  padding: "10px 20px",
  fontWeight: "bold",
  color: "#1a3a6b",
  textAlign: "center",
  fontSize: "11px",
  width: 160,
  whiteSpace: "pre-line",
};

// Level 3: Divisi Utama (Media, Community, Esport)
export const divisionStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #B0DAFF, #72B4E8)",
  borderRadius: "20px",
  padding: "10px 32px",
  fontWeight: "bold",
  color: "#2563eb", // Biru cerah untuk text
  border: "2px solid rgba(114, 180, 232, 0.6)",
  fontSize: "12px",
  width: 140,
  textAlign: "center",
};

// Level 4: Sub-Divisi & Anggota
export const subNodeStyle: React.CSSProperties = {
  background: "rgba(26, 58, 107, 0.92)", // Biru tua (dari navbar)
  color: "white",
  borderRadius: "12px",
  padding: "12px 16px",
  fontSize: "10px",
  width: 180,
  whiteSpace: "pre-line",
  border: "1px solid rgba(114, 180, 232, 0.3)",
  textAlign: "center",
};

// ==========================================
// HELPER FUNCTION: LABEL DENGAN TITLE
// ==========================================
export const createLabelWithTitle = (title: string, names: string): React.ReactElement => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Judul Role */}
      <div
        style={{
          color: "#B0DAFF", // Biru muda terang
          fontWeight: "bold",
          fontSize: "11px",
          marginBottom: "4px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
      {/* Nama Anggota */}
      <div
        style={{
          color: "rgba(255,255,255,0.9)",
          fontSize: "10px",
          lineHeight: "1.4",
          whiteSpace: "pre-line",
        }}
      >
        {names}
      </div>
    </div>
  );
};

// ==========================================
// STYLE UNTUK BACKGROUND GRADIENT
// ==========================================
export const backgroundStyle: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(135deg, #0f1e3a, #1a3a6b, #2563eb)", // Biru gelap ke biru cerah
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

// ==========================================
// STYLE UNTUK HEADER
// ==========================================
export const headerStyle: React.CSSProperties = {
  height: "100px",
  background: "linear-gradient(180deg, rgba(37, 99, 235, 0.5), transparent)", // Biru gradient
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "2px solid rgba(114, 180, 232, 0.3)",
  flexShrink: 0,
};

export const headerTitleStyle: React.CSSProperties = {
  fontSize: "36px",
  fontWeight: "700",
  color: "white",
  textShadow: "0 4px 20px rgba(37, 99, 235, 0.8)", // Shadow biru
  letterSpacing: "2px",
  margin: 0,
  fontFamily: "serif",
};

// ==========================================
// DECORATIVE ELEMENTS
// ==========================================
export const decorativeCircleStyle: React.CSSProperties = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #72B4E8, #B0DAFF)", // Biru gradient
  border: "2px solid rgba(114, 180, 232, 0.8)",
};

export const decorativeLeftStyle: React.CSSProperties = {
  position: "absolute",
  left: "80px",
  display: "flex",
  gap: "12px",
  alignItems: "center",
};

export const decorativeRightStyle: React.CSSProperties = {
  position: "absolute",
  right: "80px",
  display: "flex",
  gap: "12px",
  alignItems: "center",
};

// ==========================================
// REACTFLOW CONTAINER STYLES
// ==========================================
export const flowContainerStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  minHeight: 0,
};

export const flowWrapperStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "1600px",
  aspectRatio: "16 / 9",
  maxHeight: "100%",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
};

// ==========================================
// MINIMAP & CONTROLS STYLES
// ==========================================
export const minimapStyle: React.CSSProperties = {
  backgroundColor: "rgba(26, 58, 107, 0.9)", // Biru tua
  border: "2px solid rgba(114, 180, 232, 0.3)",
  borderRadius: "8px",
};

export const controlsButtonStyle: React.CSSProperties = {
  backgroundColor: "rgba(26, 58, 107, 0.9)",
  border: "1px solid rgba(114, 180, 232, 0.3)",
  color: "#72B4E8",
};