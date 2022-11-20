import "styles/globals.scss";
import Providers from "./providers";
import { Inter } from "@next/font/google";
import Template from "./template";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  variable: "--face",
});

function CodeAppRoot({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Providers>
          <Template key={"/"}>{children}</Template>
        </Providers>
      </body>
    </html>
  );
}

export default CodeAppRoot;
