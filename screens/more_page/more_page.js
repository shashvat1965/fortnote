import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import BackSVGComponent from '../../assets/svgs/back';

const MoreScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingRow}>
        <Text style={styles.text}>More Screen</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackSVGComponent />
        </TouchableOpacity>
      </View>
      <View style={styles.pageItem}>
        <Text style={styles.pageItemText}>Export Notes</Text>
      </View>
      <View style={styles.pageItem}>
        <Text style={styles.pageItemText}>Import Notes</Text>
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
