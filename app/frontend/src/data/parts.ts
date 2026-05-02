// Mock car parts inventory - represents typical store data
// In production this would be loaded from the Excel file

export interface CarPart {
  id: string;
  name: string;           // Part name in Albanian
  category: string;       // Category in Albanian
  make: string;           // Car manufacturer
  model: string;          // Car model
  yearFrom: number;
  yearTo: number;
  partNumber: string;
  inStock: boolean;
  quantity: number;
  description?: string;
}

export const categories = [
  "Motor",
  "Frenat",
  "Pezullimi",
  "Elektrike",
  "Transmision",
  "Karoseri",
  "Ftohje",
  "Shkarkim",
  "Ndezje",
  "Filtrim",
  "Rrota & Goma",
  "Interieri",
];

export const makes = [
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Volkswagen",
  "Opel",
  "Ford",
  "Fiat",
  "Peugeot",
  "Renault",
  "Toyota",
  "Nissan",
  "Honda",
  "Hyundai",
  "Kia",
  "Skoda",
  "Citroen",
  "Alfa Romeo",
  "Lancia",
  "Yugo",
  "Lada",
];

export const parts: CarPart[] = [
  { id: "1", name: "Pompë uji", category: "Ftohje", make: "Mercedes-Benz", model: "W123", yearFrom: 1980, yearTo: 1985, partNumber: "MB-PU-123", inStock: true, quantity: 3, description: "Pompë uji origjinale për motor diesel" },
  { id: "2", name: "Disqe frenash përpara", category: "Frenat", make: "BMW", model: "E30", yearFrom: 1982, yearTo: 1994, partNumber: "BM-DF-E30", inStock: true, quantity: 8 },
  { id: "3", name: "Amortizator përpara", category: "Pezullimi", make: "Audi", model: "80", yearFrom: 1986, yearTo: 1995, partNumber: "AU-AM-80F", inStock: true, quantity: 4 },
  { id: "4", name: "Alternator", category: "Elektrike", make: "Volkswagen", model: "Golf Mk2", yearFrom: 1983, yearTo: 1992, partNumber: "VW-AL-G2", inStock: false, quantity: 0 },
  { id: "5", name: "Radiator motor", category: "Ftohje", make: "Opel", model: "Kadett E", yearFrom: 1984, yearTo: 1991, partNumber: "OP-RD-KE", inStock: true, quantity: 2 },
  { id: "6", name: "Kondensator AC", category: "Ftohje", make: "Ford", model: "Escort", yearFrom: 1990, yearTo: 2000, partNumber: "FD-CO-ESC", inStock: true, quantity: 5 },
  { id: "7", name: "Kutia e marsheve", category: "Transmision", make: "Fiat", model: "Punto", yearFrom: 1993, yearTo: 2003, partNumber: "FI-KM-PUN", inStock: true, quantity: 1 },
  { id: "8", name: "Pasqyrë e jashtme", category: "Karoseri", make: "Peugeot", model: "205", yearFrom: 1983, yearTo: 1998, partNumber: "PG-PJ-205", inStock: true, quantity: 6 },
  { id: "9", name: "Starter", category: "Ndezje", make: "Renault", model: "Clio", yearFrom: 1990, yearTo: 1998, partNumber: "RN-ST-CL1", inStock: false, quantity: 0 },
  { id: "10", name: "Filtër ajri", category: "Filtrim", make: "Toyota", model: "Corolla", yearFrom: 1987, yearTo: 1995, partNumber: "TY-FA-COR", inStock: true, quantity: 15 },
  { id: "11", name: "Sensor oksigjeni", category: "Elektrike", make: "Nissan", model: "Primera", yearFrom: 1996, yearTo: 2002, partNumber: "NS-SO-PRI", inStock: true, quantity: 3 },
  { id: "12", name: "Frizion komplet", category: "Transmision", make: "Honda", model: "Civic", yearFrom: 1992, yearTo: 2000, partNumber: "HN-FR-CIV", inStock: true, quantity: 2 },
  { id: "13", name: "Pompë benzine", category: "Motor", make: "Hyundai", model: "Accent", yearFrom: 1995, yearTo: 2005, partNumber: "HY-PB-ACC", inStock: true, quantity: 4 },
  { id: "14", name: "Tub shkarkimi", category: "Shkarkim", make: "Kia", model: "Rio", yearFrom: 2000, yearTo: 2010, partNumber: "KI-TS-RIO", inStock: false, quantity: 0 },
  { id: "15", name: "Disqe frenash prapa", category: "Frenat", make: "Skoda", model: "Octavia", yearFrom: 2004, yearTo: 2013, partNumber: "SK-DP-OCT", inStock: true, quantity: 6 },
  { id: "16", name: "Fanar përpara", category: "Elektrike", make: "Citroen", model: "Xsara", yearFrom: 1997, yearTo: 2006, partNumber: "CT-FP-XSA", inStock: true, quantity: 2 },
  { id: "17", name: "Turbina", category: "Motor", make: "Alfa Romeo", model: "156", yearFrom: 1997, yearTo: 2005, partNumber: "AR-TB-156", inStock: true, quantity: 1 },
  { id: "18", name: "Pjesë karburatori", category: "Motor", make: "Lancia", model: "Delta", yearFrom: 1980, yearTo: 1993, partNumber: "LN-KB-DEL", inStock: true, quantity: 1 },
  { id: "19", name: "Motorrino ndezjeje", category: "Ndezje", make: "Yugo", model: "45", yearFrom: 1980, yearTo: 1990, partNumber: "YG-MN-45", inStock: true, quantity: 2 },
  { id: "20", name: "Ndërrues drite", category: "Elektrike", make: "Lada", model: "Niva", yearFrom: 1980, yearTo: 2010, partNumber: "LD-ND-NIV", inStock: true, quantity: 7 },
  { id: "21", name: "Filtër vaji", category: "Filtrim", make: "Mercedes-Benz", model: "W124", yearFrom: 1985, yearTo: 1995, partNumber: "MB-FV-124", inStock: true, quantity: 20 },
  { id: "22", name: "Pompë vaji", category: "Motor", make: "BMW", model: "E36", yearFrom: 1990, yearTo: 2000, partNumber: "BM-PV-E36", inStock: true, quantity: 2 },
  { id: "23", name: "Injektor benzine", category: "Motor", make: "Audi", model: "A4 B5", yearFrom: 1994, yearTo: 2001, partNumber: "AU-IB-A4B5", inStock: true, quantity: 6 },
  { id: "24", name: "Sensor ABS", category: "Frenat", make: "Volkswagen", model: "Passat B5", yearFrom: 1996, yearTo: 2005, partNumber: "VW-AB-PB5", inStock: false, quantity: 0 },
  { id: "25", name: "Rrip shërbimi", category: "Motor", make: "Opel", model: "Astra H", yearFrom: 2004, yearTo: 2014, partNumber: "OP-RS-ASH", inStock: true, quantity: 10 },
  { id: "26", name: "Goma dimërore 195/65 R15", category: "Rrota & Goma", make: "Universal", model: "Universal", yearFrom: 1995, yearTo: 2026, partNumber: "UN-GD-195", inStock: true, quantity: 12 },
  { id: "27", name: "Bobinë ndezjeje", category: "Ndezje", make: "Ford", model: "Focus Mk2", yearFrom: 2004, yearTo: 2011, partNumber: "FD-BN-FM2", inStock: true, quantity: 4 },
  { id: "28", name: "Radiator ngrohje", category: "Ftohje", make: "Fiat", model: "Uno", yearFrom: 1983, yearTo: 1995, partNumber: "FI-RN-UNO", inStock: true, quantity: 1 },
  { id: "29", name: "Timon komplet", category: "Interieri", make: "Peugeot", model: "306", yearFrom: 1993, yearTo: 2002, partNumber: "PG-TM-306", inStock: false, quantity: 0 },
  { id: "30", name: "Sedilje përpara", category: "Interieri", make: "Renault", model: "Megane 2", yearFrom: 2002, yearTo: 2009, partNumber: "RN-SP-MG2", inStock: true, quantity: 1 },
  { id: "31", name: "Sensor temperature", category: "Elektrike", make: "Toyota", model: "Yaris", yearFrom: 2005, yearTo: 2012, partNumber: "TY-ST-YAR", inStock: true, quantity: 5 },
  { id: "32", name: "Katalizator", category: "Shkarkim", make: "Nissan", model: "Qashqai", yearFrom: 2007, yearTo: 2013, partNumber: "NS-KT-QAS", inStock: true, quantity: 2 },
  { id: "33", name: "Pjesë motor komplet", category: "Motor", make: "Honda", model: "Accord", yearFrom: 2003, yearTo: 2008, partNumber: "HN-PM-ACC", inStock: false, quantity: 0 },
  { id: "34", name: "Barra timoni", category: "Pezullimi", make: "Hyundai", model: "i30", yearFrom: 2007, yearTo: 2012, partNumber: "HY-BT-I30", inStock: true, quantity: 3 },
  { id: "35", name: "Pluhura frenash", category: "Frenat", make: "Kia", model: "Ceed", yearFrom: 2007, yearTo: 2012, partNumber: "KI-PF-CED", inStock: true, quantity: 8 },
  { id: "36", name: "Dritare elektrike", category: "Elektrike", make: "Skoda", model: "Fabia", yearFrom: 2000, yearTo: 2007, partNumber: "SK-DE-FAB", inStock: true, quantity: 2 },
  { id: "37", name: "Pjesë transmisioni", category: "Transmision", make: "Mercedes-Benz", model: "W211", yearFrom: 2002, yearTo: 2009, partNumber: "MB-PT-211", inStock: true, quantity: 1 },
  { id: "38", name: "Xham i përparmë", category: "Karoseri", make: "BMW", model: "Seria 3 E90", yearFrom: 2005, yearTo: 2012, partNumber: "BM-XP-E90", inStock: false, quantity: 0 },
  { id: "39", name: "Sensor park", category: "Elektrike", make: "Audi", model: "A6 C6", yearFrom: 2004, yearTo: 2011, partNumber: "AU-SP-A6C6", inStock: true, quantity: 4 },
  { id: "40", name: "Kompresor AC", category: "Ftohje", make: "Volkswagen", model: "Touareg", yearFrom: 2010, yearTo: 2018, partNumber: "VW-KAC-TOU", inStock: true, quantity: 1 },
  { id: "41", name: "Ecu moduli", category: "Elektrike", make: "Ford", model: "Mondeo", yearFrom: 2014, yearTo: 2020, partNumber: "FD-EC-MON", inStock: true, quantity: 1 },
  { id: "42", name: "LED fanar", category: "Elektrike", make: "Mercedes-Benz", model: "E-Class W213", yearFrom: 2016, yearTo: 2024, partNumber: "MB-LD-W213", inStock: true, quantity: 2 },
  { id: "43", name: "Bateria 70Ah", category: "Elektrike", make: "Universal", model: "Universal", yearFrom: 2000, yearTo: 2026, partNumber: "UN-BT-70", inStock: true, quantity: 14 },
  { id: "44", name: "Disk & kunja frenash", category: "Frenat", make: "Toyota", model: "RAV4", yearFrom: 2019, yearTo: 2026, partNumber: "TY-DK-RV4", inStock: true, quantity: 6 },
  { id: "45", name: "Sensor kamerë prapavijë", category: "Elektrike", make: "Hyundai", model: "Tucson", yearFrom: 2020, yearTo: 2026, partNumber: "HY-KP-TUC", inStock: false, quantity: 0 },
  { id: "46", name: "Filtër karburanti", category: "Filtrim", make: "Peugeot", model: "3008", yearFrom: 2016, yearTo: 2023, partNumber: "PG-FK-3008", inStock: true, quantity: 7 },
  { id: "47", name: "Rrotë 17\" alumini", category: "Rrota & Goma", make: "BMW", model: "Seria 5 G30", yearFrom: 2017, yearTo: 2024, partNumber: "BM-R17-G30", inStock: true, quantity: 4 },
  { id: "48", name: "Pasqyrë me ngrohje", category: "Karoseri", make: "Audi", model: "Q5", yearFrom: 2017, yearTo: 2024, partNumber: "AU-PN-Q5", inStock: true, quantity: 2 },
  { id: "49", name: "Moduli hibrid", category: "Motor", make: "Toyota", model: "Prius", yearFrom: 2016, yearTo: 2022, partNumber: "TY-MH-PRI", inStock: false, quantity: 0 },
  { id: "50", name: "Sistem navigimi", category: "Elektrike", make: "Volkswagen", model: "Golf 8", yearFrom: 2020, yearTo: 2026, partNumber: "VW-NV-G8", inStock: true, quantity: 1 },
];