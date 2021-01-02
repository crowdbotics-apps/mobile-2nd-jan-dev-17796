import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_5: true }

  render = () => (
    <View>
      <Button
        title="Press me!"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_5}
        value={this.state.Switch_5}
        onValueChange={nextChecked => this.setState({ Switch_5: nextChecked })}
      />
      <Image source={{ uri: "https://via.placeholder.com/150" }} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Button_3: { height: 25 },
  Switch_5: { alignSelf: "flex-start" },
  Image_7: {}
})
