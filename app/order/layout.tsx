import Container from "@/components/container";
import Footer from "./_components/footer";
import Nabvar from "./_components/nabvar";
import { AuthContextProvider } from "@/context/auth-context";

export default async function OrderLayout ({children}: {children: React.ReactNode}) {




    return (
        <div className="w-full">
            <AuthContextProvider>
            <Nabvar />
            <Container className="max-w-3xl m-auto">
            {children}
            </Container>
            <Footer />
            </AuthContextProvider>
        </div>
    )
}