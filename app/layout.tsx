import Navbar from "@vx/components/Navbar/Navbar";
import "@vx/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Vigilante x",
  description: "To be updated",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        <Navbar />
        <div className="main">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
