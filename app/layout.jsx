import Nav from "@/app/Components/Nav";
import "@/styles/globals.scss";
import axios from "axios";

export const metadata = {
  title: "Voyage.",
  description: "Put your thoughts into words. Be a part of the voyage.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-10 my-0">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
