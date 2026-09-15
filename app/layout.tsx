import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Ahmed Mohamed - Senior Frontend Engineer";
const description =
  "Ahmed Mohamed portfolio focused on scalable React, Vue, Next.js, Nuxt, TypeScript, workflow automation, messaging products, payments, booking platforms, and frontend architecture.";
const siteUrl = "https://ahmadmohamed.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Ahmed Mohamed Portfolio",
  authors: [{ name: "Ahmed Mohamed" }],
  creator: "Ahmed Mohamed",
  keywords: [
    "Ahmed Mohamed",
    "Senior Frontend Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "Vue",
    "Nuxt",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Ahmed Mohamed Portfolio",
    images: [
      {
        url: "/images/dreams-workflow-builder.png",
        width: 1920,
        height: 981,
        alt: "Dreams workflow automation builder interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/dreams-workflow-builder.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#080d17" },
  ],
};

function ThemeScript() {
  const code = `
    (() => {
      const saved = localStorage.getItem("theme");
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = saved || (systemDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", theme === "dark");
      document.documentElement.classList.toggle("light", theme !== "dark");
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
