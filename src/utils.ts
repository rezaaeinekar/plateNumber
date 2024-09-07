import { BgColor, Size } from "./type";

export const sizeCalc = (size: Size, isFont?: boolean) => {
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

export const checkColor = (value: string) => {
    const result: { value: string; bgColor: BgColor } = {
        value,
        bgColor: "white",
    };
    if (value == "الف") {
        result.bgColor = "red";
    } else if (value == "ت" || value == "ع" || value == "ک") {
        result.bgColor = "yellow";
    } else if (value == "پ" || value == "ث") {
        result.bgColor = "green";
    } else if (value == "ش" || value == "ز" || value == "ف") {
        result.bgColor = "lightblue";
    }

    return result;
};
