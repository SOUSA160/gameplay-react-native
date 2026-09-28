import { router } from 'expo-router';
import { useState } from 'react';

import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

const categories = [
  {
    id: 1,
    name: 'Ranqueada',
    image: require('../../assets/images/tabIcons/Ranqueada.png'),
  },
  {
    id: 2,
    name: 'Duelo 1x1',
    image: require('../../assets/images/tabIcons/Duelo 1x1.png'),
  },
  {
    id: 3,
    name: 'Diversão',
    image: require('../../assets/images/tabIcons/Diversão.png'),
  },
];

export default function Schedule() {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>

        <Text style={styles.headerTitle}>
          Agendar
        </Text>

        <View style={styles.headerSpace} />
      </View>

      {/* Categoria */}
      <Text style={styles.sectionTitle}>
        Categoria
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {categories.map((category) => {
          const isSelected =
            selectedCategory === category.id;

          return (
            <Pressable
              key={category.id}
              style={[
                styles.category,
                isSelected && styles.categorySelected,
              ]}
              onPress={() =>
                setSelectedCategory(category.id)
              }
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
          );
        })}
      </ScrollView>

      {/* Servidor */}
      <Text style={styles.sectionTitle}>
        Servidor
      </Text>

      <View style={styles.server}>
        <Image
          source={require('../../assets/images/tabIcons/Lendários.png')}
          style={styles.serverImage}
        />

        <View style={styles.serverInfo}>
          <Text style={styles.serverName}>
            Lendários
          </Text>

          <Text style={styles.serverDescription}>
            League of Legends
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </View>

      {/* Dia e mês */}
      <Text style={styles.sectionTitle}>
        Dia e mês
      </Text>

      <View style={styles.dateRow}>
        <TextInput
          style={styles.dateInput}
          placeholder="Dia"
          placeholderTextColor="#8F9BB3"
          keyboardType="number-pad"
          maxLength={2}
        />

        <TextInput
          style={styles.dateInput}
          placeholder="Mês"
          placeholderTextColor="#8F9BB3"
          keyboardType="number-pad"
          maxLength={2}
        />
      </View>

      {/* Horário */}
      <Text style={styles.sectionTitle}>
        Horário
      </Text>

      <View style={styles.timeRow}>
        <TextInput
          style={styles.timeInput}
          placeholder="00"
          placeholderTextColor="#8F9BB3"
          keyboardType="number-pad"
          maxLength={2}
        />

        <Text style={styles.timeSeparator}>
          :
        </Text>

        <TextInput
          style={styles.timeInput}
          placeholder="00"
          placeholderTextColor="#8F9BB3"
          keyboardType="number-pad"
          maxLength={2}
        />
      </View>

      {/* Descrição */}
      <Text style={styles.sectionTitle}>
        Descrição
      </Text>

      <TextInput
        style={styles.descriptionInput}
        placeholder="Mensagem para o grupo"
        placeholderTextColor="#8F9BB3"
        multiline
        textAlignVertical="top"
        maxLength={100}
      />

      {/* Botão */}
      <Pressable style={styles.scheduleButton}>
        <Text style={styles.scheduleButtonText}>
          Agendar
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1647',
  },

  content: {
    paddingTop: 55,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },

  backText: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  headerSpace: {
    width: 40,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 16,
  },

  categories: {
    paddingRight: 20,
  },

  category: {
    width: 104,
    height: 120,
    backgroundColor: '#1D2766',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  categorySelected: {
    borderColor: '#E51C44',
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

  server: {
    height: 72,
    backgroundColor: '#1D2766',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  serverImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },

  serverInfo: {
    flex: 1,
    marginLeft: 12,
  },

  serverName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  serverDescription: {
    color: '#8F9BB3',
    fontSize: 12,
    marginTop: 4,
  },

  arrow: {
    color: '#FFFFFF',
    fontSize: 30,
  },

  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dateInput: {
    width: '48%',
    height: 56,
    backgroundColor: '#1D2766',
    borderRadius: 8,
    color: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal: 16,
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  timeInput: {
    width: 80,
    height: 56,
    backgroundColor: '#1D2766',
    borderRadius: 8,
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },

  timeSeparator: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },

  descriptionInput: {
    height: 110,
    backgroundColor: '#1D2766',
    borderRadius: 8,
    color: '#FFFFFF',
    fontSize: 14,
    padding: 16,
  },

  scheduleButton: {
    height: 56,
    backgroundColor: '#E51C44',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },

  scheduleButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});