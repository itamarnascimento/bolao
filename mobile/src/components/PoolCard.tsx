import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, HStack, Text, VStack } from 'native-base';

import { Participents, ParticipantProps } from './Participants';

export interface PoolPros {
  id: string;
  code: string;
  title: string;
  ownerId: string;
  createdAt: string;
  owner: {
    name: string;
  },
  Participents: ParticipantProps[];
  _count: {
    Participents: number;
  }
}

interface Props extends TouchableOpacityProps {
  data: PoolPros;
}

export function PoolCard({ data, ...rest }: Props) {
  
  return (
    <TouchableOpacity {...rest}>
      <HStack
        w="full"
        h={20}
        bgColor="gray.800"
        borderBottomWidth={3}
        borderBottomColor="yellow.500"
        justifyContent="space-between"
        alignItems="center"
        rounded="sm"
        mb={3}
        p={4}
      >
        <VStack>
          <Heading color="white" fontSize="md" fontFamily="heading">
            {data.title}
          </Heading>

          <Text color="gray.200" fontSize="xs">
            Criado por {data.owner.name}
          </Text>
        </VStack>

        <Participents
          count={data._count.Participents}
          participants={data.Participents}
        />
      </HStack>
    </TouchableOpacity>
  );
}