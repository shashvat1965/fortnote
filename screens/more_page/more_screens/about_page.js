import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics';
import BackSVGComponent from '../../../assets/svgs/back';

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingRow}>
        <Text style={styles.text}>About App</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackSVGComponent />
        </TouchableOpacity>
      </View>
      <View style={styles.aboutApp}>
        <Text style={styles.appDecriptionText}>
          FortNote is an open souce app which allows you to transfer your notes
          to a different device without compromising on security
        </Text>
        <Text
          style={styles.githubLink}
          onPress={() =>
            Linking.openURL('https://github.com/shashvat1965/fortnote')
          }>
          Github Repo
        </Text>
        <Text
          style={styles.githubLink}
          onPress={() =>
            Linking.openURL('https://www.linkedin.com/in/shashvatsingh/')
          }>
          About Developer
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutMe: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(22),
    textAlign: 'center',
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(10),
  },
  aboutMeHeading: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(40),
    textAlign: 'center',
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(50),
  },
  aboutApp: {
    flex: 1,
    paddingTop: verticalScale(50),
  },
  githubLink: {
    color: '#27b8db',
    textDecorationLine: 'underline',
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(22),
    textAlign: 'center',
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(10),
  },
  appDecriptionText: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(22),
    textAlign: 'center',
    paddingHorizontal: horizontalScale(25),
  },
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
});

export default AboutScreen;
