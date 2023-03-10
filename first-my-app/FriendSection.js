import {Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {friendProfiles} from "./data";
export default ({friendProfileLen, onPressArrow, isOpened}) => {
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between"}} >
            <Text style={{color:"grey"}}>친구 {friendProfileLen}</Text>
            <TouchableOpacity onPress={onPressArrow} >
                <MaterialIcons name={ isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color={"lightgrey"} />
            </TouchableOpacity>
        </View>
    );
};