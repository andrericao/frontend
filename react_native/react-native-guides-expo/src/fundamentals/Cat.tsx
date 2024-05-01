import React, { useState } from "react";
import { Button, Text, View } from "react-native";

type Catprops = {
  name: string,
};

const Cat = (props: Catprops) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I'm {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="André" />
      <Cat name="Nathália" />
    </>
  );
};

export default Cafe;
