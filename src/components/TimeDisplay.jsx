import { Share2, Camera } from "lucide-react";

export function TimeDisplay({ time, onShare, onCapture, darkMode }) {
    if (!time) return null;

    return (
        <div
            className={`
      mt-4 p-6 rounded-xl shadow-md transition-all duration-300 fade-in
      ${darkMode ? "bg-gray-700 border-gray-600" : "bg-blue-50 border-blue-100"}
    `}
        >
            <h2
                className={`
        text-xl font-semibold text-center mb-4
        ${darkMode ? "text-blue-400" : "text-blue-600"}
      `}
            >
                Thời gian hiện tại
            </h2>

            <div
                className={`
        text-5xl font-bold text-center mb-6 py-4 rounded-lg
        ${darkMode ? "bg-gray-800 text-blue-300" : "bg-white text-blue-600"} 
        shadow-inner
      `}
            >
                {time}
            </div>

            <div className="grid grid-cols-2 gap-3">
                <button
                    onClick={onShare}
                    className={`
            py-3 px-2 rounded-lg font-medium flex flex-col items-center justify-center 
            space-y-1 transition-all duration-300 active:scale-[0.98]
            ${
                darkMode
                    ? "bg-green-700 active:bg-green-600 text-white"
                    : "bg-green-600 active:bg-green-500 text-white"
            }
          `}
                >
                    <Share2 className="h-6 w-6" />
                    <span className="text-sm">Chia sẻ</span>
                </button>

                <button
                    onClick={onCapture}
                    className={`
            py-3 px-2 rounded-lg font-medium flex flex-col items-center justify-center 
            space-y-1 transition-all duration-300 active:scale-[0.98]
            ${
                darkMode
                    ? "bg-purple-700 active:bg-purple-600 text-white"
                    : "bg-purple-600 active:bg-purple-500 text-white"
            }
          `}
                >
                    <Camera className="h-6 w-6" />
                    <span className="text-sm">Chụp màn hình</span>
                </button>
            </div>
        </div>
    );
}
