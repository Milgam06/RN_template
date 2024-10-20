import * as S from "./styled";

interface TextProps extends S.TextElementProps {
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  fontSize,
  fontWeight,
  fontColor,
  textAlign,
  letterSpacing,
  lineHeight,
  children,
}) => {
  return (
    <S.TextElement
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontColor={fontColor}
      textAlign={textAlign}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
    >
      {children}
    </S.TextElement>
  );
};
