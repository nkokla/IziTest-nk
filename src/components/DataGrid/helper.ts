export type headersDataType = { name: string; label: string };

export type filterType = {
  modal: string;
  query: string;
  key: string;
  sort: "date" | "az" | "za";
};

export const initialFilter: filterType = {
  modal: "",
  key: "",
  query: "",
  sort: "date",
};

export const filterReducer = (state: any, action: any): filterType => {
  switch (action.type) {
    case "open-modal":
      return { ...state, modal: action.modal };
    case "close-modal":
      return { ...state, modal: "" };
    case "set-key": {
      const { modal, ...resetFilter } = initialFilter;
      return {
        ...state,
        ...(action.reset ? resetFilter : {}),
        key: action.key,
      };
    }
    case "set-query":
      return { ...state, query: action.query };
    case "set-sort":
      return { ...state, sort: action.sort };
    default:
      throw new Error();
  }
};

const sortFunc: any = {
  az: (valA: string, valB: string) => {
    if (valA < valB) return -1;
    if (valA > valB) return 1;
    return 0;
  },
  za: (valA: string, valB: string) => {
    if (valB < valA) return -1;
    if (valB > valA) return 1;
    return 0;
  },
  date: (valA: string, valB: string) => {
    const dateA: Date = new Date(valA);
    const dateB: Date = new Date(valB);
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    return 0;
  },
};

export const sorter = (key: string, type: string) => (a: any, b: any) => {
  const valA: string = a?.[key];
  const valB: string = b?.[key];
  return sortFunc?.[type]?.(valA, valB);
};
