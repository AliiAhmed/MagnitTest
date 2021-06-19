import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Platform
} from 'react-native';
import contacts from 'react-native-contacts';

export default class App extends React.Component {

  state = {
    contactsInfo: []
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    if (Platform.OS === 'ios') {
      contacts.getAll().then(contacts => {
        // contacts returned
        this.setState({ contactsInfo: contacts });
        console.log("test:", this.state.contactsInfo);
        console.log("Contactssss:", contacts[0].givenName);
      })
    }
  }

  showData({ item }) {
    <View>
      <Text>{item.givenName}</Text>
    </View>
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.viewMain}>
            {/* <FlatList
            data={this.state.contactsInfo}
            renderItem={this.showData.bind(this)}
            keyExtractor={(item) => item.recordID}
          /> */}
            {
              this.state.contactsInfo.map((item) => (
                <>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.circle}>
                      <Text style={styles.itemInitails}>{item.givenName.charAt(0)}</Text>
                    </View>
                    <Text style={styles.itemText}>{item.givenName} {item.familyName}</Text>
                  </View>
                  <View style={styles.itemSpace}></View>
                </>
              ))
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  viewMain: {
    padding: 20
  },
  circle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: 'grey',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemInitails: {
    fontWeight: 'bold',
    fontSize: 16
  },
  itemSpace: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

