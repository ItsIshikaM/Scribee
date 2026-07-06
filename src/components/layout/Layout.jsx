import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <Navbar />

      <main
        style={{
          marginLeft: 220,
          marginTop: 70,
          padding: 25,
        }}
      >
        {children}
      </main>
    </>
  );
}