import { ChangeEvent } from "react";
import {
  isHaveEnglishLetter,
  isHaveNumber,
  isHavePersianLetters,
  isHavePersianNumber,
  isHavePersianLetters_number_Symbols_Motions,
  isHavePersianNumber_Symbols_Motions,
  numberToEnglish,
} from "./dataValid";

type Size = "sm" | "md" | "lg" | "xl";

export default function PlateNumber({
  twoDigit,
  letter,
  threeDigit,
  cityDigit,
  readOnly,
  size = "md",
}: {
  twoDigit?: string;
  letter?: string;
  threeDigit?: string;
  cityDigit?: string;
  readOnly?: boolean;
  size?: Size;
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: SizeCalc(size),
          border: "1px solid gray",
          borderRadius: "4px",
        }}
      >
        <PlateNumberInput
          val={cityDigit}
          limit={2}
          isNumber
          borderLeft
          readOnly={readOnly}
          size={size}
        />
        <PlateNumberInput
          val={threeDigit}
          limit={3}
          isNumber
          readOnly={readOnly}
          size={size}
        />
        <PlateNumberInput val={letter} readOnly={readOnly} size={size} />
        <PlateNumberInput
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
            fontSize: SizeCalc(size, true),
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
}: {
  val: string | undefined;
  limit?: number;
  isNumber?: boolean;
  readOnly?: boolean;
  borderLeft?: boolean;
  size: Size;
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
              fontSize: SizeCalc(size, true),
              outline: "none",
              textAlign: "center",
              width: "100%",
            }}
            onChange={(event: ChangeEvent) => {
              let { value }: { value: string } = event.target;

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

              event.target.value = value;
            }}
            disabled={readOnly}
          />
        )}
      </div>
    </>
  );
}

const SizeCalc = (size: Size, isFont?: boolean) => {
  switch (size) {
    case "sm":
      return isFont ? "10px" : "150px";
    case "md":
      return isFont ? "13px" : "200px";
    case "lg":
      return isFont ? "17px" : "250px";
    case "xl":
      return isFont ? "22px" : "350px";
    default:
      break;
  }
};
