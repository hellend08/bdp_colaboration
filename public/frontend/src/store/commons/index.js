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

export const modalStore = create(
    persist(
        (set) => ({
            modal: "",
            selectModal: (modal) =>
                set(() => {
                    return { modal };
            }),
        }),
        {
            name: 'modal-storage', // unique name
            getStorage: () => localStorage // (optional) by default the 'localStorage' is used
        }
    )
);

export const dialogStore = create(
    persist(
        (set) => ({
            dialog: "",
            selectDialog: (dialog) =>
                set(() => {
                    return { dialog };
            }),
        }),
        {
            name: 'dialog-storage', // unique name
            getStorage: () => localStorage // (optional) by default the 'localStorage' is used
        }
    )
);