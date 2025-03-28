import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ darkMode, setDarkMode }) {
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className={`absolute top-4 right-4 p-2 rounded-full ${
                darkMode
                    ? "bg-gray-700 text-yellow-300"
                    : "bg-gray-200 text-gray-700"
            }`}
            aria-label="Toggle dark mode"
        >
            {darkMode ? (
                <Sun className="h-6 w-6" />
            ) : (
                <Moon className="h-6 w-6" />
            )}
        </button>
    );
}
