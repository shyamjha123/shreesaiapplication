
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as Location from "expo-location"; // Import Location
import { Formik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import profilelogo from "../(tabs)/assests/profilelogo.jpeg";
import Api from "../common/api/apiconfig";

// Validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
  const router = useRouter();
  const [state, setState] = useState({
      passwordVisible:false,
      locationEnabled:false
  });

  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      setState({...state, locationEnabled:true})
    } else {
        setState({...state, locationEnabled:false})
      Alert.alert("Location Required", "Please enable location services to continue.");
    }
  };

  const handleLogin = async (values) => {
    if (!state.locationEnabled) {
      Alert.alert("Location Required", "Please enable location services to log in.");
      return;
    };
  //  console.log(Api.LOGIN_URL);
   
    const { email, password } = values;
    try {
      const response = await fetch(Api.LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const dataresponse = await response.json();

      if (!response.ok) {
        throw new Error(dataresponse.message || "Invalid email or password.");
      }

      Alert.alert("Login Successful", "You are now logged in.");
      await AsyncStorage.setItem("token", dataresponse.token);
      router.push("/Mpin");
    } catch (error) {
      Alert.alert("Login Failed", error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: 170, borderRadius: 125 }}>
        <Image source={profilelogo} style={{ width: "100%", height: 165, borderRadius: 125 }} />
      </View>

      <Formik initialValues={{ email: "", password: "" }} validationSchema={validationSchema} onSubmit={handleLogin}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.loginContainer}>
            <Text style={styles.headerText}>Login</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#aaa"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.passwordWrapper}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Password"
                  placeholderTextColor="#aaa"
                  secureTextEntry={!state.passwordVisible}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <TouchableOpacity style={styles.iconButton} onPress={() => setState({...state, passwordVisible:!state.passwordVisible})}>
                  <Ionicons name={state.passwordVisible ? "eye-off" : "eye"} size={24} color="gray" />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              <Text style={{ color: "#0000FF" }} onPress={() => router.push("/Forgotmpin")}>Forgot Mpin</Text>
              <Text style={{ color: "#0000FF" }} onPress={() => router.push("/Forgotpassword")}>Forgot Password</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>            
            </TouchableOpacity>
              <Text style={styles.versionText}>App Version 1.0.0</Text>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    marginTop: 30,
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    color: "green",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  iconButton: {
    position: "absolute",
    right: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
  versionText: {
    fontSize: 13,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
    fontStyle: "italic",
  },
});

export default Login;
