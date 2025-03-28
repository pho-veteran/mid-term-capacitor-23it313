import { useState } from "react";
import { Share } from "@capacitor/share";
import { LocalNotifications } from "@capacitor/local-notifications";
import { Camera, CameraResultType } from "@capacitor/camera";

export function useTime() {
    const [currentTime, setCurrentTime] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [isTakingPhoto, setIsTakingPhoto] = useState(false);

    const getCurrentTime = async () => {
        setIsLoading(true);

        setTimeout(async () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            setCurrentTime(timeString);
            setIsLoading(false);

            const permStatus = await LocalNotifications.requestPermissions();
            if (permStatus.display !== "granted") {
                console.warn("Quyền thông báo chưa được cấp");
                return;
            }

            await LocalNotifications.schedule({
                notifications: [
                    {
                        title: "Thời gian hiện tại",
                        body: timeString,
                        id: 1,
                    },
                ],
            });
        }, 300);
    };

    const takePhoto = async () => {
        setIsTakingPhoto(true);
        try {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Uri,
                saveToGallery: false,
                promptLabelHeader: "Chụp ảnh",
                promptLabelPhoto: "Chọn từ thư viện",
                promptLabelPicture: "Chụp ảnh mới",
            });

            setPhoto(image.webPath);
            return image.webPath;
        } catch (error) {
            console.error("Lỗi khi chụp ảnh:", error);
            return null;
        } finally {
            setIsTakingPhoto(false);
        }
    };

    const shareContent = async () => {
        if (!currentTime) return;

        try {
            let shareOptions = {
                title: "Thời gian hiện tại",
                text: `Bây giờ là ${currentTime}, chúc bạn một ngày tốt lành!`,
                dialogTitle: "Chia sẻ thời gian",
            };

            if (photo) {
                shareOptions.url = photo;
            }

            await Share.share(shareOptions);
        } catch (error) {
            console.error("Lỗi khi chia sẻ:", error);
        }
    };

    const removePhoto = () => {
        setPhoto(null);
    };

    return {
        currentTime,
        isLoading,
        photo,
        isTakingPhoto,
        getCurrentTime,
        shareContent,
        takePhoto,
        removePhoto,
    };
}
