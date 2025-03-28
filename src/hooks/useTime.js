import { useState } from 'react';
import { Share } from '@capacitor/share';
import { LocalNotifications } from '@capacitor/local-notifications';

export function useTime() {
  const [currentTime, setCurrentTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCurrentTime = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      setCurrentTime(timeString);
      setIsLoading(false);
      
      LocalNotifications.schedule({
        notifications: [{
          title: "Thời gian hiện tại",
          body: timeString,
          id: 1
        }]
      });
    }, 300);
  };

  const shareTime = async () => {
    if (!currentTime) return;
    
    try {
      await Share.share({
        title: 'Thời gian hiện tại',
        text: `Bây giờ là ${currentTime}`,
        dialogTitle: 'Chia sẻ thời gian'
      });
    } catch (error) {
      console.error('Lỗi khi chia sẻ:', error);
    }
  };

  return { currentTime, isLoading, getCurrentTime, shareTime };
}