import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { TimeDisplay } from "./components/TimeDisplay";
import { TimeControls } from "./components/TimeControls";
import { useTime } from "./hooks/useTime";
import { ThemeToggle } from "./components/ThemeToggle";
import { LocalNotifications } from "@capacitor/local-notifications";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    
    const {
        currentTime,
        isLoading,
        photo,
        isTakingPhoto,
        getCurrentTime,
        shareContent,
        takePhoto,
        removePhoto,
    } = useTime();

    const requestNotificationPermission = async () => {
        const permStatus = await LocalNotifications.requestPermissions();
        if (permStatus.display !== "granted") {
            console.warn("Người dùng từ chối quyền thông báo");
        }
    };

    useEffect(() => {
        requestNotificationPermission();
    }, []);

    return (
        <div
            className={`flex flex-col min-h-screen ${
                darkMode
                    ? "bg-gray-900 text-gray-100"
                    : "bg-gradient-to-b from-blue-50 to-purple-50 text-gray-800"
            }`}
        >
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            <div className="flex-1 flex flex-col justify-center p-4 pt-16">
                <div
                    className={`mx-auto w-full max-w-md rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
                        darkMode
                            ? "bg-gray-800 border-gray-700"
                            : "bg-white border-gray-200"
                    }`}
                >
                    <div className="p-6">
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
                                onShare={shareContent}
                                onTakePhoto={takePhoto}
                                onRemovePhoto={removePhoto}
                                photo={photo}
                                darkMode={darkMode}
                                isTakingPhoto={isTakingPhoto}
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
