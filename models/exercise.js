class Exercise {
    constructor(
        ExerciseMachineID, ExerciseDate, ExerciseTime,
        ExerciseSpeed, ExerciseIncline, ExerciseLevel,
        ExerciseReps, ExerciseSets, ExerciseWeight,
        ExerciseNotes, ExercisePersonID) 
        
        {
        this.ExerciseMachineID = ExerciseMachineID;
        this.ExerciseDate = ExerciseDate;
        this.ExerciseTime = ExerciseTime;
        this.ExerciseSpeed = ExerciseSpeed;
        this.ExerciseIncline = ExerciseIncline;
        this.ExerciseLevel = ExerciseLevel;
        this.ExerciseReps = ExerciseReps;
        this.ExerciseSets = ExerciseSets;
        this.ExerciseWeight = ExerciseWeight;
        this.ExerciseNotes = ExerciseNotes;
        this.ExercisePersonID = ExercisePersonID
        this.id = new Date().toString() + Math.random().toString();
        }
}

export default Exercise;
