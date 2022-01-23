import { groupBy, sortBy, values } from 'ramda';

import { Maybe, Product, Vessel } from 'types';

import { ShipperProjectionChanges, VesselUpdate } from './types';

export const getAllVessels = (
  vessels: Maybe<Vessel>[],
  changes: ShipperProjectionChanges,
  getVesselValue: (
    vessel: Maybe<Vessel> | undefined,
    key: keyof VesselUpdate,
  ) => { dirty: boolean; value: string },
) =>
  sortBy((v) => getVesselValue(v, 'departureDate').value, [
    ...vessels,
    ...changes.newVessels,
  ] as Vessel[]).map((v) => {
    if (v) {
      return {
        ...v,
        entries: {
          nodes: [
            ...v.entries.nodes,
            ...changes.newEntries.filter((e) => e.vesselId === v.id),
          ],
        },
      };
    }
    return v;
  });

export const getDuplicateProductIds = (products: Product[]) =>
  values(
    groupBy(
      (product) =>
        `species=${product.species}variety=${product.variety}size=${product.size}packType=${product.packType}plu=${product.plu}`,
      products,
    ),
  )
    .filter((duplicateProducts) => duplicateProducts.length > 1)
    .map((duplicateProducts) =>
      duplicateProducts.map((p) => parseInt(p.id, 10)),
    )
    .flat();
