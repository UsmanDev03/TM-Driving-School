
import Header from "@/app/components/layouts/Header"; 
import Footer from "@/app/components/layouts/Footer";
import WhatsAppIcon from "@/app/components/layouts/WhatsAppIcon";
export default function WebsiteLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <WhatsAppIcon />
      <Footer />
    </>
  );
}