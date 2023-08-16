import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const GoogleAuthentication = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "635122504733-mh2bdibg6n0f2tp911gvm9apiulqprtm.apps.googleusercontent.com",
    });
  }, []);

  const [userInfo, setUserInfo] = useState(null);

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo);
      console.log(usrInfo.user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View>
      {userInfo != null ? (
        <View>
          <Image
            style={{ height: 100, width: 100 }}
            source={{ uri: userInfo.user.photo }}
          />
          <TouchableOpacity
            style={{ borderWidth: 1, padding: 20 }}
            onPress={signOut}
          >
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={{ borderWidth: 1, padding: 20 }}
          onPress={signIn}
        >
          <Text>Sign In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GoogleAuthentication;
