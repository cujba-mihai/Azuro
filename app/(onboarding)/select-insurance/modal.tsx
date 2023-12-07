import { View, Text } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Appbar,
  IconButton,
  RadioButton,
  TextInput,
  Tooltip,
} from "react-native-paper";
import { Header } from "components/Typography";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HelpCenterIcon } from "assets/icons";
import { ButtonLinkComponent } from "components/Buttons";

export default function Modal() {
  const [value, setValue] = useState("Persoană fizică");
  const navigation = useNavigation();
  const [text, setText] = useState("");

  const isPresented = router.canGoBack();

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Appbar style={{ justifyContent: "center", alignContent: "center" }}>
        {!isPresented && <Link href="../">Dismiss</Link>}
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Header>Introduceți datele personale</Header>
      </Appbar>

      <View style={{ width: "100%", paddingLeft: 20, paddingRight: 20 }}>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: -10,
                justifyContent: "space-between",
              }}
            >
              <RadioButton color="#167743" value="Persoană fizică" />
              <Text>Persoană fizică</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <RadioButton color="#167743" value="Persoană juridică" />
              <Text>Persoană juridică</Text>
            </View>
          </View>
        </RadioButton.Group>

        <Text style={{ marginBottom: 6, marginTop: 20 }}>
          Codul personal (IDNP) *
        </Text>
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder="Introduceți codul personal"
          mode="outlined"
          right={
            <Tooltip title="Selected Camera">
              <IconButton icon="camera" selected size={24} onPress={() => {}} />
            </Tooltip>
          }
        />

        <Text style={{ marginBottom: 6, marginTop: 20 }}>
          Nr. certificatului de înmatriculare *
        </Text>
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder="Introduceți numărul certificatului"
          mode="outlined"
          right={
            <Tooltip title="Selected Camera">
              <IconButton icon="camera" selected size={24} onPress={() => {}} />
            </Tooltip>
          }
        />

        <HelpCenterIcon
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: 25,
            marginTop: 50,
          }}
        />

        <ButtonLinkComponent to="/example">
          Am nevoie de ajutor
        </ButtonLinkComponent>
      </View>

      <StatusBar style="light" />
    </View>
  );
}
