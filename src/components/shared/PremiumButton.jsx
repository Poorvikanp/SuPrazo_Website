import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PremiumButton({ children, to, href, onClick, variant = "primary", size = "md", className = "", type = "button", disabled = false, state = null }) {
  const base = "group inline-flex items-center gap-2 font-semibold tracking-wide uppercase transition-all duration-300 rounded-sm relative overflow-hidden";

  const sizes = {
    sm: "px-5 py-2.5 text-[11px]",
    md: "px-7 py-3.5 text-xs",
    lg: "px-8 py-4 text-sm",
  };

  const variants = {
    primary: "bg-gold text-white premium-shadow hover:-translate-y-0.5",
    secondary: "border-2 border-gold text-gold hover:bg-gold hover:text-white hover:-translate-y-0.5",
    dark: "bg-navy text-white hover:bg-navy/90 hover:-translate-y-0.5 shadow-lg",
    light: "bg-white/95 text-navy hover:bg-white hover:-translate-y-0.5 shadow-lg",
    ghost: "text-gold hover:gap-3",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const content = (
    <>
      {children}
      <ArrowRight size={size === "lg" ? 16 : 14} className="group-hover:translate-x-1 transition-transform duration-300" />
    </>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>{content}</a>;
  }
  if (to) {
    return <Link to={to} state={state} className={cls} onClick={onClick}>{content}</Link>;
  }
  return <button type={type} className={cls} onClick={onClick} disabled={disabled}>{content}</button>;
}