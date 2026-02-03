
import Header from "@/app/components/layouts/Header"; 
import Footer from "@/app/components/layouts/Footer";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}