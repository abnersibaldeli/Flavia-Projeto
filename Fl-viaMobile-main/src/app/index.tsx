import { 
  Alert, // Adicionado para o alerta funcionar
  Image, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  TouchableOpacity // Adicionado para transformar o texto em um botão clicável
} from 'react-native'; 
import { Link } from "expo-router";

export default function Index() {
  // Função que dispara o alerta ao clicar em Entrar
  function handleSignIn() {
    Alert.alert("Entrar", "Função acionada");
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
            />
            <TextInput 
              style={styles.input} 
              placeholder="Senha" 
              secureTextEntry={true} 
            />
            
            {/* O botão agora é clicável e chama a função handleSignIn */}
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
}

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
