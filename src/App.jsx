import { useState } from "react";
import { Header } from "./components/Header";
import { TimeDisplay } from "./components/TimeDisplay";
import { TimeControls } from "./components/TimeControls";
import { useTime } from "./hooks/useTime";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const { currentTime, isLoading, getCurrentTime, shareTime, captureScreen } =
        useTime();

    return (
        <div
            className={`flex flex-col min-h-screen ${
                darkMode
                    ? "bg-gray-900 text-gray-100"
                    : "bg-gradient-to-b from-blue-50 to-purple-50 text-gray-800"
            }`}
        >
            <div className="flex-1 flex flex-col justify-center p-4">
                <div
                    className={`mx-auto w-full max-w-md rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
                        darkMode
                            ? "bg-gray-800 border-gray-700"
                            : "bg-white border-gray-200"
                    }`}
                >
                    <div className="p-6 relative">
                        <ThemeToggle
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                        />
                        <Header darkMode={darkMode} />

                        <div className="my-4">
                            <TimeControls
                                isLoading={isLoading}
                                onGetTime={getCurrentTime}
                                darkMode={darkMode}
                            />
                        </div>

                        {currentTime && (
                            <TimeDisplay
                                time={currentTime}
                                onShare={shareTime}
                                onCapture={captureScreen}
                                darkMode={darkMode}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div
                className={`py-2 text-center text-xs ${
                    darkMode ? "text-gray-500" : "text-gray-400"
                }`}
            >
                Ứng dụng hiển thị thời gian
            </div>
        </div>
    );
}
