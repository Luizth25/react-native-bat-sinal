import React, { useState } from "react";
import { View } from "react-native";

import { BatSinalLogo } from "./BatSinalLogo";
import { BatSinalForm } from "./BatSinalForm";
import { BatButton } from "../BatButton";

export function BatSinal() {
  const [signalActive, setSignalActive] = useState<boolean>(false);

  function activeOrDesactiveSignal() {
    setSignalActive((currentState) => !currentState);
  }

  return signalActive ? (
    <View>
      <BatSinalForm desactive={setSignalActive} />
    </View>
  ) : (
    <View>
      <BatSinalLogo />
      <BatButton
        text="Ative o Bat Sinal 🚨"
        onPress={activeOrDesactiveSignal}
      />
    </View>
  );
}
