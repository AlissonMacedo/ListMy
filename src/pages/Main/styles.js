import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px 10px;
  margin-top: 20px;
  background: #fff;
  margin-bottom: ${getBottomSpace()};
`;

export const Header = styled.View`
  width: 100%;
  padding: 30px 0 20px;
  background: #1c6cce;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const Form = styled.View`
  padding: 0px 0px 0px;
  background: #fff;
  align-self: stretch;
  flex-direction: row;
  padding-top: 13px;
  border-top-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #1c6cce;
  border-radius: 4px;
  margin-left: 10px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const Texto = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;
