import React, { useState } from "react";
import {View, Text, Button, Switch} from "react-native";

const Component = () => {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);

    return (
        <View>
            <Text>You clicked {count} times</Text>
            <Button title="Click me" onPress={() => setCount(count + 1)} />


            <Text>------------------</Text>
            <Switch value={isOn} onValueChange={value => {
                console.log('v', value);
                setIsOn(value);}} />
        </View>
    );
};

export default Component;