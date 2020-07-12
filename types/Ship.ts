interface IShip {
  name: string
  price: number
  cargo_capacity: number
  classification: IClassification
  ship_develop_status: IStatus
  company: ICompany
}

interface IClassification {
  shiptype: string
}

interface IStatus {
  value: string
}

interface ICompany {
  name: string
  short_name: string
}

export type { IShip, IClassification, IStatus, ICompany }

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
