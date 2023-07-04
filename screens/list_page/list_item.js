import {View, Text, StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import colorList from '../../utils/constants';

const ListItem = props => {
  return (
    <View style={[styles.container, {backgroundColor: colorList[props.index]}]}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(365),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(25),
  },
  text: {
    color: 'black',
    fontSize: moderateScale(22),
    paddingLeft: horizontalScale(30),
    paddingVertical: verticalScale(35),
    paddingRight: horizontalScale(50),
    textAlign: 'left',
    fontFamily: 'Nunito-Regular',
  },
});

export default ListItem;
