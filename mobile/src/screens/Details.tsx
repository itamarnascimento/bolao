import { useToast, VStack, HStack } from "native-base";
import { Share } from "react-native";
import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from "react";
import { api } from "../servers/api";
import { Loading } from "../components/Loading";
import { Header } from "../components/Header";
import { PoolPros } from '../components/PoolCard'
import { PoolHeader } from "../components/PoolHeader";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";
import { Option } from "../components/Option";
import { Guesses } from '../components/Guesses'

interface RoutesParams {
    id: string
}
export function Details() {
    const [isLoading, setIsLoading] = useState(true)
    const [optionsSelected, setOptionSelected] = useState<"Seus palpites" | "Ranking do grupo">("Seus palpites")
    const [poolDetails, setPoolsDetails] = useState<PoolPros>({} as PoolPros)
    const route = useRoute()
    const toast = useToast()
    const { id } = route.params as RoutesParams

    const fetchPoolsDetails = async () => {
        try {
            setIsLoading(true)
            const response = await api.get(`/pools/${id}`)
            setPoolsDetails(response.data.pools);



        } catch (error) {
            console.log(error);
            toast.show({
                title: "Não foi possivel carregar sos detalhes",
                placement: "top",
                bgColor: "red.500"
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleCodeShare = async () => {
        await Share.share({
            message: poolDetails.code
        })
    }
    useEffect(() => {
        fetchPoolsDetails()
    }, [id])

    if (isLoading) {
        return (<Loading />)
    }
    return (
        <VStack flex={1} bgColor='gray.900'>
            <Header title={poolDetails.title} showBackButton showShareButton onShare={handleCodeShare} />
            {
                poolDetails._count.Participents > 0 ?
                    <VStack px={5} flex={1}>
                        <PoolHeader data={poolDetails} />
                        <HStack bgColor='gray.800' p={1} rounded='sm' mb={5} >
                            <Option title="Seus palpites" isSelected={optionsSelected === "Seus palpites"} onPress={() => setOptionSelected("Seus palpites")} />
                            <Option title="Ranking do grupo" isSelected={optionsSelected === "Ranking do grupo"} onPress={() => setOptionSelected("Ranking do grupo")} />
                        </HStack>
                        <Guesses poolId={poolDetails.id} code={poolDetails.code} />
                    </VStack> : <EmptyMyPoolList code={poolDetails.code} />
            }

        </VStack>
    )
}