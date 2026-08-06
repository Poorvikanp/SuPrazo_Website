import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function buildMailtoLink({ recipient = "info@suprazotech.com", subject = "", body = "" }) {
  const url = new URL("mailto:" + recipient)
  url.searchParams.set("subject", subject)
  url.searchParams.set("body", body)
  return url.toString()
}

export const isIframe = window.self !== window.top;
