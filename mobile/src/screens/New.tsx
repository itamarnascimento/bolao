import { Heading, Text, VStack, useToast } from "native-base";
import { Header } from "../components/Header";

import Logo from '../assets/logo.svg'
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { api } from "../servers/api";


export function New() {
    const [title, setTitle] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const toast = useToast()

    const handlePoolCreat = async () => {
        if (!title.trim()) {
            return toast.show({
                title: "Informe um nome para seu bolão",
                placement: "top",
                bgColor: "red.500"
            })
        }

        try {
            setIsLoading(true)
            await api.post('/pools', { title })

            toast.show({
                title: "Bolão criado com sucesso",
                placement: "top",
                bgColor: "green.500"
            })

            setTitle('')

        } catch (error) {
            console.log(error);
            toast.show({
                title: "Não foi possivel criar o bolão",
                placement: "top",
                bgColor: "red.500"
            })
        } finally {
            setIsLoading(false)
        }

    }
    return (
        <VStack flex={1} bgColor='gray.900'>
            <Header title="Criar novo bolão" />

            <VStack mt={8} mx={5} alignItems='center'>
                <Logo />
                <Heading color='white' fontFamily='heading' fontSize='xl' my={8} textAlign='center'>
                    Crie seu próprio bolão da copa e compartilhe entre amigos!
                </Heading>
                <Input
                    mb={2}
                    placeholder='Qual nome do seu bolão?'
                    onChangeText={setTitle}
                    value={title}
                />
                <Button
                    title="CRIAR MEU BOLÃO"
                    onPress={handlePoolCreat}
                    isLoading={isLoading}
                />
                <Text color='gray.200' fontSize='sm' fontFamily='heading' textAlign='center' px={10} mt={4}>
                    Após criar seu bolão, você receberá um código
                    único que poderá usar para convidar outras pessoas.
                </Text>
            </VStack>
        </VStack>
    )
}