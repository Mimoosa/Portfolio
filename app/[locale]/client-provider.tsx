"use client";

import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";

type ClientProviderProps = {
  children: ReactNode;
  messages: Record<string, unknown>;
  locale: string;
};

export default function ClientProvider({
  children,
  messages,
  locale,
}: ClientProviderProps) {
  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      timeZone="Europe/Helsinki"
    >
      {children}
    </NextIntlClientProvider>
  );
}
