import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="stylesheet icon" href="/images/bi.png"/>
      <title>Jose Orejarena</title>
      <script src="https://unpkg.com/scrollreveal"></script>
      <body className="bg-neutral-900 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
