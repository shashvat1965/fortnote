import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SearchSVGComponent from '../../assets/svgs/search';
import MoreSVGComponent from '../../assets/svgs/more';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import ListItem from './list_item';
import {useEffect, useState} from 'react';
import AddSVGComponent from '../../assets/svgs/add';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditNoteScreen from '../edit_note/edit_note';

export default function ListPage({navigation}) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  });
  const getNotes = async () => {
    let notesString = (await AsyncStorage.getItem('notes')) ?? '[]';
    setNotes(JSON.parse(notesString));
  };
  return (
    <View style={{flex: 1, backgroundColor: '#252525'}}>
      <View style={styles.header}>
        <View>
          <Text style={styles.heading}>Notes</Text>
        </View>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => navigation.navigate('MoreScreen')}>
            <MoreSVGComponent />
          </TouchableOpacity>
        </View>
      </View>
      {notes.length > 0 ? (
        <View style={styles.listStyle}>
          <FlatList
            data={notes}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('EditNote', {
                    heading: item.heading,
                    content: item.content,
                    id: item.id,
                  });
                }}>
                <ListItem index={index % 6} name={item.heading} />
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <View style={styles.emptyMessage}>
          <Text style={styles.heading}>No Notes Saved</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('NewNote')}>
        <View style={styles.fab}>
          <AddSVGComponent />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: verticalScale(50),
    paddingHorizontal: horizontalScale(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(45),
  },
  iconRow: {
    flexDirection: 'row',
    gap: horizontalScale(20),
  },
  listStyle: {
    alignItems: 'center',
    flex: 1,
    paddingTop: verticalScale(40),
    paddingBottom: verticalScale(20),
  },
  fab: {
    width: verticalScale(70),
    height: verticalScale(70),
    borderRadius: verticalScale(35),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: verticalScale(30),
    right: horizontalScale(30),
    backgroundColor: '#252525',
    elevation: 5,
    shadowColor: '#000',
  },
  emptyMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
