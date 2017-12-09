import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Put from './Put';

const Content = (props) =>  {
        return (
         
                    <Put
                        object = {props.object}
                        ChangLoading = {props.ChangLoading}
                        fetchMethodGet = {props.fetchMethodGet}
                        fetchMethodPut = {props.fetchMethodPut}
                        isLoading = {props.isLoading}
                    /> 
           
        );
}

export default Content;