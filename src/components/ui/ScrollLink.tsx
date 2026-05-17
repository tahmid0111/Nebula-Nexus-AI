import { forwardRef, MouseEvent, ReactNode, AnchorHTMLAttributes } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface ScrollLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string; // e.g. "#services" or "/#services"
  children: ReactNode;
}

const scrollToHash = (hash: string) => {
  const id = hash.replace(/^#/, "");
  if (!id || id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (id) history.replaceState(null, "", "/");
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }
};

const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  ({ to, children, onClick, ...rest }, ref) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const hashIndex = to.indexOf("#");
      const hash = hashIndex >= 0 ? to.slice(hashIndex) : "";

      if (location.pathname !== "/") {
        navigate("/" + (hash && hash !== "#top" ? hash : ""));
        setTimeout(() => scrollToHash(hash), 50);
      } else {
        scrollToHash(hash);
      }
      onClick?.(e);
    };
    return (
      <a ref={ref} href={to} onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  }
);
ScrollLink.displayName = "ScrollLink";

export default ScrollLink;
export { scrollToHash };
