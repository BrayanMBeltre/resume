import '../css/tailwind.css';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        defer
        data-website-id="537b10f8-5f94-4e7b-86e7-d70443e4e38d"
        src="/stats/script.js"
      />

      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
