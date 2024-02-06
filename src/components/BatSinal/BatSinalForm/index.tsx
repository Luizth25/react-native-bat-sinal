import React, { useEffect } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { useForm } from "react-hook-form";

import { TextFields } from "./TextFields";
import { BatButton } from "../../BatButton";

import { styles } from "./styles";
import { TDataFrom, TBatSinalFormProps } from "./types";

export function BatSinalForm({ desactive }: TBatSinalFormProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TDataFrom>();

  useEffect(() => {
    register("email");
    register("name", { required: "Nome é obrigatório" });
    register("phone", { required: "Telefone é obrigatório" });
    register("observation");
    register("localization", { required: "Localização é obrigatória" });
  }, [register]);

  const onSubmit = (data: TDataFrom) => {
    console.log("data");
    desactive(false);
    Alert.alert("Sinal recebido estou a caminho 🦇");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>
          <TextFields
            label="Nome"
            placeholder="Digite seu nome"
            onChangeText={(text) => setValue("name", text)}
            error={errors.name && errors.name.message}
          />
          <TextFields
            label="Email"
            placeholder="Digite seu email"
            onChangeText={(text) => setValue("email", text)}
          />
          <TextFields
            label="Telefone"
            placeholder="Digite o telefone para contato"
            keyboardType="numeric"
            onChangeText={(text) => setValue("phone", text)}
            error={errors.phone && errors.phone.message}
          />
          <TextFields
            label="Localização"
            placeholder="Digite a sua localização atual"
            maxLength={40}
            numberOfLines={4}
            multiline
            onChangeText={(text) => setValue("localization", text)}
            error={errors.localization && errors.localization.message}
          />
          <TextFields
            label="Observação"
            placeholder="Digite uma observação do que está acontecendo."
            maxLength={60}
            numberOfLines={4}
            multiline
            onChangeText={(text) => setValue("observation", text)}
          />
          <BatButton text="enviar" onPress={handleSubmit(onSubmit)} />
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
