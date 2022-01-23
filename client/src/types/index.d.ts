export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any;
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The day, does not include a time. */
  Date: any;
};

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigFloat']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigFloat']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigFloat']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigFloat']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigFloat']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigFloat']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigFloat']>>;
};

/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigInt']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigInt']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigInt']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigInt']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigInt']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigInt']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigInt']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigInt']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** All input for the `bulkDeleteEntry` mutation. */
export type BulkDeleteEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  idsToDelete: Array<InputMaybe<Scalars['BigInt']>>;
};

/** The output of our `bulkDeleteEntry` mutation. */
export type BulkDeleteEntryPayload = {
  __typename?: 'BulkDeleteEntryPayload';
  bigInts?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `bulkDeleteProduct` mutation. */
export type BulkDeleteProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  idsToDelete: Array<InputMaybe<Scalars['BigInt']>>;
};

/** The output of our `bulkDeleteProduct` mutation. */
export type BulkDeleteProductPayload = {
  __typename?: 'BulkDeleteProductPayload';
  bigInts?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `bulkUpsertEntry` mutation. */
export type BulkUpsertEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  entries: Array<InputMaybe<EntryInput>>;
};

/** The output of our `bulkUpsertEntry` mutation. */
export type BulkUpsertEntryPayload = {
  __typename?: 'BulkUpsertEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  entries?: Maybe<Array<Maybe<Entry>>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `bulkUpsertProduct` mutation. */
export type BulkUpsertProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  products: Array<InputMaybe<ProductInput>>;
};

/** The output of our `bulkUpsertProduct` mutation. */
export type BulkUpsertProductPayload = {
  __typename?: 'BulkUpsertProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Product>>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `bulkUpsertVessel` mutation. */
export type BulkUpsertVesselInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  vessels: Array<InputMaybe<VesselInput>>;
};

/** The output of our `bulkUpsertVessel` mutation. */
export type BulkUpsertVesselPayload = {
  __typename?: 'BulkUpsertVesselPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  vessels?: Maybe<Array<Maybe<Vessel>>>;
};

/** All input for the create `Entry` mutation. */
export type CreateEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Entry` to be created by this mutation. */
  entry: EntryInput;
};

/** The output of our create `Entry` mutation. */
export type CreateEntryPayload = {
  __typename?: 'CreateEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Entry` that was created by this mutation. */
  entry?: Maybe<Entry>;
  /** An edge for our `Entry`. May be used by Relay 1. */
  entryEdge?: Maybe<EntriesEdge>;
  /** Reads a single `Product` that is related to this `Entry`. */
  product?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vessel` that is related to this `Entry`. */
  vessel?: Maybe<Vessel>;
};


/** The output of our create `Entry` mutation. */
export type CreateEntryPayloadEntryEdgeArgs = {
  orderBy?: InputMaybe<Array<EntriesOrderBy>>;
};

/** All input for the create `Product` mutation. */
export type CreateProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Product` to be created by this mutation. */
  product: ProductInput;
};

/** The output of our create `Product` mutation. */
export type CreateProductPayload = {
  __typename?: 'CreateProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Product` that was created by this mutation. */
  product?: Maybe<Product>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Shipper` that is related to this `Product`. */
  shipper?: Maybe<Shipper>;
};


/** The output of our create `Product` mutation. */
export type CreateProductPayloadProductEdgeArgs = {
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** All input for the create `Shipper` mutation. */
export type CreateShipperInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Shipper` to be created by this mutation. */
  shipper: ShipperInput;
};

/** The output of our create `Shipper` mutation. */
export type CreateShipperPayload = {
  __typename?: 'CreateShipperPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Shipper` that was created by this mutation. */
  shipper?: Maybe<Shipper>;
  /** An edge for our `Shipper`. May be used by Relay 1. */
  shipperEdge?: Maybe<ShippersEdge>;
};


/** The output of our create `Shipper` mutation. */
export type CreateShipperPayloadShipperEdgeArgs = {
  orderBy?: InputMaybe<Array<ShippersOrderBy>>;
};

/** All input for the create `Vessel` mutation. */
export type CreateVesselInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Vessel` to be created by this mutation. */
  vessel: VesselInput;
};

/** The output of our create `Vessel` mutation. */
export type CreateVesselPayload = {
  __typename?: 'CreateVesselPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Shipper` that is related to this `Vessel`. */
  shipper?: Maybe<Shipper>;
  /** The `Vessel` that was created by this mutation. */
  vessel?: Maybe<Vessel>;
  /** An edge for our `Vessel`. May be used by Relay 1. */
  vesselEdge?: Maybe<VesselsEdge>;
};


/** The output of our create `Vessel` mutation. */
export type CreateVesselPayloadVesselEdgeArgs = {
  orderBy?: InputMaybe<Array<VesselsOrderBy>>;
};

/** A filter to be used against Date fields. All fields are combined with a logical ‘and.’ */
export type DateFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Date']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Date']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Date']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Date']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Date']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Date']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Date']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Date']>>;
};

/** All input for the `deleteEntryByNodeId` mutation. */
export type DeleteEntryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Entry` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteEntry` mutation. */
export type DeleteEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
};

/** The output of our delete `Entry` mutation. */
export type DeleteEntryPayload = {
  __typename?: 'DeleteEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedEntryNodeId?: Maybe<Scalars['ID']>;
  /** The `Entry` that was deleted by this mutation. */
  entry?: Maybe<Entry>;
  /** An edge for our `Entry`. May be used by Relay 1. */
  entryEdge?: Maybe<EntriesEdge>;
  /** Reads a single `Product` that is related to this `Entry`. */
  product?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vessel` that is related to this `Entry`. */
  vessel?: Maybe<Vessel>;
};


/** The output of our delete `Entry` mutation. */
export type DeleteEntryPayloadEntryEdgeArgs = {
  orderBy?: InputMaybe<Array<EntriesOrderBy>>;
};

/** All input for the `deleteProductByNodeId` mutation. */
export type DeleteProductByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Product` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteProduct` mutation. */
export type DeleteProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
};

/** The output of our delete `Product` mutation. */
export type DeleteProductPayload = {
  __typename?: 'DeleteProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedProductNodeId?: Maybe<Scalars['ID']>;
  /** The `Product` that was deleted by this mutation. */
  product?: Maybe<Product>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Shipper` that is related to this `Product`. */
  shipper?: Maybe<Shipper>;
};


/** The output of our delete `Product` mutation. */
export type DeleteProductPayloadProductEdgeArgs = {
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** All input for the `deleteShipperByNodeId` mutation. */
export type DeleteShipperByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Shipper` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteShipper` mutation. */
export type DeleteShipperInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};

/** The output of our delete `Shipper` mutation. */
export type DeleteShipperPayload = {
  __typename?: 'DeleteShipperPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedShipperNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Shipper` that was deleted by this mutation. */
  shipper?: Maybe<Shipper>;
  /** An edge for our `Shipper`. May be used by Relay 1. */
  shipperEdge?: Maybe<ShippersEdge>;
};


/** The output of our delete `Shipper` mutation. */
export type DeleteShipperPayloadShipperEdgeArgs = {
  orderBy?: InputMaybe<Array<ShippersOrderBy>>;
};

/** All input for the `deleteVesselByNodeId` mutation. */
export type DeleteVesselByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Vessel` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteVessel` mutation. */
export type DeleteVesselInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
};

/** The output of our delete `Vessel` mutation. */
export type DeleteVesselPayload = {
  __typename?: 'DeleteVesselPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedVesselNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Shipper` that is related to this `Vessel`. */
  shipper?: Maybe<Shipper>;
  /** The `Vessel` that was deleted by this mutation. */
  vessel?: Maybe<Vessel>;
  /** An edge for our `Vessel`. May be used by Relay 1. */
  vesselEdge?: Maybe<VesselsEdge>;
};


/** The output of our delete `Vessel` mutation. */
export type DeleteVesselPayloadVesselEdgeArgs = {
  orderBy?: InputMaybe<Array<VesselsOrderBy>>;
};

/** A connection to a list of `Entry` values. */
export type EntriesConnection = {
  __typename?: 'EntriesConnection';
  /** A list of edges which contains the `Entry` and cursor to aid in pagination. */
  edges: Array<EntriesEdge>;
  /** A list of `Entry` objects. */
  nodes: Array<Maybe<Entry>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Entry` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Entry` edge in the connection. */
export type EntriesEdge = {
  __typename?: 'EntriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Entry` at the end of the edge. */
  node?: Maybe<Entry>;
};

/** Methods to use when ordering `Entry`. */
export enum EntriesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PalletCountAsc = 'PALLET_COUNT_ASC',
  PalletCountDesc = 'PALLET_COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProductIdAsc = 'PRODUCT_ID_ASC',
  ProductIdDesc = 'PRODUCT_ID_DESC',
  VesselIdAsc = 'VESSEL_ID_ASC',
  VesselIdDesc = 'VESSEL_ID_DESC'
}

export type Entry = Node & {
  __typename?: 'Entry';
  id: Scalars['BigInt'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  palletCount?: Maybe<Scalars['BigFloat']>;
  /** Reads a single `Product` that is related to this `Entry`. */
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['BigInt']>;
  /** Reads a single `Vessel` that is related to this `Entry`. */
  vessel?: Maybe<Vessel>;
  vesselId?: Maybe<Scalars['BigInt']>;
};

/** A condition to be used against `Entry` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EntryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `palletCount` field. */
  palletCount?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `productId` field. */
  productId?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `vesselId` field. */
  vesselId?: InputMaybe<Scalars['BigInt']>;
};

/** The fields on `entry` to look up the row to connect. */
export type EntryEntryPkeyConnect = {
  id: Scalars['BigInt'];
};

/** The fields on `entry` to look up the row to delete. */
export type EntryEntryPkeyDelete = {
  id: Scalars['BigInt'];
};

/** A filter to be used against `Entry` object types. All fields are combined with a logical ‘and.’ */
export type EntryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<EntryFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<BigIntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<EntryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<EntryFilter>>;
  /** Filter by the object’s `palletCount` field. */
  palletCount?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `product` relation. */
  product?: InputMaybe<ProductFilter>;
  /** A related `product` exists. */
  productExists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `productId` field. */
  productId?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `vessel` relation. */
  vessel?: InputMaybe<VesselFilter>;
  /** A related `vessel` exists. */
  vesselExists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `vesselId` field. */
  vesselId?: InputMaybe<BigIntFilter>;
};

/** An input for mutations affecting `Entry` */
export type EntryInput = {
  id?: InputMaybe<Scalars['BigInt']>;
  palletCount?: InputMaybe<Scalars['BigFloat']>;
  productId?: InputMaybe<Scalars['BigInt']>;
  productToProductId?: InputMaybe<EntryProductIdFkeyInput>;
  vesselId?: InputMaybe<Scalars['BigInt']>;
  vesselToVesselId?: InputMaybe<EntryVesselIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type EntryNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `entry` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type EntryNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `entry` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type EntryOnEntryForEntryProductIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `product` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `product` being updated. */
  patch: ProductPatch;
};

/** The fields on `entry` to look up the row to update. */
export type EntryOnEntryForEntryProductIdFkeyUsingEntryPkeyUpdate = {
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `entry` being updated. */
  patch: UpdateEntryOnEntryForEntryProductIdFkeyPatch;
};

/** The globally unique `ID` look up for the row to update. */
export type EntryOnEntryForEntryVesselIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `vessel` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `vessel` being updated. */
  patch: VesselPatch;
};

/** The fields on `entry` to look up the row to update. */
export type EntryOnEntryForEntryVesselIdFkeyUsingEntryPkeyUpdate = {
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `entry` being updated. */
  patch: UpdateEntryOnEntryForEntryVesselIdFkeyPatch;
};

/** Represents an update to a `Entry`. Fields that are set will be updated. */
export type EntryPatch = {
  id?: InputMaybe<Scalars['BigInt']>;
  palletCount?: InputMaybe<Scalars['BigFloat']>;
  productId?: InputMaybe<Scalars['BigInt']>;
  productToProductId?: InputMaybe<EntryProductIdFkeyInput>;
  vesselId?: InputMaybe<Scalars['BigInt']>;
  vesselToVesselId?: InputMaybe<EntryVesselIdFkeyInput>;
};

/** The `entry` to be created by this mutation. */
export type EntryProductIdFkeyEntryCreateInput = {
  id?: InputMaybe<Scalars['BigInt']>;
  palletCount?: InputMaybe<Scalars['BigFloat']>;
  productToProductId?: InputMaybe<EntryProductIdFkeyInput>;
  vesselId?: InputMaybe<Scalars['BigInt']>;
  vesselToVesselId?: InputMaybe<EntryVesselIdFkeyInput>;
};

/** Input for the nested mutation of `product` in the `EntryInput` mutation. */
export type EntryProductIdFkeyInput = {
  /** The primary key(s) for `product` for the far side of the relationship. */
  connectById?: InputMaybe<ProductProductPkeyConnect>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<ProductNodeIdConnect>;
  /** A `ProductInput` object that will be created and connected to this object. */
  create?: InputMaybe<EntryProductIdFkeyProductCreateInput>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  deleteById?: InputMaybe<ProductProductPkeyDelete>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<ProductNodeIdDelete>;
  /** The primary key(s) and patch data for `product` for the far side of the relationship. */
  updateById?: InputMaybe<ProductOnEntryForEntryProductIdFkeyUsingProductPkeyUpdate>;
  /** The primary key(s) and patch data for `product` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<EntryOnEntryForEntryProductIdFkeyNodeIdUpdate>;
};

/** Input for the nested mutation of `entry` in the `ProductInput` mutation. */
export type EntryProductIdFkeyInverseInput = {
  /** The primary key(s) for `entry` for the far side of the relationship. */
  connectById?: InputMaybe<Array<EntryEntryPkeyConnect>>;
  /** The primary key(s) for `entry` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<Array<EntryNodeIdConnect>>;
  /** A `EntryInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<EntryProductIdFkeyEntryCreateInput>>;
  /** The primary key(s) for `entry` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<EntryEntryPkeyDelete>>;
  /** The primary key(s) for `entry` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<Array<EntryNodeIdDelete>>;
  /** Flag indicating whether all other `entry` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']>;
  /** The primary key(s) and patch data for `entry` for the far side of the relationship. */
  updateById?: InputMaybe<Array<EntryOnEntryForEntryProductIdFkeyUsingEntryPkeyUpdate>>;
  /** The primary key(s) and patch data for `entry` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<Array<ProductOnEntryForEntryProductIdFkeyNodeIdUpdate>>;
};

/** The `product` to be created by this mutation. */
export type EntryProductIdFkeyProductCreateInput = {
  entriesUsingId?: InputMaybe<EntryProductIdFkeyInverseInput>;
  id?: InputMaybe<Scalars['BigInt']>;
  packType?: InputMaybe<Scalars['String']>;
  plu?: InputMaybe<Scalars['String']>;
  shipperId?: InputMaybe<Scalars['String']>;
  shipperToShipperId?: InputMaybe<ProductShipperIdFkeyInput>;
  size?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  variety?: InputMaybe<Scalars['String']>;
};

/** The `entry` to be created by this mutation. */
export type EntryVesselIdFkeyEntryCreateInput = {
  id?: InputMaybe<Scalars['BigInt']>;
  palletCount?: InputMaybe<Scalars['BigFloat']>;
  productId?: InputMaybe<Scalars['BigInt']>;
  productToProductId?: InputMaybe<EntryProductIdFkeyInput>;
  vesselToVesselId?: InputMaybe<EntryVesselIdFkeyInput>;
};

/** Input for the nested mutation of `vessel` in the `EntryInput` mutation. */
export type EntryVesselIdFkeyInput = {
  /** The primary key(s) for `vessel` for the far side of the relationship. */
  connectById?: InputMaybe<VesselVesselPkeyConnect>;
  /** The primary key(s) for `vessel` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<VesselNodeIdConnect>;
  /** A `VesselInput` object that will be created and connected to this object. */
  create?: InputMaybe<EntryVesselIdFkeyVesselCreateInput>;
  /** The primary key(s) for `vessel` for the far side of the relationship. */
  deleteById?: InputMaybe<VesselVesselPkeyDelete>;
  /** The primary key(s) for `vessel` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<VesselNodeIdDelete>;
  /** The primary key(s) and patch data for `vessel` for the far side of the relationship. */
  updateById?: InputMaybe<VesselOnEntryForEntryVesselIdFkeyUsingVesselPkeyUpdate>;
  /** The primary key(s) and patch data for `vessel` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<EntryOnEntryForEntryVesselIdFkeyNodeIdUpdate>;
};

/** Input for the nested mutation of `entry` in the `VesselInput` mutation. */
export type EntryVesselIdFkeyInverseInput = {
  /** The primary key(s) for `entry` for the far side of the relationship. */
  connectById?: InputMaybe<Array<EntryEntryPkeyConnect>>;
  /** The primary key(s) for `entry` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<Array<EntryNodeIdConnect>>;
  /** A `EntryInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<EntryVesselIdFkeyEntryCreateInput>>;
  /** The primary key(s) for `entry` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<EntryEntryPkeyDelete>>;
  /** The primary key(s) for `entry` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<Array<EntryNodeIdDelete>>;
  /** Flag indicating whether all other `entry` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']>;
  /** The primary key(s) and patch data for `entry` for the far side of the relationship. */
  updateById?: InputMaybe<Array<EntryOnEntryForEntryVesselIdFkeyUsingEntryPkeyUpdate>>;
  /** The primary key(s) and patch data for `entry` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<Array<VesselOnEntryForEntryVesselIdFkeyNodeIdUpdate>>;
};

/** The `vessel` to be created by this mutation. */
export type EntryVesselIdFkeyVesselCreateInput = {
  arrivalDate?: InputMaybe<Scalars['Date']>;
  arrivalPort?: InputMaybe<Scalars['String']>;
  departureDate?: InputMaybe<Scalars['Date']>;
  entriesUsingId?: InputMaybe<EntryVesselIdFkeyInverseInput>;
  id?: InputMaybe<Scalars['BigInt']>;
  isReviewed?: InputMaybe<Scalars['Boolean']>;
  previousName?: InputMaybe<Scalars['String']>;
  shipperId?: InputMaybe<Scalars['String']>;
  shipperToShipperId?: InputMaybe<VesselShipperIdFkeyInput>;
  vesselName?: InputMaybe<Scalars['String']>;
  vesselStatus?: InputMaybe<Scalars['String']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  bulkDeleteEntry?: Maybe<BulkDeleteEntryPayload>;
  bulkDeleteProduct?: Maybe<BulkDeleteProductPayload>;
  bulkUpsertEntry?: Maybe<BulkUpsertEntryPayload>;
  bulkUpsertProduct?: Maybe<BulkUpsertProductPayload>;
  bulkUpsertVessel?: Maybe<BulkUpsertVesselPayload>;
  /** Creates a single `Entry`. */
  createEntry?: Maybe<CreateEntryPayload>;
  /** Creates a single `Product`. */
  createProduct?: Maybe<CreateProductPayload>;
  /** Creates a single `Shipper`. */
  createShipper?: Maybe<CreateShipperPayload>;
  /** Creates a single `Vessel`. */
  createVessel?: Maybe<CreateVesselPayload>;
  /** Deletes a single `Entry` using a unique key. */
  deleteEntry?: Maybe<DeleteEntryPayload>;
  /** Deletes a single `Entry` using its globally unique id. */
  deleteEntryByNodeId?: Maybe<DeleteEntryPayload>;
  /** Deletes a single `Product` using a unique key. */
  deleteProduct?: Maybe<DeleteProductPayload>;
  /** Deletes a single `Product` using its globally unique id. */
  deleteProductByNodeId?: Maybe<DeleteProductPayload>;
  /** Deletes a single `Shipper` using a unique key. */
  deleteShipper?: Maybe<DeleteShipperPayload>;
  /** Deletes a single `Shipper` using its globally unique id. */
  deleteShipperByNodeId?: Maybe<DeleteShipperPayload>;
  /** Deletes a single `Vessel` using a unique key. */
  deleteVessel?: Maybe<DeleteVesselPayload>;
  /** Deletes a single `Vessel` using its globally unique id. */
  deleteVesselByNodeId?: Maybe<DeleteVesselPayload>;
  /** Updates a single `Entry` using a unique key and a patch. */
  updateEntry?: Maybe<UpdateEntryPayload>;
  /** Updates a single `Entry` using its globally unique id and a patch. */
  updateEntryByNodeId?: Maybe<UpdateEntryPayload>;
  /** Updates a single `Product` using a unique key and a patch. */
  updateProduct?: Maybe<UpdateProductPayload>;
  /** Updates a single `Product` using its globally unique id and a patch. */
  updateProductByNodeId?: Maybe<UpdateProductPayload>;
  /** Updates a single `Shipper` using a unique key and a patch. */
  updateShipper?: Maybe<UpdateShipperPayload>;
  /** Updates a single `Shipper` using its globally unique id and a patch. */
  updateShipperByNodeId?: Maybe<UpdateShipperPayload>;
  /** Updates a single `Vessel` using a unique key and a patch. */
  updateVessel?: Maybe<UpdateVesselPayload>;
  /** Updates a single `Vessel` using its globally unique id and a patch. */
  updateVesselByNodeId?: Maybe<UpdateVesselPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationBulkDeleteEntryArgs = {
  input: BulkDeleteEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationBulkDeleteProductArgs = {
  input: BulkDeleteProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationBulkUpsertEntryArgs = {
  input: BulkUpsertEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationBulkUpsertProductArgs = {
  input: BulkUpsertProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationBulkUpsertVesselArgs = {
  input: BulkUpsertVesselInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEntryArgs = {
  input: CreateEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateShipperArgs = {
  input: CreateShipperInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateVesselArgs = {
  input: CreateVesselInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEntryArgs = {
  input: DeleteEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEntryByNodeIdArgs = {
  input: DeleteEntryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProductArgs = {
  input: DeleteProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProductByNodeIdArgs = {
  input: DeleteProductByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteShipperArgs = {
  input: DeleteShipperInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteShipperByNodeIdArgs = {
  input: DeleteShipperByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVesselArgs = {
  input: DeleteVesselInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVesselByNodeIdArgs = {
  input: DeleteVesselByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEntryArgs = {
  input: UpdateEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEntryByNodeIdArgs = {
  input: UpdateEntryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProductByNodeIdArgs = {
  input: UpdateProductByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateShipperArgs = {
  input: UpdateShipperInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateShipperByNodeIdArgs = {
  input: UpdateShipperByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVesselArgs = {
  input: UpdateVesselInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVesselByNodeIdArgs = {
  input: UpdateVesselByNodeIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Product = Node & {
  __typename?: 'Product';
  /** Reads and enables pagination through a set of `Entry`. */
  entries: EntriesConnection;
  id: Scalars['BigInt'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  packType?: Maybe<Scalars['String']>;
  plu?: Maybe<Scalars['String']>;
  /** Reads a single `Shipper` that is related to this `Product`. */
  shipper?: Maybe<Shipper>;
  shipperId?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  variety?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Vessel`. */
  vesselsByEntryProductIdAndVesselId: ProductVesselsByEntryProductIdAndVesselIdManyToManyConnection;
};


export type ProductEntriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<EntryCondition>;
  filter?: InputMaybe<EntryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntriesOrderBy>>;
};


export type ProductVesselsByEntryProductIdAndVesselIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<VesselCondition>;
  filter?: InputMaybe<VesselFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VesselsOrderBy>>;
};

/** A condition to be used against `Product` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProductCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `packType` field. */
  packType?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `plu` field. */
  plu?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `shipperId` field. */
  shipperId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `size` field. */
  size?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `species` field. */
  species?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `variety` field. */
  variety?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Product` object types. All fields are combined with a logical ‘and.’ */
export type ProductFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ProductFilter>>;
  /** Filter by the object’s `entries` relation. */
  entries?: InputMaybe<ProductToManyEntryFilter>;
  /** Some related `entries` exist. */
  entriesExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<BigIntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ProductFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ProductFilter>>;
  /** Filter by the object’s `packType` field. */
  packType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `plu` field. */
  plu?: InputMaybe<StringFilter>;
  /** Filter by the object’s `shipper` relation. */
  shipper?: InputMaybe<ShipperFilter>;
  /** A related `shipper` exists. */
  shipperExists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `shipperId` field. */
  shipperId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `size` field. */
  size?: InputMaybe<StringFilter>;
  /** Filter by the object’s `species` field. */
  species?: InputMaybe<StringFilter>;
  /** Filter by the object’s `variety` field. */
  variety?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Product` */
export type ProductInput = {
  entriesUsingId?: InputMaybe<EntryProductIdFkeyInverseInput>;
  id?: InputMaybe<Scalars['BigInt']>;
  packType?: InputMaybe<Scalars['String']>;
  plu?: InputMaybe<Scalars['String']>;
  shipperId?: InputMaybe<Scalars['String']>;
  shipperToShipperId?: InputMaybe<ProductShipperIdFkeyInput>;
  size?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  variety?: InputMaybe<Scalars['String']>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ProductNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `product` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ProductNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `product` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ProductOnEntryForEntryProductIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `entry` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `entry` being updated. */
  patch: EntryPatch;
};

/** The fields on `product` to look up the row to update. */
export type ProductOnEntryForEntryProductIdFkeyUsingProductPkeyUpdate = {
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `product` being updated. */
  patch: UpdateProductOnEntryForEntryProductIdFkeyPatch;
};

/** The globally unique `ID` look up for the row to update. */
export type ProductOnProductForProductShipperIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `shipper` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `shipper` being updated. */
  patch: ShipperPatch;
};

/** The fields on `product` to look up the row to update. */
export type ProductOnProductForProductShipperIdFkeyUsingProductPkeyUpdate = {
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `product` being updated. */
  patch: UpdateProductOnProductForProductShipperIdFkeyPatch;
};

/** Represents an update to a `Product`. Fields that are set will be updated. */
export type ProductPatch = {
  entriesUsingId?: InputMaybe<EntryProductIdFkeyInverseInput>;
  id?: InputMaybe<Scalars['BigInt']>;
  packType?: InputMaybe<Scalars['String']>;
  plu?: InputMaybe<Scalars['String']>;
  shipperId?: InputMaybe<Scalars['String']>;
  shipperToShipperId?: InputMaybe<ProductShipperIdFkeyInput>;
  size?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  variety?: InputMaybe<Scalars['String']>;
};

/** The fields on `product` to look up the row to connect. */
export type ProductProductPkeyConnect = {
  id: Scalars['BigInt'];
};

/** The fields on `product` to look up the row to delete. */
export type ProductProductPkeyDelete = {
  id: Scalars['BigInt'];
};

/** Input for the nested mutation of `shipper` in the `ProductInput` mutation. */
export type ProductShipperIdFkeyInput = {
  /** The primary key(s) for `shipper` for the far side of the relationship. */
  connectById?: InputMaybe<ShipperShipperPkeyConnect>;
  /** The primary key(s) for `shipper` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<ShipperNodeIdConnect>;
  /** A `ShipperInput` object that will be created and connected to this object. */
  create?: InputMaybe<ProductShipperIdFkeyShipperCreateInput>;
  /** The primary key(s) for `shipper` for the far side of the relationship. */
  deleteById?: InputMaybe<ShipperShipperPkeyDelete>;
  /** The primary key(s) for `shipper` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<ShipperNodeIdDelete>;
  /** The primary key(s) and patch data for `shipper` for the far side of the relationship. */
  updateById?: InputMaybe<ShipperOnProductForProductShipperIdFkeyUsingShipperPkeyUpdate>;
  /** The primary key(s) and patch data for `shipper` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<ProductOnProductForProductShipperIdFkeyNodeIdUpdate>;
};

/** Input for the nested mutation of `product` in the `ShipperInput` mutation. */
export type ProductShipperIdFkeyInverseInput = {
  /** The primary key(s) for `product` for the far side of the relationship. */
  connectById?: InputMaybe<Array<ProductProductPkeyConnect>>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<Array<ProductNodeIdConnect>>;
  /** A `ProductInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<ProductShipperIdFkeyProductCreateInput>>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<ProductProductPkeyDelete>>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<Array<ProductNodeIdDelete>>;
  /** Flag indicating whether all other `product` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']>;
  /** The primary key(s) and patch data for `product` for the far side of the relationship. */
  updateById?: InputMaybe<Array<ProductOnProductForProductShipperIdFkeyUsingProductPkeyUpdate>>;
  /** The primary key(s) and patch data for `product` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<Array<ShipperOnProductForProductShipperIdFkeyNodeIdUpdate>>;
};

/** The `product` to be created by this mutation. */
export type ProductShipperIdFkeyProductCreateInput = {
  entriesUsingId?: InputMaybe<EntryProductIdFkeyInverseInput>;
  id?: InputMaybe<Scalars['BigInt']>;
  packType?: InputMaybe<Scalars['String']>;
  plu?: InputMaybe<Scalars['String']>;
  shipperToShipperId?: InputMaybe<ProductShipperIdFkeyInput>;
  size?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  variety?: InputMaybe<Scalars['String']>;
};

/** The `shipper` to be created by this mutation. */
export type ProductShipperIdFkeyShipperCreateInput = {
  id: Scalars['String'];
  logoSrc?: InputMaybe<Scalars['String']>;
  productsUsingId?: InputMaybe<ProductShipperIdFkeyInverseInput>;
  shipperName: Scalars['String'];
  vesselsUsingId?: InputMaybe<VesselShipperIdFkeyInverseInput>;
};

/** A filter to be used against many `Entry` object types. All fields are combined with a logical ‘and.’ */
export type ProductToManyEntryFilter = {
  /** Every related `Entry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<EntryFilter>;
  /** No related `Entry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<EntryFilter>;
  /** Some related `Entry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<EntryFilter>;
};

/** A connection to a list of `Vessel` values, with data from `Entry`. */
export type ProductVesselsByEntryProductIdAndVesselIdManyToManyConnection = {
  __typename?: 'ProductVesselsByEntryProductIdAndVesselIdManyToManyConnection';
  /** A list of edges which contains the `Vessel`, info from the `Entry`, and the cursor to aid in pagination. */
  edges: Array<ProductVesselsByEntryProductIdAndVesselIdManyToManyEdge>;
  /** A list of `Vessel` objects. */
  nodes: Array<Maybe<Vessel>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Vessel` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Vessel` edge in the connection, with data from `Entry`. */
export type ProductVesselsByEntryProductIdAndVesselIdManyToManyEdge = {
  __typename?: 'ProductVesselsByEntryProductIdAndVesselIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Entry`. */
  entries: EntriesConnection;
  /** The `Vessel` at the end of the edge. */
  node?: Maybe<Vessel>;
};


/** A `Vessel` edge in the connection, with data from `Entry`. */
export type ProductVesselsByEntryProductIdAndVesselIdManyToManyEdgeEntriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<EntryCondition>;
  filter?: InputMaybe<EntryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntriesOrderBy>>;
};

/** A connection to a list of `Product` values. */
export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  /** A list of edges which contains the `Product` and cursor to aid in pagination. */
  edges: Array<ProductsEdge>;
  /** A list of `Product` objects. */
  nodes: Array<Maybe<Product>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Product` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Product` edge in the connection. */
export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Product` at the end of the edge. */
  node?: Maybe<Product>;
};

/** Methods to use when ordering `Product`. */
export enum ProductsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PackTypeAsc = 'PACK_TYPE_ASC',
  PackTypeDesc = 'PACK_TYPE_DESC',
  PluAsc = 'PLU_ASC',
  PluDesc = 'PLU_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ShipperIdAsc = 'SHIPPER_ID_ASC',
  ShipperIdDesc = 'SHIPPER_ID_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SpeciesAsc = 'SPECIES_ASC',
  SpeciesDesc = 'SPECIES_DESC',
  VarietyAsc = 'VARIETY_ASC',
  VarietyDesc = 'VARIETY_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Entry`. */
  entries?: Maybe<EntriesConnection>;
  entry?: Maybe<Entry>;
  /** Reads a single `Entry` using its globally unique `ID`. */
  entryByNodeId?: Maybe<Entry>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  product?: Maybe<Product>;
  /** Reads a single `Product` using its globally unique `ID`. */
  productByNodeId?: Maybe<Product>;
  /** Reads and enables pagination through a set of `Product`. */
  products?: Maybe<ProductsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  shipper?: Maybe<Shipper>;
  /** Reads a single `Shipper` using its globally unique `ID`. */
  shipperByNodeId?: Maybe<Shipper>;
  /** Reads and enables pagination through a set of `Shipper`. */
  shippers?: Maybe<ShippersConnection>;
  vessel?: Maybe<Vessel>;
  /** Reads a single `Vessel` using its globally unique `ID`. */
  vesselByNodeId?: Maybe<Vessel>;
  /** Reads and enables pagination through a set of `Vessel`. */
  vessels?: Maybe<VesselsConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryEntriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<EntryCondition>;
  filter?: InputMaybe<EntryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryEntryArgs = {
  id: Scalars['BigInt'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEntryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProductArgs = {
  id: Scalars['BigInt'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProductByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ProductCondition>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryShipperArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryShipperByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryShippersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ShipperCondition>;
  filter?: InputMaybe<ShipperFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ShippersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryVesselArgs = {
  id: Scalars['BigInt'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVesselByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVesselsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<VesselCondition>;
  filter?: InputMaybe<VesselFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VesselsOrderBy>>;
};

export type Shipper = Node & {
  __typename?: 'Shipper';
  id: Scalars['String'];
  logoSrc?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Product`. */
  products: ProductsConnection;
  shipperName: Scalars['String'];
  /** Reads and enables pagination through a set of `Vessel`. */
  vessels: VesselsConnection;
};


export type ShipperProductsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ProductCondition>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};


export type ShipperVesselsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<VesselCondition>;
  filter?: InputMaybe<VesselFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VesselsOrderBy>>;
};

/** A condition to be used against `Shipper` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ShipperCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `logoSrc` field. */
  logoSrc?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `shipperName` field. */
  shipperName?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Shipper` object types. All fields are combined with a logical ‘and.’ */
export type ShipperFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ShipperFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `logoSrc` field. */
  logoSrc?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ShipperFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ShipperFilter>>;
  /** Filter by the object’s `products` relation. */
  products?: InputMaybe<ShipperToManyProductFilter>;
  /** Some related `products` exist. */
  productsExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `shipperName` field. */
  shipperName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `vessels` relation. */
  vessels?: InputMaybe<ShipperToManyVesselFilter>;
  /** Some related `vessels` exist. */
  vesselsExist?: InputMaybe<Scalars['Boolean']>;
};

/** An input for mutations affecting `Shipper` */
export type ShipperInput = {
  id: Scalars['String'];
  logoSrc?: InputMaybe<Scalars['String']>;
  productsUsingId?: InputMaybe<ProductShipperIdFkeyInverseInput>;
  shipperName: Scalars['String'];
  vesselsUsingId?: InputMaybe<VesselShipperIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ShipperNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `shipper` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ShipperNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `shipper` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ShipperOnProductForProductShipperIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `product` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `product` being updated. */
  patch: ProductPatch;
};

/** The fields on `shipper` to look up the row to update. */
export type ShipperOnProductForProductShipperIdFkeyUsingShipperPkeyUpdate = {
  id: Scalars['String'];
  /** An object where the defined keys will be set on the `shipper` being updated. */
  patch: UpdateShipperOnProductForProductShipperIdFkeyPatch;
};

/** The globally unique `ID` look up for the row to update. */
export type ShipperOnVesselForVesselShipperIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `vessel` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `vessel` being updated. */
  patch: VesselPatch;
};

/** The fields on `shipper` to look up the row to update. */
export type ShipperOnVesselForVesselShipperIdFkeyUsingShipperPkeyUpdate = {
  id: Scalars['String'];
  /** An object where the defined keys will be set on the `shipper` being updated. */
  patch: UpdateShipperOnVesselForVesselShipperIdFkeyPatch;
};

/** Represents an update to a `Shipper`. Fields that are set will be updated. */
export type ShipperPatch = {
  id?: InputMaybe<Scalars['String']>;
  logoSrc?: InputMaybe<Scalars['String']>;
  productsUsingId?: InputMaybe<ProductShipperIdFkeyInverseInput>;
  shipperName?: InputMaybe<Scalars['String']>;
  vesselsUsingId?: InputMaybe<VesselShipperIdFkeyInverseInput>;
};

/** The fields on `shipper` to look up the row to connect. */
export type ShipperShipperPkeyConnect = {
  id: Scalars['String'];
};

/** The fields on `shipper` to look up the row to delete. */
export type ShipperShipperPkeyDelete = {
  id: Scalars['String'];
};

/** A filter to be used against many `Product` object types. All fields are combined with a logical ‘and.’ */
export type ShipperToManyProductFilter = {
  /** Every related `Product` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ProductFilter>;
  /** No related `Product` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ProductFilter>;
  /** Some related `Product` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ProductFilter>;
};

/** A filter to be used against many `Vessel` object types. All fields are combined with a logical ‘and.’ */
export type ShipperToManyVesselFilter = {
  /** Every related `Vessel` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<VesselFilter>;
  /** No related `Vessel` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<VesselFilter>;
  /** Some related `Vessel` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<VesselFilter>;
};

/** A connection to a list of `Shipper` values. */
export type ShippersConnection = {
  __typename?: 'ShippersConnection';
  /** A list of edges which contains the `Shipper` and cursor to aid in pagination. */
  edges: Array<ShippersEdge>;
  /** A list of `Shipper` objects. */
  nodes: Array<Maybe<Shipper>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Shipper` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Shipper` edge in the connection. */
export type ShippersEdge = {
  __typename?: 'ShippersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Shipper` at the end of the edge. */
  node?: Maybe<Shipper>;
};

/** Methods to use when ordering `Shipper`. */
export enum ShippersOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LogoSrcAsc = 'LOGO_SRC_ASC',
  LogoSrcDesc = 'LOGO_SRC_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ShipperNameAsc = 'SHIPPER_NAME_ASC',
  ShipperNameDesc = 'SHIPPER_NAME_DESC'
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']>;
};

/** All input for the `updateEntryByNodeId` mutation. */
export type UpdateEntryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Entry` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Entry` being updated. */
  patch: EntryPatch;
};

/** All input for the `updateEntry` mutation. */
export type UpdateEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `Entry` being updated. */
  patch: EntryPatch;
};

/** The output of our update `Entry` mutation. */
export type UpdateEntryPayload = {
  __typename?: 'UpdateEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Entry` that was updated by this mutation. */
  entry?: Maybe<Entry>;
  /** An edge for our `Entry`. May be used by Relay 1. */
  entryEdge?: Maybe<EntriesEdge>;
  /** Reads a single `Product` that is related to this `Entry`. */
  product?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vessel` that is related to this `Entry`. */
  vessel?: Maybe<Vessel>;
};


/** The output of our update `Entry` mutation. */
export type UpdateEntryPayloadEntryEdgeArgs = {
  orderBy?: InputMaybe<Array<EntriesOrderBy>>;
};

/** All input for the `updateProductByNodeId` mutation. */
export type UpdateProductByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Product` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Product` being updated. */
  patch: ProductPatch;
};

/** All input for the `updateProduct` mutation. */
export type UpdateProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `Product` being updated. */
  patch: ProductPatch;
};

/** The output of our update `Product` mutation. */
export type UpdateProductPayload = {
  __typename?: 'UpdateProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Product` that was updated by this mutation. */
  product?: Maybe<Product>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Shipper` that is related to this `Product`. */
  shipper?: Maybe<Shipper>;
};


/** The output of our update `Product` mutation. */
export type UpdateProductPayloadProductEdgeArgs = {
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** All input for the `updateShipperByNodeId` mutation. */
export type UpdateShipperByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Shipper` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Shipper` being updated. */
  patch: ShipperPatch;
};

/** All input for the `updateShipper` mutation. */
export type UpdateShipperInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  /** An object where the defined keys will be set on the `Shipper` being updated. */
  patch: ShipperPatch;
};

/** The output of our update `Shipper` mutation. */
export type UpdateShipperPayload = {
  __typename?: 'UpdateShipperPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Shipper` that was updated by this mutation. */
  shipper?: Maybe<Shipper>;
  /** An edge for our `Shipper`. May be used by Relay 1. */
  shipperEdge?: Maybe<ShippersEdge>;
};


/** The output of our update `Shipper` mutation. */
export type UpdateShipperPayloadShipperEdgeArgs = {
  orderBy?: InputMaybe<Array<ShippersOrderBy>>;
};

/** All input for the `updateVesselByNodeId` mutation. */
export type UpdateVesselByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Vessel` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Vessel` being updated. */
  patch: VesselPatch;
};

/** All input for the `updateVessel` mutation. */
export type UpdateVesselInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `Vessel` being updated. */
  patch: VesselPatch;
};

/** The output of our update `Vessel` mutation. */
export type UpdateVesselPayload = {
  __typename?: 'UpdateVesselPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Shipper` that is related to this `Vessel`. */
  shipper?: Maybe<Shipper>;
  /** The `Vessel` that was updated by this mutation. */
  vessel?: Maybe<Vessel>;
  /** An edge for our `Vessel`. May be used by Relay 1. */
  vesselEdge?: Maybe<VesselsEdge>;
};


/** The output of our update `Vessel` mutation. */
export type UpdateVesselPayloadVesselEdgeArgs = {
  orderBy?: InputMaybe<Array<VesselsOrderBy>>;
};

export type Vessel = Node & {
  __typename?: 'Vessel';
  arrivalDate?: Maybe<Scalars['Date']>;
  arrivalPort?: Maybe<Scalars['String']>;
  departureDate?: Maybe<Scalars['Date']>;
  /** Reads and enables pagination through a set of `Entry`. */
  entries: EntriesConnection;
  id: Scalars['BigInt'];
  isReviewed?: Maybe<Scalars['Boolean']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  previousName?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Product`. */
  productsByEntryVesselIdAndProductId: VesselProductsByEntryVesselIdAndProductIdManyToManyConnection;
  /** Reads a single `Shipper` that is related to this `Vessel`. */
  shipper?: Maybe<Shipper>;
  shipperId?: Maybe<Scalars['String']>;
  vesselName?: Maybe<Scalars['String']>;
  vesselStatus?: Maybe<Scalars['String']>;
};


export type VesselEntriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<EntryCondition>;
  filter?: InputMaybe<EntryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntriesOrderBy>>;
};


export type VesselProductsByEntryVesselIdAndProductIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ProductCondition>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** A condition to be used against `Vessel` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type VesselCondition = {
  /** Checks for equality with the object’s `arrivalDate` field. */
  arrivalDate?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `arrivalPort` field. */
  arrivalPort?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `departureDate` field. */
  departureDate?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `isReviewed` field. */
  isReviewed?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `previousName` field. */
  previousName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `shipperId` field. */
  shipperId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vesselName` field. */
  vesselName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vesselStatus` field. */
  vesselStatus?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Vessel` object types. All fields are combined with a logical ‘and.’ */
export type VesselFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<VesselFilter>>;
  /** Filter by the object’s `arrivalDate` field. */
  arrivalDate?: InputMaybe<DateFilter>;
  /** Filter by the object’s `arrivalPort` field. */
  arrivalPort?: InputMaybe<StringFilter>;
  /** Filter by the object’s `departureDate` field. */
  departureDate?: InputMaybe<DateFilter>;
  /** Filter by the object’s `entries` relation. */
  entries?: InputMaybe<VesselToManyEntryFilter>;
  /** Some related `entries` exist. */
  entriesExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `isReviewed` field. */
  isReviewed?: InputMaybe<BooleanFilter>;
  /** Negates the expression. */
  not?: InputMaybe<VesselFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<VesselFilter>>;
  /** Filter by the object’s `previousName` field. */
  previousName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `shipper` relation. */
  shipper?: InputMaybe<ShipperFilter>;
  /** A related `shipper` exists. */
  shipperExists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `shipperId` field. */
  shipperId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `vesselName` field. */
  vesselName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `vesselStatus` field. */
  vesselStatus?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Vessel` */
export type VesselInput = {
  arrivalDate?: InputMaybe<Scalars['Date']>;
  arrivalPort?: InputMaybe<Scalars['String']>;
  departureDate?: InputMaybe<Scalars['Date']>;
  entriesUsingId?: InputMaybe<EntryVesselIdFkeyInverseInput>;
  id?: InputMaybe<Scalars['BigInt']>;
  isReviewed?: InputMaybe<Scalars['Boolean']>;
  previousName?: InputMaybe<Scalars['String']>;
  shipperId?: InputMaybe<Scalars['String']>;
  shipperToShipperId?: InputMaybe<VesselShipperIdFkeyInput>;
  vesselName?: InputMaybe<Scalars['String']>;
  vesselStatus?: InputMaybe<Scalars['String']>;
};

/** The globally unique `ID` look up for the row to connect. */
export type VesselNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `vessel` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type VesselNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `vessel` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type VesselOnEntryForEntryVesselIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `entry` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `entry` being updated. */
  patch: EntryPatch;
};

/** The fields on `vessel` to look up the row to update. */
export type VesselOnEntryForEntryVesselIdFkeyUsingVesselPkeyUpdate = {
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `vessel` being updated. */
  patch: UpdateVesselOnEntryForEntryVesselIdFkeyPatch;
};

/** The globally unique `ID` look up for the row to update. */
export type VesselOnVesselForVesselShipperIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `shipper` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `shipper` being updated. */
  patch: ShipperPatch;
};

/** The fields on `vessel` to look up the row to update. */
export type VesselOnVesselForVesselShipperIdFkeyUsingVesselPkeyUpdate = {
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `vessel` being updated. */
  patch: UpdateVesselOnVesselForVesselShipperIdFkeyPatch;
};

/** Represents an update to a `Vessel`. Fields that are set will be updated. */
export type VesselPatch = {
  arrivalDate?: InputMaybe<Scalars['Date']>;
  arrivalPort?: InputMaybe<Scalars['String']>;
  departureDate?: InputMaybe<Scalars['Date']>;
  entriesUsingId?: InputMaybe<EntryVesselIdFkeyInverseInput>;
  id?: InputMaybe<Scalars['BigInt']>;
  isReviewed?: InputMaybe<Scalars['Boolean']>;
  previousName?: InputMaybe<Scalars['String']>;
  shipperId?: InputMaybe<Scalars['String']>;
  shipperToShipperId?: InputMaybe<VesselShipperIdFkeyInput>;
  vesselName?: InputMaybe<Scalars['String']>;
  vesselStatus?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Product` values, with data from `Entry`. */
export type VesselProductsByEntryVesselIdAndProductIdManyToManyConnection = {
  __typename?: 'VesselProductsByEntryVesselIdAndProductIdManyToManyConnection';
  /** A list of edges which contains the `Product`, info from the `Entry`, and the cursor to aid in pagination. */
  edges: Array<VesselProductsByEntryVesselIdAndProductIdManyToManyEdge>;
  /** A list of `Product` objects. */
  nodes: Array<Maybe<Product>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Product` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Product` edge in the connection, with data from `Entry`. */
export type VesselProductsByEntryVesselIdAndProductIdManyToManyEdge = {
  __typename?: 'VesselProductsByEntryVesselIdAndProductIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Entry`. */
  entries: EntriesConnection;
  /** The `Product` at the end of the edge. */
  node?: Maybe<Product>;
};


/** A `Product` edge in the connection, with data from `Entry`. */
export type VesselProductsByEntryVesselIdAndProductIdManyToManyEdgeEntriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<EntryCondition>;
  filter?: InputMaybe<EntryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntriesOrderBy>>;
};

/** Input for the nested mutation of `shipper` in the `VesselInput` mutation. */
export type VesselShipperIdFkeyInput = {
  /** The primary key(s) for `shipper` for the far side of the relationship. */
  connectById?: InputMaybe<ShipperShipperPkeyConnect>;
  /** The primary key(s) for `shipper` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<ShipperNodeIdConnect>;
  /** A `ShipperInput` object that will be created and connected to this object. */
  create?: InputMaybe<VesselShipperIdFkeyShipperCreateInput>;
  /** The primary key(s) for `shipper` for the far side of the relationship. */
  deleteById?: InputMaybe<ShipperShipperPkeyDelete>;
  /** The primary key(s) for `shipper` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<ShipperNodeIdDelete>;
  /** The primary key(s) and patch data for `shipper` for the far side of the relationship. */
  updateById?: InputMaybe<ShipperOnVesselForVesselShipperIdFkeyUsingShipperPkeyUpdate>;
  /** The primary key(s) and patch data for `shipper` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<VesselOnVesselForVesselShipperIdFkeyNodeIdUpdate>;
};

/** Input for the nested mutation of `vessel` in the `ShipperInput` mutation. */
export type VesselShipperIdFkeyInverseInput = {
  /** The primary key(s) for `vessel` for the far side of the relationship. */
  connectById?: InputMaybe<Array<VesselVesselPkeyConnect>>;
  /** The primary key(s) for `vessel` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<Array<VesselNodeIdConnect>>;
  /** A `VesselInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<VesselShipperIdFkeyVesselCreateInput>>;
  /** The primary key(s) for `vessel` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<VesselVesselPkeyDelete>>;
  /** The primary key(s) for `vessel` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<Array<VesselNodeIdDelete>>;
  /** Flag indicating whether all other `vessel` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']>;
  /** The primary key(s) and patch data for `vessel` for the far side of the relationship. */
  updateById?: InputMaybe<Array<VesselOnVesselForVesselShipperIdFkeyUsingVesselPkeyUpdate>>;
  /** The primary key(s) and patch data for `vessel` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<Array<ShipperOnVesselForVesselShipperIdFkeyNodeIdUpdate>>;
};

/** The `shipper` to be created by this mutation. */
export type VesselShipperIdFkeyShipperCreateInput = {
  id: Scalars['String'];
  logoSrc?: InputMaybe<Scalars['String']>;
  productsUsingId?: InputMaybe<ProductShipperIdFkeyInverseInput>;
  shipperName: Scalars['String'];
  vesselsUsingId?: InputMaybe<VesselShipperIdFkeyInverseInput>;
};

/** The `vessel` to be created by this mutation. */
export type VesselShipperIdFkeyVesselCreateInput = {
  arrivalDate?: InputMaybe<Scalars['Date']>;
  arrivalPort?: InputMaybe<Scalars['String']>;
  departureDate?: InputMaybe<Scalars['Date']>;
  entriesUsingId?: InputMaybe<EntryVesselIdFkeyInverseInput>;
  id?: InputMaybe<Scalars['BigInt']>;
  isReviewed?: InputMaybe<Scalars['Boolean']>;
  previousName?: InputMaybe<Scalars['String']>;
  shipperToShipperId?: InputMaybe<VesselShipperIdFkeyInput>;
  vesselName?: InputMaybe<Scalars['String']>;
  vesselStatus?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against many `Entry` object types. All fields are combined with a logical ‘and.’ */
export type VesselToManyEntryFilter = {
  /** Every related `Entry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<EntryFilter>;
  /** No related `Entry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<EntryFilter>;
  /** Some related `Entry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<EntryFilter>;
};

/** The fields on `vessel` to look up the row to connect. */
export type VesselVesselPkeyConnect = {
  id: Scalars['BigInt'];
};

/** The fields on `vessel` to look up the row to delete. */
export type VesselVesselPkeyDelete = {
  id: Scalars['BigInt'];
};

/** A connection to a list of `Vessel` values. */
export type VesselsConnection = {
  __typename?: 'VesselsConnection';
  /** A list of edges which contains the `Vessel` and cursor to aid in pagination. */
  edges: Array<VesselsEdge>;
  /** A list of `Vessel` objects. */
  nodes: Array<Maybe<Vessel>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Vessel` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Vessel` edge in the connection. */
export type VesselsEdge = {
  __typename?: 'VesselsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Vessel` at the end of the edge. */
  node?: Maybe<Vessel>;
};

/** Methods to use when ordering `Vessel`. */
export enum VesselsOrderBy {
  ArrivalDateAsc = 'ARRIVAL_DATE_ASC',
  ArrivalDateDesc = 'ARRIVAL_DATE_DESC',
  ArrivalPortAsc = 'ARRIVAL_PORT_ASC',
  ArrivalPortDesc = 'ARRIVAL_PORT_DESC',
  DepartureDateAsc = 'DEPARTURE_DATE_ASC',
  DepartureDateDesc = 'DEPARTURE_DATE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsReviewedAsc = 'IS_REVIEWED_ASC',
  IsReviewedDesc = 'IS_REVIEWED_DESC',
  Natural = 'NATURAL',
  PreviousNameAsc = 'PREVIOUS_NAME_ASC',
  PreviousNameDesc = 'PREVIOUS_NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ShipperIdAsc = 'SHIPPER_ID_ASC',
  ShipperIdDesc = 'SHIPPER_ID_DESC',
  VesselNameAsc = 'VESSEL_NAME_ASC',
  VesselNameDesc = 'VESSEL_NAME_DESC',
  VesselStatusAsc = 'VESSEL_STATUS_ASC',
  VesselStatusDesc = 'VESSEL_STATUS_DESC'
}

/** An object where the defined keys will be set on the `entry` being updated. */
export type UpdateEntryOnEntryForEntryProductIdFkeyPatch = {
  id?: InputMaybe<Scalars['BigInt']>;
  palletCount?: InputMaybe<Scalars['BigFloat']>;
  productToProductId?: InputMaybe<EntryProductIdFkeyInput>;
  vesselId?: InputMaybe<Scalars['BigInt']>;
  vesselToVesselId?: InputMaybe<EntryVesselIdFkeyInput>;
};

/** An object where the defined keys will be set on the `entry` being updated. */
export type UpdateEntryOnEntryForEntryVesselIdFkeyPatch = {
  id?: InputMaybe<Scalars['BigInt']>;
  palletCount?: InputMaybe<Scalars['BigFloat']>;
  productId?: InputMaybe<Scalars['BigInt']>;
  productToProductId?: InputMaybe<EntryProductIdFkeyInput>;
  vesselToVesselId?: InputMaybe<EntryVesselIdFkeyInput>;
};

/** An object where the defined keys will be set on the `product` being updated. */
export type UpdateProductOnEntryForEntryProductIdFkeyPatch = {
  entriesUsingId?: InputMaybe<EntryProductIdFkeyInverseInput>;
  id?: InputMaybe<Scalars['BigInt']>;
  packType?: InputMaybe<Scalars['String']>;
  plu?: InputMaybe<Scalars['String']>;
  shipperId?: InputMaybe<Scalars['String']>;
  shipperToShipperId?: InputMaybe<ProductShipperIdFkeyInput>;
  size?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  variety?: InputMaybe<Scalars['String']>;
};

/** An object where the defined keys will be set on the `product` being updated. */
export type UpdateProductOnProductForProductShipperIdFkeyPatch = {
  entriesUsingId?: InputMaybe<EntryProductIdFkeyInverseInput>;
  id?: InputMaybe<Scalars['BigInt']>;
  packType?: InputMaybe<Scalars['String']>;
  plu?: InputMaybe<Scalars['String']>;
  shipperToShipperId?: InputMaybe<ProductShipperIdFkeyInput>;
  size?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  variety?: InputMaybe<Scalars['String']>;
};

/** An object where the defined keys will be set on the `shipper` being updated. */
export type UpdateShipperOnProductForProductShipperIdFkeyPatch = {
  id?: InputMaybe<Scalars['String']>;
  logoSrc?: InputMaybe<Scalars['String']>;
  productsUsingId?: InputMaybe<ProductShipperIdFkeyInverseInput>;
  shipperName?: InputMaybe<Scalars['String']>;
  vesselsUsingId?: InputMaybe<VesselShipperIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `shipper` being updated. */
export type UpdateShipperOnVesselForVesselShipperIdFkeyPatch = {
  id?: InputMaybe<Scalars['String']>;
  logoSrc?: InputMaybe<Scalars['String']>;
  productsUsingId?: InputMaybe<ProductShipperIdFkeyInverseInput>;
  shipperName?: InputMaybe<Scalars['String']>;
  vesselsUsingId?: InputMaybe<VesselShipperIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `vessel` being updated. */
export type UpdateVesselOnEntryForEntryVesselIdFkeyPatch = {
  arrivalDate?: InputMaybe<Scalars['Date']>;
  arrivalPort?: InputMaybe<Scalars['String']>;
  departureDate?: InputMaybe<Scalars['Date']>;
  entriesUsingId?: InputMaybe<EntryVesselIdFkeyInverseInput>;
  id?: InputMaybe<Scalars['BigInt']>;
  isReviewed?: InputMaybe<Scalars['Boolean']>;
  previousName?: InputMaybe<Scalars['String']>;
  shipperId?: InputMaybe<Scalars['String']>;
  shipperToShipperId?: InputMaybe<VesselShipperIdFkeyInput>;
  vesselName?: InputMaybe<Scalars['String']>;
  vesselStatus?: InputMaybe<Scalars['String']>;
};

/** An object where the defined keys will be set on the `vessel` being updated. */
export type UpdateVesselOnVesselForVesselShipperIdFkeyPatch = {
  arrivalDate?: InputMaybe<Scalars['Date']>;
  arrivalPort?: InputMaybe<Scalars['String']>;
  departureDate?: InputMaybe<Scalars['Date']>;
  entriesUsingId?: InputMaybe<EntryVesselIdFkeyInverseInput>;
  id?: InputMaybe<Scalars['BigInt']>;
  isReviewed?: InputMaybe<Scalars['Boolean']>;
  previousName?: InputMaybe<Scalars['String']>;
  shipperToShipperId?: InputMaybe<VesselShipperIdFkeyInput>;
  vesselName?: InputMaybe<Scalars['String']>;
  vesselStatus?: InputMaybe<Scalars['String']>;
};
