import React, {useEffect, useState} from 'react';
import SupplierCards from '@/components/Card/SupplierCard';
import { faker } from '@faker-js/faker';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import Card from '@/components/Card/Card';
import Articles from '@/components/Article';
import Block from '@/components/Block';
import useTheme from '@/core/theme';
import Button from '@/components/Button';
import Text from '@/components/Text'
import { useData } from '@/core/useData';
import { IArticle, IArticleOptions, ICategory, IUser } from '@/constants/types';
import { FlatList } from 'react-native';
import Article from '@/components/Article';

const CATEGORIES: ICategory[] = [
  {id: 1, name: 'All'},
  {id: 2, name: 'Venue'},
  {id: 3, name: 'Photography'},
  {id: 4, name: 'Videography'},
  {id: 5, name: 'Stylist'},
];

const USERS: IUser[] = [
  {
    id: 1,
    name: 'Devin Coldewey',
    department: 'Marketing Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80',
  }
]

const ARTICLE_OPTIONS: IArticleOptions[] = [
  {
    id: 1,
    title: 'Single room in center',
    description:
      'As Uber works through a huge amount of internal management turmoil, the company is also consolidating.',
    type: 'room',
    guests: 1,
    sleeping: {total: 1, type: 'sofa'},
    price: 89,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1543489822-c49534f3271f?fit=crop&w=450&q=80',
  },
  {
    id: 2,
    title: 'Cosy apartment',
    description:
      'Different people have different taste, and various types of music have many ways of leaving an impact on someone.',
    type: 'apartment',
    guests: 3,
    sleeping: {total: 2, type: 'bed'},
    price: 200,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1603034203013-d532350372c6?fit=crop&w=450&q=80',
  },
  {
    id: 3,
    title: 'Single room in center',
    description:
      'As Uber works through a huge amount of internal management turmoil, the company is also consolidating.',
    type: 'room',
    guests: 1,
    sleeping: {total: 1, type: 'sofa'},
    price: 89,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1543489822-c49534f3271f?fit=crop&w=450&q=80',
  },
];

const VENUE: IArticle[] = [
  {
    id: 1,
    title: 'Hotel 21',
    description:
      'A great place to spend your special moments!',
    category: CATEGORIES[1], // best deal
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80',
    rating: 4.9,
    location: 'Lapaz, Iloilo'
  },
  {
    id: 2,
    title: ' Jaro Church',
    description: 'Best Iloilo church for a peaceful celebration.',
    category: CATEGORIES[1], 
    options: ARTICLE_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
    rating: 4.5,
    location: 'Jaro, Iloilo'
  },
];





const SupplierList = () => {
  // const data = useData();
  const [selected, setSelected] = useState<ICategory>();
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const {colors, gradients, sizes} = useTheme();

    // init articles
    useEffect(() => {
      setArticles(VENUE);
      setCategories(CATEGORIES);
      setSelected(CATEGORIES[0]);
    }, [VENUE, CATEGORIES]);
  
    // update articles on category change
    useEffect(() => {
      const category = CATEGORIES.find(
        (category) => category?.id === selected?.id,
      );
  
      const newArticles = VENUE.filter(
        (article) => article?.category?.id === category?.id,
      );
  
      setArticles(newArticles);
    }, [selected, setArticles]);

  return (
    <Block>
     {/* <GestureHandlerRootView> */}
      {/* <Articles /> */}
      {/* <ScrollView> */}
      <Block color={colors.card} row flex={0} paddingVertical={sizes.padding}>
        <Block
          scroll
          horizontal
          renderToHardwareTextureAndroid
          showsHorizontalScrollIndicator={false}
          contentOffset={{x: -sizes.padding, y: 0}}>
            {categories?.map((category) => {
            const isSelected = category?.id === selected?.id;
            return (
              <Button
                radius={sizes.m}
                marginHorizontal={sizes.s}
                key={`category-${category?.id}}`}
                onPress={() => setSelected(category)}
                gradient={gradients?.[isSelected ? 'primary' : 'light']}>
                <Text
                  p
                  bold={isSelected}
                  white={isSelected}
                  black={!isSelected}
                  transform="capitalize"
                  marginHorizontal={sizes.m}>
                  {category?.name}
                </Text>
              </Button>
            );
          })}
        </Block>
      </Block>

      <FlatList
        data={VENUE}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item?.id}`}
        style={{paddingHorizontal: sizes.padding}}
        contentContainerStyle={{paddingBottom: sizes.l}}
        renderItem={({item}) => <Article {...item} />}
      />
        {/* {SupplierCards(data)} */}
{/* 
      </ScrollView>
    </GestureHandlerRootView> */}
  </Block>
  );
};

export default SupplierList;
