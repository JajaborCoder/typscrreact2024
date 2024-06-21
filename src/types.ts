// src/types.ts
export interface Country {
    name: {
      common: string;
      official: string;
    };
    currencies: {
      [key: string]: {
        name: string;
        symbol: string;
      };
    };
    flags: {
      png: string;
      svg: string;
    };
    region: string;
    subregion: string;
    population: number;
    capital: string[];
    languages: {
      [key: string]: string;
    };
  }
  