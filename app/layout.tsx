import '@/app/ui/global.css';
import { outfit } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Test App</title>
        <meta
          name="description"
          content="NextJS Test App to improve my coding skills."
        ></meta>
      </head>
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
