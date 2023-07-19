import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';

const ExportModal = ({visible, toggleModal}) => {
  let password = '';
  const exportTextFile = async () => {
    try {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
    } catch (err) {
      console.warn(err);
    }
    let notes = await AsyncStorage.getItem('notes');
    const text = notes.toString();
    if (notes === '') {
      return;
    }
    if (password === '') {
      return;
    }
    notes = 'fortnote_decrypted_notes' + notes;
    var ciphertext = CryptoJS.AES.encrypt(notes, password).toString();
    const filename = `fortnote_exported_notes_${Date.now()}`;

    try {
      console.log(RNFS.DownloadDirectoryPath);
      const path = RNFS.DownloadDirectoryPath + '/' + filename + '.txt';
      await RNFS.writeFile(path, ciphertext, 'utf8');
      console.log('Text file exported successfully!');
      toggleModal(false);
    } catch (error) {
      console.log('Error exporting text file:', error);
    }
  };

  return (
    <Modal
      animationType={'slide'}
      onRequestClose={() => toggleModal(false)}
      visible={visible}
      transparent={true}>
      <View style={styles.container}>
        <View style={styles.child}>
          <Text style={styles.text}>
            Enter the encryption password for the exported file. This password
            will be used to decrypt the file when you import it. Do not share it
            or forget it
          </Text>
          <TextInput
            caretHidden={true}
            placeholder={'Enter the password'}
            onChange={e => {
              password = e.nativeEvent.text;
            }}
            placeholderTextColor={'grey'}
            cursorColor={'white'}
            style={styles.password}></TextInput>
          <TouchableOpacity onPress={exportTextFile}>
            <View style={styles.button}>
              <Text style={styles.buttonText}> Export!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    height: verticalScale(50),
    width: horizontalScale(150),
    backgroundColor: 'grey',
    borderRadius: moderateScale(10),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'Nunito-SemiBold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  child: {
    height: verticalScale(350),
    width: horizontalScale(350),
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: '#252525',
    alignItems: 'stretch',
    borderRadius: moderateScale(20),
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(17),
    color: 'white',
    textAlign: 'center',
  },
  password: {
    flex: 1,
    marginTop: verticalScale(20),
    fontSize: moderateScale(20),
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
  },
});

export default ExportModal;
