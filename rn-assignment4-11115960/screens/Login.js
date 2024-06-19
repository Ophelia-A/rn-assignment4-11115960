import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

const Login = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email) {
      Alert.alert("Error", "Please fill in both the name and email fields.");
    } else if (!emailPattern.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
    } else {
      navigation.navigate("Homepage", { name, email });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome Back👋</Text>
        <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.lineandtext}>
        <Image
          source={require("../assets/Line 183.png")}
          style={styles.LineIcon}
        />
        <Text style={styles.continueText}>Or continue with</Text>
        <Image
          source={require("../assets/Line 183.png")}
          style={styles.LineIcon}
        />
      </View>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity>
          <View style={styles.socialIconCon}>
            <Image
              source={require("../assets/cib_apple.png")}
              style={styles.socialIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.socialIconCon}>
            <Image
              source={require("../assets/google.png")}
              style={styles.socialIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.socialIconCon}>
            <Image
              source={require("../assets/ion_logo-facebook.png")}
              style={styles.socialIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.registerText}>
          Haven't an account? <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0077b5",
    marginBottom: 18,
    marginTop: 80,
  },
  welcomeContainer: {
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 18,
  },
  subtitle: {
    fontSize: 14,
    color: "#D3D3D3",
  },
  input: {
    height: 55,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#000",
  },
  loginButton: {
    backgroundColor: "#356899",
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 70,
    marginTop: 15,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "normal",
  },
  lineandtext: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  LineIcon: {
    marginTop: 8,
  },
  continueText: {
    textAlign: "center",
    color: "#D3D3D3",
    marginBottom: 20,
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    marginLeft: 70,
    marginRight: 70,
  },
  socialIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  socialIconCon: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    marginBottom: 30,
  },
  registerText: {
    textAlign: "center",
    color: "#D3D3D3",
  },
  registerLink: {
    color: "#0077b5",
    fontWeight: "normal",
  },
});

export default Login;