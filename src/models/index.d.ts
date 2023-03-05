import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerPack = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pack, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly PackSize?: number | null;
  readonly tripsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPack = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pack, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly PackSize?: number | null;
  readonly tripsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pack = LazyLoading extends LazyLoadingDisabled ? EagerPack : LazyPack

export declare const Pack: (new (init: ModelInit<Pack>) => Pack) & {
  copyOf(source: Pack, mutator: (draft: MutableModel<Pack>) => MutableModel<Pack> | void): Pack;
}

type EagerTrips = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trips, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TripName?: string | null;
  readonly TripStart?: string | null;
  readonly TripEnd?: string | null;
  readonly TripLocation?: string | null;
  readonly usersID: string;
  readonly Packs?: (Pack | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrips = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trips, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TripName?: string | null;
  readonly TripStart?: string | null;
  readonly TripEnd?: string | null;
  readonly TripLocation?: string | null;
  readonly usersID: string;
  readonly Packs: AsyncCollection<Pack>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Trips = LazyLoading extends LazyLoadingDisabled ? EagerTrips : LazyTrips

export declare const Trips: (new (init: ModelInit<Trips>) => Trips) & {
  copyOf(source: Trips, mutator: (draft: MutableModel<Trips>) => MutableModel<Trips> | void): Trips;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly Trips?: (Trips | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly Trips: AsyncCollection<Trips>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}