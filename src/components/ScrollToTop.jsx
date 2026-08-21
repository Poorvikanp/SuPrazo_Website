import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const getHashId = (hash) => {
  const rawId = hash.slice(1);

  try {
    return decodeURIComponent(rawId);
  } catch {
    return rawId;
  }
};

const getNavbarOffset = () => {
  const navbar = document.querySelector("nav");
  if (!navbar) return 80;
  const rect = navbar.getBoundingClientRect();
  return rect.bottom || 80;
};

const scrollToHash = (hash, behavior = "smooth") => {
  const id = getHashId(hash);
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;

  const navbarHeight = getNavbarOffset();
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

  window.scrollTo({
    top: targetPosition,
    behavior,
  });
};

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") return;

    if (hash) {
      const timer = window.setTimeout(() => {
        scrollToHash(hash, "smooth");
      }, 100);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, navigationType]);

  return null;
}
