import { Image } from "react-native"; 
import { Button } from "@/src/app/components/button"; 
import { Input } from "@/src/app/components/input";   
import { Link } from "expo-router";                   
import { 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  StyleSheet // Adicionado para criar os estilos
} from "react-native";

export default function Signup() {
  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          
          {/* Seção da Ilustração */}
          <Image 
            source={require("@/src/app/assets/castaldi.jpg")} 
            style={styles.illustration} 
          />

          {/* Cabeçalho */}
          <Text style={styles.title}>Cadastrar</Text>
          <Text style={styles.subtitle}>Crie sua conta.</Text>

          {/* Formulário de Inputs */}
          <View style={styles.form}>
            <Input placeholder="Nome" />
            
            <Input 
              placeholder="E-mail" 
              keyboardType="email-address" 
            />
            
            <Input 
              placeholder="Senha" 
              secureTextEntry 
            />
            
            <Input 
              placeholder="Confirmar senha" 
              secureTextEntry 
            />
            
            <Button label="Cadastrar" />
          </View>

          {/* Rodapé com Link de Navegação */}
          <Text style={styles.footerText}>
            Já tem uma conta?{" "}
            <Link href="/" style={styles.footerLink}>
              Entre aqui.
            </Link>
          </Text>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Estilos integrados e corrigidos
const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDFDFD",
    padding: 32,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
  },
  illustration: {
    width: "15%",   // Aplicado do seu código da imagem
    height: 100,    // Aplicado do seu código da imagem
  },
  form: {
    width: "100%",
    marginTop: 30,  // Aplicado do seu código da imagem
    gap: 24,        // Aplicado do seu código da imagem
  },
  footerText: {
    textAlign: "center", // Aplicado do seu código da imagem
    marginTop: 24,       // Aplicado do seu código da imagem
    color: "#000000",    // Corrigido (sem o caractere quadrado)
  },
  footerLink: {
    color: "#0A1172",    // Corrigido (sem o caractere quadrado)
    fontWeight: "700",   // Mudado para string para evitar problemas em algumas versões
  },
});
