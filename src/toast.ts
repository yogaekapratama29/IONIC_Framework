import { useIonToast } from "@ionic/react";

export function useCustomToast() {
    const [present] = useIonToast();

    return (message: string, duration = 2000) => {
        present({
            message,
            duration,
            position: "bottom", 
        });
    };
}
