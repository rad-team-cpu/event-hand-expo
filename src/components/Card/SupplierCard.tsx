import React from 'react';
import { Card, Avatar, Divider } from 'react-native-paper';
import useTheme from "@/core/theme";
import { FontAwesome } from '@expo/vector-icons';
import Block from "../Block";
import Image from "../Image";
import Text from "../Text";
import Button from "../Button"
import { useNavigation } from '@react-navigation/native';
import { DashboardScreenNavigationProp } from '@/routes/types';


interface SupplierCardProps {
  key?: string;
  name: string;
  serviceType: string;
  avatar: string;
  // coverImage: string;
  averageRating: number;
}

const createStars = (averageRating: number) => {
  const stars: JSX.Element[] = [];
  const count = Math.floor(averageRating);


  for (let i = 0; i < count; i++) {
  stars.push(<FontAwesome key={i} name="star" size={16} color="#fcba03"
    />);
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

const SupplierCard = (props: SupplierCardProps) => {
  const { key, name, serviceType, avatar, averageRating } = props;
  const {assets, colors, gradients, sizes, icons} = useTheme();
  const navigation = useNavigation<DashboardScreenNavigationProp>();



  return (
    <Block key={key} card marginTop={sizes.xs} marginLeft={sizes.sm} marginRight={sizes.sm}>
        <Image
        // title={name}
        // subtitle={serviceType}
        resizeMode="cover"
        // source={{ uri: avatar }}
        source={assets?.card4}
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
        <Block row flex={0} align="center" justify="space-between">
          <Text
          p
          marginTop={sizes.s}
          marginLeft={sizes.xs}
          marginBottom={sizes.sm}>
          {serviceType}
          </Text>   
          <Text p size={12} semibold marginRight={sizes.s}>
            {createStars(averageRating)}/5
          </Text>
        </Block>
        <Block row marginLeft={sizes.xs} marginBottom={sizes.xs}>
        <Button flex={1} gradient={gradients.info} marginBottom={sizes.base} marginHorizontal={sizes.xs}>
          <Text white bold transform="uppercase">
            Message
          </Text>
        </Button>
        <Button flex={1} gradient={gradients.primary} marginBottom={sizes.base} marginHorizontal={sizes.xs}  onPress={() => navigation.navigate('EventDateSelect')}>
          <Text white bold transform="uppercase">
            View
          </Text>
        </Button>
        </Block>
    </Block>
);
};
  // return (
  //   <Card key={key} mode="outlined" style={{ margin: 5 }}>
  //     <Card.Cover style={{ height: 60 }} source={{ uri: coverImage }} />
  //     <Card.Title
  //       title={name}
  //       subtitle={serviceType}
  //       titleStyle={{ marginLeft: 5, fontWeight: 'bold' }}
  //       titleVariant="headlineMedium"
  //       subtitleStyle={{ marginLeft: 5 }}
  //       subtitleVariant="labelLarge"
  //       left={() => {
  //         return (
  //           <>
  //             <Avatar.Image size={48} source={{ uri: avatar }} />
  //           </>
  //         );

  //         // <Avatar.Icon size={36} icon="folder" color="black" /> ;
  //       }}
  //     />

  //     <Card.Content style={{ margin: 5, flexDirection: 'row' }}>
  //       <Text style={{ fontWeight: 'bold' }}>Rating:</Text>
  //       {createStars(averageRating)}
  //     </Card.Content>
  //     <Divider bold style={{ margin: 5 }} />
  //     <Card.Actions>
  //       <Button>Message</Button>
  //       <Button>View</Button>
  //     </Card.Actions>
  //   </Card>
  // );
// };

const createSupplierCard = (props: SupplierCardProps) => SupplierCard(props);

const SupplierCards = (props: SupplierCardProps[]) =>
  props.map(createSupplierCard);

export default SupplierCards;
