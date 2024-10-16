import { FlatList, StyleSheet, Text, View } from "react-native";
import ExerciseItem from "./ExerciseItem";

function ExerciseList({ exercises }) {
    if (!exercises || exercises.length ===0 ) {
        return (
            <View style={styles.fallbackContainter}>
                <Text style={styles.fallbackText}>No Exercises Yet</Text>
            </View>
        )
    }

    return (
        <FlatList 
            data={exercises} 
            keyExtractor={(item) => item.id}
             renderItem={({ item }) => <ExerciseItem exercise={item} />} 
        />
    );
}

export default ExerciseList;

const styles = StyleSheet.create({
    fallbackContainter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    fallbackText: {
        fontSize: 16
    }    
});