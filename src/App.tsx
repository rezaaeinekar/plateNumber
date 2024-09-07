import { ChangeEvent, useEffect, useState } from "react";
import {
  isHaveEnglishLetter,
  isHaveNumber,
  isHavePersianLetters,
  isHavePersianNumber,
  isHavePersianLetters_number_Symbols_Motions,
  isHavePersianNumber_Symbols_Motions,
  numberToEnglish,
} from "./dataValid";
import { BgColor, Color, Size } from "./type";
import { checkColor, sizeCalc } from "./utils";

export default function PlateNumber({
  twoDigit,
  letter,
  threeDigit,
  cityDigit,
  readOnly = false,
  size = "md",
  colorize = true,
}: {
  twoDigit?: string;
  letter?: string;
  threeDigit?: string;
  cityDigit?: string;
  readOnly?: boolean;
  size?: Size;
  colorize?: boolean;
}) {
  const [bgColor, setBgColor] = useState<BgColor>("white");
  const [color, setColor] = useState<Color>("black");

  useEffect(() => {
    bgColor == "red" || bgColor == "green"
      ? setColor("white")
      : setColor("black");
  }, [bgColor]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: sizeCalc(size),
          border: "1px solid gray",
          borderRadius: "4px",
          backgroundColor: bgColor,
        }}
      >
        <PlateNumberInput
          bgColor={bgColor}
          color={color}
          setBgColor={colorize ? (color) => setBgColor(color) : undefined}
          val={cityDigit}
          limit={2}
          isNumber
          borderLeft
          readOnly={readOnly}
          size={size}
        />
        <PlateNumberInput
          bgColor={bgColor}
          color={color}
          setBgColor={colorize ? (color) => setBgColor(color) : undefined}
          val={threeDigit}
          limit={3}
          isNumber
          readOnly={readOnly}
          size={size}
        />
        <PlateNumberInput
          bgColor={bgColor}
          color={color}
          setBgColor={colorize ? (color) => setBgColor(color) : undefined}
          val={letter}
          readOnly={readOnly}
          size={size}
        />
        <PlateNumberInput
          bgColor={bgColor}
          color={color}
          setBgColor={colorize ? (color) => setBgColor(color) : undefined}
          val={twoDigit}
          limit={2}
          isNumber
          readOnly={readOnly}
          size={size}
        />
        <div
          className="px-1"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            fontSize: sizeCalc(size, true),
            alignItems: "center",
            backgroundColor: "blue",
            color: "white",
            borderRight: "1px solid gray",
          }}
        >
          <span>🇮🇷</span>
          <span>IR</span>
        </div>
      </div>
    </>
  );
}

function PlateNumberInput({
  val,
  limit = 1,
  isNumber,
  readOnly,
  borderLeft,
  size,
  bgColor,
  color,
  setBgColor,
}: {
  val: string | undefined;
  limit?: number;
  isNumber?: boolean;
  readOnly?: boolean;
  borderLeft?: boolean;
  size: Size;
  bgColor: string;
  color: string;
  setBgColor?: (color: BgColor) => void;
}) {
  return (
    <>
      <div
        className="px-1 my-1"
        style={{
          ...(borderLeft && { borderLeft: "1px solid gray" }),
          textAlign: "center",
          width: "20%",
          padding: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBlock: "1px",
        }}
      >
        {readOnly ? (
          <span>{val}</span>
        ) : (
          <input
            style={{
              border: "none",
              borderBottom: "1px solid gray",
              fontSize: sizeCalc(size, true),
              outline: "none",
              textAlign: "center",
              width: "100%",
              backgroundColor: bgColor,
              color,
            }}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              let { value } = event.target;

              if (isNumber && value.length > limit) {
                value = value.substring(0, value.length - 1);
              } else if (isNumber && isHavePersianNumber(value)) {
                value = numberToEnglish(value);
              } else if (
                isNumber &&
                isHavePersianLetters_number_Symbols_Motions(value)
              ) {
                value = value.substring(0, value.length - 1);
              } else if (!isNumber && isHaveNumber(value)) {
                value = value.substring(0, value.length - 1);
              } else if (
                isNumber &&
                isHavePersianLetters(value) &&
                value.length > 1
              ) {
                value = value.substring(0, value.length - 1);
                value = numberToEnglish(value);
              } else if (
                !isNumber &&
                isHavePersianLetters(value) &&
                value.length > 1
              ) {
                value = value.substring(0, value.length - 1);
              } else if (
                !isNumber &&
                isHavePersianNumber_Symbols_Motions(value)
              ) {
                value = value.substring(0, value.length - 1);
              } else if (isHaveEnglishLetter(value)) {
                value = value.substring(0, value.length - 1);
              }

              if (value == "ا") {
                value = "الف";
              }
              if (!isNumber && setBgColor) {
                const result = checkColor(value);
                value = result.value;
                setBgColor(result.bgColor);
              }

              event.target.value = value;
            }}
            disabled={readOnly}
          />
        )}
      </div>
    </>
  );
}
