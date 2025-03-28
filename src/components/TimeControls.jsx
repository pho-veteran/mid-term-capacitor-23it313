import { Clock, Loader2 } from "lucide-react";

export function TimeControls({ isLoading, onGetTime, darkMode }) {
    return (
        <button
            onClick={onGetTime}
            disabled={isLoading}
            className={`
        w-full py-4 px-6 rounded-xl font-medium text-lg 
        shadow-md transition-all duration-300 active:scale-[0.98]
        ${
            isLoading
                ? `${
                      darkMode ? "bg-gray-700" : "bg-gray-300"
                  } cursor-not-allowed`
                : `${
                      darkMode
                          ? "bg-blue-600 active:bg-blue-700"
                          : "bg-blue-500 active:bg-blue-600"
                  }`
        }
        ${darkMode ? "text-white" : "text-white"}
        touch-pan-y select-none
      `}
        >
            {isLoading ? (
                <span className="flex items-center justify-center space-x-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Đang tải...</span>
                </span>
            ) : (
                <span className="flex items-center justify-center space-x-2">
                    <Clock className="h-6 w-6" />
                    <span>Hiển thị thời gian</span>
                </span>
            )}
        </button>
    );
}
