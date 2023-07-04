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
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewNoteScreen = ({navigation}) => {
  const [noteContentHeight, setNoteContentHeight] = useState(0);
  const [noteHeaderHeight, setNoteHeaderHeight] = useState(0);
  const [noteHeader, setNoteHeader] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const saveNoteHandler = async (heading, content) => {
    if (noteHeader.length > 0 && noteContent.length > 0) {
      let notes = JSON.parse((await AsyncStorage.getItem('notes')) ?? '[]');
      notes = [...notes, {heading: heading, content: content, id: Date.now()}];
      await AsyncStorage.setItem('notes', JSON.stringify(notes));
      navigation.goBack();
    } else {
      alert('Please fill in the note header and content');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#252525'}}>
      <View style={styles.iconHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackSVGComponent />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => saveNoteHandler(noteHeader, noteContent)}>
          <SaveSVGComponent />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.textArea}>
        <TextInput
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

export default NewNoteScreen;
