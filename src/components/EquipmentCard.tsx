import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

interface EquipmentProps {
    data: {
        id: string,
        name: string,
        serialNumber: string,
    }
}

export function EquipmentCard({ data, ...rest }: EquipmentProps) {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png'
                    }} />
            </View>
            <View>
                <Text style={{ fontSize: 18, color: '#326271', textAlign: 'right', fontWeight: 'bold' }}>
                    {data.name}
                </Text>
                <Text style={{ fontSize: 16, color: '#326271', textAlign: 'right' }}>
                    {data.serialNumber}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 118,
        width: '100%',
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
        flexDirection: 'row',
        padding: 20,
        marginTop: 20,

        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },

    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 999,
    },
});