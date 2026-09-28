import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/login.png')}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}e organize suas{'\n'}jogatinas
        </Text>

        <Text style={styles.text}>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </Text>

        <Pressable
         style={styles.button}
         onPress={() => router.push('/home')}
>
          <View style={styles.discordArea}>
            <FontAwesome5
              name="discord"
              size={22}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.buttonText}>
            Entre com Discord
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1647',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 390,
    resizeMode: 'contain',
    marginTop: 30,
  },

  content: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 40,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 34,
  },

  text: {
    color: '#DDE3F0',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 16,
  },

  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#E51C44',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
  },

  discordArea: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#991F36',
  },

  buttonText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 56,
  },
});