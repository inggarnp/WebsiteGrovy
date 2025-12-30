import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  EdgeProps,
} from "reactflow";
import "reactflow/dist/style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import data dan styles dari folder structure
import { organizationNodes } from "@/components/pages/grovy_family/structure/OrganizationData";
import { organizationEdges } from "@/components/pages/grovy_family/structure/ConnectionData";
import {
  backgroundStyle,
  headerStyle,
  headerTitleStyle,
  decorativeCircleStyle,
  decorativeLeftStyle,
  decorativeRightStyle,
  flowContainerStyle,
  flowWrapperStyle,
  minimapStyle,
} from "@/components/pages/grovy_family/structure/StyleStructure";

// ==========================================
// CUSTOM EDGE COMPONENT (ORG CHART STYLE)
// ==========================================
const OrgChartEdge = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  style,
  data,
}: EdgeProps) => {
  // Garis lurus vertikal (untuk koneksi ketua-community)
  if (data?.straight) {
    const path = `M ${sourceX} ${sourceY} L ${sourceX} ${targetY}`;
    return (
      <path
        d={path}
        fill="none"
        stroke={style?.stroke || "rgba(255,255,255,0.7)"}
        strokeWidth={style?.strokeWidth || 2}
      />
    );
  }

  // Garis L-shape (default untuk org chart)
  const midY = sourceY + (targetY - sourceY) / 2;
  const path = `
    M ${sourceX} ${sourceY}
    L ${sourceX} ${midY}
    L ${targetX} ${midY}
    L ${targetX} ${targetY}
  `;

  return (
    <path
      d={path}
      fill="none"
      stroke={style?.stroke || "rgba(255,255,255,0.7)"}
      strokeWidth={style?.strokeWidth || 2}
    />
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function StructureFlow() {
  const edgeTypes = {
    org: OrgChartEdge,
  };

  return (
    <>
      <Navbar />
      <div style={{ ...backgroundStyle, paddingTop: "80px" }}>
        {/* ========== HEADER ========== */}
        <div style={headerStyle}>
          {/* Dekorasi Kiri */}
          <div style={decorativeLeftStyle}>
            <div style={decorativeCircleStyle} />
            <div style={{ fontSize: "24px", color: "#72B4E8" }}>✦</div>
            <div style={{ fontSize: "20px", color: "#B0DAFF" }}>◇</div>
          </div>

          {/* Title */}
          <h1 style={headerTitleStyle}>STRUKTUR KEPENGURUSAN GROVY 2026</h1>

          {/* Dekorasi Kanan */}
          <div style={decorativeRightStyle}>
            <div style={{ fontSize: "20px", color: "#B0DAFF" }}>◇</div>
            <div style={{ fontSize: "24px", color: "#72B4E8" }}>✦</div>
            <div style={decorativeCircleStyle} />
          </div>
        </div>

        {/* ========== REACTFLOW CONTAINER ========== */}
        <div style={flowContainerStyle}>
          <div style={flowWrapperStyle}>
            <ReactFlow
              nodes={organizationNodes}
              edges={organizationEdges}
              edgeTypes={edgeTypes}
              fitView
              panOnScroll
              zoomOnScroll={false}
              panOnDrag
              minZoom={0.7}
              maxZoom={1}
              defaultViewport={{ x: 0, y: 0, zoom: 0.85 }}
              proOptions={{ hideAttribution: true }}
            >
              <MiniMap style={minimapStyle} nodeColor={() => "#72B4E8"} />
              <Controls />
              <Background
                gap={20}
                color="rgba(114, 180, 232, 0.08)"
                style={{ backgroundColor: "transparent" }}
              />
            </ReactFlow>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}