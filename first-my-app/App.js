import {FlatList, StyleSheet, View} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import Profile from "./Profile";
import {myProfile, friendProfiles} from "./data";
import Margin from "./Margin";
import Division from "./Division";
import FriendSection from "./FriendSection";
import {useState} from "react";
import TabBar from "./TabBar";

export default function App() {
    const [isOpened, setIsOpened] = useState(true);
    const [selectedTabIdx, setSelectedTabIdx] = useState(0);

    const onPressArrow = () => {
        setIsOpened(!isOpened);
    };
    const ItemSeparatorComponent = () => <Margin height={13} />;

    const renderItem = ({ item }) => {
        return (
            <View>
                <Profile
                    uri={item.uri}
                    name={item.name}
                    introduction={item.introduction}
                    isMe={false}
                />
            </View>
        );
    };
    const ListHeaderComponent = () => {
      return (
          <View style={{backgroundColor: "white"}}>
              <Header />
              <Margin height={10} />
              <Profile
                  uri={myProfile.uri}
                  name={myProfile.name}
                  introduction={myProfile.introduction}
                  isMe={true}
              />
              <Margin height={15} />
              <Division />
              <Margin height={12} />
              <FriendSection
                  friendProfileLen={friendProfiles.length}
                  onPressArrow={onPressArrow}
                  isOpened={isOpened}
              />
              <Margin height={5} />
          </View>
      );
    };
    const ListFooterComponent = () => <Margin height={10} />;
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <FlatList data={isOpened ? friendProfiles : []}
                          contentContainerStyle={{paddingHorizontal:15}}
                          keyExtractor={(_, index) => index}
                          stickyHeaderIndices={[0]}
                          ItemSeparatorComponent={ItemSeparatorComponent}
                          renderItem={renderItem}
                          ListHeaderComponent={ListHeaderComponent}
                          ListFooterComponent={ListFooterComponent}
                          showsVerticalScrollIndicator={false}
                />
                <TabBar selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx} />
            </SafeAreaView>
        </SafeAreaProvider>

    );

    // return (
    //     <SafeAreaProvider>
    //         <SafeAreaView style={styles.container} edges={['right', 'left', 'top', 'bottom']}>
    //             <View style={{flex:1, backgroundColor:"yellow", paddingHorizontal:15}}>
    //                 <Header />
    //                 <Margin height={10} />
    //                 <Profile
    //                     uri={myProfile.uri}
    //                     name={myProfile.name}
    //                     introduction={myProfile.introduction}
    //                 />
    //                 <Margin height={15} />
    //                 <Division />
    //                 <Margin height={12} />
    //                 <FriendSection
    //                     friendProfileLen={friendProfiles.length}
    //                     onPressArrow={onPressArrow}
    //                     isOpened={isOpened}
    //                 />
    //                 <FriendList data={friendProfiles}
    //                             isOpened={isOpened}
    //                 />
    //             </View>
    //             <TabBar selectedTabIdx={selectedTabIdx}
    //                     setSelectedTabIdx={setSelectedTabIdx}/>
    //         </SafeAreaView>
    //     </SafeAreaProvider>
    // );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});