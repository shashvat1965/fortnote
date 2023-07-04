import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BackSVGComponent from '../../assets/svgs/back';
import SaveSVGComponent from '../../assets/svgs/save';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditNoteScreen = ({route, navigation}) => {
  const [noteContentHeight, setNoteContentHeight] = useState(0);
  const [noteHeaderHeight, setNoteHeaderHeight] = useState(0);
  const [noteHeader, setNoteHeader] = useState(route.params.heading);
  const [noteContent, setNoteContent] = useState(route.params.content);

  const saveNoteHandler = async (heading, content, id) => {
    let notes = await AsyncStorage.getItem('notes');
    notes = JSON.parse(notes);
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        notes[i].heading = heading;
        notes[i].content = content;
        break;
      }
    }
    await AsyncStorage.setItem('notes', JSON.stringify(notes));
    navigation.goBack();
  };

  useEffect(() => {
    console.log(route.params);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#252525'}}>
      <View style={styles.iconHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackSVGComponent />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            saveNoteHandler(noteHeader, noteContent, route.params.id)
          }>
          <SaveSVGComponent />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.textArea}>
        <TextInput
          value={noteHeader}
          cursorColor={'white'}
          multiline={true}
          placeholderTextColor={'grey'}
          style={[styles.noteHeading, {height: noteHeaderHeight}]}
          onChange={e => {
            setNoteHeader(e.nativeEvent.text);
          }}
          onContentSizeChange={e => {
            setNoteHeaderHeight(e.nativeEvent.contentSize.height);
          }}
          placeholder={'Note Heading'}
        />

        <TextInput
          value={noteContent}
          textAlignVertical={'top'}
          cursorColor={'white'}
          multiline={true}
          placeholderTextColor={'grey'}
          style={[styles.noteContent, {height: noteContentHeight}]}
          onContentSizeChange={e => {
            setNoteContentHeight(e.nativeEvent.contentSize.height);
          }}
          onChange={e => {
            setNoteContent(e.nativeEvent.text);
          }}
          placeholder={'Note Content'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  iconHeader: {
    paddingTop: verticalScale(50),
    paddingHorizontal: horizontalScale(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noteHeading: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Nunito-SemiBold',
  },
  noteContent: {
    flex: 1,
    paddingTop: verticalScale(20),
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
  },
  textArea: {
    flex: 1,
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(20),
  },
});

export default EditNoteScreen;
