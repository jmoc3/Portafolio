import { Html, Head, Main, NextScript } from "next/document";
import Providers from "./nextProvider";

export default function Document():JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/images/bi.png"/>
      <title>Jose Orejarena</title>
      <script src="https://unpkg.com/scrollreveal"></script>
      <Providers>
        <body className="bg-neutral-900 w-inherit overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Providers>
    </Html>
  );
}
