import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import { Hourglass } from 'phosphor-react-native'
import { Weeks, WeeksList } from '../utils/data'
import { WeekItem } from '../components/WeekItem'

export function HomeScreen() {
  function renderItem({ item }: ListRenderItemInfo<Weeks>) {
    return <WeekItem {...item} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Hourglass color='#fff' size={28} weight='bold' />
        Horários de Sistema Informação
      </Text>
      <FlatList
        data={WeeksList}
        renderItem={renderItem}
        keyExtractor={(item) => item.week}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  }
});