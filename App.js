import ListPage from './screens/list_page/list_page';
import NewNoteScreen from './screens/new_note/new_note';
import {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import EditNoteScreen from './screens/edit_note/edit_note';
import MoreScreen from './screens/more_page/more_page';
import AboutScreen from './screens/more_page/more_screens/about_page';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'ListPage'}>
        <Stack.Screen
          name="ListPage"
          component={ListPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewNote"
          component={NewNoteScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditNote"
          component={EditNoteScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MoreScreen"
          component={MoreScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
