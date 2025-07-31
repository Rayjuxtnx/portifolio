import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { InteractiveModeProvider } from '@/components/interactive-provider';

export const metadata: Metadata = {
  title: 'PO FOLIO',
  description: 'Portfolio of Phillip Otieno',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Literata:opsz,wght@24..144,400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col h-dvh bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <InteractiveModeProvider>
            <Header />
            <main className="flex-1 overflow-y-auto pt-16 pb-16 md:pb-0">{children}</main>
            <Footer />
            <Toaster />
          </InteractiveModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
