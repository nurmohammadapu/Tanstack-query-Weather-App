"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./../components/Footer";

export default function RootLayout({ children }: RootLayoutProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="bg-gradient-to-br from-background to-muted">
          <QueryClientProvider client={queryClient}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
              <Footer />
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </body>
      </html>
    </>
  );
}
