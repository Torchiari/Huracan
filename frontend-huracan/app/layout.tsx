import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100 flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
