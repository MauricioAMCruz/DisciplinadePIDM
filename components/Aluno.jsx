import React, {Component} from 'react'
import {Text,View} from 'react-native'

class Aluno extends Component{
    render(){
        return (
            <View>
                <Text>
                    Nome: Maurício Antônio Martins Cruz
                </Text>
                <Text>
                    Idade: 19 anos
                </Text>
                <Text>
                    Cidade: Quixadá-CE
                </Text>
                <Text>
                    Curso: Design Digital
                </Text>
            </View>
        )
    }
}

export default Aluno