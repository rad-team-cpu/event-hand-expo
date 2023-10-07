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
enum Event { 'Wedding', 'Birthday', 'Baptismal' }



interface EventCardProps {
  key?: string;
  name: string;
  eventType: Event;
    // avatar: string;
  // coverImage: string;
//   averageRating: number;
}

const EventCard = (props: EventCardProps) => {
  const { key, name, eventType } = props;
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
          {eventType}
          </Text>   
        </Block>
        <Block row marginLeft={sizes.xs} marginBottom={sizes.xs}>
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

const createSupplierCard = (props: EventCardProps) => EventCard(props);

const SupplierCards = (props: EventCardProps[]) =>
  props.map(createSupplierCard);

export default SupplierCards;
