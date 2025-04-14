// app/nodes/page.tsx

export default function NodesPage() {
  const nodes = [
    {
      id: 1,
      sitio: "Sitio San Miguel",
      coordinates: "10.3120, 123.8732",
      noise: 35,
      battery: "89%",
      lora: "Connected",
      time: "04/14/25, 10:35 AM",
    },
    {
      id: 2,
      sitio: "Sitio Tahna",
      coordinates: "10.3115, 123.8725",
      noise: 67,
      battery: "45%",
      lora: "Disconnected",
      time: "04/14/25, 10:40 AM",
    },
    {
      id: 3,
      sitio: "Filter Site",
      coordinates: "10.3110, 123.8730",
      noise: 52,
      battery: "72%",
      lora: "Connected",
      time: "04/14/25, 10:45 AM",
    },
    {
      id: 4,
      sitio: "Sitio San Miguel",
      coordinates: "10.3122, 123.8734",
      noise: 42,
      battery: "94%",
      lora: "Connected",
      time: "04/14/25, 10:47 AM",
    },
    {
      id: 5,
      sitio: "Sitio Tahna",
      coordinates: "10.3118, 123.8728",
      noise: 78,
      battery: "33%",
      lora: "Disconnected",
      time: "04/14/25, 10:50 AM",
    },
    {
      id: 6,
      sitio: "Filter Site",
      coordinates: "10.3112, 123.8733",
      noise: 58,
      battery: "65%",
      lora: "Connected",
      time: "04/14/25, 10:53 AM",
    },
    {
      id: 7,
      sitio: "Sitio San Miguel",
      coordinates: "10.3125, 123.8736",
      noise: 31,
      battery: "87%",
      lora: "Connected",
      time: "04/14/25, 10:56 AM",
    },
    {
      id: 8,
      sitio: "Sitio Tahna",
      coordinates: "10.3119, 123.8729",
      noise: 91,
      battery: "25%",
      lora: "Disconnected",
      time: "04/14/25, 11:00 AM",
    },
    {
      id: 9,
      sitio: "Filter Site",
      coordinates: "10.3113, 123.8735",
      noise: 48,
      battery: "78%",
      lora: "Connected",
      time: "04/14/25, 11:05 AM",
    },
  ];

  return (
    <div className="p-8 w-full">
      <h1 className="text-2xl font-bold mb-6 text-[#0070c0]">Node Overview</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#0070c0] text-white text-left text-base">
              <th className="px-6 py-4 font-semibold">ID#</th>
              <th className="px-6 py-4 font-semibold">Location</th>
              <th className="px-6 py-4 font-semibold">Coordinates</th>
              <th className="px-6 py-4 font-semibold">Noise dB</th>
              <th className="px-6 py-4 font-semibold">Battery Level</th>
              <th className="px-6 py-4 font-semibold">LoRa Connection</th>
              <th className="px-6 py-4 font-semibold">Triggered Time</th>
            </tr>
          </thead>
          <tbody>
            {nodes.map((node) => (
              <tr
                key={node.id}
                className="border-b even:bg-gray-50 hover:bg-gray-100 transition"
              >
                <td className="px-6 py-4">{node.id}</td>
                <td className="px-6 py-4">{node.sitio}</td>
                <td className="px-6 py-4">{node.coordinates}</td>
                <td className="px-6 py-4">{node.noise} dB</td>
                <td className="px-6 py-4">{node.battery}</td>
                <td
                  className={`px-6 py-4 font-medium ${
                    node.lora === "Connected"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {node.lora}
                </td>
                <td className="px-6 py-4">{node.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
