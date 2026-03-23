import "./globals.css";

export const metadata = {
  title: "Date Invitation 💕",
  description: "A magical invitation for a special someone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
