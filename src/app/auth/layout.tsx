import type React from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main lang="en">
      <body>{children}</body>
    </main>
  );
}
