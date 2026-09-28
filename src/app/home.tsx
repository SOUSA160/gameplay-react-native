import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const categories = [
  {
    id: 1,
    image: require('../../assets/images/tabIcons/Ranqueada.png'),
    name: 'Ranqueada',
  },
  {
    id: 2,
    image: require('../../assets/images/tabIcons/Duelo 1x1.png'),
    name: 'Duelo 1x1',
  },
  {
    id: 3,
    image: require('../../assets/images/tabIcons/Diversão.png'),
    name: 'Diversão',
  },
];

const matches = [
  {
    id: 1,
    image: require('../../assets/images/tabIcons/Lendários.png'),
    name: 'Lendários',
    date: '18/06 às 21:00h',
    category: 'Ranqueada',
    status: 'Anfitrião',
  },
  {
    id: 2,
    image: require('../../assets/images/tabIcons/Yeah, boy.png'),
    name: 'Yeah, boy',
    date: '23/06 às 19:00h',
    category: 'Diversão',
    status: 'Visitante',
  },
  {
    id: 3,
    image: require('../../assets/images/tabIcons/Rumo ao topo.png'),
    name: 'Rumo ao topo',
    date: '20/06 às 09:00h',
    category: '1x1',
    status: 'Anfitrião',
  },
  {
    id: 4,
    image: require('../../assets/images/tabIcons/Bora queimar tudo.png'),
    name: 'Bora queimar tudo',
    date: '20/06 às 14:20h',
    category: 'Ranqueada',
    status: 'Anfitrião',
  },
  {
    id: 5,
    image: require('../../assets/images/tabIcons/Valorosos.png'),
    name: 'Valorosos',
    date: '19/06 às 20:00h',
    category: 'Diversão',
    status: 'Anfitrião',
  },
  {
    id: 6,
    image: require('../../assets/images/tabIcons/Gameplay.png'),
    name: 'Gameplay',
    date: '25/06 às 21:00h',
    category: 'Diversão',
    status: 'Visitante',
  },
];

export default function Home() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* Cabeçalho */}
      <View style={styles.header}>

        <Image
          source={require('../../assets/images/tabIcons/Perfil.png')}
          style={styles.avatar}
        />

        <View style={styles.userInfo}>
          <Text style={styles.welcome}>
            Olá, <Text style={styles.userName}>Paulo</Text>
          </Text>

          <Text style={styles.message}>
            Hoje é dia de vitória
          </Text>
        </View>

        <Pressable style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>

      </View>

      {/* Categorias */}
      <Text style={styles.title}>
        Categorias
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {categories.map((category) => (
          <Pressable
            key={category.id}
            style={styles.category}
          >
            <Image
              source={category.image}
              style={styles.categoryImage}
              resizeMode="contain"
            />

            <Text style={styles.categoryName}>
              {category.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Partidas agendadas */}
      <View style={styles.matchesHeader}>

        <Text style={styles.titleMatches}>
          Partidas agendadas
        </Text>

        <Text style={styles.matchesCount}>
          Total {matches.length}
        </Text>

      </View>

      {/* Lista de partidas */}
      {matches.map((match) => (
        <Pressable
          key={match.id}
          style={styles.match}
        >

          <Image
            source={match.image}
            style={styles.gameImage}
          />

          <View style={styles.matchInfo}>

            <Text style={styles.matchName}>
              {match.name}
            </Text>

            <Text style={styles.matchDate}>
              📅 {match.date}
            </Text>

          </View>

          <View style={styles.matchStatus}>

            <Text style={styles.matchCategory}>
              {match.category}
            </Text>

            <Text
              style={
                match.status === 'Anfitrião'
                  ? styles.host
                  : styles.guest
              }
            >
              ● {match.status}
            </Text>

          </View>

        </Pressable>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1647',
  },

  content: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },

  userInfo: {
    flex: 1,
    marginLeft: 12,
  },

  welcome: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  userName: {
    fontWeight: 'bold',
  },

  message: {
    color: '#DDE3F0',
    fontSize: 13,
    marginTop: 3,
  },

  addButton: {
    width: 48,
    height: 48,
    backgroundColor: '#E51C44',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '300',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 35,
  },

  categories: {
    paddingTop: 20,
    paddingRight: 20,
  },

  category: {
    width: 104,
    height: 120,
    backgroundColor: '#1D2766',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  categoryImage: {
    width: 50,
    height: 50,
  },

  categoryName: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
  },

  matchesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  titleMatches: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  matchesCount: {
    color: '#DDE3F0',
    fontSize: 13,
  },

  match: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1D2766',
  },

  gameImage: {
    width: 52,
    height: 52,
    borderRadius: 8,
  },

  matchInfo: {
    flex: 1,
    marginLeft: 12,
  },

  matchName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  matchDate: {
    color: '#DDE3F0',
    fontSize: 11,
    marginTop: 7,
  },

  matchStatus: {
    alignItems: 'flex-end',
  },

  matchCategory: {
    color: '#DDE3F0',
    fontSize: 11,
  },

  host: {
    color: '#E51C44',
    fontSize: 11,
    marginTop: 7,
  },

  guest: {
    color: '#32BD50',
    fontSize: 11,
    marginTop: 7,
  },
});