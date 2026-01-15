import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redirect to static HTML site
    window.location.href = "/index.html";
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Inter, sans-serif'
    }}>
      <p>Loading Computer Repair Pros...</p>
    </div>
  );
}

export default App;
