import React, { useState } from "react";
import { Heading, useToast, VStack } from "native-base";
import { Header } from "../components/Header";
import { useNavigation } from '@react-navigation/native'
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { api } from "../servers/api";


export function Find() {
    const [isLoadind, setIsLoading] = useState(false)
    const [code, setCode] = useState('')
    const toast = useToast()

    const { navigate } = useNavigation()
    const handleJoinPool = async () => {
        try {
            setIsLoading(true)

            if (!code.trim()) {
                return toast.show({
                    title: 'Digite um codigo para realizar a busca',
                    bgColor: 'red.500',
                    placement: 'top'

                })
            }

            await api.post('/pools/join', { code })
            toast.show({
                title: 'Você entrou no bolao com sucesso',
                bgColor: 'green.500',
                placement: 'top'

            })
            navigate('pools')


        } catch (error) {
            setIsLoading(false)
            if (error.resposta?.data?.message != '') {
                console.log(error);
                return toast.show({
                    title: 'error.resposta?.data?.message',
                    bgColor: 'red.500',
                    placement: 'top'

                })
            }
            toast.show({
                title: "Erro ao buscar o Bolão",
                bgColor: 'red.500',
                placement: 'top'

            })

        } 
    }
    return (
        <VStack flex={1} bgColor='gray.900'>
            <Header title="Buscar por código" showBackButton />

            <VStack mt={8} mx={5} alignItems='center'>
                <Heading color='white' fontFamily='heading' fontSize='xl' mb={8} textAlign='center'>
                    Encontre um bolão através de seu código único
                </Heading>
                <Input
                    mb={2}
                    placeholder='Qual o código do bolão?'
                    autoCapitalize="characters"
                    onChangeText={setCode}
                />
                <Button
                    title="BUSCAR BOLÃO"
                    isLoading={isLoadind}
                    onPress={handleJoinPool}
                />
            </VStack>
        </VStack>
    )
}