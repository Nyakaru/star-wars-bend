import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Person = {
  __typename?: 'Person';
  name: Scalars['String'];
  height: Scalars['String'];
  mass: Scalars['String'];
  gender: Scalars['String'];
  homeworld: Scalars['String'];
};

export type Planet = {
  __typename?: 'Planet';
  name: Scalars['String'];
  rotation_period: Scalars['String'];
  orbital_period: Scalars['String'];
  diameter: Scalars['String'];
  climate: Scalars['String'];
  gravity: Scalars['String'];
  terrain: Scalars['String'];
  surface_water: Scalars['String'];
  population: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  people?: Maybe<Array<Maybe<Person>>>;
  searchPerson?: Maybe<SearchResponse>;
};


export type QueryPeopleArgs = {
  page?: Maybe<Scalars['String']>;
};


export type QuerySearchPersonArgs = {
  search: Scalars['String'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  person?: Maybe<Person>;
  homeworld?: Maybe<Planet>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Person: ResolverTypeWrapper<Person>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Planet: ResolverTypeWrapper<Planet>;
  Query: ResolverTypeWrapper<{}>;
  SearchResponse: ResolverTypeWrapper<SearchResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Person: Person;
  String: Scalars['String'];
  Planet: Planet;
  Query: {};
  SearchResponse: SearchResponse;
  Boolean: Scalars['Boolean'];
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mass?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  homeworld?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Planet'] = ResolversParentTypes['Planet']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rotation_period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orbital_period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  diameter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  climate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gravity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  terrain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surface_water?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  population?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  people?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, RequireFields<QueryPeopleArgs, never>>;
  searchPerson?: Resolver<Maybe<ResolversTypes['SearchResponse']>, ParentType, ContextType, RequireFields<QuerySearchPersonArgs, 'search'>>;
};

export type SearchResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResponse'] = ResolversParentTypes['SearchResponse']> = {
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  homeworld?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Person?: PersonResolvers<ContextType>;
  Planet?: PlanetResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SearchResponse?: SearchResponseResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
