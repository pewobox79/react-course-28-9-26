import { createContext } from "react";
export const ThemeContext = createContext<{ context: string; setContext: React.Dispatch<React.SetStateAction<string>>   ; }>({context:"", setContext: ()=>{}});