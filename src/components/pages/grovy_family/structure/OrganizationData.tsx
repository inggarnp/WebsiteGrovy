// ===================================
// DATA STRUKTUR ORGANISASI GROVY 2026
// ===================================
// File ini berisi semua data nama-nama anggota
// Edit file ini untuk update struktur organisasi

import { Node, Position } from "reactflow";
import {
  topNodeStyle,
  midNodeStyle,
  divisionStyle,
  subNodeStyle,
  createLabelWithTitle,
} from "@/components/pages/grovy_family/structure/StyleStructure";

export const organizationNodes: Node[] = [
  // ==========================================
  // LEVEL 1: PIMPINAN TERTINGGI
  // ==========================================
  {
    id: "bos",
    data: { label: "BOS BESAR\nVICTORIA KIMBERLY" },
    position: { x: 560, y: 20 },
    style: topNodeStyle,
    sourcePosition: Position.Bottom,
  },
  {
    id: "ketua",
    data: { label: "KETUA UMUM\nNADYAH EKA PUTRI" },
    position: { x: 560, y: 120 },
    style: topNodeStyle,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },

  // ==========================================
  // LEVEL 2: WAKIL & BENDAHARA (SEJAJAR)
  // ==========================================
  {
    id: "wakil",
    data: { label: "WAKIL KETUA\nHAIKAL HAFIDZ" },
    position: { x: 370, y: 230 },
    style: midNodeStyle,
    targetPosition: Position.Top,
  },
  {
    id: "bendahara",
    data: {
      label: "BENDAHARA\nANNAFA LUTHFIA\nJANZEN FYODORE",
    },
    position: { x: 770, y: 230 },
    style: midNodeStyle,
    targetPosition: Position.Top,
  },

  // ==========================================
  // LEVEL 3: DIVISI UTAMA (3 KOLOM)
  // ==========================================
  {
    id: "media",
    data: { label: "MEDIA" },
    position: { x: 100, y: 360 },
    style: divisionStyle,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: "community",
    data: { label: "COMMUNITY" },
    position: { x: 580, y: 360 },
    style: divisionStyle,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: "esport",
    data: { label: "PJ ESPORT\nRIZKY ALFIANSYAH" },
    position: { x: 970, y: 360 },
    style: { ...divisionStyle, width: 160 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },

  // ==========================================
  // KOLOM KIRI: DIVISI MEDIA
  // ==========================================
  
  // --- SUB-DIVISI: SOSIAL MEDIA ---
  {
    id: "sosmed",
    data: { label: "SOSIAL MEDIA" },
    position: { x: 10, y: 480 },
    style: { ...divisionStyle, width: 120, fontSize: "10px" },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: "sosmed-x",
    data: {
      label: createLabelWithTitle("X", "BRIAN SUBASTIAN\nARRAFA DWI PUTRA"),
    },
    position: { x: -5, y: 560 },
    style: { ...subNodeStyle, width: 150 },
    targetPosition: Position.Top,
  },
  {
    id: "sosmed-ig",
    data: {
      label: createLabelWithTitle(
        "INSTAGRAM",
        "HAIKAL TADESA\nFATHAN HADI\nKEISHA FADHILAH"
      ),
    },
    position: { x: -5, y: 660 },
    style: { ...subNodeStyle, width: 150 },
    targetPosition: Position.Top,
  },
  {
    id: "sosmed-tt",
    data: {
      label: createLabelWithTitle(
        "TIKTOK",
        "DAVA BENARIVO\nANANDA ALIFA\nFANESSA HAZZARA\nMUHAMMAD RAFI\nVINO ARDIANSYAH"
      ),
    },
    position: { x: -5, y: 780 },
    style: { ...subNodeStyle, width: 150 },
    targetPosition: Position.Top,
  },

  // --- SUB-DIVISI: IT ---
  {
    id: "it",
    data: { label: createLabelWithTitle("IT", "INGGAR NUGRAHA") },
    position: { x: 170, y: 560 },
    style: { ...subNodeStyle, width: 120 },
    targetPosition: Position.Top,
  },

  // --- SUB-DIVISI: CREATIVE ---
  {
    id: "creative",
    data: { label: "CREATIVE" },
    position: { x: 320, y: 480 },
    style: { ...divisionStyle, width: 120, fontSize: "10px" },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: "creative-design",
    data: {
      label: createLabelWithTitle(
        "DESAIN",
        "REVANUR IKHSAN\nRESTU FACHRI\nNAQIEBUL\nTHUFAIL\nRULY ADITYA"
      ),
    },
    position: { x: 320, y: 560 },
    style: { ...subNodeStyle, width: 120 },
    targetPosition: Position.Top,
  },
  {
    id: "creative-ilustrator",
    data: { label: createLabelWithTitle("ILUSTRATOR", "ALANIST") },
    position: { x: 320, y: 703 },
    style: { ...subNodeStyle, width: 120 },
    targetPosition: Position.Top,
  },

  // ==========================================
  // KOLOM TENGAH: DIVISI COMMUNITY
  // ==========================================
  {
    id: "project",
    data: {
      label: createLabelWithTitle(
        "PROJECT",
        "RIZKY AFRILYANSYAH\nNARAYAN ALIF ARZUDA\nFARHAN MARCHILIAN\nMUHAMMAD RAIHAN\nABILLAH IBNU"
      ),
    },
    position: { x: 560, y: 455 },
    style: subNodeStyle,
    targetPosition: Position.Top,
  },
  {
    id: "merch",
    data: { label: createLabelWithTitle("MERCHANDISE", "BADRU TAMAM") },
    position: { x: 560, y: 600 },
    style: subNodeStyle,
    targetPosition: Position.Top,
  },
  {
    id: "line",
    data: {
      label: createLabelWithTitle("LINE GRUP", "NOVIRA\nMUHAMMAD FADLAN"),
    },
    position: { x: 560, y: 688 },
    style: subNodeStyle,
    targetPosition: Position.Top,
  },
  {
    id: "discord",
    data: { label: createLabelWithTitle("DISCORD", "ELLO BIRE") },
    position: { x: 560, y: 790 },
    style: subNodeStyle,
    targetPosition: Position.Top,
  },

  // ==========================================
  // KOLOM KANAN: DIVISI ESPORT
  // ==========================================
  {
    id: "mlbb",
    data: { label: createLabelWithTitle("ESPORT MLBB", "RAFI DWYANTO") },
    position: { x: 960, y: 480 },
    style: subNodeStyle,
    targetPosition: Position.Top,
  },
  {
    id: "pubg",
    data: { label: createLabelWithTitle("ESPORT PUBG", "GERALD LATANSA") },
    position: { x: 960, y: 580 },
    style: subNodeStyle,
    targetPosition: Position.Top,
  },
];