
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Navbar from './components/navbar';
import Footer from './components/footer';

export const metadata = {
  title: "AlyaDemirAldem",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
