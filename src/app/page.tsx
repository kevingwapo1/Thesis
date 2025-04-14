export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        Welcome to Barangay Tisa Noise Monitoring System
      </h1>
      <p className="text-lg text-center mb-8">
        Monitor and assess noise levels across the barangay with real-time data
        and detailed reports.
      </p>
      <div className="text-center">
        <p className="text-lg mb-4">Navigate through the sidebar to:</p>
        <ul className="list-disc list-inside text-lg">
          <li>View the noise levels on the dashboard</li>
          <li>Check details of working nodes and their status</li>
          <li>View the noise history per node</li>
          <li>Manage users and access rights</li>
        </ul>
      </div>
    </div>
  );
}
