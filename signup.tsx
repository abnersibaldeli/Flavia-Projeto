import React, { useState } from "react";
import { 
  Image, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  StyleSheet,
  Alert // Adicionado para exibir mensagens de erro/sucesso
} from "react-native";
import { Link } from "expo-router";                   
import { Button } from "@/src/app/components/button"; 
import { Input } from "@/src/app/components/input";   

export default function Signup() {
  // 1. Declaração de todos os estados necessários para o formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 2. Função para validar os campos e processar o cadastro
  function handleSignUp() {
    // Verifica se algum campo está completamente vazio
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      return Alert.alert("Erro", "Preencha todos os campos para se cadastrar.");
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      return Alert.alert("Erro", "As senhas não coincidem.");
    }

    // Se passar pelas validações
    Alert.alert("Sucesso", "Conta criada com sucesso!");
  }

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
            <Input 
              placeholder="Nome" 
              value={name}
              onChangeText={setName}
            />
            
            <Input 
              placeholder="E-mail" 
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail} 
            />
            
            <Input 
              placeholder="Senha" 
              secureTextEntry
              value={password}
              onChangeText={setPassword} 
            />
            
            <Input 
              placeholder="Confirmar senha" 
              secureTextEntry 
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            
            {/* O botão agora chama a função de cadastro ao ser pressionado */}
            <Button label="Cadastrar" onPress={handleSignUp} />
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
    width: "15%",   
    height: 100,    
  },
  form: {
    width: "100%",
    marginTop: 30,  
    gap: 24,        
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
