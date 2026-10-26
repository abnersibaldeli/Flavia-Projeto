import React, { useState } from 'react'; // Adicionado o import do React e useState
import { 
  Alert, 
  Image, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  TouchableOpacity 
} from 'react-native'; 
import { Link } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    if (!email.trim() || !password.trim()) {
      return Alert.alert("Entrar", "Preencha e-mail e senha para entrar");
    }
    
    Alert.alert("Sucesso", "Campos preenchidos corretamente!");
  }

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image 
            source={require("../assets/castaldi.jpeg")}
            style={styles.illustration} 
          />
          
          <Text style={styles.title}>Programação Mobile</Text>
          <Text style={styles.subtitle}>Acesse sua conta</Text>

          <View style={styles.form}>
            <TextInput 
              style={styles.input} 
              placeholder="E-mail" 
              keyboardType="email-address" 
              autoCapitalize="none"
              value={email} // Vincula o estado ao input
              onChangeText={setEmail} // Atualiza o estado ao digitar
            />
            <TextInput 
              style={styles.input} 
              placeholder="Senha" 
              secureTextEntry={true}
              value={password} // Vincula o estado ao input
              onChangeText={setPassword} // Atualiza o estado ao digitar
            />
            
            <TouchableOpacity onPress={handleSignIn} activeOpacity={0.7}>
              <Text style={styles.buttonPlaceholder}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Não tem uma conta ?{" "}
              <Link href="/signup" style={styles.footerLink}>
                Cadastre-se aqui.
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
} // Esta chave agora fecha corretamente o componente Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFDFD',
    padding: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
  },
  form: {
    width: '100%',
    marginTop: 30,
    gap: 24,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    paddingVertical: 8,
    fontSize: 16,
  },
  illustration: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  buttonPlaceholder: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: 12,
    borderRadius: 8,
  },
  footerText: {
    textAlign: "center",
    marginTop: 24,
    color: "#000000",
  },
  footerLink: {
    color: "#0A1172",
    fontWeight: "700",
  },
});
