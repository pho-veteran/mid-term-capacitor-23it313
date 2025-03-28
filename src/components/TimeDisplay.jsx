import { Share2, Camera, Trash2 } from "lucide-react";

export function TimeDisplay({
    time,
    onShare,
    onTakePhoto,
    photo,
    onRemovePhoto,
    darkMode,
    isTakingPhoto,
}) {
    if (!time) return null;

    return (
        <div
            className={`mt-4 p-6 rounded-xl shadow-md transition-all duration-300 fade-in ${
                darkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-blue-50 border-blue-100"
            }`}
        >
            <h2
                className={`text-xl font-semibold text-center mb-4 ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                }`}
            >
                Thời gian hiện tại
            </h2>

            <div
                className={`text-5xl font-bold text-center mb-6 py-4 rounded-lg ${
                    darkMode
                        ? "bg-gray-800 text-blue-300"
                        : "bg-white text-blue-600"
                } shadow-inner`}
            >
                {time}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                    onClick={onShare}
                    disabled={isTakingPhoto}
                    className={`py-3 px-2 rounded-lg font-medium flex flex-col items-center justify-center space-y-1 transition-all duration-300 active:scale-[0.98] ${
                        darkMode
                            ? "bg-green-700 active:bg-green-600 text-white"
                            : "bg-green-600 active:bg-green-500 text-white"
                    } ${isTakingPhoto ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    <Share2 className="h-6 w-6" />
                    <span className="text-sm">Chia sẻ</span>
                </button>

                <button
                    onClick={onTakePhoto}
                    disabled={isTakingPhoto}
                    className={`py-3 px-2 rounded-lg font-medium flex flex-col items-center justify-center space-y-1 transition-all duration-300 active:scale-[0.98] ${
                        darkMode
                            ? isTakingPhoto
                                ? "bg-purple-800 text-white cursor-wait"
                                : "bg-purple-700 active:bg-purple-600 text-white"
                            : isTakingPhoto
                            ? "bg-purple-400 text-white cursor-wait"
                            : "bg-purple-600 active:bg-purple-500 text-white"
                    }`}
                >
                    {isTakingPhoto ? (
                        <span className="flex items-center">
                            <Camera className="h-6 w-6 mr-1 animate-pulse" />
                            <span className="text-sm">Đang chụp...</span>
                        </span>
                    ) : (
                        <>
                            <Camera className="h-6 w-6" />
                            <span className="text-sm">Chụp ảnh</span>
                        </>
                    )}
                </button>
            </div>

            {photo && (
                <div
                    className={`mt-4 rounded-lg overflow-hidden border-2 ${
                        darkMode ? "border-gray-600" : "border-gray-200"
                    }`}
                >
                    <div className="relative">
                        <img
                            src={photo}
                            alt="Ảnh đã chụp"
                            className="w-full h-auto max-h-64 object-contain"
                        />
                        <button
                            onClick={onRemovePhoto}
                            disabled={isTakingPhoto}
                            className={`absolute top-2 right-2 p-2 rounded-full ${
                                darkMode
                                    ? "bg-red-600 hover:bg-red-500 text-white"
                                    : "bg-red-500 hover:bg-red-400 text-white"
                            } ${
                                isTakingPhoto
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                            }`}
                            aria-label="Xóa ảnh"
                        >
                            <Trash2 className="h-4 w-4" />
                        </button>
                    </div>
                    <div
                        className={`p-2 text-center text-xs ${
                            darkMode
                                ? "bg-gray-800 text-gray-300"
                                : "bg-gray-100 text-gray-600"
                        }`}
                    >
                        Ảnh đã chụp
                    </div>
                </div>
            )}
        </div>
    );
}
