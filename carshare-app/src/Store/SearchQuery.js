import { create } from 'zustand';

export const WhereQuery = create((set) => (
    {
        description: undefined,
        location: [],

        setWhere: (newDescription, newLocation) => {
            set(() => ({
                description: newDescription,
                location: newLocation
            }));
        },

        clearWhere: () => {
            set(() => ({
                description: undefined,
                location: []
            }));
        },
    }
));

export const WhenQuery = create((set) => (
    {
        
    }
));
