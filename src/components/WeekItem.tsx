import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Weeks } from '../utils/data'
export function WeekItem({ week, subject, classroom }: Weeks) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 20 }}>{week}</Text>
      <Text style={{ color: '#fff', fontSize: 20 }}>{subject}</Text>
      <Text style={{ color: '#fff', fontSize: 20 }}>{classroom}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FB8500',
    height: 100,
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'column',
  }
})