import React from 'react';
import { Card, Avatar, Button, Divider, Text } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

interface SupplierCardProps {
  key?: string;
  name: string;
  serviceType: string;
  avatar: string;
  coverImage: string;
  averageRating: number;
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

const SupplierCard = (props: SupplierCardProps) => {
  const { key, name, serviceType, avatar, coverImage, averageRating } = props;
  return (
    <Card key={key} mode="outlined" style={{ margin: 5 }}>
      <Card.Cover style={{ height: 60 }} source={{ uri: coverImage }} />
      <Card.Title
        title={name}
        subtitle={serviceType}
        titleStyle={{ marginLeft: 5, fontWeight: 'bold' }}
        titleVariant="headlineMedium"
        subtitleStyle={{ marginLeft: 5 }}
        subtitleVariant="labelLarge"
        left={() => {
          return (
            <>
              <Avatar.Image size={48} source={{ uri: avatar }} />
            </>
          );

          // <Avatar.Icon size={36} icon="folder" color="black" /> ;
        }}
      />

      <Card.Content style={{ margin: 5, flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold' }}>Rating:</Text>
        {createStars(averageRating)}
      </Card.Content>
      <Divider bold style={{ margin: 5 }} />
      <Card.Actions>
        <Button>Message</Button>
        <Button>View</Button>
      </Card.Actions>
    </Card>
  );
};

const createSupplierCard = (props: SupplierCardProps) => SupplierCard(props);

const SupplierCards = (props: SupplierCardProps[]) =>
  props.map(createSupplierCard);

export default SupplierCards;
