import useTheme from "@/core/theme";
import React from "react";
import Block from "../Block";
import Image from "../Image";
import Text from "../Text";
import { FontAwesome } from '@expo/vector-icons';


interface CardProps {
    key?: string;
    name: string;
    serviceType: string;
    avatar: string;
    // coverImage: string;
    // averageRating: number;
  }

  const createStars = (averageRating: number) => {
    const stars: JSX.Element[] = [];
    const count = Math.floor(averageRating);
  
    for (let i = 0; i < count; i++) {
      stars.push(<FontAwesome key={i} name="star" size={18} color="#fcba03" />);
    }
  
    if (averageRating % 1 != 0) {
      stars.push(
        <FontAwesome
          key={count}
          name="star-half-full"
          size={18}
          color="#fcba03"
        />,
      );
    }
  
    return stars;
  };

const Card = (props: CardProps) => {
    const {assets, colors, gradients, sizes} = useTheme();
    const { key, name, serviceType, avatar, } = props;
    return (
        <Block key={key} card marginTop={sizes.sm}>
            <Image
            // title={name}
            // subtitle={serviceType}
            resizeMode="cover"
            source={{ uri: avatar }}
            // source={assets?.card4}
            style={{width: '100%'}}
            />
            <Text
            h5
            bold
            transform="uppercase"
            gradient={gradients.primary}
            marginTop={sizes.sm}>
            {name}
            </Text>
            <Text
            p
            marginTop={sizes.s}
            marginLeft={sizes.xs}
            marginBottom={sizes.sm}>
            {serviceType}
            </Text>
            {/* user details */}
            <Block row marginLeft={sizes.xs} marginBottom={sizes.xs}>
                <Image
                    source={assets.avatar1}
                    style={{width: sizes.xl, height: sizes.xl, borderRadius: sizes.s}}
                />
                <Block marginLeft={sizes.s}>
                    <Text p semibold>
                    Mathew Glock
                    </Text>
                    <Text p gray>
                    Posted on 28 February
                    </Text>
                </Block>
            </Block>
        </Block>
  );
};

export default Card;