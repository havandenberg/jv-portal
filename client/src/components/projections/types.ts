import { Maybe, Entry, Product, Vessel } from 'types';

export type VesselUpdate = Pick<
  Vessel,
  | 'id'
  | 'vesselName'
  | 'departureDate'
  | 'arrivalDate'
  | 'arrivalPort'
  | 'vesselStatus'
>;
export type ProductUpdate = Pick<
  Product,
  'id' | 'species' | 'variety' | 'size' | 'packType' | 'plu'
>;
export type EntryUpdate = Pick<Entry, 'id' | 'palletCount'>;
export type UpdateType = VesselUpdate | ProductUpdate | EntryUpdate;

export type NewVessel = Pick<
  Vessel,
  | 'id'
  | 'vesselName'
  | 'departureDate'
  | 'arrivalDate'
  | 'arrivalPort'
  | 'vesselStatus'
  | 'entries'
>;
export type NewProduct = Pick<
  Product,
  'id' | 'species' | 'variety' | 'size' | 'packType' | 'plu' | 'shipperId'
>;
export type NewEntry = Pick<
  Entry,
  'id' | 'palletCount' | 'productId' | 'vesselId'
>;

export interface ShipperProjectionChanges {
  vesselUpdates: VesselUpdate[];
  productUpdates: ProductUpdate[];
  entryUpdates: EntryUpdate[];
  newVessels: NewVessel[];
  newProducts: NewProduct[];
  newEntries: NewEntry[];
}

export interface NewItemNextIds {
  vessel: number;
  product: number;
  entry: number;
}

export interface ShipperProjectionState {
  changes: ShipperProjectionChanges;
  newItemNextIds: NewItemNextIds;
  removedProductIds: number[];
  skippedWeeks: string[];
}

export interface ShipperProjectionProps {
  changeHandlers: {
    handleVesselChange: (update: VesselUpdate) => void;
    handleEntryChange: (update: EntryUpdate) => void;
    handleProductChange: (update: ProductUpdate) => void;
  };
  newItemHandlers: {
    handleNewVessel: (newVessel: NewVessel) => void;
    handleNewProduct: (newProduct: NewProduct) => void;
  };
  removeItemHandlers: {
    handleRemoveNewVessel: (id: number) => void;
    handleRemoveProduct: (id: number) => void;
  };
  valueGetters: {
    getVesselValue: (
      vessel: Maybe<Vessel> | undefined,
      key: keyof VesselUpdate,
    ) => { dirty: boolean; value: string };
    getProductValue: (
      product: Maybe<Product> | undefined,
      key: keyof ProductUpdate,
    ) => { dirty: boolean; value: string };
    getEntryValue: (
      entry: Maybe<Entry> | undefined,
      key: keyof EntryUpdate,
      defaultValue?: string,
    ) => { dirty: boolean; value: string };
  };
}

export type ShipperProjectionProductWithEntries = Product & {
  entries: Entry[];
};
