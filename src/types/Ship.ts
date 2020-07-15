interface Ship {
  name: string;
  price: number;
  cargo_capacity: number;
  classification: Classification;
  ship_develop_status: Status;
  company: Company;
}

interface Classification {
  shiptype: string;
}

interface Status {
  value: string;
}

interface Company {
  name: string;
  short_name: string;
}

export type { Ship, Classification, Status, Company };

/*
company {
      name
      short_name
    }
    classification {
      shiptype
    }
    cargo_capacity
    develop_status {
      value
    }
    */
