import { useEffect, useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';
import type { AppColors } from '../theme/colors';
import { useAppColors } from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export function SplashScreen({ navigation }: Props) {
  const colors = useAppColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LiveMatches');
    }, 1200);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={require('../../assets/splash-icon.png')} style={styles.logo} resizeMode="contain" />
      </View>
      <Text style={styles.title}>Cricbox</Text>
      <Text style={styles.subtitle}>Live cricket scores, commentary and match details</Text>
    </View>
  );
}

function createStyles(colors: AppColors) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
    },
    logoBox: {
      width: 140,
      height: 140,
      borderRadius: 70,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
    },
    logo: {
      width: 92,
      height: 92,
    },
    title: {
      fontSize: 36,
      fontWeight: '800',
      color: colors.text,
      marginBottom: 12,
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      color: colors.mutedText,
      lineHeight: 22,
      maxWidth: 320,
    },
  });
}

