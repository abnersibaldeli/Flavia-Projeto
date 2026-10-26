import React, { useState } from 'react'; 
import { Alert, Image, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform, useColorScheme } from 'react-native'; 
import { Input } from "../components/Input"; 
import { Button } from "../components/Button"; 
import { Link } from "expo-router"; 

export default function Index() { 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const colorScheme = useColorScheme(); 
  const isDark = colorScheme === "dark"; 
  const colors = { 
    background: isDark ? "#121212" : "#FDFDFD", 
    textPrimary: isDark ? "#FFFFFF" : "#000000", 
    textSecondary: isDark ? "#A0A0A0" : "#666666", 
    link: isDark ? "#2196F3" : "#0066CC" 
  }; 

  const handleSignIn = () => { 
    Alert.alert("Sucesso", `Logando com o e-mail: ${email}`); 
  }; 

  return ( 
    <KeyboardAvoidingView 
      style={{ flex: 1, backgroundColor: colors.background }} 
      behavior={Platform.select({ ios: "padding", android: "height" })} 
    > 
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled"> 
        <View style={styles.container}> 
          <Image 
            source={require("@/src/app/assets/castaldi.jpg")} 
            style={styles.illustration} 
            resizeMode="contain" 
          /> 
          <Text style={[styles.title, { color: colors.textPrimary }]}> 
            Programação Mobile. 
          </Text> 
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}> 
            Acesse sua conta 
          </Text> 
          <View style={styles.form}> 
            <Input placeholder="E-mail" keyboardType="email-address" onChangeText={setEmail} /> 
            <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} /> 
            <Button label="Entrar" onPress={handleSignIn} /> 
          </View> 
          <Text style={[styles.footerText, { color: colors.textSecondary }]}> 
            Não tem uma conta?{" "} 
            <Link href="/signup" style={[styles.footerLink, { color: colors.link }]}> 
              Cadastre-se aqui. 
            </Link> 
          </Text> 
        </View> 
      </ScrollView> 
    </KeyboardAvoidingView> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justify'center', 
    alignItems: 'center', 
    padding: 32, 
  }, 
  title: { 
    fontSize: 30, 
    fontWeight: 'bold', 
  }, 
  subtitle: { 
    fontSize: 18, 
  }, 
  // Alterado para igual ao slide
  form: { 
    marginTop: 30, 
    gap: 24, 
    width: "80%", 
  }, 
  // Alterado para igual ao slide
  illustration: { 
    width: 120, 
    height: 120, 
    marginBottom: 20, 
  }, 
  // Alterado para igual ao slide
  footerText: { 
    textAlign: "center", 
    marginTop: 24, 
  }, 
  // Alterado para igual ao slide
  footerLink: { 
    fontWeight: "700", 
  } 
});
