import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function AuhLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div>
         <header>Top bar ...........</header>
         <div className={` antialiased`}>{children}</div>
      </div>
   );
}
