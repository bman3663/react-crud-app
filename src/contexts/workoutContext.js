import { useContext, createContext } from "react";

export const WorkoutContext  = createContext({ 
     workouts: [],
     addWorkout: () => {}, 
     updateWorkout: () => {},
     deleteWorkout: () => {},
})

export const useWorkout = () => { 
    return useContext(WorkoutContext)
}

export const WorkoutProvider = WorkoutContext.Provider 