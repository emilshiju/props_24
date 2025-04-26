


interface FilterOption  {
    value: string;
    label: string;
    checked: boolean;
  };
  
  
  interface FilterSection_Type {
    id: string;
    name: string;
    options: FilterOption[];
  };
  
  // Represents the whole filter array
//   type SideBarFilter = FilterSection[];