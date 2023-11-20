import { useEffect, useState } from 'react';

export const useMyLocation = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        function (error) {
          console.log('error : ', error.message);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      console.log('GPS를 지원하지 않습니다');
    }
  }, []);

  return location;
};
