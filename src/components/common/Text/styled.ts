import styled from "@emotion/native";

export interface TextElementProps {
  fontSize: number;
  fontWeight: number;
  fontColor?: string;
  textAlign?: "left" | "right" | "center";
  letterSpacing?: number;
  lineHeight?: number;
}

export const TextElement = styled.Text<TextElementProps>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontColor || "#000"};
  text-align: ${(props) => props.textAlign || "center"};
  letter-spacing: ${(props) => props.letterSpacing || 0};
  line-height: ${(props) => props.lineHeight || 1};
`;
