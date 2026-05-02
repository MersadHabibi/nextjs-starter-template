export const convertToEnglishNumbers = (str: string) => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let result = str.toString();

  for (let i = 0; i < 10; i++) {
    const regex = new RegExp(persianNumbers[i] + "|" + arabicNumbers[i], "g");
    result = result.replace(regex, englishNumbers[i]);
  }

  return result;
};

// Helper function to format number with thousand separators
export const formatNumber = (value: string) => {
  // Remove any non-digit characters except decimal point
  const cleanValue = value.replace(/[^\d.]/g, "");

  // Split number into integer and decimal parts
  const [integerPart, decimalPart] = cleanValue.split(".");

  // Add thousand separators to integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Return formatted number with decimal part if it exists
  return decimalPart !== undefined
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;
};

export const isOnlyNumbers = (str: string): boolean => {
  return /^\d+$/.test(str);
};

// Helper function to remove formatting
export const unFormatNumber = (value: string) => {
  return value?.replace(/,/g, "");
};
