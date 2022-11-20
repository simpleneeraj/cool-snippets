import "styles/globals.scss";
import Providers from "./providers";
import Template from "./template";

function CodeAppRoot({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Template key={"/"}>{children}</Template>
        </Providers>
      </body>
    </html>
  );
}

export default CodeAppRoot;

// import { Inter, Quicksand } from "@next/font/google";
// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--face",
// });
