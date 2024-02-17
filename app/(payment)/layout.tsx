import Container from "@/components/container";
import Nabvar from "./_components/nabvar";
import { Metadata } from "next";
import Total from "./_components/total";
import { AuthContextProvider } from "@/context/auth-context";

interface PaymentLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "checkout",
  description: "paga por tus productos",
};

export default async function PaymentLayout({ children }: PaymentLayoutProps) {
  return (
    <div>
      <AuthContextProvider>
        <Nabvar />
        <Container className="flex justify-between items-start mt-20">
          {children}
          <Total />
        </Container>
      </AuthContextProvider>
    </div>
  );
}
