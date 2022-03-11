import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@saleor/macaw-ui";
import { IntlProvider } from "react-intl";
import { useFormattedMessages } from "@hooks/useFormattedMessages";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const { locale, messages } = useFormattedMessages();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <IntlProvider
        locale={locale}
        messages={messages}
        onError={() => null} // Hide missing translation warnings
      >
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </IntlProvider>
    </>
  );
}
