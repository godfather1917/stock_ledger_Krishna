export const stageHeaders = [
  "PRIMARY_ACCOUNT",
  "SET_OF_BOOKS_ID", 
  "SEGMENT1",
  "SEGMENT2",
  "SEGMENT3",
  "SEGMENT4",
  "SEGMENT5",
  "SEGMENT6",
  "SEGMENT7",
  "CURRENCY",
  "CREATE_ID",
  "CREATE_DATETIME",
  ];
  
  export function isHeadersEqual(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }
  