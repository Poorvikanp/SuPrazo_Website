import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function buildMailtoLink({ recipient = "info@suprazotech.com", subject = "", body = "" }) {
  const encodedSubject = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)
  return `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`
}

export function openMailtoLink(mailtoLink) {
  window.location.href = mailtoLink
}

export const isIframe = window.self !== window.top;
