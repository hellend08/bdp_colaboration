import create from 'zustand';
import { persist } from 'zustand/middleware';

export const tabsActividadesStore = create(
  persist(
    (set) => ({
        activity: "",
        activityEnabled: "",
        selectActivity: (activity) =>
            set(() => {
                return { activity };
        }),
        enableActivity: (activityEnabled) => 
            set(() => {
                return { activityEnabled };
        }),
        resetActivity: () =>
            set(() => {
            return { activity: ""};
        })
    }),
    {
      name: 'activity-storage', // unique name
      getStorage: () => localStorage // (optional) by default the 'localStorage' is used
    }
  )
);
