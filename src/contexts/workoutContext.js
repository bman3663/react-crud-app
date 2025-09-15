import { useContext, createContext } from "react";

export const WorkoutContext  = createContext({ 
     workouts: [{ 
        id: 1, 
        name: "Frank",
        description: "Leg Day"
     }],
     addWorkout: (workout) => {}, 
     updateWorkout: (id, Workout) => {},
     deleteWorkout: (id) => {},
})

export const useWorkout = () => { 
    return useContext(WorkoutContext)
}

export const WorkoutProvider = WorkoutContext.Provider 