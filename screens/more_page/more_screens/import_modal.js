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
import DocumentPicker from 'react-native-document-picker';
import CryptoJS from 'crypto-js';

const ImportModal = ({navigation, visible, toggleModal}) => {
  let password = '';
  const selectDoc = async () => {
    try {
      console.log('requesting permissions');
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
      console.log('permissions granted');
    } catch (err) {
      console.warn(err);
    }

    await DocumentPicker.pickSingle({
      type: [DocumentPicker.types.allFiles],
    })
      .then(async res => {
        const file = await RNFS.readFile(res.uri, 'utf8');
        var bytes = CryptoJS.AES.decrypt(file, password);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        await AsyncStorage.setItem('notes', originalText);
        toggleModal(false);
      })
      .catch(err => {
        if (DocumentPicker.isCancel(err)) {
          toggleModal(false);
        } else {
          throw err;
        }
      });
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
            Enter the password for the file you want to import file. This
            password will be used to decrypt the file when you selected. Do note
            that importing will override the curent notes.
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
          <TouchableOpacity onPress={selectDoc}>
            <View style={styles.button}>
              <Text style={styles.buttonText}> Import!</Text>
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

export default ImportModal;
