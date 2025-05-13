"use client";

import React, { useState } from "react";
import Map from "../components/Map"; // Import the Map component

// Noise Levels and Colors for Classification
const noiseLevels = [
  { label: "Very Quiet", color: "lightgreen", range: "0–30 dB" },
  { label: "Quiet", color: "lightgreen", range: "31–40 dB" },
  { label: "Moderate", color: "green", range: "41–55 dB" },
  { label: "Loud", color: "yellow", range: "56–70 dB" },
  { label: "Very Loud", color: "orange", range: "71–85 dB" },
  { label: "Extremely Loud", color: "red", range: "86–100 dB" },
  { label: "Painful", color: "red", range: "101–120+ dB" },
];

const Dashboard = () => {
  // Example nodes data (now 9 nodes for testing)
  const nodes = [
    {
      id: 1,
      name: "Node 1",
      lat: 10.312,
      lng: 123.8732,
      noiseLevel: "Moderate",
      noisePeak: 35,
      noiseTier: 1,
    },
    {
      id: 2,
      name: "Node 2",
      lat: 10.3115,
      lng: 123.8725,
      noiseLevel: "Loud",
      noisePeak: 50,
      noiseTier: 1,
    },
    {
      id: 3,
      name: "Node 3",
      lat: 10.311,
      lng: 123.873,
      noiseLevel: "Very Loud",
      noisePeak: 80,
      noiseTier: 2,
    },
    {
      id: 4,
      name: "Node 4",
      lat: 10.3125,
      lng: 123.8737,
      noiseLevel: "Very Loud",
      noisePeak: 95,
      noiseTier: 3,
    },
    {
      id: 5,
      name: "Node 5",
      lat: 10.313,
      lng: 123.874,
      noiseLevel: "Extremely Loud",
      noisePeak: 105,
      noiseTier: 3,
    },
    {
      id: 6,
      name: "Node 6",
      lat: 10.3135,
      lng: 123.875,
      noiseLevel: "Loud",
      noisePeak: 60,
      noiseTier: 1,
    },
    {
      id: 7,
      name: "Node 7",
      lat: 10.314,
      lng: 123.876,
      noiseLevel: "Quiet",
      noisePeak: 30,
      noiseTier: 1,
    },
    {
      id: 8,
      name: "Node 8",
      lat: 10.3145,
      lng: 123.877,
      noiseLevel: "Very Quiet",
      noisePeak: 25,
      noiseTier: 1,
    },
    {
      id: 9,
      name: "Node 9",
      lat: 10.315,
      lng: 123.878,
      noiseLevel: "Painful",
      noisePeak: 110,
      noiseTier: 3,
    },
  ];

  const [selectedNode, setSelectedNode] = useState(null); // Node clicked for details

  // Filter nodes based on noise level (only 85+ dB)
  const filteredNodes = nodes.filter((node) => node.noisePeak >= 55);

  // Click on a node to view its details
  const handleNodeClick = (node: any) => {
    setSelectedNode(node);
  };

  // Function to get the noise level color and associated glow effect
  const getNoiseLevelColor = (noiseLevel: string) => {
    const level = noiseLevels.find((n) => n.label === noiseLevel);
    return level ? level.color : "gray"; // Default to gray if not found
  };

  // Function to get the tier color based on the tier
  const getNoiseTierTextColor = (noiseTier: number) => {
    switch (noiseTier) {
      case 1:
        return "text-yellow-500"; // Tier 1: Yellow color for text
      case 2:
        return "text-orange-500"; // Tier 2: Orange color for text
      case 3:
        return "text-red-500"; // Tier 3: Red color for text
      default:
        return "text-gray-500"; // Default to gray if tier is not found
    }
  };

  return (
    <div className="flex h-[850px]">
      {/* Sidebar */}
      <div className="w-80 bg-white text-black p-4 flex flex-col">
        <h2 className="text-2xl font-bold text-[#103A5E] mb-4">Triggered Nodes</h2>

        {/* Tabs */}
        <div className="flex mb-6 border-y-2">
          <button className="w-full py-2 text-center font-semibold text-[#103A5E]">
            All
          </button>
        </div>

        {/* List of Nodes */}
        <div className="space-y-6 p-4 overflow-y-auto">
          {filteredNodes.map((node) => {
            const nodeNoiseLevelColor = getNoiseLevelColor(node.noiseLevel);
            const tierTextColor = getNoiseTierTextColor(node.noiseTier);

            return (
              <div
                key={node.id}
                className="relative p-4 mb-6 rounded-lg bg-white border-l-[8px] hover:bg-gray-200 transition-all duration-200"
                style={{
                  borderLeftColor: nodeNoiseLevelColor,
                  boxShadow: `0 0 8px 2px ${nodeNoiseLevelColor}`, // Subtle glow
                  height: "auto", // Ensure the box is not fixed in height
                }}
              >
                <h3 className="font-semibold text-xl mb-2">{node.name}</h3>
                <p className="text-base">Noise Peak: {node.noisePeak} dB</p>
                <p className="text-base">Level: {node.noiseLevel}</p>

                {/* Noise Tier Level with colored number */}
                <p className="text-base">
                  Noise Tier: <span className={`${tierTextColor}`}>Level {node.noiseTier}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Map */}
      <div className="flex-1">
        <Map nodes={nodes} />
      </div>
    </div>
  );
};

export default Dashboard;
