import React from 'react';
import SupplierCards from '@/components/Card/SupplierCard';
import { faker } from '@faker-js/faker';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';

const data = [
  {
    key: '1',
    name: faker.company.name(),
    serviceType: faker.person.jobType(),
    avatar: faker.image.avatar(),
    coverImage: faker.image.url(),
    averageRating: faker.number.float({ max: 5 }),
  },
  {
    key: '2',
    name: faker.company.name(),
    serviceType: faker.person.jobType(),
    avatar: faker.image.avatar(),
    coverImage: faker.image.url(),
    averageRating: faker.number.float({ max: 5 }),
  },
  {
    key: '3',
    name: faker.company.name(),
    serviceType: faker.person.jobType(),
    avatar: faker.image.avatar(),
    coverImage: faker.image.url(),
    averageRating: faker.number.float({ max: 5 }),
  },

  {
    key: '4',
    name: faker.company.name(),
    serviceType: faker.person.jobType(),
    avatar: faker.image.avatar(),
    coverImage: faker.image.url(),
    averageRating: faker.number.float({ max: 5 }),
  },
  {
    key: '5',
    name: faker.company.name(),
    serviceType: faker.person.jobType(),
    avatar: faker.image.avatar(),
    coverImage: faker.image.url(),
    averageRating: faker.number.float({ max: 5 }),
  },
  {
    key: '6',
    name: faker.company.name(),
    serviceType: faker.person.jobType(),
    avatar: faker.image.avatar(),
    coverImage: faker.image.url(),
    averageRating: faker.number.float({ max: 5 }),
  },
  {
    key: '7',
    name: faker.company.name(),
    serviceType: faker.person.jobType(),
    avatar: faker.image.avatar(),
    coverImage: faker.image.url(),
    averageRating: faker.number.float({ max: 5 }),
  },
  {
    key: '8',
    name: faker.company.name(),
    serviceType: faker.person.jobType(),
    avatar: faker.image.avatar(),
    coverImage: faker.image.url(),
    averageRating: faker.number.float({ max: 5 }),
  },
  {
    key: '9',
    name: faker.company.name(),
    serviceType: faker.person.jobType(),
    avatar: faker.image.avatar(),
    coverImage: faker.image.url(),
    averageRating: faker.number.float({ max: 5 }),
  },

  {
    key: '10',
    name: faker.company.name(),
    serviceType: faker.person.jobType(),
    avatar: faker.image.avatar(),
    coverImage: faker.image.url(),
    averageRating: faker.number.float({ max: 5 }),
  },
  {
    key: '11',
    name: faker.company.name(),
    serviceType: faker.person.jobType(),
    avatar: faker.image.avatar(),
    coverImage: faker.image.url(),
    averageRating: faker.number.float({ max: 5 }),
  },
  {
    key: '12',
    name: faker.company.name(),
    serviceType: faker.person.jobType(),
    avatar: faker.image.avatar(),
    coverImage: faker.image.url(),
    averageRating: faker.number.float({ max: 5 }),
  },
];

const SupplierList = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        {/* <SupplierListAppBar /> */}
        {SupplierCards(data)}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default SupplierList;
