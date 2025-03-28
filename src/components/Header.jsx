export function Header({ darkMode }) {
    return (
        <div className="text-center mb-8">
            <h1
                className={`text-3xl font-bold mb-2 ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                }`}
            >
                Hiển thị thời gian
            </h1>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                Nhấn nút để xem thời gian hiện tại
            </p>
        </div>
    );
}
