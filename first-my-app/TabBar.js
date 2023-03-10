import {TouchableOpacity, View} from "react-native";
import {Fontisto, Ionicons}from '@expo/vector-icons';
const TabButton = ({isSelected, onPress, activeIconName,
                       inactiveIconName, isIconFontisto, isIconIonicons}) => {
    return (
        <TouchableOpacity
            style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
                paddingVertical: 10}}
            onPress={onPress}
            activeOpacity={1}
        >
            {isIconFontisto && <Fontisto name={isSelected ? activeIconName : inactiveIconName}/>}
            {isIconIonicons && <Ionicons name={isSelected ? activeIconName : inactiveIconName}/>}
        </TouchableOpacity>
    );
};
export default ({selectedTabIdx, setSelectedTabIdx}) => {
    return (
        <View
            style={{
                flexDirection: "row",
                width:"100%",
                borderTopWidth: 0.5,
                borderTopColor:"grey"}}>
            <TabButton isSelected={selectedTabIdx === 0}
                       onPress={() => setSelectedTabIdx(0)}
                       activeIconName={"person"}
                       inactiveIconName={"persons"}
                       isIconFontisto />
            <TabButton isSelected={selectedTabIdx === 1}
                       onPress={() => setSelectedTabIdx(1)}
                       activeIconName={"chatbubble"}
                       inactiveIconName={"chatbubble-outline"}
                       isIconIonicons />
            <TabButton isSelected={selectedTabIdx === 2}
                       onPress={() => setSelectedTabIdx(2)}
                       activeIconName={"pricetag"}
                       inactiveIconName={"pricetag-outline"}
                       isIconIonicons />
            <TabButton isSelected={selectedTabIdx === 3}
                       onPress={() => setSelectedTabIdx(3)}
                       activeIconName={"add-circle"}
                       inactiveIconName={"add-circle-outline"}
                       isIconIonicons />

        </View>
    )
}