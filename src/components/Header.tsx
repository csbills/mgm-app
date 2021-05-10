import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.cardProfile}>
                <View style={styles.labelBox}>
                    <Text style={{ color: '#646464', lineHeight: 25 }}>Olá,</Text>
                    <Text style={{ color: '#326271', fontSize: 18, fontWeight: 'bold', lineHeight: 30, }}>
                        Caio Henrique
            </Text>
                    <Text style={{ color: '#326271', lineHeight: 20 }}>Empresa: MGM Diag</Text>
                </View>
                <View>
                    <Image style={styles.tinyLogo}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png'
                        }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({  
    container: {
      backgroundColor: colors.blue,
      width: '100%',
      height: '15%',
      paddingHorizontal: 20,
    },
  
    cardProfile: {
      width: '100%',
      backgroundColor: colors.white,
      position: 'relative',
      height: 118,
      top: '50%',
      borderRadius: 12,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '50%',
  
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
    },
  
    labelBox: {
      justifyContent: 'center',
    },
  
    tinyLogo: {
      width: 50,
      height: 50,
      borderRadius: 999,
    },
});