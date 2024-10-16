import { Image, Pressable, StyleSheet, View, Text } from 'react-native';

function ExerciseItem(exercise, onSelect) {
    return (
    <Pressable onPress={onSelect}>
    <Image />
        <View>
            <Text>exercise.ExerciseDate</Text>
            <Text>exercise.ExerciseMachineID</Text>
        </View>
    </Pressable>

}

export default ExerciseItem;

const styles = StyleSheet.create({

});