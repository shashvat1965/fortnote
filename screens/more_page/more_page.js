import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import BackSVGComponent from '../../assets/svgs/back';
import {useState} from 'react';
import ExportModal from './more_screens/export_modal';
import ImportModal from './more_screens/import_modal';

const MoreScreen = ({navigation}) => {
  const [exportModalVisible, setExportModalVisible] = useState(false);
  const [importModalVisible, setImportModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ImportModal
        visible={importModalVisible}
        toggleModal={prop => {
          setImportModalVisible(prop);
        }}
      />
      <ExportModal
        visible={exportModalVisible}
        toggleModal={prop => {
          setExportModalVisible(prop);
        }}
      />
      <View style={styles.headingRow}>
        <Text style={styles.text}>More Screen</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackSVGComponent />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setExportModalVisible(true)}>
        <View style={styles.pageItem}>
          <Text style={styles.pageItemText}>Export Notes</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.pageItem}>
        <TouchableOpacity
          onPress={() => {
            setImportModalVisible(true);
          }}>
          <Text style={styles.pageItemText}>Import Notes</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')}>
        <View style={styles.pageItem}>
          <Text style={styles.pageItemText}>About</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  headingRow: {
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(50),
  },
  text: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(45),
  },
  pageItemText: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(22),
  },
  pageItem: {
    backgroundColor: 'grey',
    borderRadius: moderateScale(10),
    padding: moderateScale(25),
    marginHorizontal: horizontalScale(25),
    marginBottom: verticalScale(25),
  },
});

export default MoreScreen;
