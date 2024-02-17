import Container from "@/components/container";
import Nabvar from "./u/_components/nabvar";
import Sidebar from "./u/_components/sidebar";
import Footer from "./u/_components/footer";
import { AuthContextProvider } from "@/context/auth-context";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="w-full">
      <AuthContextProvider>
      <Nabvar />
      <Container className="flex justify-center max-w-screen-lg w-full gap-10 px-4 mt-28">
        <Sidebar />
        {children}
      </Container>
      <Footer />
      </AuthContextProvider>
    </div>
  );
}
