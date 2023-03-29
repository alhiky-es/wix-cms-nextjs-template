import './globals.css';
import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';

/**
 * Using force dynamic so changes in business assets (e.g. services) are immediately reflected.
 * If you prefer having it reflected only after redeploy (not recommended) please remove it
 * **/
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Create Wix Education Site</title>
        <meta
          name="description"
          content="Generated by create next app with Wix Education integration"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="text-blue-site bg-white">
        <Header />
        <main className="bg-white min-h-[600px]">{children}</main>
        <div className="mt-10 sm:mt-20">
          <Footer />
        </div>
      </body>
    </html>
  );
}
