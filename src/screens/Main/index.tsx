import { StatusBar } from "expo-status-bar";

import { Text } from "@/components";

import * as S from "./styled";

export const Main: React.FC = () => (
  <>
    <S.MainScreenContainer>
      <Text fontSize={400} fontWeight={900}>
        Welcome To Milgam's RN Template!
      </Text>
      <StatusBar style="auto" />
    </S.MainScreenContainer>
  </>
);
