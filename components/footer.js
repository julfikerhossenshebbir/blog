import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";

export default function Footer({ copyright = "Your Name" }) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} {copyright}. All rights reserved.
      </div>

      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          Made by{" "}
          <a href="https://mdjhs.com/" target="_blank" rel="noopener">
            mdjhs
          </a>
        </span>
        <span>&middot;</span>
        <ThemeSwitch />
      </div>
    </Container>
  );
}
