import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button } from 'react-native';


const Put = props =>{
    return(
        <View>
            <Text></Text>
                {
                    props.object.length === 0 ?(
                        <View>
                            <Text></Text>
                            <Button
                                onPress={props.fetchMethodGet}
                                title = {props.isLoading? 'Loading ' : 'GetData'}
                                color = 'red'
                                accessibilityLabel='MethodGet'
                                disabled = {props.isLoading}
                            />
                        </View>
                    ):(
                        <View >
                            <View style={{flexDirection:'row' , paddingTop :50 }}>
                                <View style={{flex:1}}></View>
                                <View style={{ flex: 1 }}>
                                        <TextInput
                                            underlineColorAndroid='white'
                                            value='Name'
                                        />
                                </View>
                                <View style={{ flex: 1 }}>
                                        <TextInput
                                            underlineColorAndroid='white'
                                            value='Tel'
                                        />
                                </View>
                                <View style={{ flex: 1 }}>
                                        <TextInput
                                            underlineColorAndroid='white'
                                            value='Desc'
                                        />
                                </View>
                            </View>
                            <FlatList
                                data={props.object}
                                keyExtractor={ ({_id}) => _id }
                                renderItem={ ({item}) => 
                                    <List
                                        item={item}
                                        fetchMethodPut={props.fetchMethodPut}
                                    />
                                }
                            />

                        </View>
                    )
                }
            
        </View>
    );
}
export default Put;

class List extends Component{
    state = {
        name : this.props.item.name,
        tel : this.props.item.tel,
        desc : this.props.item.desc
    }
    render(){
        return(
            <View style={{flexDirection : 'row', paddingTop:20}}>
                <View style={{flex:1}} >
                    <Button
                        onPress={() => this.props.fetchMethodPut(this.props.item._id,this.state.name,this.state.tel,this.state.desc)}
                        title={this.state.isLoading ? 'Loading' : 'Edit Data'}
                        accessibilityLabel='request MethodPut'
                        disabled={this.state.isLoading}
                    />
                </View>
                    <View style={{ flex:1 }}>
                        <TextInput  
                            onChangeText={ (name) => this.setState({name})}
                            value={this.state.name}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput 
                            onChangeText={(tel) => this.setState({ tel })}
                            value={this.state.tel}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput 
                            onChangeText={(desc) => this.setState({ desc })}
                            value={this.state.desc}
                        />
                    </View>

                
            </View>
        )
    }
}