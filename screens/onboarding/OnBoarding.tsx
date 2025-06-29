import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewToken,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { OnBoardingButton } from "../../components/Buttons/OnBoardingButton";
import { Pagination } from "../../components/Pagination";
import {
  onBoardingSlides,
  type OnBoardingSlide,
} from "../../constants/onBoardingSlides";

const RenderItem = ({
  item,
  index,
  x,
}: {
  item: OnBoardingSlide;
  index: number;
  x: SharedValue<number>;
}) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP
    );

    return {
      width: SCREEN_WIDTH * 0.8,
      height: SCREEN_WIDTH * 0.8,
      opacity: opacityAnimation,
      transform: [{ translateY: translateYAnimation }],
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP
    );

    return {
      opacity: opacityAnimation,
      transform: [{ translateY: translateYAnimation }],
    };
  });

  return (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>

      <Animated.Image source={item.image} style={imageAnimatedStyle} className=" mt-16 mb-[-70]" />
      <Animated.View style={textAnimatedStyle}>
        <Text style={styles.itemTitle}>
          {item.title.split(" ")[0] + " "}
          <Text style={{ color: "#cc001f" }}>{item.title.split(" ")[1]}</Text>
          {" " + item.title.split(" ").slice(2).join(" ")}
        </Text>
        <Text style={styles.itemText}>{item.description}</Text>
      </Animated.View>
    </View>
  );
};

export default function Onboarding() {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const flatListRef = useAnimatedRef<FlatList<OnBoardingSlide>>();

  const flatListIndex = useSharedValue(0);
  const x = useSharedValue(0);

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: Array<ViewToken>;
  }) => {
    flatListIndex.value = viewableItems[0].index ?? 0;
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef as any}
        data={onBoardingSlides}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <RenderItem index={index} item={item} x={x} />
        )}
        onScroll={onScroll}
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
      />

      <View style={styles.footerContainer}>
        <Pagination data={onBoardingSlides} screenWidth={SCREEN_WIDTH} x={x} />

        <OnBoardingButton
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          dataLength={onBoardingSlides.length}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B121B",
  },
  itemContainer: {
    flex: 1,
    backgroundColor: "#0B121B",
    alignItems: "center",
    justifyContent: "space-around",
  },
  itemTitle: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  itemText: {
    color: "#FFFFFF80",
    fontSize: 17,
    textAlign: "center",
    lineHeight: 20,
    marginHorizontal: 30,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
});
