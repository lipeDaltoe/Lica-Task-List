import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { styles } from './style'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ItemList({ item, markItem, unmarkItem, removeItem }) {
  return (
    <View style={styles.itemList}>
      <View style={{ flex:1 }}>
        <Text style={item?.bought ? styles.itemBought : styles.itemToBuy}>
          {item?.name}
        </Text>
      </View>

      {!item.bought ? (
        <TouchableOpacity 
        style={styles.actionIcon}
        onPress={() => markItem(item.id)}
      >
        <AntDesign name="check" size={24} color="whitesmoke" />
      </TouchableOpacity>
      ) : (
        <TouchableOpacity 
        style={styles.actionIcon}
        onPress={() => unmarkItem(item.id)}
      >
        <AntDesign name="check" size={24} color="whitesmoke" />
      </TouchableOpacity>
      )}
      
      <TouchableOpacity 
        style={[styles.actionIcon, {backgroundColor: 'darkred'}]}
        onPress={() => removeItem(item.id)}
      >
        <AntDesign name="close" size={24} color="whitesmoke" />
      </TouchableOpacity>
    </View>
  )
}