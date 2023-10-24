import React, {useCallback} from 'react';
import {Platform, Linking} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/core';
import Block from '@/components/Block';
import Image from '@/components/Image';
import Text from '@/components/Text';
import Button from '@/components/Button';
import useTheme from '@/core/theme';
import { ClientProfileScreenProps } from '@/routes/types';

const ClientProfile = (props: ClientProfileScreenProps) => {
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();
  const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
  const IMAGE_VERTICAL_SIZE =
    (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
  const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
  const IMAGE_VERTICAL_MARGIN =
    (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;


  return (
    <Block safe marginTop={sizes.md}>
      <Block
        scroll
        paddingHorizontal={sizes.s}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.padding}}>
        <Block flex={0}>
          <Image
            background
            resizeMode="cover"
            padding={sizes.sm}
            paddingBottom={sizes.l}
            radius={sizes.cardRadius}
            source={assets.background}>
            <Button
              row
              flex={0}
              justify="flex-start"
              onPress={() => navigation.goBack()}>
              <Image
                radius={0}
                width={10}
                height={18}
                color={colors.white}
                source={assets.arrow}
                transform={[{rotate: '180deg'}]}
              />
              <Text p white marginLeft={sizes.s}>
                {/* {profile.title} */}
                Profile
              </Text>
            </Button>
            <Block flex={0} align="center" marginBottom={sizes.md}>
              <Image
                width={64}
                height={64}
                marginBottom={sizes.sm} source={0}              />
              <Text h3 center white>
                {/* {user?.name} */}
                Rasheen Rabino
              </Text>
            </Block>
          </Image>

          {/* profile: stats */}
          <Block
            flex={0}
            radius={sizes.sm}
            marginTop={-sizes.l}
            marginHorizontal="8%"
            color="rgba(255,255,255,0.2)">
            <Block
              row
              blur
              flex={0}
              intensity={100}
              radius={sizes.sm}
              overflow="hidden"
              tint={colors.blurTint}
              justify="space-evenly"
              paddingVertical={sizes.sm}
              renderToHardwareTextureAndroid>
                <Block align="flex-start" marginLeft={sizes.sm}>
                    <Text h5>Name</Text>
                    <Text>Rasheen Rabino</Text>
                </Block>
            </Block>
            <Block
              row
              blur
              flex={0}
              intensity={100}
              radius={sizes.sm}
              overflow="hidden"
              tint={colors.blurTint}
              justify="space-evenly"
              paddingVertical={sizes.sm}
              renderToHardwareTextureAndroid>
                <Block align="flex-start" marginLeft={sizes.sm}>
                    <Text h5>Email</Text>
                    <Text>rasheencrabino@gmail.com</Text>
                </Block>
            </Block>
            <Block
              row
              blur
              flex={0}
              intensity={100}
              radius={sizes.sm}
              overflow="hidden"
              tint={colors.blurTint}
              justify="space-evenly"
              paddingVertical={sizes.sm}
              renderToHardwareTextureAndroid>
                <Block align="flex-start" marginLeft={sizes.sm}>
                    <Text h5>Contact Number</Text>
                    <Text>09566661733</Text>
                </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default ClientProfile;
