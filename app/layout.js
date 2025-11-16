import Header from "@/components/header.jsx";
import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-client-provider.jsx";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export const metadata = {
  title: "Settlr",
  description: "Settle and Maintain your Expenses with others.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo.png" sizes="any"></link>
      </head>
      <body>
        <ClerkProvider>
          <ConvexClientProvider>
            <Header />
            <main className="min-h-screen">
              {children}
              <Toaster />
            </main>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
