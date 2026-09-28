import { router } from 'expo-router';

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const players = [
  {
    id: 1,
    name: 'Diego Fernandes',
    status: 'Disponível',
  },
  {
    id: 2,
    name: 'Rodrigo Gonçalves',
    status: 'Ocupado',
  },
  {
    id: 3,
    name: 'Dani Oliveira',
    status: 'Disponível',
  },
];

export default function Details() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={require('../../assets/images/tabIcons/Lendários.png')}
          style={styles.bannerImage}
        />

        <View style={styles.overlay} />

        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>
            ‹
          </Text>
        </Pressable>

        <View style={styles.bannerText}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida.
          </Text>
        </View>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>

        <View style={styles.infoRow}>
          <View>
            <Text style={styles.infoLabel}>
              Data
            </Text>

            <Text style={styles.infoValue}>
              18/06 às 21:00h
            </Text>
          </View>

          <View>
            <Text style={styles.infoLabel}>
              Categoria
            </Text>

            <Text style={styles.infoValue}>
              Ranqueada
            </Text>
          </View>
        </View>

        <Text style={styles.playersTitle}>
          Jogadores
        </Text>

        {players.map((player) => (
          <View
            key={player.id}
            style={styles.player}
          >
            <View style={styles.playerAvatar}>
              <Text style={styles.playerLetter}>
                {player.name.charAt(0)}
              </Text>
            </View>

            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>
                {player.name}
              </Text>

              <Text
                style={
                  player.status === 'Disponível'
                    ? styles.available
                    : styles.busy
                }
              >
                ● {player.status}
              </Text>
            </View>
          </View>
        ))}

        <Pressable style={styles.joinButton}>
          <Text style={styles.joinButtonText}>
            Entrar na partida
          </Text>
        </Pressable>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1647',
  },

  banner: {
    height: 240,
    position: 'relative',
    justifyContent: 'flex-end',
  },

  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(14, 22, 71, 0.55)',
  },

  backButton: {
    position: 'absolute',
    top: 55,
    left: 24,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backText: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },

  bannerText: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#DDE3F0',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 8,
  },

  content: {
    padding: 24,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#1D2766',
  },

  infoLabel: {
    color: '#8F9BB3',
    fontSize: 12,
  },

  infoValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
  },

  playersTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 10,
  },

  player: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  playerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#1D2766',
    alignItems: 'center',
    justifyContent: 'center',
  },

  playerLetter: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  playerInfo: {
    marginLeft: 12,
  },

  playerName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  available: {
    color: '#32BD50',
    fontSize: 12,
    marginTop: 5,
  },

  busy: {
    color: '#E51C44',
    fontSize: 12,
    marginTop: 5,
  },

  joinButton: {
    height: 56,
    backgroundColor: '#E51C44',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 30,
  },

  joinButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});