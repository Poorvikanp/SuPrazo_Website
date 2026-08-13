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
  const a = document.createElement("a")
  a.href = mailtoLink
  a.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export const isIframe = window.self !== window.top;
