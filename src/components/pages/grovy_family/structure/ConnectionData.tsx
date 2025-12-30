// ===================================
// DATA HUBUNGAN/KONEKSI ORGANISASI
// ===================================
// File ini berisi semua garis penghubung antar posisi
// Edit file ini untuk mengubah struktur hierarki

import { Edge } from "reactflow";

export const organizationEdges: Edge[] = [
  // ==========================================
  // SPINE UTAMA: BOS → KETUA
  // ==========================================
  {
    id: "spine-1",
    source: "bos",
    target: "ketua",
    style: { stroke: "rgba(255,255,255,0.8)", strokeWidth: 3 },
    type: "org",
  },

  // ==========================================
  // CABANG DARI KETUA KE WAKIL & BENDAHARA
  // ==========================================
  {
    id: "ketua-wakil",
    source: "ketua",
    target: "wakil",
    style: { stroke: "rgba(255,255,255,0.7)", strokeWidth: 2.5 },
    type: "org",
  },
  {
    id: "ketua-bendahara",
    source: "ketua",
    target: "bendahara",
    style: { stroke: "rgba(255,255,255,0.7)", strokeWidth: 2.5 },
    type: "org",
  },

  // ==========================================
  // KETUA → COMMUNITY (CENTER HUB)
  // ==========================================
  {
    id: "ketua-community",
    source: "ketua",
    target: "community",
    style: { stroke: "rgba(255,255,255,0.7)", strokeWidth: 2.5 },
    type: "org",
    data: { straight: true }, // Garis lurus vertikal
  },

  // ==========================================
  // COMMUNITY → MEDIA & ESPORT (HORIZONTAL)
  // ==========================================
  {
    id: "community-media",
    source: "community",
    target: "media",
    style: { stroke: "rgba(255,255,255,0.7)", strokeWidth: 2.5 },
    type: "org",
  },
  {
    id: "community-esport",
    source: "community",
    target: "esport",
    style: { stroke: "rgba(255,255,255,0.7)", strokeWidth: 2.5 },
    type: "org",
  },

  // ==========================================
  // DIVISI MEDIA: SUB-DIVISI & ANGGOTA
  // ==========================================
  
  // MEDIA → SOSIAL MEDIA
  {
    id: "media-sosmed",
    source: "media",
    target: "sosmed",
    style: { stroke: "rgba(255,255,255,0.6)", strokeWidth: 2 },
    type: "org",
  },
  {
    id: "sosmed-x",
    source: "sosmed",
    target: "sosmed-x",
    style: { stroke: "rgba(255,255,255,0.5)", strokeWidth: 1.5 },
    type: "org",
  },
  {
    id: "sosmed-ig",
    source: "sosmed-x",
    target: "sosmed-ig",
    style: { stroke: "rgba(255,255,255,0.5)", strokeWidth: 1.5 },
    type: "org",
  },
  {
    id: "sosmed-tt",
    source: "sosmed-ig",
    target: "sosmed-tt",
    style: { stroke: "rgba(255,255,255,0.5)", strokeWidth: 1.5 },
    type: "org",
  },

  // MEDIA → IT
  {
    id: "media-it",
    source: "media",
    target: "it",
    style: { stroke: "rgba(255,255,255,0.6)", strokeWidth: 2 },
    type: "org",
  },

  // MEDIA → CREATIVE
  {
    id: "media-creative",
    source: "media",
    target: "creative",
    style: { stroke: "rgba(255,255,255,0.6)", strokeWidth: 2 },
    type: "org",
  },
  {
    id: "creative-design",
    source: "creative",
    target: "creative-design",
    style: { stroke: "rgba(255,255,255,0.5)", strokeWidth: 1.5 },
    type: "org",
  },
  {
    id: "creative-ilustrator",
    source: "creative-design",
    target: "creative-ilustrator",
    style: { stroke: "rgba(255,255,255,0.5)", strokeWidth: 1.5 },
    type: "org",
  },

  // ==========================================
  // DIVISI COMMUNITY: ANGGOTA
  // ==========================================
  {
    id: "community-project",
    source: "community",
    target: "project",
    style: { stroke: "rgba(255,255,255,0.6)", strokeWidth: 2 },
    type: "org",
  },
  {
    id: "project-merch",
    source: "project",
    target: "merch",
    style: { stroke: "rgba(255,255,255,0.6)", strokeWidth: 2 },
    type: "org",
  },
  {
    id: "merch-line",
    source: "merch",
    target: "line",
    style: { stroke: "rgba(255,255,255,0.6)", strokeWidth: 2 },
    type: "org",
  },
  {
    id: "line-discord",
    source: "line",
    target: "discord",
    style: { stroke: "rgba(255,255,255,0.6)", strokeWidth: 2 },
    type: "org",
  },

  // ==========================================
  // DIVISI ESPORT: ANGGOTA
  // ==========================================
  {
    id: "esport-mlbb",
    source: "esport",
    target: "mlbb",
    style: { stroke: "rgba(255,255,255,0.6)", strokeWidth: 2 },
    type: "org",
  },
  {
    id: "mlbb-pubg",
    source: "mlbb",
    target: "pubg",
    style: { stroke: "rgba(255,255,255,0.6)", strokeWidth: 2 },
    type: "org",
  },
];