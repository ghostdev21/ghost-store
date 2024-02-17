import Container from "@/components/container";
import Footer from "./_components/footer";
import Nabvar from "./_components/nabvar";
import { CartProvider } from "@/context/cart-context";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="w-full relative">
      <CartProvider>
        <Nabvar />
        <Container>{children}</Container>
        <Footer />
      </CartProvider>
    </div>
  );
}
