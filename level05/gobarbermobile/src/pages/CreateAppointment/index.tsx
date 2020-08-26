import React, { useCallback, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useRoute, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/AuthContext';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
  ProvidersList,
  ProvidersListContainer,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
} from './styles';

import api from '../../services/api';

interface RouteParams {
  providerId: string;
}

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const CreateAppointment: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  const { user } = useAuth();
  const route = useRoute();
  const { goBack } = useNavigation();

  const { providerId } = route.params as RouteParams;

  const [selectedProvider, setSelectedProvider] = useState(providerId);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSelectedProvider = useCallback(
    (id: string) => {
      setSelectedProvider(id);
    },
    [goBack],
  );

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Cabeleireiros</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>

      <ProvidersListContainer>
        <ProvidersList
          data={providers}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={provider => provider.id}
          renderItem={({ item: provider }) => (
            <ProviderContainer
              selected={provider.id === selectedProvider}
              onPress={() => {
                handleSelectedProvider(provider.id);
              }}
            >
              <ProviderAvatar
                source={{
                  uri:
                    provider.avatar_url ||
                    'https://api.adorable.io/avatars/84/abott@adorable.png',
                }}
              />

              <ProviderName selected={provider.id === selectedProvider}>
                {provider.name}
              </ProviderName>
            </ProviderContainer>
          )}
        />
      </ProvidersListContainer>
    </Container>
  );
};

export default CreateAppointment;
