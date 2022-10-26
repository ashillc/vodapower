import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
    {   id:'1',
        url:'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip-1.jpg',
        device:'Samsung Galaxy Z Flip 128GB',
        contract:'RED'

    },
    {   id:'2',
        url:'https://cdn.shopify.com/s/files/1/0567/5938/6296/products/SAMN20U-RG_5373cea6-fbb2-473c-867c-78944a466390_5000x.jpg?v=1665028864',
        device:'Samsung Galaxy Note 20 Ultra 5G 256GB M',
        contact:''
    },
    {id:'3',
        url:'https://images.samsung.com/is/image/samsung/p6pim/za/sm-a135flbgafa/gallery/za-galaxy-a13-sm-a135-sm-a135flbgafa-thumb-531579145?$480_480_PNG$',
        device:'Samsung Galaxy A13 5G Blue DS',
        contact:''
    },
    {id:'4',
        url:'https://cdn.shopify.com/s/files/1/0029/5069/2964/products/500x500SamsungGalaxyA225G_300x300.png?v=1644326663',
        device:'Samsung Galaxy A22 5G 64GB Light Violet',
        contact:''
    },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const DevURL = ({devurl}) => (
    <View>
        <Text>{devurl}</Text>
    </View>
)

const DeviceTest = () => {
  const renderItem = ({ item }) => (
    <>
    <Item title={item.device} />
    <DevURL devurl={item.url}/>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default DeviceTest;



