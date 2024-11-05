import { StatusBar } from "expo-status-bar";

import { Text } from "@/components/common/Text";

import * as S from "./styled";

export const Main: React.FC = () => (
  <>
    <S.MainScreenContainer>
      <Text fontSize={300} fontWeight={300} fontColor="#321412">
        Welcome To Milgam's RN Template!
      </Text>
      <StatusBar style="auto" />
    </S.MainScreenContainer>
  </>
);
