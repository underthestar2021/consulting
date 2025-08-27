
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectMetrics
 * 
 */
export type ProjectMetrics = $Result.DefaultSelection<Prisma.$ProjectMetricsPayload>
/**
 * Model ProjectAnalysis
 * 
 */
export type ProjectAnalysis = $Result.DefaultSelection<Prisma.$ProjectAnalysisPayload>
/**
 * Model UserSavedProject
 * 
 */
export type UserSavedProject = $Result.DefaultSelection<Prisma.$UserSavedProjectPayload>
/**
 * Model UserSubscription
 * 
 */
export type UserSubscription = $Result.DefaultSelection<Prisma.$UserSubscriptionPayload>
/**
 * Model DataSource
 * 
 */
export type DataSource = $Result.DefaultSelection<Prisma.$DataSourcePayload>
/**
 * Model CrawlLog
 * 
 */
export type CrawlLog = $Result.DefaultSelection<Prisma.$CrawlLogPayload>
/**
 * Model ProjectTag
 * 
 */
export type ProjectTag = $Result.DefaultSelection<Prisma.$ProjectTagPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMetrics`: Exposes CRUD operations for the **ProjectMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMetrics
    * const projectMetrics = await prisma.projectMetrics.findMany()
    * ```
    */
  get projectMetrics(): Prisma.ProjectMetricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectAnalysis`: Exposes CRUD operations for the **ProjectAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectAnalyses
    * const projectAnalyses = await prisma.projectAnalysis.findMany()
    * ```
    */
  get projectAnalysis(): Prisma.ProjectAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSavedProject`: Exposes CRUD operations for the **UserSavedProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSavedProjects
    * const userSavedProjects = await prisma.userSavedProject.findMany()
    * ```
    */
  get userSavedProject(): Prisma.UserSavedProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSubscription`: Exposes CRUD operations for the **UserSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSubscriptions
    * const userSubscriptions = await prisma.userSubscription.findMany()
    * ```
    */
  get userSubscription(): Prisma.UserSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataSource`: Exposes CRUD operations for the **DataSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataSources
    * const dataSources = await prisma.dataSource.findMany()
    * ```
    */
  get dataSource(): Prisma.DataSourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crawlLog`: Exposes CRUD operations for the **CrawlLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrawlLogs
    * const crawlLogs = await prisma.crawlLog.findMany()
    * ```
    */
  get crawlLog(): Prisma.CrawlLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectTag`: Exposes CRUD operations for the **ProjectTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTags
    * const projectTags = await prisma.projectTag.findMany()
    * ```
    */
  get projectTag(): Prisma.ProjectTagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Project: 'Project',
    ProjectMetrics: 'ProjectMetrics',
    ProjectAnalysis: 'ProjectAnalysis',
    UserSavedProject: 'UserSavedProject',
    UserSubscription: 'UserSubscription',
    DataSource: 'DataSource',
    CrawlLog: 'CrawlLog',
    ProjectTag: 'ProjectTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "projectMetrics" | "projectAnalysis" | "userSavedProject" | "userSubscription" | "dataSource" | "crawlLog" | "projectTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectMetrics: {
        payload: Prisma.$ProjectMetricsPayload<ExtArgs>
        fields: Prisma.ProjectMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMetricsPayload>
          }
          findFirst: {
            args: Prisma.ProjectMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMetricsPayload>
          }
          findMany: {
            args: Prisma.ProjectMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMetricsPayload>[]
          }
          create: {
            args: Prisma.ProjectMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMetricsPayload>
          }
          createMany: {
            args: Prisma.ProjectMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMetricsPayload>
          }
          update: {
            args: Prisma.ProjectMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMetricsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMetricsPayload>
          }
          aggregate: {
            args: Prisma.ProjectMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMetrics>
          }
          groupBy: {
            args: Prisma.ProjectMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMetricsCountAggregateOutputType> | number
          }
        }
      }
      ProjectAnalysis: {
        payload: Prisma.$ProjectAnalysisPayload<ExtArgs>
        fields: Prisma.ProjectAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnalysisPayload>
          }
          findFirst: {
            args: Prisma.ProjectAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnalysisPayload>
          }
          findMany: {
            args: Prisma.ProjectAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnalysisPayload>[]
          }
          create: {
            args: Prisma.ProjectAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnalysisPayload>
          }
          createMany: {
            args: Prisma.ProjectAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnalysisPayload>
          }
          update: {
            args: Prisma.ProjectAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.ProjectAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAnalysisPayload>
          }
          aggregate: {
            args: Prisma.ProjectAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectAnalysis>
          }
          groupBy: {
            args: Prisma.ProjectAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectAnalysisCountAggregateOutputType> | number
          }
        }
      }
      UserSavedProject: {
        payload: Prisma.$UserSavedProjectPayload<ExtArgs>
        fields: Prisma.UserSavedProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSavedProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSavedProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedProjectPayload>
          }
          findFirst: {
            args: Prisma.UserSavedProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSavedProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedProjectPayload>
          }
          findMany: {
            args: Prisma.UserSavedProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedProjectPayload>[]
          }
          create: {
            args: Prisma.UserSavedProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedProjectPayload>
          }
          createMany: {
            args: Prisma.UserSavedProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserSavedProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedProjectPayload>
          }
          update: {
            args: Prisma.UserSavedProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedProjectPayload>
          }
          deleteMany: {
            args: Prisma.UserSavedProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSavedProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSavedProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedProjectPayload>
          }
          aggregate: {
            args: Prisma.UserSavedProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSavedProject>
          }
          groupBy: {
            args: Prisma.UserSavedProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSavedProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSavedProjectCountArgs<ExtArgs>
            result: $Utils.Optional<UserSavedProjectCountAggregateOutputType> | number
          }
        }
      }
      UserSubscription: {
        payload: Prisma.$UserSubscriptionPayload<ExtArgs>
        fields: Prisma.UserSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.UserSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findMany: {
            args: Prisma.UserSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          create: {
            args: Prisma.UserSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          createMany: {
            args: Prisma.UserSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          update: {
            args: Prisma.UserSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.UserSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.UserSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSubscription>
          }
          groupBy: {
            args: Prisma.UserSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      DataSource: {
        payload: Prisma.$DataSourcePayload<ExtArgs>
        fields: Prisma.DataSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          findFirst: {
            args: Prisma.DataSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          findMany: {
            args: Prisma.DataSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>[]
          }
          create: {
            args: Prisma.DataSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          createMany: {
            args: Prisma.DataSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          update: {
            args: Prisma.DataSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          deleteMany: {
            args: Prisma.DataSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          aggregate: {
            args: Prisma.DataSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataSource>
          }
          groupBy: {
            args: Prisma.DataSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataSourceCountArgs<ExtArgs>
            result: $Utils.Optional<DataSourceCountAggregateOutputType> | number
          }
        }
      }
      CrawlLog: {
        payload: Prisma.$CrawlLogPayload<ExtArgs>
        fields: Prisma.CrawlLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrawlLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrawlLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>
          }
          findFirst: {
            args: Prisma.CrawlLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrawlLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>
          }
          findMany: {
            args: Prisma.CrawlLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>[]
          }
          create: {
            args: Prisma.CrawlLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>
          }
          createMany: {
            args: Prisma.CrawlLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CrawlLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>
          }
          update: {
            args: Prisma.CrawlLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>
          }
          deleteMany: {
            args: Prisma.CrawlLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrawlLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CrawlLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlLogPayload>
          }
          aggregate: {
            args: Prisma.CrawlLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrawlLog>
          }
          groupBy: {
            args: Prisma.CrawlLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrawlLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrawlLogCountArgs<ExtArgs>
            result: $Utils.Optional<CrawlLogCountAggregateOutputType> | number
          }
        }
      }
      ProjectTag: {
        payload: Prisma.$ProjectTagPayload<ExtArgs>
        fields: Prisma.ProjectTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          findFirst: {
            args: Prisma.ProjectTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          findMany: {
            args: Prisma.ProjectTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>[]
          }
          create: {
            args: Prisma.ProjectTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          createMany: {
            args: Prisma.ProjectTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          update: {
            args: Prisma.ProjectTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          aggregate: {
            args: Prisma.ProjectTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTag>
          }
          groupBy: {
            args: Prisma.ProjectTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTagCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    project?: ProjectOmit
    projectMetrics?: ProjectMetricsOmit
    projectAnalysis?: ProjectAnalysisOmit
    userSavedProject?: UserSavedProjectOmit
    userSubscription?: UserSubscriptionOmit
    dataSource?: DataSourceOmit
    crawlLog?: CrawlLogOmit
    projectTag?: ProjectTagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    savedProjects: number
    subscriptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedProjects?: boolean | UserCountOutputTypeCountSavedProjectsArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSavedProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    savedByUsers: number
    projectTags: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedByUsers?: boolean | ProjectCountOutputTypeCountSavedByUsersArgs
    projectTags?: boolean | ProjectCountOutputTypeCountProjectTagsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSavedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSavedProjectWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTagWhereInput
  }


  /**
   * Count Type DataSourceCountOutputType
   */

  export type DataSourceCountOutputType = {
    crawlLogs: number
  }

  export type DataSourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crawlLogs?: boolean | DataSourceCountOutputTypeCountCrawlLogsArgs
  }

  // Custom InputTypes
  /**
   * DataSourceCountOutputType without action
   */
  export type DataSourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSourceCountOutputType
     */
    select?: DataSourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DataSourceCountOutputType without action
   */
  export type DataSourceCountOutputTypeCountCrawlLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrawlLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    subscriptionTier: string | null
    subscriptionStatus: string | null
    stripeCustomerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    subscriptionTier: string | null
    subscriptionStatus: string | null
    stripeCustomerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    subscriptionTier: number
    subscriptionStatus: number
    stripeCustomerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    subscriptionTier?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    subscriptionTier?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    subscriptionTier?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    subscriptionTier: string
    subscriptionStatus: string
    stripeCustomerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    subscriptionTier?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    savedProjects?: boolean | User$savedProjectsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    subscriptionTier?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "subscriptionTier" | "subscriptionStatus" | "stripeCustomerId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedProjects?: boolean | User$savedProjectsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      savedProjects: Prisma.$UserSavedProjectPayload<ExtArgs>[]
      subscriptions: Prisma.$UserSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      subscriptionTier: string
      subscriptionStatus: string
      stripeCustomerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedProjects<T extends User$savedProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly subscriptionTier: FieldRef<"User", 'String'>
    readonly subscriptionStatus: FieldRef<"User", 'String'>
    readonly stripeCustomerId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.savedProjects
   */
  export type User$savedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedProject
     */
    select?: UserSavedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedProject
     */
    omit?: UserSavedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedProjectInclude<ExtArgs> | null
    where?: UserSavedProjectWhereInput
    orderBy?: UserSavedProjectOrderByWithRelationInput | UserSavedProjectOrderByWithRelationInput[]
    cursor?: UserSavedProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSavedProjectScalarFieldEnum | UserSavedProjectScalarFieldEnum[]
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    source: string | null
    sourceId: string | null
    name: string | null
    description: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    discoveredAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    source: string | null
    sourceId: string | null
    name: string | null
    description: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    discoveredAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    source: number
    sourceId: number
    name: number
    description: number
    url: number
    category: number
    tags: number
    createdAt: number
    updatedAt: number
    discoveredAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    source?: true
    sourceId?: true
    name?: true
    description?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    discoveredAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    source?: true
    sourceId?: true
    name?: true
    description?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    discoveredAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    source?: true
    sourceId?: true
    name?: true
    description?: true
    url?: true
    category?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    discoveredAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    source: string
    sourceId: string
    name: string
    description: string | null
    url: string
    category: JsonValue
    tags: JsonValue
    createdAt: Date
    updatedAt: Date
    discoveredAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    sourceId?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discoveredAt?: boolean
    metrics?: boolean | Project$metricsArgs<ExtArgs>
    analysis?: boolean | Project$analysisArgs<ExtArgs>
    savedByUsers?: boolean | Project$savedByUsersArgs<ExtArgs>
    projectTags?: boolean | Project$projectTagsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    id?: boolean
    source?: boolean
    sourceId?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discoveredAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "sourceId" | "name" | "description" | "url" | "category" | "tags" | "createdAt" | "updatedAt" | "discoveredAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | Project$metricsArgs<ExtArgs>
    analysis?: boolean | Project$analysisArgs<ExtArgs>
    savedByUsers?: boolean | Project$savedByUsersArgs<ExtArgs>
    projectTags?: boolean | Project$projectTagsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      metrics: Prisma.$ProjectMetricsPayload<ExtArgs> | null
      analysis: Prisma.$ProjectAnalysisPayload<ExtArgs> | null
      savedByUsers: Prisma.$UserSavedProjectPayload<ExtArgs>[]
      projectTags: Prisma.$ProjectTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      sourceId: string
      name: string
      description: string | null
      url: string
      category: Prisma.JsonValue
      tags: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      discoveredAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    metrics<T extends Project$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Project$metricsArgs<ExtArgs>>): Prisma__ProjectMetricsClient<$Result.GetResult<Prisma.$ProjectMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    analysis<T extends Project$analysisArgs<ExtArgs> = {}>(args?: Subset<T, Project$analysisArgs<ExtArgs>>): Prisma__ProjectAnalysisClient<$Result.GetResult<Prisma.$ProjectAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    savedByUsers<T extends Project$savedByUsersArgs<ExtArgs> = {}>(args?: Subset<T, Project$savedByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectTags<T extends Project$projectTagsArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly source: FieldRef<"Project", 'String'>
    readonly sourceId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly url: FieldRef<"Project", 'String'>
    readonly category: FieldRef<"Project", 'Json'>
    readonly tags: FieldRef<"Project", 'Json'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly discoveredAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.metrics
   */
  export type Project$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMetrics
     */
    select?: ProjectMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMetrics
     */
    omit?: ProjectMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMetricsInclude<ExtArgs> | null
    where?: ProjectMetricsWhereInput
  }

  /**
   * Project.analysis
   */
  export type Project$analysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnalysis
     */
    select?: ProjectAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnalysis
     */
    omit?: ProjectAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnalysisInclude<ExtArgs> | null
    where?: ProjectAnalysisWhereInput
  }

  /**
   * Project.savedByUsers
   */
  export type Project$savedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedProject
     */
    select?: UserSavedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedProject
     */
    omit?: UserSavedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedProjectInclude<ExtArgs> | null
    where?: UserSavedProjectWhereInput
    orderBy?: UserSavedProjectOrderByWithRelationInput | UserSavedProjectOrderByWithRelationInput[]
    cursor?: UserSavedProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSavedProjectScalarFieldEnum | UserSavedProjectScalarFieldEnum[]
  }

  /**
   * Project.projectTags
   */
  export type Project$projectTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    where?: ProjectTagWhereInput
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    cursor?: ProjectTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMetrics
   */

  export type AggregateProjectMetrics = {
    _count: ProjectMetricsCountAggregateOutputType | null
    _avg: ProjectMetricsAvgAggregateOutputType | null
    _sum: ProjectMetricsSumAggregateOutputType | null
    _min: ProjectMetricsMinAggregateOutputType | null
    _max: ProjectMetricsMaxAggregateOutputType | null
  }

  export type ProjectMetricsAvgAggregateOutputType = {
    stars: number | null
    forks: number | null
    issues: number | null
    contributors: number | null
    upvotes: number | null
    comments: number | null
    views: number | null
    dailyGrowth: number | null
    weeklyGrowth: number | null
  }

  export type ProjectMetricsSumAggregateOutputType = {
    stars: number | null
    forks: number | null
    issues: number | null
    contributors: number | null
    upvotes: number | null
    comments: number | null
    views: number | null
    dailyGrowth: number | null
    weeklyGrowth: number | null
  }

  export type ProjectMetricsMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    stars: number | null
    forks: number | null
    issues: number | null
    contributors: number | null
    upvotes: number | null
    comments: number | null
    views: number | null
    dailyGrowth: number | null
    weeklyGrowth: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMetricsMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    stars: number | null
    forks: number | null
    issues: number | null
    contributors: number | null
    upvotes: number | null
    comments: number | null
    views: number | null
    dailyGrowth: number | null
    weeklyGrowth: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMetricsCountAggregateOutputType = {
    id: number
    projectId: number
    stars: number
    forks: number
    issues: number
    contributors: number
    upvotes: number
    comments: number
    views: number
    dailyGrowth: number
    weeklyGrowth: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMetricsAvgAggregateInputType = {
    stars?: true
    forks?: true
    issues?: true
    contributors?: true
    upvotes?: true
    comments?: true
    views?: true
    dailyGrowth?: true
    weeklyGrowth?: true
  }

  export type ProjectMetricsSumAggregateInputType = {
    stars?: true
    forks?: true
    issues?: true
    contributors?: true
    upvotes?: true
    comments?: true
    views?: true
    dailyGrowth?: true
    weeklyGrowth?: true
  }

  export type ProjectMetricsMinAggregateInputType = {
    id?: true
    projectId?: true
    stars?: true
    forks?: true
    issues?: true
    contributors?: true
    upvotes?: true
    comments?: true
    views?: true
    dailyGrowth?: true
    weeklyGrowth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMetricsMaxAggregateInputType = {
    id?: true
    projectId?: true
    stars?: true
    forks?: true
    issues?: true
    contributors?: true
    upvotes?: true
    comments?: true
    views?: true
    dailyGrowth?: true
    weeklyGrowth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMetricsCountAggregateInputType = {
    id?: true
    projectId?: true
    stars?: true
    forks?: true
    issues?: true
    contributors?: true
    upvotes?: true
    comments?: true
    views?: true
    dailyGrowth?: true
    weeklyGrowth?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMetrics to aggregate.
     */
    where?: ProjectMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMetrics to fetch.
     */
    orderBy?: ProjectMetricsOrderByWithRelationInput | ProjectMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMetrics
    **/
    _count?: true | ProjectMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMetricsMaxAggregateInputType
  }

  export type GetProjectMetricsAggregateType<T extends ProjectMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMetrics[P]>
      : GetScalarType<T[P], AggregateProjectMetrics[P]>
  }




  export type ProjectMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMetricsWhereInput
    orderBy?: ProjectMetricsOrderByWithAggregationInput | ProjectMetricsOrderByWithAggregationInput[]
    by: ProjectMetricsScalarFieldEnum[] | ProjectMetricsScalarFieldEnum
    having?: ProjectMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMetricsCountAggregateInputType | true
    _avg?: ProjectMetricsAvgAggregateInputType
    _sum?: ProjectMetricsSumAggregateInputType
    _min?: ProjectMetricsMinAggregateInputType
    _max?: ProjectMetricsMaxAggregateInputType
  }

  export type ProjectMetricsGroupByOutputType = {
    id: string
    projectId: string
    stars: number | null
    forks: number | null
    issues: number | null
    contributors: number | null
    upvotes: number | null
    comments: number | null
    views: number | null
    dailyGrowth: number | null
    weeklyGrowth: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectMetricsCountAggregateOutputType | null
    _avg: ProjectMetricsAvgAggregateOutputType | null
    _sum: ProjectMetricsSumAggregateOutputType | null
    _min: ProjectMetricsMinAggregateOutputType | null
    _max: ProjectMetricsMaxAggregateOutputType | null
  }

  type GetProjectMetricsGroupByPayload<T extends ProjectMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMetricsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    stars?: boolean
    forks?: boolean
    issues?: boolean
    contributors?: boolean
    upvotes?: boolean
    comments?: boolean
    views?: boolean
    dailyGrowth?: boolean
    weeklyGrowth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMetrics"]>



  export type ProjectMetricsSelectScalar = {
    id?: boolean
    projectId?: boolean
    stars?: boolean
    forks?: boolean
    issues?: boolean
    contributors?: boolean
    upvotes?: boolean
    comments?: boolean
    views?: boolean
    dailyGrowth?: boolean
    weeklyGrowth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "stars" | "forks" | "issues" | "contributors" | "upvotes" | "comments" | "views" | "dailyGrowth" | "weeklyGrowth" | "createdAt" | "updatedAt", ExtArgs["result"]["projectMetrics"]>
  export type ProjectMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMetrics"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      stars: number | null
      forks: number | null
      issues: number | null
      contributors: number | null
      upvotes: number | null
      comments: number | null
      views: number | null
      dailyGrowth: number | null
      weeklyGrowth: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectMetrics"]>
    composites: {}
  }

  type ProjectMetricsGetPayload<S extends boolean | null | undefined | ProjectMetricsDefaultArgs> = $Result.GetResult<Prisma.$ProjectMetricsPayload, S>

  type ProjectMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMetricsCountAggregateInputType | true
    }

  export interface ProjectMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMetrics'], meta: { name: 'ProjectMetrics' } }
    /**
     * Find zero or one ProjectMetrics that matches the filter.
     * @param {ProjectMetricsFindUniqueArgs} args - Arguments to find a ProjectMetrics
     * @example
     * // Get one ProjectMetrics
     * const projectMetrics = await prisma.projectMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMetricsFindUniqueArgs>(args: SelectSubset<T, ProjectMetricsFindUniqueArgs<ExtArgs>>): Prisma__ProjectMetricsClient<$Result.GetResult<Prisma.$ProjectMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMetricsFindUniqueOrThrowArgs} args - Arguments to find a ProjectMetrics
     * @example
     * // Get one ProjectMetrics
     * const projectMetrics = await prisma.projectMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMetricsClient<$Result.GetResult<Prisma.$ProjectMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMetricsFindFirstArgs} args - Arguments to find a ProjectMetrics
     * @example
     * // Get one ProjectMetrics
     * const projectMetrics = await prisma.projectMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMetricsFindFirstArgs>(args?: SelectSubset<T, ProjectMetricsFindFirstArgs<ExtArgs>>): Prisma__ProjectMetricsClient<$Result.GetResult<Prisma.$ProjectMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMetricsFindFirstOrThrowArgs} args - Arguments to find a ProjectMetrics
     * @example
     * // Get one ProjectMetrics
     * const projectMetrics = await prisma.projectMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMetricsClient<$Result.GetResult<Prisma.$ProjectMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMetrics
     * const projectMetrics = await prisma.projectMetrics.findMany()
     * 
     * // Get first 10 ProjectMetrics
     * const projectMetrics = await prisma.projectMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectMetricsWithIdOnly = await prisma.projectMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectMetricsFindManyArgs>(args?: SelectSubset<T, ProjectMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMetrics.
     * @param {ProjectMetricsCreateArgs} args - Arguments to create a ProjectMetrics.
     * @example
     * // Create one ProjectMetrics
     * const ProjectMetrics = await prisma.projectMetrics.create({
     *   data: {
     *     // ... data to create a ProjectMetrics
     *   }
     * })
     * 
     */
    create<T extends ProjectMetricsCreateArgs>(args: SelectSubset<T, ProjectMetricsCreateArgs<ExtArgs>>): Prisma__ProjectMetricsClient<$Result.GetResult<Prisma.$ProjectMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMetrics.
     * @param {ProjectMetricsCreateManyArgs} args - Arguments to create many ProjectMetrics.
     * @example
     * // Create many ProjectMetrics
     * const projectMetrics = await prisma.projectMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMetricsCreateManyArgs>(args?: SelectSubset<T, ProjectMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectMetrics.
     * @param {ProjectMetricsDeleteArgs} args - Arguments to delete one ProjectMetrics.
     * @example
     * // Delete one ProjectMetrics
     * const ProjectMetrics = await prisma.projectMetrics.delete({
     *   where: {
     *     // ... filter to delete one ProjectMetrics
     *   }
     * })
     * 
     */
    delete<T extends ProjectMetricsDeleteArgs>(args: SelectSubset<T, ProjectMetricsDeleteArgs<ExtArgs>>): Prisma__ProjectMetricsClient<$Result.GetResult<Prisma.$ProjectMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMetrics.
     * @param {ProjectMetricsUpdateArgs} args - Arguments to update one ProjectMetrics.
     * @example
     * // Update one ProjectMetrics
     * const projectMetrics = await prisma.projectMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMetricsUpdateArgs>(args: SelectSubset<T, ProjectMetricsUpdateArgs<ExtArgs>>): Prisma__ProjectMetricsClient<$Result.GetResult<Prisma.$ProjectMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMetrics.
     * @param {ProjectMetricsDeleteManyArgs} args - Arguments to filter ProjectMetrics to delete.
     * @example
     * // Delete a few ProjectMetrics
     * const { count } = await prisma.projectMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMetricsDeleteManyArgs>(args?: SelectSubset<T, ProjectMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMetrics
     * const projectMetrics = await prisma.projectMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMetricsUpdateManyArgs>(args: SelectSubset<T, ProjectMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectMetrics.
     * @param {ProjectMetricsUpsertArgs} args - Arguments to update or create a ProjectMetrics.
     * @example
     * // Update or create a ProjectMetrics
     * const projectMetrics = await prisma.projectMetrics.upsert({
     *   create: {
     *     // ... data to create a ProjectMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMetrics we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMetricsUpsertArgs>(args: SelectSubset<T, ProjectMetricsUpsertArgs<ExtArgs>>): Prisma__ProjectMetricsClient<$Result.GetResult<Prisma.$ProjectMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMetricsCountArgs} args - Arguments to filter ProjectMetrics to count.
     * @example
     * // Count the number of ProjectMetrics
     * const count = await prisma.projectMetrics.count({
     *   where: {
     *     // ... the filter for the ProjectMetrics we want to count
     *   }
     * })
    **/
    count<T extends ProjectMetricsCountArgs>(
      args?: Subset<T, ProjectMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectMetricsAggregateArgs>(args: Subset<T, ProjectMetricsAggregateArgs>): Prisma.PrismaPromise<GetProjectMetricsAggregateType<T>>

    /**
     * Group by ProjectMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMetricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMetricsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMetricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMetrics model
   */
  readonly fields: ProjectMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectMetrics model
   */
  interface ProjectMetricsFieldRefs {
    readonly id: FieldRef<"ProjectMetrics", 'String'>
    readonly projectId: FieldRef<"ProjectMetrics", 'String'>
    readonly stars: FieldRef<"ProjectMetrics", 'Int'>
    readonly forks: FieldRef<"ProjectMetrics", 'Int'>
    readonly issues: FieldRef<"ProjectMetrics", 'Int'>
    readonly contributors: FieldRef<"ProjectMetrics", 'Int'>
    readonly upvotes: FieldRef<"ProjectMetrics", 'Int'>
    readonly comments: FieldRef<"ProjectMetrics", 'Int'>
    readonly views: FieldRef<"ProjectMetrics", 'Int'>
    readonly dailyGrowth: FieldRef<"ProjectMetrics", 'Float'>
    readonly weeklyGrowth: FieldRef<"ProjectMetrics", 'Float'>
    readonly createdAt: FieldRef<"ProjectMetrics", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectMetrics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMetrics findUnique
   */
  export type ProjectMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMetrics
     */
    select?: ProjectMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMetrics
     */
    omit?: ProjectMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMetricsInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMetrics to fetch.
     */
    where: ProjectMetricsWhereUniqueInput
  }

  /**
   * ProjectMetrics findUniqueOrThrow
   */
  export type ProjectMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMetrics
     */
    select?: ProjectMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMetrics
     */
    omit?: ProjectMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMetricsInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMetrics to fetch.
     */
    where: ProjectMetricsWhereUniqueInput
  }

  /**
   * ProjectMetrics findFirst
   */
  export type ProjectMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMetrics
     */
    select?: ProjectMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMetrics
     */
    omit?: ProjectMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMetricsInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMetrics to fetch.
     */
    where?: ProjectMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMetrics to fetch.
     */
    orderBy?: ProjectMetricsOrderByWithRelationInput | ProjectMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMetrics.
     */
    cursor?: ProjectMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMetrics.
     */
    distinct?: ProjectMetricsScalarFieldEnum | ProjectMetricsScalarFieldEnum[]
  }

  /**
   * ProjectMetrics findFirstOrThrow
   */
  export type ProjectMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMetrics
     */
    select?: ProjectMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMetrics
     */
    omit?: ProjectMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMetricsInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMetrics to fetch.
     */
    where?: ProjectMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMetrics to fetch.
     */
    orderBy?: ProjectMetricsOrderByWithRelationInput | ProjectMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMetrics.
     */
    cursor?: ProjectMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMetrics.
     */
    distinct?: ProjectMetricsScalarFieldEnum | ProjectMetricsScalarFieldEnum[]
  }

  /**
   * ProjectMetrics findMany
   */
  export type ProjectMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMetrics
     */
    select?: ProjectMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMetrics
     */
    omit?: ProjectMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMetricsInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMetrics to fetch.
     */
    where?: ProjectMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMetrics to fetch.
     */
    orderBy?: ProjectMetricsOrderByWithRelationInput | ProjectMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMetrics.
     */
    cursor?: ProjectMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMetrics.
     */
    skip?: number
    distinct?: ProjectMetricsScalarFieldEnum | ProjectMetricsScalarFieldEnum[]
  }

  /**
   * ProjectMetrics create
   */
  export type ProjectMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMetrics
     */
    select?: ProjectMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMetrics
     */
    omit?: ProjectMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMetrics.
     */
    data: XOR<ProjectMetricsCreateInput, ProjectMetricsUncheckedCreateInput>
  }

  /**
   * ProjectMetrics createMany
   */
  export type ProjectMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMetrics.
     */
    data: ProjectMetricsCreateManyInput | ProjectMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMetrics update
   */
  export type ProjectMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMetrics
     */
    select?: ProjectMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMetrics
     */
    omit?: ProjectMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMetrics.
     */
    data: XOR<ProjectMetricsUpdateInput, ProjectMetricsUncheckedUpdateInput>
    /**
     * Choose, which ProjectMetrics to update.
     */
    where: ProjectMetricsWhereUniqueInput
  }

  /**
   * ProjectMetrics updateMany
   */
  export type ProjectMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMetrics.
     */
    data: XOR<ProjectMetricsUpdateManyMutationInput, ProjectMetricsUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMetrics to update
     */
    where?: ProjectMetricsWhereInput
    /**
     * Limit how many ProjectMetrics to update.
     */
    limit?: number
  }

  /**
   * ProjectMetrics upsert
   */
  export type ProjectMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMetrics
     */
    select?: ProjectMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMetrics
     */
    omit?: ProjectMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMetrics to update in case it exists.
     */
    where: ProjectMetricsWhereUniqueInput
    /**
     * In case the ProjectMetrics found by the `where` argument doesn't exist, create a new ProjectMetrics with this data.
     */
    create: XOR<ProjectMetricsCreateInput, ProjectMetricsUncheckedCreateInput>
    /**
     * In case the ProjectMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMetricsUpdateInput, ProjectMetricsUncheckedUpdateInput>
  }

  /**
   * ProjectMetrics delete
   */
  export type ProjectMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMetrics
     */
    select?: ProjectMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMetrics
     */
    omit?: ProjectMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMetricsInclude<ExtArgs> | null
    /**
     * Filter which ProjectMetrics to delete.
     */
    where: ProjectMetricsWhereUniqueInput
  }

  /**
   * ProjectMetrics deleteMany
   */
  export type ProjectMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMetrics to delete
     */
    where?: ProjectMetricsWhereInput
    /**
     * Limit how many ProjectMetrics to delete.
     */
    limit?: number
  }

  /**
   * ProjectMetrics without action
   */
  export type ProjectMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMetrics
     */
    select?: ProjectMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMetrics
     */
    omit?: ProjectMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMetricsInclude<ExtArgs> | null
  }


  /**
   * Model ProjectAnalysis
   */

  export type AggregateProjectAnalysis = {
    _count: ProjectAnalysisCountAggregateOutputType | null
    _avg: ProjectAnalysisAvgAggregateOutputType | null
    _sum: ProjectAnalysisSumAggregateOutputType | null
    _min: ProjectAnalysisMinAggregateOutputType | null
    _max: ProjectAnalysisMaxAggregateOutputType | null
  }

  export type ProjectAnalysisAvgAggregateOutputType = {
    score: number | null
    successProbability: number | null
  }

  export type ProjectAnalysisSumAggregateOutputType = {
    score: number | null
    successProbability: number | null
  }

  export type ProjectAnalysisMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    score: number | null
    trend: string | null
    marketPotential: string | null
    competitionLevel: string | null
    successProbability: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectAnalysisMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    score: number | null
    trend: string | null
    marketPotential: string | null
    competitionLevel: string | null
    successProbability: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectAnalysisCountAggregateOutputType = {
    id: number
    projectId: number
    score: number
    trend: number
    marketPotential: number
    competitionLevel: number
    successProbability: number
    competitors: number
    keyInsights: number
    risks: number
    opportunities: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAnalysisAvgAggregateInputType = {
    score?: true
    successProbability?: true
  }

  export type ProjectAnalysisSumAggregateInputType = {
    score?: true
    successProbability?: true
  }

  export type ProjectAnalysisMinAggregateInputType = {
    id?: true
    projectId?: true
    score?: true
    trend?: true
    marketPotential?: true
    competitionLevel?: true
    successProbability?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectAnalysisMaxAggregateInputType = {
    id?: true
    projectId?: true
    score?: true
    trend?: true
    marketPotential?: true
    competitionLevel?: true
    successProbability?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectAnalysisCountAggregateInputType = {
    id?: true
    projectId?: true
    score?: true
    trend?: true
    marketPotential?: true
    competitionLevel?: true
    successProbability?: true
    competitors?: true
    keyInsights?: true
    risks?: true
    opportunities?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAnalysis to aggregate.
     */
    where?: ProjectAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAnalyses to fetch.
     */
    orderBy?: ProjectAnalysisOrderByWithRelationInput | ProjectAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectAnalyses
    **/
    _count?: true | ProjectAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectAnalysisMaxAggregateInputType
  }

  export type GetProjectAnalysisAggregateType<T extends ProjectAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectAnalysis[P]>
      : GetScalarType<T[P], AggregateProjectAnalysis[P]>
  }




  export type ProjectAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAnalysisWhereInput
    orderBy?: ProjectAnalysisOrderByWithAggregationInput | ProjectAnalysisOrderByWithAggregationInput[]
    by: ProjectAnalysisScalarFieldEnum[] | ProjectAnalysisScalarFieldEnum
    having?: ProjectAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectAnalysisCountAggregateInputType | true
    _avg?: ProjectAnalysisAvgAggregateInputType
    _sum?: ProjectAnalysisSumAggregateInputType
    _min?: ProjectAnalysisMinAggregateInputType
    _max?: ProjectAnalysisMaxAggregateInputType
  }

  export type ProjectAnalysisGroupByOutputType = {
    id: string
    projectId: string
    score: number
    trend: string
    marketPotential: string
    competitionLevel: string
    successProbability: number
    competitors: JsonValue
    keyInsights: JsonValue
    risks: JsonValue
    opportunities: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProjectAnalysisCountAggregateOutputType | null
    _avg: ProjectAnalysisAvgAggregateOutputType | null
    _sum: ProjectAnalysisSumAggregateOutputType | null
    _min: ProjectAnalysisMinAggregateOutputType | null
    _max: ProjectAnalysisMaxAggregateOutputType | null
  }

  type GetProjectAnalysisGroupByPayload<T extends ProjectAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type ProjectAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    score?: boolean
    trend?: boolean
    marketPotential?: boolean
    competitionLevel?: boolean
    successProbability?: boolean
    competitors?: boolean
    keyInsights?: boolean
    risks?: boolean
    opportunities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAnalysis"]>



  export type ProjectAnalysisSelectScalar = {
    id?: boolean
    projectId?: boolean
    score?: boolean
    trend?: boolean
    marketPotential?: boolean
    competitionLevel?: boolean
    successProbability?: boolean
    competitors?: boolean
    keyInsights?: boolean
    risks?: boolean
    opportunities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "score" | "trend" | "marketPotential" | "competitionLevel" | "successProbability" | "competitors" | "keyInsights" | "risks" | "opportunities" | "createdAt" | "updatedAt", ExtArgs["result"]["projectAnalysis"]>
  export type ProjectAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectAnalysis"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      score: number
      trend: string
      marketPotential: string
      competitionLevel: string
      successProbability: number
      competitors: Prisma.JsonValue
      keyInsights: Prisma.JsonValue
      risks: Prisma.JsonValue
      opportunities: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectAnalysis"]>
    composites: {}
  }

  type ProjectAnalysisGetPayload<S extends boolean | null | undefined | ProjectAnalysisDefaultArgs> = $Result.GetResult<Prisma.$ProjectAnalysisPayload, S>

  type ProjectAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectAnalysisCountAggregateInputType | true
    }

  export interface ProjectAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectAnalysis'], meta: { name: 'ProjectAnalysis' } }
    /**
     * Find zero or one ProjectAnalysis that matches the filter.
     * @param {ProjectAnalysisFindUniqueArgs} args - Arguments to find a ProjectAnalysis
     * @example
     * // Get one ProjectAnalysis
     * const projectAnalysis = await prisma.projectAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectAnalysisFindUniqueArgs>(args: SelectSubset<T, ProjectAnalysisFindUniqueArgs<ExtArgs>>): Prisma__ProjectAnalysisClient<$Result.GetResult<Prisma.$ProjectAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectAnalysisFindUniqueOrThrowArgs} args - Arguments to find a ProjectAnalysis
     * @example
     * // Get one ProjectAnalysis
     * const projectAnalysis = await prisma.projectAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectAnalysisClient<$Result.GetResult<Prisma.$ProjectAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnalysisFindFirstArgs} args - Arguments to find a ProjectAnalysis
     * @example
     * // Get one ProjectAnalysis
     * const projectAnalysis = await prisma.projectAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectAnalysisFindFirstArgs>(args?: SelectSubset<T, ProjectAnalysisFindFirstArgs<ExtArgs>>): Prisma__ProjectAnalysisClient<$Result.GetResult<Prisma.$ProjectAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnalysisFindFirstOrThrowArgs} args - Arguments to find a ProjectAnalysis
     * @example
     * // Get one ProjectAnalysis
     * const projectAnalysis = await prisma.projectAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectAnalysisClient<$Result.GetResult<Prisma.$ProjectAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectAnalyses
     * const projectAnalyses = await prisma.projectAnalysis.findMany()
     * 
     * // Get first 10 ProjectAnalyses
     * const projectAnalyses = await prisma.projectAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectAnalysisWithIdOnly = await prisma.projectAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectAnalysisFindManyArgs>(args?: SelectSubset<T, ProjectAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectAnalysis.
     * @param {ProjectAnalysisCreateArgs} args - Arguments to create a ProjectAnalysis.
     * @example
     * // Create one ProjectAnalysis
     * const ProjectAnalysis = await prisma.projectAnalysis.create({
     *   data: {
     *     // ... data to create a ProjectAnalysis
     *   }
     * })
     * 
     */
    create<T extends ProjectAnalysisCreateArgs>(args: SelectSubset<T, ProjectAnalysisCreateArgs<ExtArgs>>): Prisma__ProjectAnalysisClient<$Result.GetResult<Prisma.$ProjectAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectAnalyses.
     * @param {ProjectAnalysisCreateManyArgs} args - Arguments to create many ProjectAnalyses.
     * @example
     * // Create many ProjectAnalyses
     * const projectAnalysis = await prisma.projectAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectAnalysisCreateManyArgs>(args?: SelectSubset<T, ProjectAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectAnalysis.
     * @param {ProjectAnalysisDeleteArgs} args - Arguments to delete one ProjectAnalysis.
     * @example
     * // Delete one ProjectAnalysis
     * const ProjectAnalysis = await prisma.projectAnalysis.delete({
     *   where: {
     *     // ... filter to delete one ProjectAnalysis
     *   }
     * })
     * 
     */
    delete<T extends ProjectAnalysisDeleteArgs>(args: SelectSubset<T, ProjectAnalysisDeleteArgs<ExtArgs>>): Prisma__ProjectAnalysisClient<$Result.GetResult<Prisma.$ProjectAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectAnalysis.
     * @param {ProjectAnalysisUpdateArgs} args - Arguments to update one ProjectAnalysis.
     * @example
     * // Update one ProjectAnalysis
     * const projectAnalysis = await prisma.projectAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectAnalysisUpdateArgs>(args: SelectSubset<T, ProjectAnalysisUpdateArgs<ExtArgs>>): Prisma__ProjectAnalysisClient<$Result.GetResult<Prisma.$ProjectAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectAnalyses.
     * @param {ProjectAnalysisDeleteManyArgs} args - Arguments to filter ProjectAnalyses to delete.
     * @example
     * // Delete a few ProjectAnalyses
     * const { count } = await prisma.projectAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectAnalysisDeleteManyArgs>(args?: SelectSubset<T, ProjectAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectAnalyses
     * const projectAnalysis = await prisma.projectAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectAnalysisUpdateManyArgs>(args: SelectSubset<T, ProjectAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectAnalysis.
     * @param {ProjectAnalysisUpsertArgs} args - Arguments to update or create a ProjectAnalysis.
     * @example
     * // Update or create a ProjectAnalysis
     * const projectAnalysis = await prisma.projectAnalysis.upsert({
     *   create: {
     *     // ... data to create a ProjectAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends ProjectAnalysisUpsertArgs>(args: SelectSubset<T, ProjectAnalysisUpsertArgs<ExtArgs>>): Prisma__ProjectAnalysisClient<$Result.GetResult<Prisma.$ProjectAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnalysisCountArgs} args - Arguments to filter ProjectAnalyses to count.
     * @example
     * // Count the number of ProjectAnalyses
     * const count = await prisma.projectAnalysis.count({
     *   where: {
     *     // ... the filter for the ProjectAnalyses we want to count
     *   }
     * })
    **/
    count<T extends ProjectAnalysisCountArgs>(
      args?: Subset<T, ProjectAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAnalysisAggregateArgs>(args: Subset<T, ProjectAnalysisAggregateArgs>): Prisma.PrismaPromise<GetProjectAnalysisAggregateType<T>>

    /**
     * Group by ProjectAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAnalysisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: ProjectAnalysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectAnalysis model
   */
  readonly fields: ProjectAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectAnalysis model
   */
  interface ProjectAnalysisFieldRefs {
    readonly id: FieldRef<"ProjectAnalysis", 'String'>
    readonly projectId: FieldRef<"ProjectAnalysis", 'String'>
    readonly score: FieldRef<"ProjectAnalysis", 'Float'>
    readonly trend: FieldRef<"ProjectAnalysis", 'String'>
    readonly marketPotential: FieldRef<"ProjectAnalysis", 'String'>
    readonly competitionLevel: FieldRef<"ProjectAnalysis", 'String'>
    readonly successProbability: FieldRef<"ProjectAnalysis", 'Float'>
    readonly competitors: FieldRef<"ProjectAnalysis", 'Json'>
    readonly keyInsights: FieldRef<"ProjectAnalysis", 'Json'>
    readonly risks: FieldRef<"ProjectAnalysis", 'Json'>
    readonly opportunities: FieldRef<"ProjectAnalysis", 'Json'>
    readonly createdAt: FieldRef<"ProjectAnalysis", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectAnalysis findUnique
   */
  export type ProjectAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnalysis
     */
    select?: ProjectAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnalysis
     */
    omit?: ProjectAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAnalysis to fetch.
     */
    where: ProjectAnalysisWhereUniqueInput
  }

  /**
   * ProjectAnalysis findUniqueOrThrow
   */
  export type ProjectAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnalysis
     */
    select?: ProjectAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnalysis
     */
    omit?: ProjectAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAnalysis to fetch.
     */
    where: ProjectAnalysisWhereUniqueInput
  }

  /**
   * ProjectAnalysis findFirst
   */
  export type ProjectAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnalysis
     */
    select?: ProjectAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnalysis
     */
    omit?: ProjectAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAnalysis to fetch.
     */
    where?: ProjectAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAnalyses to fetch.
     */
    orderBy?: ProjectAnalysisOrderByWithRelationInput | ProjectAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAnalyses.
     */
    cursor?: ProjectAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAnalyses.
     */
    distinct?: ProjectAnalysisScalarFieldEnum | ProjectAnalysisScalarFieldEnum[]
  }

  /**
   * ProjectAnalysis findFirstOrThrow
   */
  export type ProjectAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnalysis
     */
    select?: ProjectAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnalysis
     */
    omit?: ProjectAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAnalysis to fetch.
     */
    where?: ProjectAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAnalyses to fetch.
     */
    orderBy?: ProjectAnalysisOrderByWithRelationInput | ProjectAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAnalyses.
     */
    cursor?: ProjectAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAnalyses.
     */
    distinct?: ProjectAnalysisScalarFieldEnum | ProjectAnalysisScalarFieldEnum[]
  }

  /**
   * ProjectAnalysis findMany
   */
  export type ProjectAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnalysis
     */
    select?: ProjectAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnalysis
     */
    omit?: ProjectAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAnalyses to fetch.
     */
    where?: ProjectAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAnalyses to fetch.
     */
    orderBy?: ProjectAnalysisOrderByWithRelationInput | ProjectAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectAnalyses.
     */
    cursor?: ProjectAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAnalyses.
     */
    skip?: number
    distinct?: ProjectAnalysisScalarFieldEnum | ProjectAnalysisScalarFieldEnum[]
  }

  /**
   * ProjectAnalysis create
   */
  export type ProjectAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnalysis
     */
    select?: ProjectAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnalysis
     */
    omit?: ProjectAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectAnalysis.
     */
    data: XOR<ProjectAnalysisCreateInput, ProjectAnalysisUncheckedCreateInput>
  }

  /**
   * ProjectAnalysis createMany
   */
  export type ProjectAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectAnalyses.
     */
    data: ProjectAnalysisCreateManyInput | ProjectAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectAnalysis update
   */
  export type ProjectAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnalysis
     */
    select?: ProjectAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnalysis
     */
    omit?: ProjectAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectAnalysis.
     */
    data: XOR<ProjectAnalysisUpdateInput, ProjectAnalysisUncheckedUpdateInput>
    /**
     * Choose, which ProjectAnalysis to update.
     */
    where: ProjectAnalysisWhereUniqueInput
  }

  /**
   * ProjectAnalysis updateMany
   */
  export type ProjectAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectAnalyses.
     */
    data: XOR<ProjectAnalysisUpdateManyMutationInput, ProjectAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which ProjectAnalyses to update
     */
    where?: ProjectAnalysisWhereInput
    /**
     * Limit how many ProjectAnalyses to update.
     */
    limit?: number
  }

  /**
   * ProjectAnalysis upsert
   */
  export type ProjectAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnalysis
     */
    select?: ProjectAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnalysis
     */
    omit?: ProjectAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectAnalysis to update in case it exists.
     */
    where: ProjectAnalysisWhereUniqueInput
    /**
     * In case the ProjectAnalysis found by the `where` argument doesn't exist, create a new ProjectAnalysis with this data.
     */
    create: XOR<ProjectAnalysisCreateInput, ProjectAnalysisUncheckedCreateInput>
    /**
     * In case the ProjectAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectAnalysisUpdateInput, ProjectAnalysisUncheckedUpdateInput>
  }

  /**
   * ProjectAnalysis delete
   */
  export type ProjectAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnalysis
     */
    select?: ProjectAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnalysis
     */
    omit?: ProjectAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnalysisInclude<ExtArgs> | null
    /**
     * Filter which ProjectAnalysis to delete.
     */
    where: ProjectAnalysisWhereUniqueInput
  }

  /**
   * ProjectAnalysis deleteMany
   */
  export type ProjectAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAnalyses to delete
     */
    where?: ProjectAnalysisWhereInput
    /**
     * Limit how many ProjectAnalyses to delete.
     */
    limit?: number
  }

  /**
   * ProjectAnalysis without action
   */
  export type ProjectAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAnalysis
     */
    select?: ProjectAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAnalysis
     */
    omit?: ProjectAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model UserSavedProject
   */

  export type AggregateUserSavedProject = {
    _count: UserSavedProjectCountAggregateOutputType | null
    _min: UserSavedProjectMinAggregateOutputType | null
    _max: UserSavedProjectMaxAggregateOutputType | null
  }

  export type UserSavedProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type UserSavedProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type UserSavedProjectCountAggregateOutputType = {
    id: number
    userId: number
    projectId: number
    notes: number
    createdAt: number
    _all: number
  }


  export type UserSavedProjectMinAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    notes?: true
    createdAt?: true
  }

  export type UserSavedProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    notes?: true
    createdAt?: true
  }

  export type UserSavedProjectCountAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type UserSavedProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSavedProject to aggregate.
     */
    where?: UserSavedProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSavedProjects to fetch.
     */
    orderBy?: UserSavedProjectOrderByWithRelationInput | UserSavedProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSavedProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSavedProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSavedProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSavedProjects
    **/
    _count?: true | UserSavedProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSavedProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSavedProjectMaxAggregateInputType
  }

  export type GetUserSavedProjectAggregateType<T extends UserSavedProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSavedProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSavedProject[P]>
      : GetScalarType<T[P], AggregateUserSavedProject[P]>
  }




  export type UserSavedProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSavedProjectWhereInput
    orderBy?: UserSavedProjectOrderByWithAggregationInput | UserSavedProjectOrderByWithAggregationInput[]
    by: UserSavedProjectScalarFieldEnum[] | UserSavedProjectScalarFieldEnum
    having?: UserSavedProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSavedProjectCountAggregateInputType | true
    _min?: UserSavedProjectMinAggregateInputType
    _max?: UserSavedProjectMaxAggregateInputType
  }

  export type UserSavedProjectGroupByOutputType = {
    id: string
    userId: string
    projectId: string
    notes: string | null
    createdAt: Date
    _count: UserSavedProjectCountAggregateOutputType | null
    _min: UserSavedProjectMinAggregateOutputType | null
    _max: UserSavedProjectMaxAggregateOutputType | null
  }

  type GetUserSavedProjectGroupByPayload<T extends UserSavedProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSavedProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSavedProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSavedProjectGroupByOutputType[P]>
            : GetScalarType<T[P], UserSavedProjectGroupByOutputType[P]>
        }
      >
    >


  export type UserSavedProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSavedProject"]>



  export type UserSavedProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    projectId?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type UserSavedProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "projectId" | "notes" | "createdAt", ExtArgs["result"]["userSavedProject"]>
  export type UserSavedProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $UserSavedProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSavedProject"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      projectId: string
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["userSavedProject"]>
    composites: {}
  }

  type UserSavedProjectGetPayload<S extends boolean | null | undefined | UserSavedProjectDefaultArgs> = $Result.GetResult<Prisma.$UserSavedProjectPayload, S>

  type UserSavedProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSavedProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSavedProjectCountAggregateInputType | true
    }

  export interface UserSavedProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSavedProject'], meta: { name: 'UserSavedProject' } }
    /**
     * Find zero or one UserSavedProject that matches the filter.
     * @param {UserSavedProjectFindUniqueArgs} args - Arguments to find a UserSavedProject
     * @example
     * // Get one UserSavedProject
     * const userSavedProject = await prisma.userSavedProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSavedProjectFindUniqueArgs>(args: SelectSubset<T, UserSavedProjectFindUniqueArgs<ExtArgs>>): Prisma__UserSavedProjectClient<$Result.GetResult<Prisma.$UserSavedProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSavedProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSavedProjectFindUniqueOrThrowArgs} args - Arguments to find a UserSavedProject
     * @example
     * // Get one UserSavedProject
     * const userSavedProject = await prisma.userSavedProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSavedProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSavedProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSavedProjectClient<$Result.GetResult<Prisma.$UserSavedProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSavedProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedProjectFindFirstArgs} args - Arguments to find a UserSavedProject
     * @example
     * // Get one UserSavedProject
     * const userSavedProject = await prisma.userSavedProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSavedProjectFindFirstArgs>(args?: SelectSubset<T, UserSavedProjectFindFirstArgs<ExtArgs>>): Prisma__UserSavedProjectClient<$Result.GetResult<Prisma.$UserSavedProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSavedProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedProjectFindFirstOrThrowArgs} args - Arguments to find a UserSavedProject
     * @example
     * // Get one UserSavedProject
     * const userSavedProject = await prisma.userSavedProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSavedProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSavedProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSavedProjectClient<$Result.GetResult<Prisma.$UserSavedProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSavedProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSavedProjects
     * const userSavedProjects = await prisma.userSavedProject.findMany()
     * 
     * // Get first 10 UserSavedProjects
     * const userSavedProjects = await prisma.userSavedProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSavedProjectWithIdOnly = await prisma.userSavedProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSavedProjectFindManyArgs>(args?: SelectSubset<T, UserSavedProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSavedProject.
     * @param {UserSavedProjectCreateArgs} args - Arguments to create a UserSavedProject.
     * @example
     * // Create one UserSavedProject
     * const UserSavedProject = await prisma.userSavedProject.create({
     *   data: {
     *     // ... data to create a UserSavedProject
     *   }
     * })
     * 
     */
    create<T extends UserSavedProjectCreateArgs>(args: SelectSubset<T, UserSavedProjectCreateArgs<ExtArgs>>): Prisma__UserSavedProjectClient<$Result.GetResult<Prisma.$UserSavedProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSavedProjects.
     * @param {UserSavedProjectCreateManyArgs} args - Arguments to create many UserSavedProjects.
     * @example
     * // Create many UserSavedProjects
     * const userSavedProject = await prisma.userSavedProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSavedProjectCreateManyArgs>(args?: SelectSubset<T, UserSavedProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserSavedProject.
     * @param {UserSavedProjectDeleteArgs} args - Arguments to delete one UserSavedProject.
     * @example
     * // Delete one UserSavedProject
     * const UserSavedProject = await prisma.userSavedProject.delete({
     *   where: {
     *     // ... filter to delete one UserSavedProject
     *   }
     * })
     * 
     */
    delete<T extends UserSavedProjectDeleteArgs>(args: SelectSubset<T, UserSavedProjectDeleteArgs<ExtArgs>>): Prisma__UserSavedProjectClient<$Result.GetResult<Prisma.$UserSavedProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSavedProject.
     * @param {UserSavedProjectUpdateArgs} args - Arguments to update one UserSavedProject.
     * @example
     * // Update one UserSavedProject
     * const userSavedProject = await prisma.userSavedProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSavedProjectUpdateArgs>(args: SelectSubset<T, UserSavedProjectUpdateArgs<ExtArgs>>): Prisma__UserSavedProjectClient<$Result.GetResult<Prisma.$UserSavedProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSavedProjects.
     * @param {UserSavedProjectDeleteManyArgs} args - Arguments to filter UserSavedProjects to delete.
     * @example
     * // Delete a few UserSavedProjects
     * const { count } = await prisma.userSavedProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSavedProjectDeleteManyArgs>(args?: SelectSubset<T, UserSavedProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSavedProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSavedProjects
     * const userSavedProject = await prisma.userSavedProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSavedProjectUpdateManyArgs>(args: SelectSubset<T, UserSavedProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSavedProject.
     * @param {UserSavedProjectUpsertArgs} args - Arguments to update or create a UserSavedProject.
     * @example
     * // Update or create a UserSavedProject
     * const userSavedProject = await prisma.userSavedProject.upsert({
     *   create: {
     *     // ... data to create a UserSavedProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSavedProject we want to update
     *   }
     * })
     */
    upsert<T extends UserSavedProjectUpsertArgs>(args: SelectSubset<T, UserSavedProjectUpsertArgs<ExtArgs>>): Prisma__UserSavedProjectClient<$Result.GetResult<Prisma.$UserSavedProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSavedProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedProjectCountArgs} args - Arguments to filter UserSavedProjects to count.
     * @example
     * // Count the number of UserSavedProjects
     * const count = await prisma.userSavedProject.count({
     *   where: {
     *     // ... the filter for the UserSavedProjects we want to count
     *   }
     * })
    **/
    count<T extends UserSavedProjectCountArgs>(
      args?: Subset<T, UserSavedProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSavedProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSavedProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSavedProjectAggregateArgs>(args: Subset<T, UserSavedProjectAggregateArgs>): Prisma.PrismaPromise<GetUserSavedProjectAggregateType<T>>

    /**
     * Group by UserSavedProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSavedProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSavedProjectGroupByArgs['orderBy'] }
        : { orderBy?: UserSavedProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSavedProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSavedProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSavedProject model
   */
  readonly fields: UserSavedProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSavedProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSavedProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSavedProject model
   */
  interface UserSavedProjectFieldRefs {
    readonly id: FieldRef<"UserSavedProject", 'String'>
    readonly userId: FieldRef<"UserSavedProject", 'String'>
    readonly projectId: FieldRef<"UserSavedProject", 'String'>
    readonly notes: FieldRef<"UserSavedProject", 'String'>
    readonly createdAt: FieldRef<"UserSavedProject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSavedProject findUnique
   */
  export type UserSavedProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedProject
     */
    select?: UserSavedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedProject
     */
    omit?: UserSavedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedProject to fetch.
     */
    where: UserSavedProjectWhereUniqueInput
  }

  /**
   * UserSavedProject findUniqueOrThrow
   */
  export type UserSavedProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedProject
     */
    select?: UserSavedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedProject
     */
    omit?: UserSavedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedProject to fetch.
     */
    where: UserSavedProjectWhereUniqueInput
  }

  /**
   * UserSavedProject findFirst
   */
  export type UserSavedProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedProject
     */
    select?: UserSavedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedProject
     */
    omit?: UserSavedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedProject to fetch.
     */
    where?: UserSavedProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSavedProjects to fetch.
     */
    orderBy?: UserSavedProjectOrderByWithRelationInput | UserSavedProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSavedProjects.
     */
    cursor?: UserSavedProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSavedProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSavedProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSavedProjects.
     */
    distinct?: UserSavedProjectScalarFieldEnum | UserSavedProjectScalarFieldEnum[]
  }

  /**
   * UserSavedProject findFirstOrThrow
   */
  export type UserSavedProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedProject
     */
    select?: UserSavedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedProject
     */
    omit?: UserSavedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedProject to fetch.
     */
    where?: UserSavedProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSavedProjects to fetch.
     */
    orderBy?: UserSavedProjectOrderByWithRelationInput | UserSavedProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSavedProjects.
     */
    cursor?: UserSavedProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSavedProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSavedProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSavedProjects.
     */
    distinct?: UserSavedProjectScalarFieldEnum | UserSavedProjectScalarFieldEnum[]
  }

  /**
   * UserSavedProject findMany
   */
  export type UserSavedProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedProject
     */
    select?: UserSavedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedProject
     */
    omit?: UserSavedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedProjects to fetch.
     */
    where?: UserSavedProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSavedProjects to fetch.
     */
    orderBy?: UserSavedProjectOrderByWithRelationInput | UserSavedProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSavedProjects.
     */
    cursor?: UserSavedProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSavedProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSavedProjects.
     */
    skip?: number
    distinct?: UserSavedProjectScalarFieldEnum | UserSavedProjectScalarFieldEnum[]
  }

  /**
   * UserSavedProject create
   */
  export type UserSavedProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedProject
     */
    select?: UserSavedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedProject
     */
    omit?: UserSavedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSavedProject.
     */
    data: XOR<UserSavedProjectCreateInput, UserSavedProjectUncheckedCreateInput>
  }

  /**
   * UserSavedProject createMany
   */
  export type UserSavedProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSavedProjects.
     */
    data: UserSavedProjectCreateManyInput | UserSavedProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSavedProject update
   */
  export type UserSavedProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedProject
     */
    select?: UserSavedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedProject
     */
    omit?: UserSavedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSavedProject.
     */
    data: XOR<UserSavedProjectUpdateInput, UserSavedProjectUncheckedUpdateInput>
    /**
     * Choose, which UserSavedProject to update.
     */
    where: UserSavedProjectWhereUniqueInput
  }

  /**
   * UserSavedProject updateMany
   */
  export type UserSavedProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSavedProjects.
     */
    data: XOR<UserSavedProjectUpdateManyMutationInput, UserSavedProjectUncheckedUpdateManyInput>
    /**
     * Filter which UserSavedProjects to update
     */
    where?: UserSavedProjectWhereInput
    /**
     * Limit how many UserSavedProjects to update.
     */
    limit?: number
  }

  /**
   * UserSavedProject upsert
   */
  export type UserSavedProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedProject
     */
    select?: UserSavedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedProject
     */
    omit?: UserSavedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSavedProject to update in case it exists.
     */
    where: UserSavedProjectWhereUniqueInput
    /**
     * In case the UserSavedProject found by the `where` argument doesn't exist, create a new UserSavedProject with this data.
     */
    create: XOR<UserSavedProjectCreateInput, UserSavedProjectUncheckedCreateInput>
    /**
     * In case the UserSavedProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSavedProjectUpdateInput, UserSavedProjectUncheckedUpdateInput>
  }

  /**
   * UserSavedProject delete
   */
  export type UserSavedProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedProject
     */
    select?: UserSavedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedProject
     */
    omit?: UserSavedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedProjectInclude<ExtArgs> | null
    /**
     * Filter which UserSavedProject to delete.
     */
    where: UserSavedProjectWhereUniqueInput
  }

  /**
   * UserSavedProject deleteMany
   */
  export type UserSavedProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSavedProjects to delete
     */
    where?: UserSavedProjectWhereInput
    /**
     * Limit how many UserSavedProjects to delete.
     */
    limit?: number
  }

  /**
   * UserSavedProject without action
   */
  export type UserSavedProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedProject
     */
    select?: UserSavedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedProject
     */
    omit?: UserSavedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedProjectInclude<ExtArgs> | null
  }


  /**
   * Model UserSubscription
   */

  export type AggregateUserSubscription = {
    _count: UserSubscriptionCountAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  export type UserSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeSubscriptionId: string | null
    priceId: string | null
    status: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeSubscriptionId: string | null
    priceId: string | null
    status: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    stripeSubscriptionId: number
    priceId: number
    status: number
    currentPeriodStart: number
    currentPeriodEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    stripeSubscriptionId?: true
    priceId?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    stripeSubscriptionId?: true
    priceId?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    stripeSubscriptionId?: true
    priceId?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscription to aggregate.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSubscriptions
    **/
    _count?: true | UserSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type GetUserSubscriptionAggregateType<T extends UserSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSubscription[P]>
      : GetScalarType<T[P], AggregateUserSubscription[P]>
  }




  export type UserSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithAggregationInput | UserSubscriptionOrderByWithAggregationInput[]
    by: UserSubscriptionScalarFieldEnum[] | UserSubscriptionScalarFieldEnum
    having?: UserSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSubscriptionCountAggregateInputType | true
    _min?: UserSubscriptionMinAggregateInputType
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type UserSubscriptionGroupByOutputType = {
    id: string
    userId: string
    stripeSubscriptionId: string
    priceId: string
    status: string
    currentPeriodStart: Date
    currentPeriodEnd: Date
    createdAt: Date
    updatedAt: Date
    _count: UserSubscriptionCountAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  type GetUserSubscriptionGroupByPayload<T extends UserSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type UserSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    priceId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>



  export type UserSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    priceId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripeSubscriptionId" | "priceId" | "status" | "currentPeriodStart" | "currentPeriodEnd" | "createdAt" | "updatedAt", ExtArgs["result"]["userSubscription"]>
  export type UserSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stripeSubscriptionId: string
      priceId: string
      status: string
      currentPeriodStart: Date
      currentPeriodEnd: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSubscription"]>
    composites: {}
  }

  type UserSubscriptionGetPayload<S extends boolean | null | undefined | UserSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$UserSubscriptionPayload, S>

  type UserSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSubscriptionCountAggregateInputType | true
    }

  export interface UserSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSubscription'], meta: { name: 'UserSubscription' } }
    /**
     * Find zero or one UserSubscription that matches the filter.
     * @param {UserSubscriptionFindUniqueArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSubscriptionFindUniqueArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSubscriptionFindFirstArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany()
     * 
     * // Get first 10 UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSubscriptionFindManyArgs>(args?: SelectSubset<T, UserSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSubscription.
     * @param {UserSubscriptionCreateArgs} args - Arguments to create a UserSubscription.
     * @example
     * // Create one UserSubscription
     * const UserSubscription = await prisma.userSubscription.create({
     *   data: {
     *     // ... data to create a UserSubscription
     *   }
     * })
     * 
     */
    create<T extends UserSubscriptionCreateArgs>(args: SelectSubset<T, UserSubscriptionCreateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSubscriptions.
     * @param {UserSubscriptionCreateManyArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSubscriptionCreateManyArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserSubscription.
     * @param {UserSubscriptionDeleteArgs} args - Arguments to delete one UserSubscription.
     * @example
     * // Delete one UserSubscription
     * const UserSubscription = await prisma.userSubscription.delete({
     *   where: {
     *     // ... filter to delete one UserSubscription
     *   }
     * })
     * 
     */
    delete<T extends UserSubscriptionDeleteArgs>(args: SelectSubset<T, UserSubscriptionDeleteArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSubscription.
     * @param {UserSubscriptionUpdateArgs} args - Arguments to update one UserSubscription.
     * @example
     * // Update one UserSubscription
     * const userSubscription = await prisma.userSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSubscriptionUpdateArgs>(args: SelectSubset<T, UserSubscriptionUpdateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSubscriptions.
     * @param {UserSubscriptionDeleteManyArgs} args - Arguments to filter UserSubscriptions to delete.
     * @example
     * // Delete a few UserSubscriptions
     * const { count } = await prisma.userSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSubscriptionDeleteManyArgs>(args?: SelectSubset<T, UserSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSubscriptionUpdateManyArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSubscription.
     * @param {UserSubscriptionUpsertArgs} args - Arguments to update or create a UserSubscription.
     * @example
     * // Update or create a UserSubscription
     * const userSubscription = await prisma.userSubscription.upsert({
     *   create: {
     *     // ... data to create a UserSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSubscription we want to update
     *   }
     * })
     */
    upsert<T extends UserSubscriptionUpsertArgs>(args: SelectSubset<T, UserSubscriptionUpsertArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionCountArgs} args - Arguments to filter UserSubscriptions to count.
     * @example
     * // Count the number of UserSubscriptions
     * const count = await prisma.userSubscription.count({
     *   where: {
     *     // ... the filter for the UserSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends UserSubscriptionCountArgs>(
      args?: Subset<T, UserSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSubscriptionAggregateArgs>(args: Subset<T, UserSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetUserSubscriptionAggregateType<T>>

    /**
     * Group by UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: UserSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSubscription model
   */
  readonly fields: UserSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSubscription model
   */
  interface UserSubscriptionFieldRefs {
    readonly id: FieldRef<"UserSubscription", 'String'>
    readonly userId: FieldRef<"UserSubscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"UserSubscription", 'String'>
    readonly priceId: FieldRef<"UserSubscription", 'String'>
    readonly status: FieldRef<"UserSubscription", 'String'>
    readonly currentPeriodStart: FieldRef<"UserSubscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"UserSubscription", 'DateTime'>
    readonly createdAt: FieldRef<"UserSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSubscription findUnique
   */
  export type UserSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findUniqueOrThrow
   */
  export type UserSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findFirst
   */
  export type UserSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findFirstOrThrow
   */
  export type UserSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findMany
   */
  export type UserSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscriptions to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription create
   */
  export type UserSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSubscription.
     */
    data: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
  }

  /**
   * UserSubscription createMany
   */
  export type UserSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSubscription update
   */
  export type UserSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSubscription.
     */
    data: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which UserSubscription to update.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription updateMany
   */
  export type UserSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
  }

  /**
   * UserSubscription upsert
   */
  export type UserSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSubscription to update in case it exists.
     */
    where: UserSubscriptionWhereUniqueInput
    /**
     * In case the UserSubscription found by the `where` argument doesn't exist, create a new UserSubscription with this data.
     */
    create: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
    /**
     * In case the UserSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
  }

  /**
   * UserSubscription delete
   */
  export type UserSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which UserSubscription to delete.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription deleteMany
   */
  export type UserSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscriptions to delete
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * UserSubscription without action
   */
  export type UserSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model DataSource
   */

  export type AggregateDataSource = {
    _count: DataSourceCountAggregateOutputType | null
    _min: DataSourceMinAggregateOutputType | null
    _max: DataSourceMaxAggregateOutputType | null
  }

  export type DataSourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    displayName: string | null
    isActive: boolean | null
    lastCrawl: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataSourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    displayName: string | null
    isActive: boolean | null
    lastCrawl: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataSourceCountAggregateOutputType = {
    id: number
    name: number
    displayName: number
    isActive: number
    apiConfig: number
    credentials: number
    lastCrawl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DataSourceMinAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    isActive?: true
    lastCrawl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataSourceMaxAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    isActive?: true
    lastCrawl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataSourceCountAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    isActive?: true
    apiConfig?: true
    credentials?: true
    lastCrawl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DataSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataSource to aggregate.
     */
    where?: DataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSources to fetch.
     */
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataSources
    **/
    _count?: true | DataSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataSourceMaxAggregateInputType
  }

  export type GetDataSourceAggregateType<T extends DataSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateDataSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataSource[P]>
      : GetScalarType<T[P], AggregateDataSource[P]>
  }




  export type DataSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataSourceWhereInput
    orderBy?: DataSourceOrderByWithAggregationInput | DataSourceOrderByWithAggregationInput[]
    by: DataSourceScalarFieldEnum[] | DataSourceScalarFieldEnum
    having?: DataSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataSourceCountAggregateInputType | true
    _min?: DataSourceMinAggregateInputType
    _max?: DataSourceMaxAggregateInputType
  }

  export type DataSourceGroupByOutputType = {
    id: string
    name: string
    displayName: string
    isActive: boolean
    apiConfig: JsonValue
    credentials: JsonValue
    lastCrawl: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DataSourceCountAggregateOutputType | null
    _min: DataSourceMinAggregateOutputType | null
    _max: DataSourceMaxAggregateOutputType | null
  }

  type GetDataSourceGroupByPayload<T extends DataSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataSourceGroupByOutputType[P]>
            : GetScalarType<T[P], DataSourceGroupByOutputType[P]>
        }
      >
    >


  export type DataSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    isActive?: boolean
    apiConfig?: boolean
    credentials?: boolean
    lastCrawl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    crawlLogs?: boolean | DataSource$crawlLogsArgs<ExtArgs>
    _count?: boolean | DataSourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataSource"]>



  export type DataSourceSelectScalar = {
    id?: boolean
    name?: boolean
    displayName?: boolean
    isActive?: boolean
    apiConfig?: boolean
    credentials?: boolean
    lastCrawl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DataSourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "displayName" | "isActive" | "apiConfig" | "credentials" | "lastCrawl" | "createdAt" | "updatedAt", ExtArgs["result"]["dataSource"]>
  export type DataSourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crawlLogs?: boolean | DataSource$crawlLogsArgs<ExtArgs>
    _count?: boolean | DataSourceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DataSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataSource"
    objects: {
      crawlLogs: Prisma.$CrawlLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      displayName: string
      isActive: boolean
      apiConfig: Prisma.JsonValue
      credentials: Prisma.JsonValue
      lastCrawl: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dataSource"]>
    composites: {}
  }

  type DataSourceGetPayload<S extends boolean | null | undefined | DataSourceDefaultArgs> = $Result.GetResult<Prisma.$DataSourcePayload, S>

  type DataSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataSourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataSourceCountAggregateInputType | true
    }

  export interface DataSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataSource'], meta: { name: 'DataSource' } }
    /**
     * Find zero or one DataSource that matches the filter.
     * @param {DataSourceFindUniqueArgs} args - Arguments to find a DataSource
     * @example
     * // Get one DataSource
     * const dataSource = await prisma.dataSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataSourceFindUniqueArgs>(args: SelectSubset<T, DataSourceFindUniqueArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataSource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataSourceFindUniqueOrThrowArgs} args - Arguments to find a DataSource
     * @example
     * // Get one DataSource
     * const dataSource = await prisma.dataSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, DataSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceFindFirstArgs} args - Arguments to find a DataSource
     * @example
     * // Get one DataSource
     * const dataSource = await prisma.dataSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataSourceFindFirstArgs>(args?: SelectSubset<T, DataSourceFindFirstArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceFindFirstOrThrowArgs} args - Arguments to find a DataSource
     * @example
     * // Get one DataSource
     * const dataSource = await prisma.dataSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, DataSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataSources
     * const dataSources = await prisma.dataSource.findMany()
     * 
     * // Get first 10 DataSources
     * const dataSources = await prisma.dataSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataSourceWithIdOnly = await prisma.dataSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataSourceFindManyArgs>(args?: SelectSubset<T, DataSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataSource.
     * @param {DataSourceCreateArgs} args - Arguments to create a DataSource.
     * @example
     * // Create one DataSource
     * const DataSource = await prisma.dataSource.create({
     *   data: {
     *     // ... data to create a DataSource
     *   }
     * })
     * 
     */
    create<T extends DataSourceCreateArgs>(args: SelectSubset<T, DataSourceCreateArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataSources.
     * @param {DataSourceCreateManyArgs} args - Arguments to create many DataSources.
     * @example
     * // Create many DataSources
     * const dataSource = await prisma.dataSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataSourceCreateManyArgs>(args?: SelectSubset<T, DataSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataSource.
     * @param {DataSourceDeleteArgs} args - Arguments to delete one DataSource.
     * @example
     * // Delete one DataSource
     * const DataSource = await prisma.dataSource.delete({
     *   where: {
     *     // ... filter to delete one DataSource
     *   }
     * })
     * 
     */
    delete<T extends DataSourceDeleteArgs>(args: SelectSubset<T, DataSourceDeleteArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataSource.
     * @param {DataSourceUpdateArgs} args - Arguments to update one DataSource.
     * @example
     * // Update one DataSource
     * const dataSource = await prisma.dataSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataSourceUpdateArgs>(args: SelectSubset<T, DataSourceUpdateArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataSources.
     * @param {DataSourceDeleteManyArgs} args - Arguments to filter DataSources to delete.
     * @example
     * // Delete a few DataSources
     * const { count } = await prisma.dataSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataSourceDeleteManyArgs>(args?: SelectSubset<T, DataSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataSources
     * const dataSource = await prisma.dataSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataSourceUpdateManyArgs>(args: SelectSubset<T, DataSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataSource.
     * @param {DataSourceUpsertArgs} args - Arguments to update or create a DataSource.
     * @example
     * // Update or create a DataSource
     * const dataSource = await prisma.dataSource.upsert({
     *   create: {
     *     // ... data to create a DataSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataSource we want to update
     *   }
     * })
     */
    upsert<T extends DataSourceUpsertArgs>(args: SelectSubset<T, DataSourceUpsertArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceCountArgs} args - Arguments to filter DataSources to count.
     * @example
     * // Count the number of DataSources
     * const count = await prisma.dataSource.count({
     *   where: {
     *     // ... the filter for the DataSources we want to count
     *   }
     * })
    **/
    count<T extends DataSourceCountArgs>(
      args?: Subset<T, DataSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataSourceAggregateArgs>(args: Subset<T, DataSourceAggregateArgs>): Prisma.PrismaPromise<GetDataSourceAggregateType<T>>

    /**
     * Group by DataSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataSourceGroupByArgs['orderBy'] }
        : { orderBy?: DataSourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataSource model
   */
  readonly fields: DataSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crawlLogs<T extends DataSource$crawlLogsArgs<ExtArgs> = {}>(args?: Subset<T, DataSource$crawlLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataSource model
   */
  interface DataSourceFieldRefs {
    readonly id: FieldRef<"DataSource", 'String'>
    readonly name: FieldRef<"DataSource", 'String'>
    readonly displayName: FieldRef<"DataSource", 'String'>
    readonly isActive: FieldRef<"DataSource", 'Boolean'>
    readonly apiConfig: FieldRef<"DataSource", 'Json'>
    readonly credentials: FieldRef<"DataSource", 'Json'>
    readonly lastCrawl: FieldRef<"DataSource", 'DateTime'>
    readonly createdAt: FieldRef<"DataSource", 'DateTime'>
    readonly updatedAt: FieldRef<"DataSource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataSource findUnique
   */
  export type DataSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSource to fetch.
     */
    where: DataSourceWhereUniqueInput
  }

  /**
   * DataSource findUniqueOrThrow
   */
  export type DataSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSource to fetch.
     */
    where: DataSourceWhereUniqueInput
  }

  /**
   * DataSource findFirst
   */
  export type DataSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSource to fetch.
     */
    where?: DataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSources to fetch.
     */
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataSources.
     */
    cursor?: DataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataSources.
     */
    distinct?: DataSourceScalarFieldEnum | DataSourceScalarFieldEnum[]
  }

  /**
   * DataSource findFirstOrThrow
   */
  export type DataSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSource to fetch.
     */
    where?: DataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSources to fetch.
     */
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataSources.
     */
    cursor?: DataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataSources.
     */
    distinct?: DataSourceScalarFieldEnum | DataSourceScalarFieldEnum[]
  }

  /**
   * DataSource findMany
   */
  export type DataSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSources to fetch.
     */
    where?: DataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSources to fetch.
     */
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataSources.
     */
    cursor?: DataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSources.
     */
    skip?: number
    distinct?: DataSourceScalarFieldEnum | DataSourceScalarFieldEnum[]
  }

  /**
   * DataSource create
   */
  export type DataSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * The data needed to create a DataSource.
     */
    data: XOR<DataSourceCreateInput, DataSourceUncheckedCreateInput>
  }

  /**
   * DataSource createMany
   */
  export type DataSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataSources.
     */
    data: DataSourceCreateManyInput | DataSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataSource update
   */
  export type DataSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * The data needed to update a DataSource.
     */
    data: XOR<DataSourceUpdateInput, DataSourceUncheckedUpdateInput>
    /**
     * Choose, which DataSource to update.
     */
    where: DataSourceWhereUniqueInput
  }

  /**
   * DataSource updateMany
   */
  export type DataSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataSources.
     */
    data: XOR<DataSourceUpdateManyMutationInput, DataSourceUncheckedUpdateManyInput>
    /**
     * Filter which DataSources to update
     */
    where?: DataSourceWhereInput
    /**
     * Limit how many DataSources to update.
     */
    limit?: number
  }

  /**
   * DataSource upsert
   */
  export type DataSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * The filter to search for the DataSource to update in case it exists.
     */
    where: DataSourceWhereUniqueInput
    /**
     * In case the DataSource found by the `where` argument doesn't exist, create a new DataSource with this data.
     */
    create: XOR<DataSourceCreateInput, DataSourceUncheckedCreateInput>
    /**
     * In case the DataSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataSourceUpdateInput, DataSourceUncheckedUpdateInput>
  }

  /**
   * DataSource delete
   */
  export type DataSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter which DataSource to delete.
     */
    where: DataSourceWhereUniqueInput
  }

  /**
   * DataSource deleteMany
   */
  export type DataSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataSources to delete
     */
    where?: DataSourceWhereInput
    /**
     * Limit how many DataSources to delete.
     */
    limit?: number
  }

  /**
   * DataSource.crawlLogs
   */
  export type DataSource$crawlLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    where?: CrawlLogWhereInput
    orderBy?: CrawlLogOrderByWithRelationInput | CrawlLogOrderByWithRelationInput[]
    cursor?: CrawlLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrawlLogScalarFieldEnum | CrawlLogScalarFieldEnum[]
  }

  /**
   * DataSource without action
   */
  export type DataSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
  }


  /**
   * Model CrawlLog
   */

  export type AggregateCrawlLog = {
    _count: CrawlLogCountAggregateOutputType | null
    _avg: CrawlLogAvgAggregateOutputType | null
    _sum: CrawlLogSumAggregateOutputType | null
    _min: CrawlLogMinAggregateOutputType | null
    _max: CrawlLogMaxAggregateOutputType | null
  }

  export type CrawlLogAvgAggregateOutputType = {
    itemsFound: number | null
    itemsSaved: number | null
  }

  export type CrawlLogSumAggregateOutputType = {
    itemsFound: number | null
    itemsSaved: number | null
  }

  export type CrawlLogMinAggregateOutputType = {
    id: string | null
    dataSourceId: string | null
    status: string | null
    startTime: Date | null
    endTime: Date | null
    itemsFound: number | null
    itemsSaved: number | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type CrawlLogMaxAggregateOutputType = {
    id: string | null
    dataSourceId: string | null
    status: string | null
    startTime: Date | null
    endTime: Date | null
    itemsFound: number | null
    itemsSaved: number | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type CrawlLogCountAggregateOutputType = {
    id: number
    dataSourceId: number
    status: number
    startTime: number
    endTime: number
    itemsFound: number
    itemsSaved: number
    errorMessage: number
    createdAt: number
    _all: number
  }


  export type CrawlLogAvgAggregateInputType = {
    itemsFound?: true
    itemsSaved?: true
  }

  export type CrawlLogSumAggregateInputType = {
    itemsFound?: true
    itemsSaved?: true
  }

  export type CrawlLogMinAggregateInputType = {
    id?: true
    dataSourceId?: true
    status?: true
    startTime?: true
    endTime?: true
    itemsFound?: true
    itemsSaved?: true
    errorMessage?: true
    createdAt?: true
  }

  export type CrawlLogMaxAggregateInputType = {
    id?: true
    dataSourceId?: true
    status?: true
    startTime?: true
    endTime?: true
    itemsFound?: true
    itemsSaved?: true
    errorMessage?: true
    createdAt?: true
  }

  export type CrawlLogCountAggregateInputType = {
    id?: true
    dataSourceId?: true
    status?: true
    startTime?: true
    endTime?: true
    itemsFound?: true
    itemsSaved?: true
    errorMessage?: true
    createdAt?: true
    _all?: true
  }

  export type CrawlLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrawlLog to aggregate.
     */
    where?: CrawlLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlLogs to fetch.
     */
    orderBy?: CrawlLogOrderByWithRelationInput | CrawlLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrawlLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrawlLogs
    **/
    _count?: true | CrawlLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrawlLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrawlLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrawlLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrawlLogMaxAggregateInputType
  }

  export type GetCrawlLogAggregateType<T extends CrawlLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCrawlLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrawlLog[P]>
      : GetScalarType<T[P], AggregateCrawlLog[P]>
  }




  export type CrawlLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrawlLogWhereInput
    orderBy?: CrawlLogOrderByWithAggregationInput | CrawlLogOrderByWithAggregationInput[]
    by: CrawlLogScalarFieldEnum[] | CrawlLogScalarFieldEnum
    having?: CrawlLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrawlLogCountAggregateInputType | true
    _avg?: CrawlLogAvgAggregateInputType
    _sum?: CrawlLogSumAggregateInputType
    _min?: CrawlLogMinAggregateInputType
    _max?: CrawlLogMaxAggregateInputType
  }

  export type CrawlLogGroupByOutputType = {
    id: string
    dataSourceId: string
    status: string
    startTime: Date
    endTime: Date | null
    itemsFound: number
    itemsSaved: number
    errorMessage: string | null
    createdAt: Date
    _count: CrawlLogCountAggregateOutputType | null
    _avg: CrawlLogAvgAggregateOutputType | null
    _sum: CrawlLogSumAggregateOutputType | null
    _min: CrawlLogMinAggregateOutputType | null
    _max: CrawlLogMaxAggregateOutputType | null
  }

  type GetCrawlLogGroupByPayload<T extends CrawlLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrawlLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrawlLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrawlLogGroupByOutputType[P]>
            : GetScalarType<T[P], CrawlLogGroupByOutputType[P]>
        }
      >
    >


  export type CrawlLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataSourceId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    itemsFound?: boolean
    itemsSaved?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crawlLog"]>



  export type CrawlLogSelectScalar = {
    id?: boolean
    dataSourceId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    itemsFound?: boolean
    itemsSaved?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }

  export type CrawlLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataSourceId" | "status" | "startTime" | "endTime" | "itemsFound" | "itemsSaved" | "errorMessage" | "createdAt", ExtArgs["result"]["crawlLog"]>
  export type CrawlLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
  }

  export type $CrawlLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrawlLog"
    objects: {
      dataSource: Prisma.$DataSourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dataSourceId: string
      status: string
      startTime: Date
      endTime: Date | null
      itemsFound: number
      itemsSaved: number
      errorMessage: string | null
      createdAt: Date
    }, ExtArgs["result"]["crawlLog"]>
    composites: {}
  }

  type CrawlLogGetPayload<S extends boolean | null | undefined | CrawlLogDefaultArgs> = $Result.GetResult<Prisma.$CrawlLogPayload, S>

  type CrawlLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrawlLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrawlLogCountAggregateInputType | true
    }

  export interface CrawlLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrawlLog'], meta: { name: 'CrawlLog' } }
    /**
     * Find zero or one CrawlLog that matches the filter.
     * @param {CrawlLogFindUniqueArgs} args - Arguments to find a CrawlLog
     * @example
     * // Get one CrawlLog
     * const crawlLog = await prisma.crawlLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrawlLogFindUniqueArgs>(args: SelectSubset<T, CrawlLogFindUniqueArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrawlLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrawlLogFindUniqueOrThrowArgs} args - Arguments to find a CrawlLog
     * @example
     * // Get one CrawlLog
     * const crawlLog = await prisma.crawlLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrawlLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CrawlLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrawlLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogFindFirstArgs} args - Arguments to find a CrawlLog
     * @example
     * // Get one CrawlLog
     * const crawlLog = await prisma.crawlLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrawlLogFindFirstArgs>(args?: SelectSubset<T, CrawlLogFindFirstArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrawlLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogFindFirstOrThrowArgs} args - Arguments to find a CrawlLog
     * @example
     * // Get one CrawlLog
     * const crawlLog = await prisma.crawlLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrawlLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CrawlLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrawlLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrawlLogs
     * const crawlLogs = await prisma.crawlLog.findMany()
     * 
     * // Get first 10 CrawlLogs
     * const crawlLogs = await prisma.crawlLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crawlLogWithIdOnly = await prisma.crawlLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrawlLogFindManyArgs>(args?: SelectSubset<T, CrawlLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrawlLog.
     * @param {CrawlLogCreateArgs} args - Arguments to create a CrawlLog.
     * @example
     * // Create one CrawlLog
     * const CrawlLog = await prisma.crawlLog.create({
     *   data: {
     *     // ... data to create a CrawlLog
     *   }
     * })
     * 
     */
    create<T extends CrawlLogCreateArgs>(args: SelectSubset<T, CrawlLogCreateArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrawlLogs.
     * @param {CrawlLogCreateManyArgs} args - Arguments to create many CrawlLogs.
     * @example
     * // Create many CrawlLogs
     * const crawlLog = await prisma.crawlLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrawlLogCreateManyArgs>(args?: SelectSubset<T, CrawlLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CrawlLog.
     * @param {CrawlLogDeleteArgs} args - Arguments to delete one CrawlLog.
     * @example
     * // Delete one CrawlLog
     * const CrawlLog = await prisma.crawlLog.delete({
     *   where: {
     *     // ... filter to delete one CrawlLog
     *   }
     * })
     * 
     */
    delete<T extends CrawlLogDeleteArgs>(args: SelectSubset<T, CrawlLogDeleteArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrawlLog.
     * @param {CrawlLogUpdateArgs} args - Arguments to update one CrawlLog.
     * @example
     * // Update one CrawlLog
     * const crawlLog = await prisma.crawlLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrawlLogUpdateArgs>(args: SelectSubset<T, CrawlLogUpdateArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrawlLogs.
     * @param {CrawlLogDeleteManyArgs} args - Arguments to filter CrawlLogs to delete.
     * @example
     * // Delete a few CrawlLogs
     * const { count } = await prisma.crawlLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrawlLogDeleteManyArgs>(args?: SelectSubset<T, CrawlLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrawlLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrawlLogs
     * const crawlLog = await prisma.crawlLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrawlLogUpdateManyArgs>(args: SelectSubset<T, CrawlLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CrawlLog.
     * @param {CrawlLogUpsertArgs} args - Arguments to update or create a CrawlLog.
     * @example
     * // Update or create a CrawlLog
     * const crawlLog = await prisma.crawlLog.upsert({
     *   create: {
     *     // ... data to create a CrawlLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrawlLog we want to update
     *   }
     * })
     */
    upsert<T extends CrawlLogUpsertArgs>(args: SelectSubset<T, CrawlLogUpsertArgs<ExtArgs>>): Prisma__CrawlLogClient<$Result.GetResult<Prisma.$CrawlLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrawlLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogCountArgs} args - Arguments to filter CrawlLogs to count.
     * @example
     * // Count the number of CrawlLogs
     * const count = await prisma.crawlLog.count({
     *   where: {
     *     // ... the filter for the CrawlLogs we want to count
     *   }
     * })
    **/
    count<T extends CrawlLogCountArgs>(
      args?: Subset<T, CrawlLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrawlLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrawlLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CrawlLogAggregateArgs>(args: Subset<T, CrawlLogAggregateArgs>): Prisma.PrismaPromise<GetCrawlLogAggregateType<T>>

    /**
     * Group by CrawlLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CrawlLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrawlLogGroupByArgs['orderBy'] }
        : { orderBy?: CrawlLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CrawlLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrawlLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrawlLog model
   */
  readonly fields: CrawlLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrawlLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrawlLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataSource<T extends DataSourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DataSourceDefaultArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CrawlLog model
   */
  interface CrawlLogFieldRefs {
    readonly id: FieldRef<"CrawlLog", 'String'>
    readonly dataSourceId: FieldRef<"CrawlLog", 'String'>
    readonly status: FieldRef<"CrawlLog", 'String'>
    readonly startTime: FieldRef<"CrawlLog", 'DateTime'>
    readonly endTime: FieldRef<"CrawlLog", 'DateTime'>
    readonly itemsFound: FieldRef<"CrawlLog", 'Int'>
    readonly itemsSaved: FieldRef<"CrawlLog", 'Int'>
    readonly errorMessage: FieldRef<"CrawlLog", 'String'>
    readonly createdAt: FieldRef<"CrawlLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrawlLog findUnique
   */
  export type CrawlLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * Filter, which CrawlLog to fetch.
     */
    where: CrawlLogWhereUniqueInput
  }

  /**
   * CrawlLog findUniqueOrThrow
   */
  export type CrawlLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * Filter, which CrawlLog to fetch.
     */
    where: CrawlLogWhereUniqueInput
  }

  /**
   * CrawlLog findFirst
   */
  export type CrawlLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * Filter, which CrawlLog to fetch.
     */
    where?: CrawlLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlLogs to fetch.
     */
    orderBy?: CrawlLogOrderByWithRelationInput | CrawlLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrawlLogs.
     */
    cursor?: CrawlLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlLogs.
     */
    distinct?: CrawlLogScalarFieldEnum | CrawlLogScalarFieldEnum[]
  }

  /**
   * CrawlLog findFirstOrThrow
   */
  export type CrawlLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * Filter, which CrawlLog to fetch.
     */
    where?: CrawlLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlLogs to fetch.
     */
    orderBy?: CrawlLogOrderByWithRelationInput | CrawlLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrawlLogs.
     */
    cursor?: CrawlLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlLogs.
     */
    distinct?: CrawlLogScalarFieldEnum | CrawlLogScalarFieldEnum[]
  }

  /**
   * CrawlLog findMany
   */
  export type CrawlLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * Filter, which CrawlLogs to fetch.
     */
    where?: CrawlLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlLogs to fetch.
     */
    orderBy?: CrawlLogOrderByWithRelationInput | CrawlLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrawlLogs.
     */
    cursor?: CrawlLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlLogs.
     */
    skip?: number
    distinct?: CrawlLogScalarFieldEnum | CrawlLogScalarFieldEnum[]
  }

  /**
   * CrawlLog create
   */
  export type CrawlLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * The data needed to create a CrawlLog.
     */
    data: XOR<CrawlLogCreateInput, CrawlLogUncheckedCreateInput>
  }

  /**
   * CrawlLog createMany
   */
  export type CrawlLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrawlLogs.
     */
    data: CrawlLogCreateManyInput | CrawlLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrawlLog update
   */
  export type CrawlLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * The data needed to update a CrawlLog.
     */
    data: XOR<CrawlLogUpdateInput, CrawlLogUncheckedUpdateInput>
    /**
     * Choose, which CrawlLog to update.
     */
    where: CrawlLogWhereUniqueInput
  }

  /**
   * CrawlLog updateMany
   */
  export type CrawlLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrawlLogs.
     */
    data: XOR<CrawlLogUpdateManyMutationInput, CrawlLogUncheckedUpdateManyInput>
    /**
     * Filter which CrawlLogs to update
     */
    where?: CrawlLogWhereInput
    /**
     * Limit how many CrawlLogs to update.
     */
    limit?: number
  }

  /**
   * CrawlLog upsert
   */
  export type CrawlLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * The filter to search for the CrawlLog to update in case it exists.
     */
    where: CrawlLogWhereUniqueInput
    /**
     * In case the CrawlLog found by the `where` argument doesn't exist, create a new CrawlLog with this data.
     */
    create: XOR<CrawlLogCreateInput, CrawlLogUncheckedCreateInput>
    /**
     * In case the CrawlLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrawlLogUpdateInput, CrawlLogUncheckedUpdateInput>
  }

  /**
   * CrawlLog delete
   */
  export type CrawlLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
    /**
     * Filter which CrawlLog to delete.
     */
    where: CrawlLogWhereUniqueInput
  }

  /**
   * CrawlLog deleteMany
   */
  export type CrawlLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrawlLogs to delete
     */
    where?: CrawlLogWhereInput
    /**
     * Limit how many CrawlLogs to delete.
     */
    limit?: number
  }

  /**
   * CrawlLog without action
   */
  export type CrawlLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlLog
     */
    select?: CrawlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlLog
     */
    omit?: CrawlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlLogInclude<ExtArgs> | null
  }


  /**
   * Model ProjectTag
   */

  export type AggregateProjectTag = {
    _count: ProjectTagCountAggregateOutputType | null
    _min: ProjectTagMinAggregateOutputType | null
    _max: ProjectTagMaxAggregateOutputType | null
  }

  export type ProjectTagMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    tag: string | null
    createdAt: Date | null
  }

  export type ProjectTagMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    tag: string | null
    createdAt: Date | null
  }

  export type ProjectTagCountAggregateOutputType = {
    id: number
    projectId: number
    tag: number
    createdAt: number
    _all: number
  }


  export type ProjectTagMinAggregateInputType = {
    id?: true
    projectId?: true
    tag?: true
    createdAt?: true
  }

  export type ProjectTagMaxAggregateInputType = {
    id?: true
    projectId?: true
    tag?: true
    createdAt?: true
  }

  export type ProjectTagCountAggregateInputType = {
    id?: true
    projectId?: true
    tag?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTag to aggregate.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTags
    **/
    _count?: true | ProjectTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTagMaxAggregateInputType
  }

  export type GetProjectTagAggregateType<T extends ProjectTagAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTag[P]>
      : GetScalarType<T[P], AggregateProjectTag[P]>
  }




  export type ProjectTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTagWhereInput
    orderBy?: ProjectTagOrderByWithAggregationInput | ProjectTagOrderByWithAggregationInput[]
    by: ProjectTagScalarFieldEnum[] | ProjectTagScalarFieldEnum
    having?: ProjectTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTagCountAggregateInputType | true
    _min?: ProjectTagMinAggregateInputType
    _max?: ProjectTagMaxAggregateInputType
  }

  export type ProjectTagGroupByOutputType = {
    id: string
    projectId: string
    tag: string
    createdAt: Date
    _count: ProjectTagCountAggregateOutputType | null
    _min: ProjectTagMinAggregateOutputType | null
    _max: ProjectTagMaxAggregateOutputType | null
  }

  type GetProjectTagGroupByPayload<T extends ProjectTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTagGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTagGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    tag?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTag"]>



  export type ProjectTagSelectScalar = {
    id?: boolean
    projectId?: boolean
    tag?: boolean
    createdAt?: boolean
  }

  export type ProjectTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "tag" | "createdAt", ExtArgs["result"]["projectTag"]>
  export type ProjectTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectTag"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      tag: string
      createdAt: Date
    }, ExtArgs["result"]["projectTag"]>
    composites: {}
  }

  type ProjectTagGetPayload<S extends boolean | null | undefined | ProjectTagDefaultArgs> = $Result.GetResult<Prisma.$ProjectTagPayload, S>

  type ProjectTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTagCountAggregateInputType | true
    }

  export interface ProjectTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectTag'], meta: { name: 'ProjectTag' } }
    /**
     * Find zero or one ProjectTag that matches the filter.
     * @param {ProjectTagFindUniqueArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTagFindUniqueArgs>(args: SelectSubset<T, ProjectTagFindUniqueArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTagFindUniqueOrThrowArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagFindFirstArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTagFindFirstArgs>(args?: SelectSubset<T, ProjectTagFindFirstArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagFindFirstOrThrowArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTags
     * const projectTags = await prisma.projectTag.findMany()
     * 
     * // Get first 10 ProjectTags
     * const projectTags = await prisma.projectTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectTagWithIdOnly = await prisma.projectTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectTagFindManyArgs>(args?: SelectSubset<T, ProjectTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectTag.
     * @param {ProjectTagCreateArgs} args - Arguments to create a ProjectTag.
     * @example
     * // Create one ProjectTag
     * const ProjectTag = await prisma.projectTag.create({
     *   data: {
     *     // ... data to create a ProjectTag
     *   }
     * })
     * 
     */
    create<T extends ProjectTagCreateArgs>(args: SelectSubset<T, ProjectTagCreateArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTags.
     * @param {ProjectTagCreateManyArgs} args - Arguments to create many ProjectTags.
     * @example
     * // Create many ProjectTags
     * const projectTag = await prisma.projectTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTagCreateManyArgs>(args?: SelectSubset<T, ProjectTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectTag.
     * @param {ProjectTagDeleteArgs} args - Arguments to delete one ProjectTag.
     * @example
     * // Delete one ProjectTag
     * const ProjectTag = await prisma.projectTag.delete({
     *   where: {
     *     // ... filter to delete one ProjectTag
     *   }
     * })
     * 
     */
    delete<T extends ProjectTagDeleteArgs>(args: SelectSubset<T, ProjectTagDeleteArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectTag.
     * @param {ProjectTagUpdateArgs} args - Arguments to update one ProjectTag.
     * @example
     * // Update one ProjectTag
     * const projectTag = await prisma.projectTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTagUpdateArgs>(args: SelectSubset<T, ProjectTagUpdateArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTags.
     * @param {ProjectTagDeleteManyArgs} args - Arguments to filter ProjectTags to delete.
     * @example
     * // Delete a few ProjectTags
     * const { count } = await prisma.projectTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTagDeleteManyArgs>(args?: SelectSubset<T, ProjectTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTags
     * const projectTag = await prisma.projectTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTagUpdateManyArgs>(args: SelectSubset<T, ProjectTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectTag.
     * @param {ProjectTagUpsertArgs} args - Arguments to update or create a ProjectTag.
     * @example
     * // Update or create a ProjectTag
     * const projectTag = await prisma.projectTag.upsert({
     *   create: {
     *     // ... data to create a ProjectTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTag we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTagUpsertArgs>(args: SelectSubset<T, ProjectTagUpsertArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagCountArgs} args - Arguments to filter ProjectTags to count.
     * @example
     * // Count the number of ProjectTags
     * const count = await prisma.projectTag.count({
     *   where: {
     *     // ... the filter for the ProjectTags we want to count
     *   }
     * })
    **/
    count<T extends ProjectTagCountArgs>(
      args?: Subset<T, ProjectTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectTagAggregateArgs>(args: Subset<T, ProjectTagAggregateArgs>): Prisma.PrismaPromise<GetProjectTagAggregateType<T>>

    /**
     * Group by ProjectTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTagGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectTag model
   */
  readonly fields: ProjectTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectTag model
   */
  interface ProjectTagFieldRefs {
    readonly id: FieldRef<"ProjectTag", 'String'>
    readonly projectId: FieldRef<"ProjectTag", 'String'>
    readonly tag: FieldRef<"ProjectTag", 'String'>
    readonly createdAt: FieldRef<"ProjectTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTag findUnique
   */
  export type ProjectTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag findUniqueOrThrow
   */
  export type ProjectTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag findFirst
   */
  export type ProjectTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTags.
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTags.
     */
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * ProjectTag findFirstOrThrow
   */
  export type ProjectTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTags.
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTags.
     */
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * ProjectTag findMany
   */
  export type ProjectTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTags to fetch.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTags.
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * ProjectTag create
   */
  export type ProjectTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectTag.
     */
    data: XOR<ProjectTagCreateInput, ProjectTagUncheckedCreateInput>
  }

  /**
   * ProjectTag createMany
   */
  export type ProjectTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTags.
     */
    data: ProjectTagCreateManyInput | ProjectTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectTag update
   */
  export type ProjectTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectTag.
     */
    data: XOR<ProjectTagUpdateInput, ProjectTagUncheckedUpdateInput>
    /**
     * Choose, which ProjectTag to update.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag updateMany
   */
  export type ProjectTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTags.
     */
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTags to update
     */
    where?: ProjectTagWhereInput
    /**
     * Limit how many ProjectTags to update.
     */
    limit?: number
  }

  /**
   * ProjectTag upsert
   */
  export type ProjectTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectTag to update in case it exists.
     */
    where: ProjectTagWhereUniqueInput
    /**
     * In case the ProjectTag found by the `where` argument doesn't exist, create a new ProjectTag with this data.
     */
    create: XOR<ProjectTagCreateInput, ProjectTagUncheckedCreateInput>
    /**
     * In case the ProjectTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTagUpdateInput, ProjectTagUncheckedUpdateInput>
  }

  /**
   * ProjectTag delete
   */
  export type ProjectTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter which ProjectTag to delete.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag deleteMany
   */
  export type ProjectTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTags to delete
     */
    where?: ProjectTagWhereInput
    /**
     * Limit how many ProjectTags to delete.
     */
    limit?: number
  }

  /**
   * ProjectTag without action
   */
  export type ProjectTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    subscriptionTier: 'subscriptionTier',
    subscriptionStatus: 'subscriptionStatus',
    stripeCustomerId: 'stripeCustomerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    source: 'source',
    sourceId: 'sourceId',
    name: 'name',
    description: 'description',
    url: 'url',
    category: 'category',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    discoveredAt: 'discoveredAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectMetricsScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    stars: 'stars',
    forks: 'forks',
    issues: 'issues',
    contributors: 'contributors',
    upvotes: 'upvotes',
    comments: 'comments',
    views: 'views',
    dailyGrowth: 'dailyGrowth',
    weeklyGrowth: 'weeklyGrowth',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectMetricsScalarFieldEnum = (typeof ProjectMetricsScalarFieldEnum)[keyof typeof ProjectMetricsScalarFieldEnum]


  export const ProjectAnalysisScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    score: 'score',
    trend: 'trend',
    marketPotential: 'marketPotential',
    competitionLevel: 'competitionLevel',
    successProbability: 'successProbability',
    competitors: 'competitors',
    keyInsights: 'keyInsights',
    risks: 'risks',
    opportunities: 'opportunities',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectAnalysisScalarFieldEnum = (typeof ProjectAnalysisScalarFieldEnum)[keyof typeof ProjectAnalysisScalarFieldEnum]


  export const UserSavedProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectId: 'projectId',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type UserSavedProjectScalarFieldEnum = (typeof UserSavedProjectScalarFieldEnum)[keyof typeof UserSavedProjectScalarFieldEnum]


  export const UserSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    priceId: 'priceId',
    status: 'status',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSubscriptionScalarFieldEnum = (typeof UserSubscriptionScalarFieldEnum)[keyof typeof UserSubscriptionScalarFieldEnum]


  export const DataSourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    displayName: 'displayName',
    isActive: 'isActive',
    apiConfig: 'apiConfig',
    credentials: 'credentials',
    lastCrawl: 'lastCrawl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DataSourceScalarFieldEnum = (typeof DataSourceScalarFieldEnum)[keyof typeof DataSourceScalarFieldEnum]


  export const CrawlLogScalarFieldEnum: {
    id: 'id',
    dataSourceId: 'dataSourceId',
    status: 'status',
    startTime: 'startTime',
    endTime: 'endTime',
    itemsFound: 'itemsFound',
    itemsSaved: 'itemsSaved',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
  };

  export type CrawlLogScalarFieldEnum = (typeof CrawlLogScalarFieldEnum)[keyof typeof CrawlLogScalarFieldEnum]


  export const ProjectTagScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    tag: 'tag',
    createdAt: 'createdAt'
  };

  export type ProjectTagScalarFieldEnum = (typeof ProjectTagScalarFieldEnum)[keyof typeof ProjectTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    subscriptionTier: 'subscriptionTier',
    subscriptionStatus: 'subscriptionStatus',
    stripeCustomerId: 'stripeCustomerId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ProjectOrderByRelevanceFieldEnum: {
    id: 'id',
    source: 'source',
    sourceId: 'sourceId',
    name: 'name',
    description: 'description',
    url: 'url'
  };

  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]


  export const ProjectMetricsOrderByRelevanceFieldEnum: {
    id: 'id',
    projectId: 'projectId'
  };

  export type ProjectMetricsOrderByRelevanceFieldEnum = (typeof ProjectMetricsOrderByRelevanceFieldEnum)[keyof typeof ProjectMetricsOrderByRelevanceFieldEnum]


  export const ProjectAnalysisOrderByRelevanceFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    trend: 'trend',
    marketPotential: 'marketPotential',
    competitionLevel: 'competitionLevel'
  };

  export type ProjectAnalysisOrderByRelevanceFieldEnum = (typeof ProjectAnalysisOrderByRelevanceFieldEnum)[keyof typeof ProjectAnalysisOrderByRelevanceFieldEnum]


  export const UserSavedProjectOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectId: 'projectId',
    notes: 'notes'
  };

  export type UserSavedProjectOrderByRelevanceFieldEnum = (typeof UserSavedProjectOrderByRelevanceFieldEnum)[keyof typeof UserSavedProjectOrderByRelevanceFieldEnum]


  export const UserSubscriptionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    priceId: 'priceId',
    status: 'status'
  };

  export type UserSubscriptionOrderByRelevanceFieldEnum = (typeof UserSubscriptionOrderByRelevanceFieldEnum)[keyof typeof UserSubscriptionOrderByRelevanceFieldEnum]


  export const DataSourceOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    displayName: 'displayName'
  };

  export type DataSourceOrderByRelevanceFieldEnum = (typeof DataSourceOrderByRelevanceFieldEnum)[keyof typeof DataSourceOrderByRelevanceFieldEnum]


  export const CrawlLogOrderByRelevanceFieldEnum: {
    id: 'id',
    dataSourceId: 'dataSourceId',
    status: 'status',
    errorMessage: 'errorMessage'
  };

  export type CrawlLogOrderByRelevanceFieldEnum = (typeof CrawlLogOrderByRelevanceFieldEnum)[keyof typeof CrawlLogOrderByRelevanceFieldEnum]


  export const ProjectTagOrderByRelevanceFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    tag: 'tag'
  };

  export type ProjectTagOrderByRelevanceFieldEnum = (typeof ProjectTagOrderByRelevanceFieldEnum)[keyof typeof ProjectTagOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    subscriptionTier?: StringFilter<"User"> | string
    subscriptionStatus?: StringFilter<"User"> | string
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    savedProjects?: UserSavedProjectListRelationFilter
    subscriptions?: UserSubscriptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    subscriptionTier?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    savedProjects?: UserSavedProjectOrderByRelationAggregateInput
    subscriptions?: UserSubscriptionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    stripeCustomerId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    subscriptionTier?: StringFilter<"User"> | string
    subscriptionStatus?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    savedProjects?: UserSavedProjectListRelationFilter
    subscriptions?: UserSubscriptionListRelationFilter
  }, "id" | "email" | "stripeCustomerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    subscriptionTier?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    subscriptionTier?: StringWithAggregatesFilter<"User"> | string
    subscriptionStatus?: StringWithAggregatesFilter<"User"> | string
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    source?: StringFilter<"Project"> | string
    sourceId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    url?: StringFilter<"Project"> | string
    category?: JsonFilter<"Project">
    tags?: JsonFilter<"Project">
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    discoveredAt?: DateTimeFilter<"Project"> | Date | string
    metrics?: XOR<ProjectMetricsNullableScalarRelationFilter, ProjectMetricsWhereInput> | null
    analysis?: XOR<ProjectAnalysisNullableScalarRelationFilter, ProjectAnalysisWhereInput> | null
    savedByUsers?: UserSavedProjectListRelationFilter
    projectTags?: ProjectTagListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discoveredAt?: SortOrder
    metrics?: ProjectMetricsOrderByWithRelationInput
    analysis?: ProjectAnalysisOrderByWithRelationInput
    savedByUsers?: UserSavedProjectOrderByRelationAggregateInput
    projectTags?: ProjectTagOrderByRelationAggregateInput
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_source_project?: ProjectUnique_source_projectCompoundUniqueInput
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    source?: StringFilter<"Project"> | string
    sourceId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    url?: StringFilter<"Project"> | string
    category?: JsonFilter<"Project">
    tags?: JsonFilter<"Project">
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    discoveredAt?: DateTimeFilter<"Project"> | Date | string
    metrics?: XOR<ProjectMetricsNullableScalarRelationFilter, ProjectMetricsWhereInput> | null
    analysis?: XOR<ProjectAnalysisNullableScalarRelationFilter, ProjectAnalysisWhereInput> | null
    savedByUsers?: UserSavedProjectListRelationFilter
    projectTags?: ProjectTagListRelationFilter
  }, "id" | "unique_source_project">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discoveredAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    source?: StringWithAggregatesFilter<"Project"> | string
    sourceId?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    url?: StringWithAggregatesFilter<"Project"> | string
    category?: JsonWithAggregatesFilter<"Project">
    tags?: JsonWithAggregatesFilter<"Project">
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    discoveredAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectMetricsWhereInput = {
    AND?: ProjectMetricsWhereInput | ProjectMetricsWhereInput[]
    OR?: ProjectMetricsWhereInput[]
    NOT?: ProjectMetricsWhereInput | ProjectMetricsWhereInput[]
    id?: StringFilter<"ProjectMetrics"> | string
    projectId?: StringFilter<"ProjectMetrics"> | string
    stars?: IntNullableFilter<"ProjectMetrics"> | number | null
    forks?: IntNullableFilter<"ProjectMetrics"> | number | null
    issues?: IntNullableFilter<"ProjectMetrics"> | number | null
    contributors?: IntNullableFilter<"ProjectMetrics"> | number | null
    upvotes?: IntNullableFilter<"ProjectMetrics"> | number | null
    comments?: IntNullableFilter<"ProjectMetrics"> | number | null
    views?: IntNullableFilter<"ProjectMetrics"> | number | null
    dailyGrowth?: FloatNullableFilter<"ProjectMetrics"> | number | null
    weeklyGrowth?: FloatNullableFilter<"ProjectMetrics"> | number | null
    createdAt?: DateTimeFilter<"ProjectMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectMetrics"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectMetricsOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    stars?: SortOrderInput | SortOrder
    forks?: SortOrderInput | SortOrder
    issues?: SortOrderInput | SortOrder
    contributors?: SortOrderInput | SortOrder
    upvotes?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    views?: SortOrderInput | SortOrder
    dailyGrowth?: SortOrderInput | SortOrder
    weeklyGrowth?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    _relevance?: ProjectMetricsOrderByRelevanceInput
  }

  export type ProjectMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: ProjectMetricsWhereInput | ProjectMetricsWhereInput[]
    OR?: ProjectMetricsWhereInput[]
    NOT?: ProjectMetricsWhereInput | ProjectMetricsWhereInput[]
    stars?: IntNullableFilter<"ProjectMetrics"> | number | null
    forks?: IntNullableFilter<"ProjectMetrics"> | number | null
    issues?: IntNullableFilter<"ProjectMetrics"> | number | null
    contributors?: IntNullableFilter<"ProjectMetrics"> | number | null
    upvotes?: IntNullableFilter<"ProjectMetrics"> | number | null
    comments?: IntNullableFilter<"ProjectMetrics"> | number | null
    views?: IntNullableFilter<"ProjectMetrics"> | number | null
    dailyGrowth?: FloatNullableFilter<"ProjectMetrics"> | number | null
    weeklyGrowth?: FloatNullableFilter<"ProjectMetrics"> | number | null
    createdAt?: DateTimeFilter<"ProjectMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectMetrics"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type ProjectMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    stars?: SortOrderInput | SortOrder
    forks?: SortOrderInput | SortOrder
    issues?: SortOrderInput | SortOrder
    contributors?: SortOrderInput | SortOrder
    upvotes?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    views?: SortOrderInput | SortOrder
    dailyGrowth?: SortOrderInput | SortOrder
    weeklyGrowth?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectMetricsCountOrderByAggregateInput
    _avg?: ProjectMetricsAvgOrderByAggregateInput
    _max?: ProjectMetricsMaxOrderByAggregateInput
    _min?: ProjectMetricsMinOrderByAggregateInput
    _sum?: ProjectMetricsSumOrderByAggregateInput
  }

  export type ProjectMetricsScalarWhereWithAggregatesInput = {
    AND?: ProjectMetricsScalarWhereWithAggregatesInput | ProjectMetricsScalarWhereWithAggregatesInput[]
    OR?: ProjectMetricsScalarWhereWithAggregatesInput[]
    NOT?: ProjectMetricsScalarWhereWithAggregatesInput | ProjectMetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectMetrics"> | string
    projectId?: StringWithAggregatesFilter<"ProjectMetrics"> | string
    stars?: IntNullableWithAggregatesFilter<"ProjectMetrics"> | number | null
    forks?: IntNullableWithAggregatesFilter<"ProjectMetrics"> | number | null
    issues?: IntNullableWithAggregatesFilter<"ProjectMetrics"> | number | null
    contributors?: IntNullableWithAggregatesFilter<"ProjectMetrics"> | number | null
    upvotes?: IntNullableWithAggregatesFilter<"ProjectMetrics"> | number | null
    comments?: IntNullableWithAggregatesFilter<"ProjectMetrics"> | number | null
    views?: IntNullableWithAggregatesFilter<"ProjectMetrics"> | number | null
    dailyGrowth?: FloatNullableWithAggregatesFilter<"ProjectMetrics"> | number | null
    weeklyGrowth?: FloatNullableWithAggregatesFilter<"ProjectMetrics"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ProjectMetrics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectMetrics"> | Date | string
  }

  export type ProjectAnalysisWhereInput = {
    AND?: ProjectAnalysisWhereInput | ProjectAnalysisWhereInput[]
    OR?: ProjectAnalysisWhereInput[]
    NOT?: ProjectAnalysisWhereInput | ProjectAnalysisWhereInput[]
    id?: StringFilter<"ProjectAnalysis"> | string
    projectId?: StringFilter<"ProjectAnalysis"> | string
    score?: FloatFilter<"ProjectAnalysis"> | number
    trend?: StringFilter<"ProjectAnalysis"> | string
    marketPotential?: StringFilter<"ProjectAnalysis"> | string
    competitionLevel?: StringFilter<"ProjectAnalysis"> | string
    successProbability?: FloatFilter<"ProjectAnalysis"> | number
    competitors?: JsonFilter<"ProjectAnalysis">
    keyInsights?: JsonFilter<"ProjectAnalysis">
    risks?: JsonFilter<"ProjectAnalysis">
    opportunities?: JsonFilter<"ProjectAnalysis">
    createdAt?: DateTimeFilter<"ProjectAnalysis"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectAnalysis"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    score?: SortOrder
    trend?: SortOrder
    marketPotential?: SortOrder
    competitionLevel?: SortOrder
    successProbability?: SortOrder
    competitors?: SortOrder
    keyInsights?: SortOrder
    risks?: SortOrder
    opportunities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    _relevance?: ProjectAnalysisOrderByRelevanceInput
  }

  export type ProjectAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: ProjectAnalysisWhereInput | ProjectAnalysisWhereInput[]
    OR?: ProjectAnalysisWhereInput[]
    NOT?: ProjectAnalysisWhereInput | ProjectAnalysisWhereInput[]
    score?: FloatFilter<"ProjectAnalysis"> | number
    trend?: StringFilter<"ProjectAnalysis"> | string
    marketPotential?: StringFilter<"ProjectAnalysis"> | string
    competitionLevel?: StringFilter<"ProjectAnalysis"> | string
    successProbability?: FloatFilter<"ProjectAnalysis"> | number
    competitors?: JsonFilter<"ProjectAnalysis">
    keyInsights?: JsonFilter<"ProjectAnalysis">
    risks?: JsonFilter<"ProjectAnalysis">
    opportunities?: JsonFilter<"ProjectAnalysis">
    createdAt?: DateTimeFilter<"ProjectAnalysis"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectAnalysis"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type ProjectAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    score?: SortOrder
    trend?: SortOrder
    marketPotential?: SortOrder
    competitionLevel?: SortOrder
    successProbability?: SortOrder
    competitors?: SortOrder
    keyInsights?: SortOrder
    risks?: SortOrder
    opportunities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectAnalysisCountOrderByAggregateInput
    _avg?: ProjectAnalysisAvgOrderByAggregateInput
    _max?: ProjectAnalysisMaxOrderByAggregateInput
    _min?: ProjectAnalysisMinOrderByAggregateInput
    _sum?: ProjectAnalysisSumOrderByAggregateInput
  }

  export type ProjectAnalysisScalarWhereWithAggregatesInput = {
    AND?: ProjectAnalysisScalarWhereWithAggregatesInput | ProjectAnalysisScalarWhereWithAggregatesInput[]
    OR?: ProjectAnalysisScalarWhereWithAggregatesInput[]
    NOT?: ProjectAnalysisScalarWhereWithAggregatesInput | ProjectAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectAnalysis"> | string
    projectId?: StringWithAggregatesFilter<"ProjectAnalysis"> | string
    score?: FloatWithAggregatesFilter<"ProjectAnalysis"> | number
    trend?: StringWithAggregatesFilter<"ProjectAnalysis"> | string
    marketPotential?: StringWithAggregatesFilter<"ProjectAnalysis"> | string
    competitionLevel?: StringWithAggregatesFilter<"ProjectAnalysis"> | string
    successProbability?: FloatWithAggregatesFilter<"ProjectAnalysis"> | number
    competitors?: JsonWithAggregatesFilter<"ProjectAnalysis">
    keyInsights?: JsonWithAggregatesFilter<"ProjectAnalysis">
    risks?: JsonWithAggregatesFilter<"ProjectAnalysis">
    opportunities?: JsonWithAggregatesFilter<"ProjectAnalysis">
    createdAt?: DateTimeWithAggregatesFilter<"ProjectAnalysis"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectAnalysis"> | Date | string
  }

  export type UserSavedProjectWhereInput = {
    AND?: UserSavedProjectWhereInput | UserSavedProjectWhereInput[]
    OR?: UserSavedProjectWhereInput[]
    NOT?: UserSavedProjectWhereInput | UserSavedProjectWhereInput[]
    id?: StringFilter<"UserSavedProject"> | string
    userId?: StringFilter<"UserSavedProject"> | string
    projectId?: StringFilter<"UserSavedProject"> | string
    notes?: StringNullableFilter<"UserSavedProject"> | string | null
    createdAt?: DateTimeFilter<"UserSavedProject"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type UserSavedProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    _relevance?: UserSavedProjectOrderByRelevanceInput
  }

  export type UserSavedProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_user_project?: UserSavedProjectUnique_user_projectCompoundUniqueInput
    AND?: UserSavedProjectWhereInput | UserSavedProjectWhereInput[]
    OR?: UserSavedProjectWhereInput[]
    NOT?: UserSavedProjectWhereInput | UserSavedProjectWhereInput[]
    userId?: StringFilter<"UserSavedProject"> | string
    projectId?: StringFilter<"UserSavedProject"> | string
    notes?: StringNullableFilter<"UserSavedProject"> | string | null
    createdAt?: DateTimeFilter<"UserSavedProject"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "unique_user_project">

  export type UserSavedProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserSavedProjectCountOrderByAggregateInput
    _max?: UserSavedProjectMaxOrderByAggregateInput
    _min?: UserSavedProjectMinOrderByAggregateInput
  }

  export type UserSavedProjectScalarWhereWithAggregatesInput = {
    AND?: UserSavedProjectScalarWhereWithAggregatesInput | UserSavedProjectScalarWhereWithAggregatesInput[]
    OR?: UserSavedProjectScalarWhereWithAggregatesInput[]
    NOT?: UserSavedProjectScalarWhereWithAggregatesInput | UserSavedProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSavedProject"> | string
    userId?: StringWithAggregatesFilter<"UserSavedProject"> | string
    projectId?: StringWithAggregatesFilter<"UserSavedProject"> | string
    notes?: StringNullableWithAggregatesFilter<"UserSavedProject"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSavedProject"> | Date | string
  }

  export type UserSubscriptionWhereInput = {
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    stripeSubscriptionId?: StringFilter<"UserSubscription"> | string
    priceId?: StringFilter<"UserSubscription"> | string
    status?: StringFilter<"UserSubscription"> | string
    currentPeriodStart?: DateTimeFilter<"UserSubscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"UserSubscription"> | Date | string
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    priceId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserSubscriptionOrderByRelevanceInput
  }

  export type UserSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeSubscriptionId?: string
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    userId?: StringFilter<"UserSubscription"> | string
    priceId?: StringFilter<"UserSubscription"> | string
    status?: StringFilter<"UserSubscription"> | string
    currentPeriodStart?: DateTimeFilter<"UserSubscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"UserSubscription"> | Date | string
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "stripeSubscriptionId">

  export type UserSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    priceId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSubscriptionCountOrderByAggregateInput
    _max?: UserSubscriptionMaxOrderByAggregateInput
    _min?: UserSubscriptionMinOrderByAggregateInput
  }

  export type UserSubscriptionScalarWhereWithAggregatesInput = {
    AND?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    OR?: UserSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSubscription"> | string
    userId?: StringWithAggregatesFilter<"UserSubscription"> | string
    stripeSubscriptionId?: StringWithAggregatesFilter<"UserSubscription"> | string
    priceId?: StringWithAggregatesFilter<"UserSubscription"> | string
    status?: StringWithAggregatesFilter<"UserSubscription"> | string
    currentPeriodStart?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    currentPeriodEnd?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
  }

  export type DataSourceWhereInput = {
    AND?: DataSourceWhereInput | DataSourceWhereInput[]
    OR?: DataSourceWhereInput[]
    NOT?: DataSourceWhereInput | DataSourceWhereInput[]
    id?: StringFilter<"DataSource"> | string
    name?: StringFilter<"DataSource"> | string
    displayName?: StringFilter<"DataSource"> | string
    isActive?: BoolFilter<"DataSource"> | boolean
    apiConfig?: JsonFilter<"DataSource">
    credentials?: JsonFilter<"DataSource">
    lastCrawl?: DateTimeNullableFilter<"DataSource"> | Date | string | null
    createdAt?: DateTimeFilter<"DataSource"> | Date | string
    updatedAt?: DateTimeFilter<"DataSource"> | Date | string
    crawlLogs?: CrawlLogListRelationFilter
  }

  export type DataSourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
    apiConfig?: SortOrder
    credentials?: SortOrder
    lastCrawl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    crawlLogs?: CrawlLogOrderByRelationAggregateInput
    _relevance?: DataSourceOrderByRelevanceInput
  }

  export type DataSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DataSourceWhereInput | DataSourceWhereInput[]
    OR?: DataSourceWhereInput[]
    NOT?: DataSourceWhereInput | DataSourceWhereInput[]
    displayName?: StringFilter<"DataSource"> | string
    isActive?: BoolFilter<"DataSource"> | boolean
    apiConfig?: JsonFilter<"DataSource">
    credentials?: JsonFilter<"DataSource">
    lastCrawl?: DateTimeNullableFilter<"DataSource"> | Date | string | null
    createdAt?: DateTimeFilter<"DataSource"> | Date | string
    updatedAt?: DateTimeFilter<"DataSource"> | Date | string
    crawlLogs?: CrawlLogListRelationFilter
  }, "id" | "name">

  export type DataSourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
    apiConfig?: SortOrder
    credentials?: SortOrder
    lastCrawl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DataSourceCountOrderByAggregateInput
    _max?: DataSourceMaxOrderByAggregateInput
    _min?: DataSourceMinOrderByAggregateInput
  }

  export type DataSourceScalarWhereWithAggregatesInput = {
    AND?: DataSourceScalarWhereWithAggregatesInput | DataSourceScalarWhereWithAggregatesInput[]
    OR?: DataSourceScalarWhereWithAggregatesInput[]
    NOT?: DataSourceScalarWhereWithAggregatesInput | DataSourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataSource"> | string
    name?: StringWithAggregatesFilter<"DataSource"> | string
    displayName?: StringWithAggregatesFilter<"DataSource"> | string
    isActive?: BoolWithAggregatesFilter<"DataSource"> | boolean
    apiConfig?: JsonWithAggregatesFilter<"DataSource">
    credentials?: JsonWithAggregatesFilter<"DataSource">
    lastCrawl?: DateTimeNullableWithAggregatesFilter<"DataSource"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DataSource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DataSource"> | Date | string
  }

  export type CrawlLogWhereInput = {
    AND?: CrawlLogWhereInput | CrawlLogWhereInput[]
    OR?: CrawlLogWhereInput[]
    NOT?: CrawlLogWhereInput | CrawlLogWhereInput[]
    id?: StringFilter<"CrawlLog"> | string
    dataSourceId?: StringFilter<"CrawlLog"> | string
    status?: StringFilter<"CrawlLog"> | string
    startTime?: DateTimeFilter<"CrawlLog"> | Date | string
    endTime?: DateTimeNullableFilter<"CrawlLog"> | Date | string | null
    itemsFound?: IntFilter<"CrawlLog"> | number
    itemsSaved?: IntFilter<"CrawlLog"> | number
    errorMessage?: StringNullableFilter<"CrawlLog"> | string | null
    createdAt?: DateTimeFilter<"CrawlLog"> | Date | string
    dataSource?: XOR<DataSourceScalarRelationFilter, DataSourceWhereInput>
  }

  export type CrawlLogOrderByWithRelationInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    itemsFound?: SortOrder
    itemsSaved?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    dataSource?: DataSourceOrderByWithRelationInput
    _relevance?: CrawlLogOrderByRelevanceInput
  }

  export type CrawlLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CrawlLogWhereInput | CrawlLogWhereInput[]
    OR?: CrawlLogWhereInput[]
    NOT?: CrawlLogWhereInput | CrawlLogWhereInput[]
    dataSourceId?: StringFilter<"CrawlLog"> | string
    status?: StringFilter<"CrawlLog"> | string
    startTime?: DateTimeFilter<"CrawlLog"> | Date | string
    endTime?: DateTimeNullableFilter<"CrawlLog"> | Date | string | null
    itemsFound?: IntFilter<"CrawlLog"> | number
    itemsSaved?: IntFilter<"CrawlLog"> | number
    errorMessage?: StringNullableFilter<"CrawlLog"> | string | null
    createdAt?: DateTimeFilter<"CrawlLog"> | Date | string
    dataSource?: XOR<DataSourceScalarRelationFilter, DataSourceWhereInput>
  }, "id">

  export type CrawlLogOrderByWithAggregationInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    itemsFound?: SortOrder
    itemsSaved?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CrawlLogCountOrderByAggregateInput
    _avg?: CrawlLogAvgOrderByAggregateInput
    _max?: CrawlLogMaxOrderByAggregateInput
    _min?: CrawlLogMinOrderByAggregateInput
    _sum?: CrawlLogSumOrderByAggregateInput
  }

  export type CrawlLogScalarWhereWithAggregatesInput = {
    AND?: CrawlLogScalarWhereWithAggregatesInput | CrawlLogScalarWhereWithAggregatesInput[]
    OR?: CrawlLogScalarWhereWithAggregatesInput[]
    NOT?: CrawlLogScalarWhereWithAggregatesInput | CrawlLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CrawlLog"> | string
    dataSourceId?: StringWithAggregatesFilter<"CrawlLog"> | string
    status?: StringWithAggregatesFilter<"CrawlLog"> | string
    startTime?: DateTimeWithAggregatesFilter<"CrawlLog"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"CrawlLog"> | Date | string | null
    itemsFound?: IntWithAggregatesFilter<"CrawlLog"> | number
    itemsSaved?: IntWithAggregatesFilter<"CrawlLog"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"CrawlLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CrawlLog"> | Date | string
  }

  export type ProjectTagWhereInput = {
    AND?: ProjectTagWhereInput | ProjectTagWhereInput[]
    OR?: ProjectTagWhereInput[]
    NOT?: ProjectTagWhereInput | ProjectTagWhereInput[]
    id?: StringFilter<"ProjectTag"> | string
    projectId?: StringFilter<"ProjectTag"> | string
    tag?: StringFilter<"ProjectTag"> | string
    createdAt?: DateTimeFilter<"ProjectTag"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectTagOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    _relevance?: ProjectTagOrderByRelevanceInput
  }

  export type ProjectTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_project_tag?: ProjectTagUnique_project_tagCompoundUniqueInput
    AND?: ProjectTagWhereInput | ProjectTagWhereInput[]
    OR?: ProjectTagWhereInput[]
    NOT?: ProjectTagWhereInput | ProjectTagWhereInput[]
    projectId?: StringFilter<"ProjectTag"> | string
    tag?: StringFilter<"ProjectTag"> | string
    createdAt?: DateTimeFilter<"ProjectTag"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "unique_project_tag">

  export type ProjectTagOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectTagCountOrderByAggregateInput
    _max?: ProjectTagMaxOrderByAggregateInput
    _min?: ProjectTagMinOrderByAggregateInput
  }

  export type ProjectTagScalarWhereWithAggregatesInput = {
    AND?: ProjectTagScalarWhereWithAggregatesInput | ProjectTagScalarWhereWithAggregatesInput[]
    OR?: ProjectTagScalarWhereWithAggregatesInput[]
    NOT?: ProjectTagScalarWhereWithAggregatesInput | ProjectTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectTag"> | string
    projectId?: StringWithAggregatesFilter<"ProjectTag"> | string
    tag?: StringWithAggregatesFilter<"ProjectTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectTag"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    subscriptionTier?: string
    subscriptionStatus?: string
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedProjects?: UserSavedProjectCreateNestedManyWithoutUserInput
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    subscriptionTier?: string
    subscriptionStatus?: string
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedProjects?: UserSavedProjectUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedProjects?: UserSavedProjectUpdateManyWithoutUserNestedInput
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedProjects?: UserSavedProjectUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    subscriptionTier?: string
    subscriptionStatus?: string
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    source: string
    sourceId: string
    name: string
    description?: string | null
    url: string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discoveredAt?: Date | string
    metrics?: ProjectMetricsCreateNestedOneWithoutProjectInput
    analysis?: ProjectAnalysisCreateNestedOneWithoutProjectInput
    savedByUsers?: UserSavedProjectCreateNestedManyWithoutProjectInput
    projectTags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    source: string
    sourceId: string
    name: string
    description?: string | null
    url: string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discoveredAt?: Date | string
    metrics?: ProjectMetricsUncheckedCreateNestedOneWithoutProjectInput
    analysis?: ProjectAnalysisUncheckedCreateNestedOneWithoutProjectInput
    savedByUsers?: UserSavedProjectUncheckedCreateNestedManyWithoutProjectInput
    projectTags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: ProjectMetricsUpdateOneWithoutProjectNestedInput
    analysis?: ProjectAnalysisUpdateOneWithoutProjectNestedInput
    savedByUsers?: UserSavedProjectUpdateManyWithoutProjectNestedInput
    projectTags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: ProjectMetricsUncheckedUpdateOneWithoutProjectNestedInput
    analysis?: ProjectAnalysisUncheckedUpdateOneWithoutProjectNestedInput
    savedByUsers?: UserSavedProjectUncheckedUpdateManyWithoutProjectNestedInput
    projectTags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    source: string
    sourceId: string
    name: string
    description?: string | null
    url: string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discoveredAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMetricsCreateInput = {
    id?: string
    stars?: number | null
    forks?: number | null
    issues?: number | null
    contributors?: number | null
    upvotes?: number | null
    comments?: number | null
    views?: number | null
    dailyGrowth?: number | null
    weeklyGrowth?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMetricsInput
  }

  export type ProjectMetricsUncheckedCreateInput = {
    id?: string
    projectId: string
    stars?: number | null
    forks?: number | null
    issues?: number | null
    contributors?: number | null
    upvotes?: number | null
    comments?: number | null
    views?: number | null
    dailyGrowth?: number | null
    weeklyGrowth?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableIntFieldUpdateOperationsInput | number | null
    contributors?: NullableIntFieldUpdateOperationsInput | number | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    dailyGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    weeklyGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type ProjectMetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableIntFieldUpdateOperationsInput | number | null
    contributors?: NullableIntFieldUpdateOperationsInput | number | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    dailyGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    weeklyGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMetricsCreateManyInput = {
    id?: string
    projectId: string
    stars?: number | null
    forks?: number | null
    issues?: number | null
    contributors?: number | null
    upvotes?: number | null
    comments?: number | null
    views?: number | null
    dailyGrowth?: number | null
    weeklyGrowth?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableIntFieldUpdateOperationsInput | number | null
    contributors?: NullableIntFieldUpdateOperationsInput | number | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    dailyGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    weeklyGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableIntFieldUpdateOperationsInput | number | null
    contributors?: NullableIntFieldUpdateOperationsInput | number | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    dailyGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    weeklyGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAnalysisCreateInput = {
    id?: string
    score: number
    trend: string
    marketPotential: string
    competitionLevel: string
    successProbability: number
    competitors?: JsonNullValueInput | InputJsonValue
    keyInsights?: JsonNullValueInput | InputJsonValue
    risks?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutAnalysisInput
  }

  export type ProjectAnalysisUncheckedCreateInput = {
    id?: string
    projectId: string
    score: number
    trend: string
    marketPotential: string
    competitionLevel: string
    successProbability: number
    competitors?: JsonNullValueInput | InputJsonValue
    keyInsights?: JsonNullValueInput | InputJsonValue
    risks?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    trend?: StringFieldUpdateOperationsInput | string
    marketPotential?: StringFieldUpdateOperationsInput | string
    competitionLevel?: StringFieldUpdateOperationsInput | string
    successProbability?: FloatFieldUpdateOperationsInput | number
    competitors?: JsonNullValueInput | InputJsonValue
    keyInsights?: JsonNullValueInput | InputJsonValue
    risks?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAnalysisNestedInput
  }

  export type ProjectAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    trend?: StringFieldUpdateOperationsInput | string
    marketPotential?: StringFieldUpdateOperationsInput | string
    competitionLevel?: StringFieldUpdateOperationsInput | string
    successProbability?: FloatFieldUpdateOperationsInput | number
    competitors?: JsonNullValueInput | InputJsonValue
    keyInsights?: JsonNullValueInput | InputJsonValue
    risks?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAnalysisCreateManyInput = {
    id?: string
    projectId: string
    score: number
    trend: string
    marketPotential: string
    competitionLevel: string
    successProbability: number
    competitors?: JsonNullValueInput | InputJsonValue
    keyInsights?: JsonNullValueInput | InputJsonValue
    risks?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    trend?: StringFieldUpdateOperationsInput | string
    marketPotential?: StringFieldUpdateOperationsInput | string
    competitionLevel?: StringFieldUpdateOperationsInput | string
    successProbability?: FloatFieldUpdateOperationsInput | number
    competitors?: JsonNullValueInput | InputJsonValue
    keyInsights?: JsonNullValueInput | InputJsonValue
    risks?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    trend?: StringFieldUpdateOperationsInput | string
    marketPotential?: StringFieldUpdateOperationsInput | string
    competitionLevel?: StringFieldUpdateOperationsInput | string
    successProbability?: FloatFieldUpdateOperationsInput | number
    competitors?: JsonNullValueInput | InputJsonValue
    keyInsights?: JsonNullValueInput | InputJsonValue
    risks?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedProjectCreateInput = {
    id?: string
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedProjectsInput
    project: ProjectCreateNestedOneWithoutSavedByUsersInput
  }

  export type UserSavedProjectUncheckedCreateInput = {
    id?: string
    userId: string
    projectId: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserSavedProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedProjectsNestedInput
    project?: ProjectUpdateOneRequiredWithoutSavedByUsersNestedInput
  }

  export type UserSavedProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedProjectCreateManyInput = {
    id?: string
    userId: string
    projectId: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserSavedProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateInput = {
    id?: string
    stripeSubscriptionId: string
    priceId: string
    status: string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type UserSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    stripeSubscriptionId: string
    priceId: string
    status: string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type UserSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateManyInput = {
    id?: string
    userId: string
    stripeSubscriptionId: string
    priceId: string
    status: string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSourceCreateInput = {
    id?: string
    name: string
    displayName: string
    isActive?: boolean
    apiConfig?: JsonNullValueInput | InputJsonValue
    credentials?: JsonNullValueInput | InputJsonValue
    lastCrawl?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlLogs?: CrawlLogCreateNestedManyWithoutDataSourceInput
  }

  export type DataSourceUncheckedCreateInput = {
    id?: string
    name: string
    displayName: string
    isActive?: boolean
    apiConfig?: JsonNullValueInput | InputJsonValue
    credentials?: JsonNullValueInput | InputJsonValue
    lastCrawl?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlLogs?: CrawlLogUncheckedCreateNestedManyWithoutDataSourceInput
  }

  export type DataSourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    apiConfig?: JsonNullValueInput | InputJsonValue
    credentials?: JsonNullValueInput | InputJsonValue
    lastCrawl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlLogs?: CrawlLogUpdateManyWithoutDataSourceNestedInput
  }

  export type DataSourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    apiConfig?: JsonNullValueInput | InputJsonValue
    credentials?: JsonNullValueInput | InputJsonValue
    lastCrawl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlLogs?: CrawlLogUncheckedUpdateManyWithoutDataSourceNestedInput
  }

  export type DataSourceCreateManyInput = {
    id?: string
    name: string
    displayName: string
    isActive?: boolean
    apiConfig?: JsonNullValueInput | InputJsonValue
    credentials?: JsonNullValueInput | InputJsonValue
    lastCrawl?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataSourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    apiConfig?: JsonNullValueInput | InputJsonValue
    credentials?: JsonNullValueInput | InputJsonValue
    lastCrawl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    apiConfig?: JsonNullValueInput | InputJsonValue
    credentials?: JsonNullValueInput | InputJsonValue
    lastCrawl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlLogCreateInput = {
    id?: string
    status: string
    startTime: Date | string
    endTime?: Date | string | null
    itemsFound?: number
    itemsSaved?: number
    errorMessage?: string | null
    createdAt?: Date | string
    dataSource: DataSourceCreateNestedOneWithoutCrawlLogsInput
  }

  export type CrawlLogUncheckedCreateInput = {
    id?: string
    dataSourceId: string
    status: string
    startTime: Date | string
    endTime?: Date | string | null
    itemsFound?: number
    itemsSaved?: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type CrawlLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsFound?: IntFieldUpdateOperationsInput | number
    itemsSaved?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSource?: DataSourceUpdateOneRequiredWithoutCrawlLogsNestedInput
  }

  export type CrawlLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataSourceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsFound?: IntFieldUpdateOperationsInput | number
    itemsSaved?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlLogCreateManyInput = {
    id?: string
    dataSourceId: string
    status: string
    startTime: Date | string
    endTime?: Date | string | null
    itemsFound?: number
    itemsSaved?: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type CrawlLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsFound?: IntFieldUpdateOperationsInput | number
    itemsSaved?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataSourceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsFound?: IntFieldUpdateOperationsInput | number
    itemsSaved?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTagCreateInput = {
    id?: string
    tag: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectTagsInput
  }

  export type ProjectTagUncheckedCreateInput = {
    id?: string
    projectId: string
    tag: string
    createdAt?: Date | string
  }

  export type ProjectTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectTagsNestedInput
  }

  export type ProjectTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTagCreateManyInput = {
    id?: string
    projectId: string
    tag: string
    createdAt?: Date | string
  }

  export type ProjectTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserSavedProjectListRelationFilter = {
    every?: UserSavedProjectWhereInput
    some?: UserSavedProjectWhereInput
    none?: UserSavedProjectWhereInput
  }

  export type UserSubscriptionListRelationFilter = {
    every?: UserSubscriptionWhereInput
    some?: UserSubscriptionWhereInput
    none?: UserSubscriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSavedProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    subscriptionTier?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    subscriptionTier?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    subscriptionTier?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectMetricsNullableScalarRelationFilter = {
    is?: ProjectMetricsWhereInput | null
    isNot?: ProjectMetricsWhereInput | null
  }

  export type ProjectAnalysisNullableScalarRelationFilter = {
    is?: ProjectAnalysisWhereInput | null
    isNot?: ProjectAnalysisWhereInput | null
  }

  export type ProjectTagListRelationFilter = {
    every?: ProjectTagWhereInput
    some?: ProjectTagWhereInput
    none?: ProjectTagWhereInput
  }

  export type ProjectTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectUnique_source_projectCompoundUniqueInput = {
    source: string
    sourceId: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discoveredAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discoveredAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discoveredAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectMetricsOrderByRelevanceInput = {
    fields: ProjectMetricsOrderByRelevanceFieldEnum | ProjectMetricsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    stars?: SortOrder
    forks?: SortOrder
    issues?: SortOrder
    contributors?: SortOrder
    upvotes?: SortOrder
    comments?: SortOrder
    views?: SortOrder
    dailyGrowth?: SortOrder
    weeklyGrowth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMetricsAvgOrderByAggregateInput = {
    stars?: SortOrder
    forks?: SortOrder
    issues?: SortOrder
    contributors?: SortOrder
    upvotes?: SortOrder
    comments?: SortOrder
    views?: SortOrder
    dailyGrowth?: SortOrder
    weeklyGrowth?: SortOrder
  }

  export type ProjectMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    stars?: SortOrder
    forks?: SortOrder
    issues?: SortOrder
    contributors?: SortOrder
    upvotes?: SortOrder
    comments?: SortOrder
    views?: SortOrder
    dailyGrowth?: SortOrder
    weeklyGrowth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    stars?: SortOrder
    forks?: SortOrder
    issues?: SortOrder
    contributors?: SortOrder
    upvotes?: SortOrder
    comments?: SortOrder
    views?: SortOrder
    dailyGrowth?: SortOrder
    weeklyGrowth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMetricsSumOrderByAggregateInput = {
    stars?: SortOrder
    forks?: SortOrder
    issues?: SortOrder
    contributors?: SortOrder
    upvotes?: SortOrder
    comments?: SortOrder
    views?: SortOrder
    dailyGrowth?: SortOrder
    weeklyGrowth?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProjectAnalysisOrderByRelevanceInput = {
    fields: ProjectAnalysisOrderByRelevanceFieldEnum | ProjectAnalysisOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    score?: SortOrder
    trend?: SortOrder
    marketPotential?: SortOrder
    competitionLevel?: SortOrder
    successProbability?: SortOrder
    competitors?: SortOrder
    keyInsights?: SortOrder
    risks?: SortOrder
    opportunities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAnalysisAvgOrderByAggregateInput = {
    score?: SortOrder
    successProbability?: SortOrder
  }

  export type ProjectAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    score?: SortOrder
    trend?: SortOrder
    marketPotential?: SortOrder
    competitionLevel?: SortOrder
    successProbability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    score?: SortOrder
    trend?: SortOrder
    marketPotential?: SortOrder
    competitionLevel?: SortOrder
    successProbability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAnalysisSumOrderByAggregateInput = {
    score?: SortOrder
    successProbability?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSavedProjectOrderByRelevanceInput = {
    fields: UserSavedProjectOrderByRelevanceFieldEnum | UserSavedProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserSavedProjectUnique_user_projectCompoundUniqueInput = {
    userId: string
    projectId: string
  }

  export type UserSavedProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSavedProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSavedProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSubscriptionOrderByRelevanceInput = {
    fields: UserSubscriptionOrderByRelevanceFieldEnum | UserSubscriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    priceId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    priceId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    priceId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CrawlLogListRelationFilter = {
    every?: CrawlLogWhereInput
    some?: CrawlLogWhereInput
    none?: CrawlLogWhereInput
  }

  export type CrawlLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DataSourceOrderByRelevanceInput = {
    fields: DataSourceOrderByRelevanceFieldEnum | DataSourceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DataSourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
    apiConfig?: SortOrder
    credentials?: SortOrder
    lastCrawl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
    lastCrawl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataSourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
    lastCrawl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DataSourceScalarRelationFilter = {
    is?: DataSourceWhereInput
    isNot?: DataSourceWhereInput
  }

  export type CrawlLogOrderByRelevanceInput = {
    fields: CrawlLogOrderByRelevanceFieldEnum | CrawlLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CrawlLogCountOrderByAggregateInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    itemsFound?: SortOrder
    itemsSaved?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type CrawlLogAvgOrderByAggregateInput = {
    itemsFound?: SortOrder
    itemsSaved?: SortOrder
  }

  export type CrawlLogMaxOrderByAggregateInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    itemsFound?: SortOrder
    itemsSaved?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type CrawlLogMinOrderByAggregateInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    itemsFound?: SortOrder
    itemsSaved?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type CrawlLogSumOrderByAggregateInput = {
    itemsFound?: SortOrder
    itemsSaved?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProjectTagOrderByRelevanceInput = {
    fields: ProjectTagOrderByRelevanceFieldEnum | ProjectTagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectTagUnique_project_tagCompoundUniqueInput = {
    projectId: string
    tag: string
  }

  export type ProjectTagCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectTagMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectTagMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSavedProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSavedProjectCreateWithoutUserInput, UserSavedProjectUncheckedCreateWithoutUserInput> | UserSavedProjectCreateWithoutUserInput[] | UserSavedProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSavedProjectCreateOrConnectWithoutUserInput | UserSavedProjectCreateOrConnectWithoutUserInput[]
    createMany?: UserSavedProjectCreateManyUserInputEnvelope
    connect?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
  }

  export type UserSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type UserSavedProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSavedProjectCreateWithoutUserInput, UserSavedProjectUncheckedCreateWithoutUserInput> | UserSavedProjectCreateWithoutUserInput[] | UserSavedProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSavedProjectCreateOrConnectWithoutUserInput | UserSavedProjectCreateOrConnectWithoutUserInput[]
    createMany?: UserSavedProjectCreateManyUserInputEnvelope
    connect?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
  }

  export type UserSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserSavedProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSavedProjectCreateWithoutUserInput, UserSavedProjectUncheckedCreateWithoutUserInput> | UserSavedProjectCreateWithoutUserInput[] | UserSavedProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSavedProjectCreateOrConnectWithoutUserInput | UserSavedProjectCreateOrConnectWithoutUserInput[]
    upsert?: UserSavedProjectUpsertWithWhereUniqueWithoutUserInput | UserSavedProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSavedProjectCreateManyUserInputEnvelope
    set?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    disconnect?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    delete?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    connect?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    update?: UserSavedProjectUpdateWithWhereUniqueWithoutUserInput | UserSavedProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSavedProjectUpdateManyWithWhereWithoutUserInput | UserSavedProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSavedProjectScalarWhereInput | UserSavedProjectScalarWhereInput[]
  }

  export type UserSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type UserSavedProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSavedProjectCreateWithoutUserInput, UserSavedProjectUncheckedCreateWithoutUserInput> | UserSavedProjectCreateWithoutUserInput[] | UserSavedProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSavedProjectCreateOrConnectWithoutUserInput | UserSavedProjectCreateOrConnectWithoutUserInput[]
    upsert?: UserSavedProjectUpsertWithWhereUniqueWithoutUserInput | UserSavedProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSavedProjectCreateManyUserInputEnvelope
    set?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    disconnect?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    delete?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    connect?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    update?: UserSavedProjectUpdateWithWhereUniqueWithoutUserInput | UserSavedProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSavedProjectUpdateManyWithWhereWithoutUserInput | UserSavedProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSavedProjectScalarWhereInput | UserSavedProjectScalarWhereInput[]
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type ProjectMetricsCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectMetricsCreateWithoutProjectInput, ProjectMetricsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectMetricsCreateOrConnectWithoutProjectInput
    connect?: ProjectMetricsWhereUniqueInput
  }

  export type ProjectAnalysisCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectAnalysisCreateWithoutProjectInput, ProjectAnalysisUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectAnalysisCreateOrConnectWithoutProjectInput
    connect?: ProjectAnalysisWhereUniqueInput
  }

  export type UserSavedProjectCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserSavedProjectCreateWithoutProjectInput, UserSavedProjectUncheckedCreateWithoutProjectInput> | UserSavedProjectCreateWithoutProjectInput[] | UserSavedProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserSavedProjectCreateOrConnectWithoutProjectInput | UserSavedProjectCreateOrConnectWithoutProjectInput[]
    createMany?: UserSavedProjectCreateManyProjectInputEnvelope
    connect?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
  }

  export type ProjectTagCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type ProjectMetricsUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectMetricsCreateWithoutProjectInput, ProjectMetricsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectMetricsCreateOrConnectWithoutProjectInput
    connect?: ProjectMetricsWhereUniqueInput
  }

  export type ProjectAnalysisUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectAnalysisCreateWithoutProjectInput, ProjectAnalysisUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectAnalysisCreateOrConnectWithoutProjectInput
    connect?: ProjectAnalysisWhereUniqueInput
  }

  export type UserSavedProjectUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserSavedProjectCreateWithoutProjectInput, UserSavedProjectUncheckedCreateWithoutProjectInput> | UserSavedProjectCreateWithoutProjectInput[] | UserSavedProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserSavedProjectCreateOrConnectWithoutProjectInput | UserSavedProjectCreateOrConnectWithoutProjectInput[]
    createMany?: UserSavedProjectCreateManyProjectInputEnvelope
    connect?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
  }

  export type ProjectTagUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type ProjectMetricsUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectMetricsCreateWithoutProjectInput, ProjectMetricsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectMetricsCreateOrConnectWithoutProjectInput
    upsert?: ProjectMetricsUpsertWithoutProjectInput
    disconnect?: ProjectMetricsWhereInput | boolean
    delete?: ProjectMetricsWhereInput | boolean
    connect?: ProjectMetricsWhereUniqueInput
    update?: XOR<XOR<ProjectMetricsUpdateToOneWithWhereWithoutProjectInput, ProjectMetricsUpdateWithoutProjectInput>, ProjectMetricsUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectAnalysisUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectAnalysisCreateWithoutProjectInput, ProjectAnalysisUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectAnalysisCreateOrConnectWithoutProjectInput
    upsert?: ProjectAnalysisUpsertWithoutProjectInput
    disconnect?: ProjectAnalysisWhereInput | boolean
    delete?: ProjectAnalysisWhereInput | boolean
    connect?: ProjectAnalysisWhereUniqueInput
    update?: XOR<XOR<ProjectAnalysisUpdateToOneWithWhereWithoutProjectInput, ProjectAnalysisUpdateWithoutProjectInput>, ProjectAnalysisUncheckedUpdateWithoutProjectInput>
  }

  export type UserSavedProjectUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserSavedProjectCreateWithoutProjectInput, UserSavedProjectUncheckedCreateWithoutProjectInput> | UserSavedProjectCreateWithoutProjectInput[] | UserSavedProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserSavedProjectCreateOrConnectWithoutProjectInput | UserSavedProjectCreateOrConnectWithoutProjectInput[]
    upsert?: UserSavedProjectUpsertWithWhereUniqueWithoutProjectInput | UserSavedProjectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserSavedProjectCreateManyProjectInputEnvelope
    set?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    disconnect?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    delete?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    connect?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    update?: UserSavedProjectUpdateWithWhereUniqueWithoutProjectInput | UserSavedProjectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserSavedProjectUpdateManyWithWhereWithoutProjectInput | UserSavedProjectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserSavedProjectScalarWhereInput | UserSavedProjectScalarWhereInput[]
  }

  export type ProjectTagUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutProjectInput | ProjectTagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutProjectInput | ProjectTagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutProjectInput | ProjectTagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type ProjectMetricsUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectMetricsCreateWithoutProjectInput, ProjectMetricsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectMetricsCreateOrConnectWithoutProjectInput
    upsert?: ProjectMetricsUpsertWithoutProjectInput
    disconnect?: ProjectMetricsWhereInput | boolean
    delete?: ProjectMetricsWhereInput | boolean
    connect?: ProjectMetricsWhereUniqueInput
    update?: XOR<XOR<ProjectMetricsUpdateToOneWithWhereWithoutProjectInput, ProjectMetricsUpdateWithoutProjectInput>, ProjectMetricsUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectAnalysisUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectAnalysisCreateWithoutProjectInput, ProjectAnalysisUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectAnalysisCreateOrConnectWithoutProjectInput
    upsert?: ProjectAnalysisUpsertWithoutProjectInput
    disconnect?: ProjectAnalysisWhereInput | boolean
    delete?: ProjectAnalysisWhereInput | boolean
    connect?: ProjectAnalysisWhereUniqueInput
    update?: XOR<XOR<ProjectAnalysisUpdateToOneWithWhereWithoutProjectInput, ProjectAnalysisUpdateWithoutProjectInput>, ProjectAnalysisUncheckedUpdateWithoutProjectInput>
  }

  export type UserSavedProjectUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserSavedProjectCreateWithoutProjectInput, UserSavedProjectUncheckedCreateWithoutProjectInput> | UserSavedProjectCreateWithoutProjectInput[] | UserSavedProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserSavedProjectCreateOrConnectWithoutProjectInput | UserSavedProjectCreateOrConnectWithoutProjectInput[]
    upsert?: UserSavedProjectUpsertWithWhereUniqueWithoutProjectInput | UserSavedProjectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserSavedProjectCreateManyProjectInputEnvelope
    set?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    disconnect?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    delete?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    connect?: UserSavedProjectWhereUniqueInput | UserSavedProjectWhereUniqueInput[]
    update?: UserSavedProjectUpdateWithWhereUniqueWithoutProjectInput | UserSavedProjectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserSavedProjectUpdateManyWithWhereWithoutProjectInput | UserSavedProjectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserSavedProjectScalarWhereInput | UserSavedProjectScalarWhereInput[]
  }

  export type ProjectTagUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutProjectInput | ProjectTagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutProjectInput | ProjectTagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutProjectInput | ProjectTagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutMetricsInput = {
    create?: XOR<ProjectCreateWithoutMetricsInput, ProjectUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMetricsInput
    connect?: ProjectWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<ProjectCreateWithoutMetricsInput, ProjectUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMetricsInput
    upsert?: ProjectUpsertWithoutMetricsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMetricsInput, ProjectUpdateWithoutMetricsInput>, ProjectUncheckedUpdateWithoutMetricsInput>
  }

  export type ProjectCreateNestedOneWithoutAnalysisInput = {
    create?: XOR<ProjectCreateWithoutAnalysisInput, ProjectUncheckedCreateWithoutAnalysisInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAnalysisInput
    connect?: ProjectWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutAnalysisNestedInput = {
    create?: XOR<ProjectCreateWithoutAnalysisInput, ProjectUncheckedCreateWithoutAnalysisInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAnalysisInput
    upsert?: ProjectUpsertWithoutAnalysisInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAnalysisInput, ProjectUpdateWithoutAnalysisInput>, ProjectUncheckedUpdateWithoutAnalysisInput>
  }

  export type UserCreateNestedOneWithoutSavedProjectsInput = {
    create?: XOR<UserCreateWithoutSavedProjectsInput, UserUncheckedCreateWithoutSavedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutSavedByUsersInput = {
    create?: XOR<ProjectCreateWithoutSavedByUsersInput, ProjectUncheckedCreateWithoutSavedByUsersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSavedByUsersInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedProjectsNestedInput = {
    create?: XOR<UserCreateWithoutSavedProjectsInput, UserUncheckedCreateWithoutSavedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedProjectsInput
    upsert?: UserUpsertWithoutSavedProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedProjectsInput, UserUpdateWithoutSavedProjectsInput>, UserUncheckedUpdateWithoutSavedProjectsInput>
  }

  export type ProjectUpdateOneRequiredWithoutSavedByUsersNestedInput = {
    create?: XOR<ProjectCreateWithoutSavedByUsersInput, ProjectUncheckedCreateWithoutSavedByUsersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSavedByUsersInput
    upsert?: ProjectUpsertWithoutSavedByUsersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSavedByUsersInput, ProjectUpdateWithoutSavedByUsersInput>, ProjectUncheckedUpdateWithoutSavedByUsersInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type CrawlLogCreateNestedManyWithoutDataSourceInput = {
    create?: XOR<CrawlLogCreateWithoutDataSourceInput, CrawlLogUncheckedCreateWithoutDataSourceInput> | CrawlLogCreateWithoutDataSourceInput[] | CrawlLogUncheckedCreateWithoutDataSourceInput[]
    connectOrCreate?: CrawlLogCreateOrConnectWithoutDataSourceInput | CrawlLogCreateOrConnectWithoutDataSourceInput[]
    createMany?: CrawlLogCreateManyDataSourceInputEnvelope
    connect?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
  }

  export type CrawlLogUncheckedCreateNestedManyWithoutDataSourceInput = {
    create?: XOR<CrawlLogCreateWithoutDataSourceInput, CrawlLogUncheckedCreateWithoutDataSourceInput> | CrawlLogCreateWithoutDataSourceInput[] | CrawlLogUncheckedCreateWithoutDataSourceInput[]
    connectOrCreate?: CrawlLogCreateOrConnectWithoutDataSourceInput | CrawlLogCreateOrConnectWithoutDataSourceInput[]
    createMany?: CrawlLogCreateManyDataSourceInputEnvelope
    connect?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CrawlLogUpdateManyWithoutDataSourceNestedInput = {
    create?: XOR<CrawlLogCreateWithoutDataSourceInput, CrawlLogUncheckedCreateWithoutDataSourceInput> | CrawlLogCreateWithoutDataSourceInput[] | CrawlLogUncheckedCreateWithoutDataSourceInput[]
    connectOrCreate?: CrawlLogCreateOrConnectWithoutDataSourceInput | CrawlLogCreateOrConnectWithoutDataSourceInput[]
    upsert?: CrawlLogUpsertWithWhereUniqueWithoutDataSourceInput | CrawlLogUpsertWithWhereUniqueWithoutDataSourceInput[]
    createMany?: CrawlLogCreateManyDataSourceInputEnvelope
    set?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    disconnect?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    delete?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    connect?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    update?: CrawlLogUpdateWithWhereUniqueWithoutDataSourceInput | CrawlLogUpdateWithWhereUniqueWithoutDataSourceInput[]
    updateMany?: CrawlLogUpdateManyWithWhereWithoutDataSourceInput | CrawlLogUpdateManyWithWhereWithoutDataSourceInput[]
    deleteMany?: CrawlLogScalarWhereInput | CrawlLogScalarWhereInput[]
  }

  export type CrawlLogUncheckedUpdateManyWithoutDataSourceNestedInput = {
    create?: XOR<CrawlLogCreateWithoutDataSourceInput, CrawlLogUncheckedCreateWithoutDataSourceInput> | CrawlLogCreateWithoutDataSourceInput[] | CrawlLogUncheckedCreateWithoutDataSourceInput[]
    connectOrCreate?: CrawlLogCreateOrConnectWithoutDataSourceInput | CrawlLogCreateOrConnectWithoutDataSourceInput[]
    upsert?: CrawlLogUpsertWithWhereUniqueWithoutDataSourceInput | CrawlLogUpsertWithWhereUniqueWithoutDataSourceInput[]
    createMany?: CrawlLogCreateManyDataSourceInputEnvelope
    set?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    disconnect?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    delete?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    connect?: CrawlLogWhereUniqueInput | CrawlLogWhereUniqueInput[]
    update?: CrawlLogUpdateWithWhereUniqueWithoutDataSourceInput | CrawlLogUpdateWithWhereUniqueWithoutDataSourceInput[]
    updateMany?: CrawlLogUpdateManyWithWhereWithoutDataSourceInput | CrawlLogUpdateManyWithWhereWithoutDataSourceInput[]
    deleteMany?: CrawlLogScalarWhereInput | CrawlLogScalarWhereInput[]
  }

  export type DataSourceCreateNestedOneWithoutCrawlLogsInput = {
    create?: XOR<DataSourceCreateWithoutCrawlLogsInput, DataSourceUncheckedCreateWithoutCrawlLogsInput>
    connectOrCreate?: DataSourceCreateOrConnectWithoutCrawlLogsInput
    connect?: DataSourceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DataSourceUpdateOneRequiredWithoutCrawlLogsNestedInput = {
    create?: XOR<DataSourceCreateWithoutCrawlLogsInput, DataSourceUncheckedCreateWithoutCrawlLogsInput>
    connectOrCreate?: DataSourceCreateOrConnectWithoutCrawlLogsInput
    upsert?: DataSourceUpsertWithoutCrawlLogsInput
    connect?: DataSourceWhereUniqueInput
    update?: XOR<XOR<DataSourceUpdateToOneWithWhereWithoutCrawlLogsInput, DataSourceUpdateWithoutCrawlLogsInput>, DataSourceUncheckedUpdateWithoutCrawlLogsInput>
  }

  export type ProjectCreateNestedOneWithoutProjectTagsInput = {
    create?: XOR<ProjectCreateWithoutProjectTagsInput, ProjectUncheckedCreateWithoutProjectTagsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectTagsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutProjectTagsNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectTagsInput, ProjectUncheckedCreateWithoutProjectTagsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectTagsInput
    upsert?: ProjectUpsertWithoutProjectTagsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectTagsInput, ProjectUpdateWithoutProjectTagsInput>, ProjectUncheckedUpdateWithoutProjectTagsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserSavedProjectCreateWithoutUserInput = {
    id?: string
    notes?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutSavedByUsersInput
  }

  export type UserSavedProjectUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserSavedProjectCreateOrConnectWithoutUserInput = {
    where: UserSavedProjectWhereUniqueInput
    create: XOR<UserSavedProjectCreateWithoutUserInput, UserSavedProjectUncheckedCreateWithoutUserInput>
  }

  export type UserSavedProjectCreateManyUserInputEnvelope = {
    data: UserSavedProjectCreateManyUserInput | UserSavedProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscriptionCreateWithoutUserInput = {
    id?: string
    stripeSubscriptionId: string
    priceId: string
    status: string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    stripeSubscriptionId: string
    priceId: string
    status: string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionCreateOrConnectWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionCreateManyUserInputEnvelope = {
    data: UserSubscriptionCreateManyUserInput | UserSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSavedProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSavedProjectWhereUniqueInput
    update: XOR<UserSavedProjectUpdateWithoutUserInput, UserSavedProjectUncheckedUpdateWithoutUserInput>
    create: XOR<UserSavedProjectCreateWithoutUserInput, UserSavedProjectUncheckedCreateWithoutUserInput>
  }

  export type UserSavedProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSavedProjectWhereUniqueInput
    data: XOR<UserSavedProjectUpdateWithoutUserInput, UserSavedProjectUncheckedUpdateWithoutUserInput>
  }

  export type UserSavedProjectUpdateManyWithWhereWithoutUserInput = {
    where: UserSavedProjectScalarWhereInput
    data: XOR<UserSavedProjectUpdateManyMutationInput, UserSavedProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSavedProjectScalarWhereInput = {
    AND?: UserSavedProjectScalarWhereInput | UserSavedProjectScalarWhereInput[]
    OR?: UserSavedProjectScalarWhereInput[]
    NOT?: UserSavedProjectScalarWhereInput | UserSavedProjectScalarWhereInput[]
    id?: StringFilter<"UserSavedProject"> | string
    userId?: StringFilter<"UserSavedProject"> | string
    projectId?: StringFilter<"UserSavedProject"> | string
    notes?: StringNullableFilter<"UserSavedProject"> | string | null
    createdAt?: DateTimeFilter<"UserSavedProject"> | Date | string
  }

  export type UserSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSubscriptionScalarWhereInput = {
    AND?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    OR?: UserSubscriptionScalarWhereInput[]
    NOT?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    stripeSubscriptionId?: StringFilter<"UserSubscription"> | string
    priceId?: StringFilter<"UserSubscription"> | string
    status?: StringFilter<"UserSubscription"> | string
    currentPeriodStart?: DateTimeFilter<"UserSubscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"UserSubscription"> | Date | string
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
  }

  export type ProjectMetricsCreateWithoutProjectInput = {
    id?: string
    stars?: number | null
    forks?: number | null
    issues?: number | null
    contributors?: number | null
    upvotes?: number | null
    comments?: number | null
    views?: number | null
    dailyGrowth?: number | null
    weeklyGrowth?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMetricsUncheckedCreateWithoutProjectInput = {
    id?: string
    stars?: number | null
    forks?: number | null
    issues?: number | null
    contributors?: number | null
    upvotes?: number | null
    comments?: number | null
    views?: number | null
    dailyGrowth?: number | null
    weeklyGrowth?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMetricsCreateOrConnectWithoutProjectInput = {
    where: ProjectMetricsWhereUniqueInput
    create: XOR<ProjectMetricsCreateWithoutProjectInput, ProjectMetricsUncheckedCreateWithoutProjectInput>
  }

  export type ProjectAnalysisCreateWithoutProjectInput = {
    id?: string
    score: number
    trend: string
    marketPotential: string
    competitionLevel: string
    successProbability: number
    competitors?: JsonNullValueInput | InputJsonValue
    keyInsights?: JsonNullValueInput | InputJsonValue
    risks?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectAnalysisUncheckedCreateWithoutProjectInput = {
    id?: string
    score: number
    trend: string
    marketPotential: string
    competitionLevel: string
    successProbability: number
    competitors?: JsonNullValueInput | InputJsonValue
    keyInsights?: JsonNullValueInput | InputJsonValue
    risks?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectAnalysisCreateOrConnectWithoutProjectInput = {
    where: ProjectAnalysisWhereUniqueInput
    create: XOR<ProjectAnalysisCreateWithoutProjectInput, ProjectAnalysisUncheckedCreateWithoutProjectInput>
  }

  export type UserSavedProjectCreateWithoutProjectInput = {
    id?: string
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedProjectsInput
  }

  export type UserSavedProjectUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserSavedProjectCreateOrConnectWithoutProjectInput = {
    where: UserSavedProjectWhereUniqueInput
    create: XOR<UserSavedProjectCreateWithoutProjectInput, UserSavedProjectUncheckedCreateWithoutProjectInput>
  }

  export type UserSavedProjectCreateManyProjectInputEnvelope = {
    data: UserSavedProjectCreateManyProjectInput | UserSavedProjectCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTagCreateWithoutProjectInput = {
    id?: string
    tag: string
    createdAt?: Date | string
  }

  export type ProjectTagUncheckedCreateWithoutProjectInput = {
    id?: string
    tag: string
    createdAt?: Date | string
  }

  export type ProjectTagCreateOrConnectWithoutProjectInput = {
    where: ProjectTagWhereUniqueInput
    create: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTagCreateManyProjectInputEnvelope = {
    data: ProjectTagCreateManyProjectInput | ProjectTagCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMetricsUpsertWithoutProjectInput = {
    update: XOR<ProjectMetricsUpdateWithoutProjectInput, ProjectMetricsUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMetricsCreateWithoutProjectInput, ProjectMetricsUncheckedCreateWithoutProjectInput>
    where?: ProjectMetricsWhereInput
  }

  export type ProjectMetricsUpdateToOneWithWhereWithoutProjectInput = {
    where?: ProjectMetricsWhereInput
    data: XOR<ProjectMetricsUpdateWithoutProjectInput, ProjectMetricsUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectMetricsUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableIntFieldUpdateOperationsInput | number | null
    contributors?: NullableIntFieldUpdateOperationsInput | number | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    dailyGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    weeklyGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMetricsUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    stars?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: NullableIntFieldUpdateOperationsInput | number | null
    issues?: NullableIntFieldUpdateOperationsInput | number | null
    contributors?: NullableIntFieldUpdateOperationsInput | number | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableIntFieldUpdateOperationsInput | number | null
    views?: NullableIntFieldUpdateOperationsInput | number | null
    dailyGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    weeklyGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAnalysisUpsertWithoutProjectInput = {
    update: XOR<ProjectAnalysisUpdateWithoutProjectInput, ProjectAnalysisUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectAnalysisCreateWithoutProjectInput, ProjectAnalysisUncheckedCreateWithoutProjectInput>
    where?: ProjectAnalysisWhereInput
  }

  export type ProjectAnalysisUpdateToOneWithWhereWithoutProjectInput = {
    where?: ProjectAnalysisWhereInput
    data: XOR<ProjectAnalysisUpdateWithoutProjectInput, ProjectAnalysisUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectAnalysisUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    trend?: StringFieldUpdateOperationsInput | string
    marketPotential?: StringFieldUpdateOperationsInput | string
    competitionLevel?: StringFieldUpdateOperationsInput | string
    successProbability?: FloatFieldUpdateOperationsInput | number
    competitors?: JsonNullValueInput | InputJsonValue
    keyInsights?: JsonNullValueInput | InputJsonValue
    risks?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAnalysisUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    trend?: StringFieldUpdateOperationsInput | string
    marketPotential?: StringFieldUpdateOperationsInput | string
    competitionLevel?: StringFieldUpdateOperationsInput | string
    successProbability?: FloatFieldUpdateOperationsInput | number
    competitors?: JsonNullValueInput | InputJsonValue
    keyInsights?: JsonNullValueInput | InputJsonValue
    risks?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedProjectUpsertWithWhereUniqueWithoutProjectInput = {
    where: UserSavedProjectWhereUniqueInput
    update: XOR<UserSavedProjectUpdateWithoutProjectInput, UserSavedProjectUncheckedUpdateWithoutProjectInput>
    create: XOR<UserSavedProjectCreateWithoutProjectInput, UserSavedProjectUncheckedCreateWithoutProjectInput>
  }

  export type UserSavedProjectUpdateWithWhereUniqueWithoutProjectInput = {
    where: UserSavedProjectWhereUniqueInput
    data: XOR<UserSavedProjectUpdateWithoutProjectInput, UserSavedProjectUncheckedUpdateWithoutProjectInput>
  }

  export type UserSavedProjectUpdateManyWithWhereWithoutProjectInput = {
    where: UserSavedProjectScalarWhereInput
    data: XOR<UserSavedProjectUpdateManyMutationInput, UserSavedProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectTagUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectTagWhereUniqueInput
    update: XOR<ProjectTagUpdateWithoutProjectInput, ProjectTagUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTagUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectTagWhereUniqueInput
    data: XOR<ProjectTagUpdateWithoutProjectInput, ProjectTagUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectTagUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectTagScalarWhereInput
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectTagScalarWhereInput = {
    AND?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
    OR?: ProjectTagScalarWhereInput[]
    NOT?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
    id?: StringFilter<"ProjectTag"> | string
    projectId?: StringFilter<"ProjectTag"> | string
    tag?: StringFilter<"ProjectTag"> | string
    createdAt?: DateTimeFilter<"ProjectTag"> | Date | string
  }

  export type ProjectCreateWithoutMetricsInput = {
    id?: string
    source: string
    sourceId: string
    name: string
    description?: string | null
    url: string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discoveredAt?: Date | string
    analysis?: ProjectAnalysisCreateNestedOneWithoutProjectInput
    savedByUsers?: UserSavedProjectCreateNestedManyWithoutProjectInput
    projectTags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMetricsInput = {
    id?: string
    source: string
    sourceId: string
    name: string
    description?: string | null
    url: string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discoveredAt?: Date | string
    analysis?: ProjectAnalysisUncheckedCreateNestedOneWithoutProjectInput
    savedByUsers?: UserSavedProjectUncheckedCreateNestedManyWithoutProjectInput
    projectTags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMetricsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMetricsInput, ProjectUncheckedCreateWithoutMetricsInput>
  }

  export type ProjectUpsertWithoutMetricsInput = {
    update: XOR<ProjectUpdateWithoutMetricsInput, ProjectUncheckedUpdateWithoutMetricsInput>
    create: XOR<ProjectCreateWithoutMetricsInput, ProjectUncheckedCreateWithoutMetricsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMetricsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMetricsInput, ProjectUncheckedUpdateWithoutMetricsInput>
  }

  export type ProjectUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysis?: ProjectAnalysisUpdateOneWithoutProjectNestedInput
    savedByUsers?: UserSavedProjectUpdateManyWithoutProjectNestedInput
    projectTags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysis?: ProjectAnalysisUncheckedUpdateOneWithoutProjectNestedInput
    savedByUsers?: UserSavedProjectUncheckedUpdateManyWithoutProjectNestedInput
    projectTags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutAnalysisInput = {
    id?: string
    source: string
    sourceId: string
    name: string
    description?: string | null
    url: string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discoveredAt?: Date | string
    metrics?: ProjectMetricsCreateNestedOneWithoutProjectInput
    savedByUsers?: UserSavedProjectCreateNestedManyWithoutProjectInput
    projectTags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAnalysisInput = {
    id?: string
    source: string
    sourceId: string
    name: string
    description?: string | null
    url: string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discoveredAt?: Date | string
    metrics?: ProjectMetricsUncheckedCreateNestedOneWithoutProjectInput
    savedByUsers?: UserSavedProjectUncheckedCreateNestedManyWithoutProjectInput
    projectTags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAnalysisInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAnalysisInput, ProjectUncheckedCreateWithoutAnalysisInput>
  }

  export type ProjectUpsertWithoutAnalysisInput = {
    update: XOR<ProjectUpdateWithoutAnalysisInput, ProjectUncheckedUpdateWithoutAnalysisInput>
    create: XOR<ProjectCreateWithoutAnalysisInput, ProjectUncheckedCreateWithoutAnalysisInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAnalysisInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAnalysisInput, ProjectUncheckedUpdateWithoutAnalysisInput>
  }

  export type ProjectUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: ProjectMetricsUpdateOneWithoutProjectNestedInput
    savedByUsers?: UserSavedProjectUpdateManyWithoutProjectNestedInput
    projectTags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: ProjectMetricsUncheckedUpdateOneWithoutProjectNestedInput
    savedByUsers?: UserSavedProjectUncheckedUpdateManyWithoutProjectNestedInput
    projectTags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserCreateWithoutSavedProjectsInput = {
    id?: string
    email: string
    name?: string | null
    subscriptionTier?: string
    subscriptionStatus?: string
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedProjectsInput = {
    id?: string
    email: string
    name?: string | null
    subscriptionTier?: string
    subscriptionStatus?: string
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedProjectsInput, UserUncheckedCreateWithoutSavedProjectsInput>
  }

  export type ProjectCreateWithoutSavedByUsersInput = {
    id?: string
    source: string
    sourceId: string
    name: string
    description?: string | null
    url: string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discoveredAt?: Date | string
    metrics?: ProjectMetricsCreateNestedOneWithoutProjectInput
    analysis?: ProjectAnalysisCreateNestedOneWithoutProjectInput
    projectTags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSavedByUsersInput = {
    id?: string
    source: string
    sourceId: string
    name: string
    description?: string | null
    url: string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discoveredAt?: Date | string
    metrics?: ProjectMetricsUncheckedCreateNestedOneWithoutProjectInput
    analysis?: ProjectAnalysisUncheckedCreateNestedOneWithoutProjectInput
    projectTags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSavedByUsersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSavedByUsersInput, ProjectUncheckedCreateWithoutSavedByUsersInput>
  }

  export type UserUpsertWithoutSavedProjectsInput = {
    update: XOR<UserUpdateWithoutSavedProjectsInput, UserUncheckedUpdateWithoutSavedProjectsInput>
    create: XOR<UserCreateWithoutSavedProjectsInput, UserUncheckedCreateWithoutSavedProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedProjectsInput, UserUncheckedUpdateWithoutSavedProjectsInput>
  }

  export type UserUpdateWithoutSavedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutSavedByUsersInput = {
    update: XOR<ProjectUpdateWithoutSavedByUsersInput, ProjectUncheckedUpdateWithoutSavedByUsersInput>
    create: XOR<ProjectCreateWithoutSavedByUsersInput, ProjectUncheckedCreateWithoutSavedByUsersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSavedByUsersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSavedByUsersInput, ProjectUncheckedUpdateWithoutSavedByUsersInput>
  }

  export type ProjectUpdateWithoutSavedByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: ProjectMetricsUpdateOneWithoutProjectNestedInput
    analysis?: ProjectAnalysisUpdateOneWithoutProjectNestedInput
    projectTags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSavedByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: ProjectMetricsUncheckedUpdateOneWithoutProjectNestedInput
    analysis?: ProjectAnalysisUncheckedUpdateOneWithoutProjectNestedInput
    projectTags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    email: string
    name?: string | null
    subscriptionTier?: string
    subscriptionStatus?: string
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedProjects?: UserSavedProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    email: string
    name?: string | null
    subscriptionTier?: string
    subscriptionStatus?: string
    stripeCustomerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    savedProjects?: UserSavedProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedProjects?: UserSavedProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTier?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedProjects?: UserSavedProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CrawlLogCreateWithoutDataSourceInput = {
    id?: string
    status: string
    startTime: Date | string
    endTime?: Date | string | null
    itemsFound?: number
    itemsSaved?: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type CrawlLogUncheckedCreateWithoutDataSourceInput = {
    id?: string
    status: string
    startTime: Date | string
    endTime?: Date | string | null
    itemsFound?: number
    itemsSaved?: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type CrawlLogCreateOrConnectWithoutDataSourceInput = {
    where: CrawlLogWhereUniqueInput
    create: XOR<CrawlLogCreateWithoutDataSourceInput, CrawlLogUncheckedCreateWithoutDataSourceInput>
  }

  export type CrawlLogCreateManyDataSourceInputEnvelope = {
    data: CrawlLogCreateManyDataSourceInput | CrawlLogCreateManyDataSourceInput[]
    skipDuplicates?: boolean
  }

  export type CrawlLogUpsertWithWhereUniqueWithoutDataSourceInput = {
    where: CrawlLogWhereUniqueInput
    update: XOR<CrawlLogUpdateWithoutDataSourceInput, CrawlLogUncheckedUpdateWithoutDataSourceInput>
    create: XOR<CrawlLogCreateWithoutDataSourceInput, CrawlLogUncheckedCreateWithoutDataSourceInput>
  }

  export type CrawlLogUpdateWithWhereUniqueWithoutDataSourceInput = {
    where: CrawlLogWhereUniqueInput
    data: XOR<CrawlLogUpdateWithoutDataSourceInput, CrawlLogUncheckedUpdateWithoutDataSourceInput>
  }

  export type CrawlLogUpdateManyWithWhereWithoutDataSourceInput = {
    where: CrawlLogScalarWhereInput
    data: XOR<CrawlLogUpdateManyMutationInput, CrawlLogUncheckedUpdateManyWithoutDataSourceInput>
  }

  export type CrawlLogScalarWhereInput = {
    AND?: CrawlLogScalarWhereInput | CrawlLogScalarWhereInput[]
    OR?: CrawlLogScalarWhereInput[]
    NOT?: CrawlLogScalarWhereInput | CrawlLogScalarWhereInput[]
    id?: StringFilter<"CrawlLog"> | string
    dataSourceId?: StringFilter<"CrawlLog"> | string
    status?: StringFilter<"CrawlLog"> | string
    startTime?: DateTimeFilter<"CrawlLog"> | Date | string
    endTime?: DateTimeNullableFilter<"CrawlLog"> | Date | string | null
    itemsFound?: IntFilter<"CrawlLog"> | number
    itemsSaved?: IntFilter<"CrawlLog"> | number
    errorMessage?: StringNullableFilter<"CrawlLog"> | string | null
    createdAt?: DateTimeFilter<"CrawlLog"> | Date | string
  }

  export type DataSourceCreateWithoutCrawlLogsInput = {
    id?: string
    name: string
    displayName: string
    isActive?: boolean
    apiConfig?: JsonNullValueInput | InputJsonValue
    credentials?: JsonNullValueInput | InputJsonValue
    lastCrawl?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataSourceUncheckedCreateWithoutCrawlLogsInput = {
    id?: string
    name: string
    displayName: string
    isActive?: boolean
    apiConfig?: JsonNullValueInput | InputJsonValue
    credentials?: JsonNullValueInput | InputJsonValue
    lastCrawl?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataSourceCreateOrConnectWithoutCrawlLogsInput = {
    where: DataSourceWhereUniqueInput
    create: XOR<DataSourceCreateWithoutCrawlLogsInput, DataSourceUncheckedCreateWithoutCrawlLogsInput>
  }

  export type DataSourceUpsertWithoutCrawlLogsInput = {
    update: XOR<DataSourceUpdateWithoutCrawlLogsInput, DataSourceUncheckedUpdateWithoutCrawlLogsInput>
    create: XOR<DataSourceCreateWithoutCrawlLogsInput, DataSourceUncheckedCreateWithoutCrawlLogsInput>
    where?: DataSourceWhereInput
  }

  export type DataSourceUpdateToOneWithWhereWithoutCrawlLogsInput = {
    where?: DataSourceWhereInput
    data: XOR<DataSourceUpdateWithoutCrawlLogsInput, DataSourceUncheckedUpdateWithoutCrawlLogsInput>
  }

  export type DataSourceUpdateWithoutCrawlLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    apiConfig?: JsonNullValueInput | InputJsonValue
    credentials?: JsonNullValueInput | InputJsonValue
    lastCrawl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSourceUncheckedUpdateWithoutCrawlLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    apiConfig?: JsonNullValueInput | InputJsonValue
    credentials?: JsonNullValueInput | InputJsonValue
    lastCrawl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutProjectTagsInput = {
    id?: string
    source: string
    sourceId: string
    name: string
    description?: string | null
    url: string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discoveredAt?: Date | string
    metrics?: ProjectMetricsCreateNestedOneWithoutProjectInput
    analysis?: ProjectAnalysisCreateNestedOneWithoutProjectInput
    savedByUsers?: UserSavedProjectCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectTagsInput = {
    id?: string
    source: string
    sourceId: string
    name: string
    description?: string | null
    url: string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discoveredAt?: Date | string
    metrics?: ProjectMetricsUncheckedCreateNestedOneWithoutProjectInput
    analysis?: ProjectAnalysisUncheckedCreateNestedOneWithoutProjectInput
    savedByUsers?: UserSavedProjectUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectTagsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectTagsInput, ProjectUncheckedCreateWithoutProjectTagsInput>
  }

  export type ProjectUpsertWithoutProjectTagsInput = {
    update: XOR<ProjectUpdateWithoutProjectTagsInput, ProjectUncheckedUpdateWithoutProjectTagsInput>
    create: XOR<ProjectCreateWithoutProjectTagsInput, ProjectUncheckedCreateWithoutProjectTagsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectTagsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectTagsInput, ProjectUncheckedUpdateWithoutProjectTagsInput>
  }

  export type ProjectUpdateWithoutProjectTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: ProjectMetricsUpdateOneWithoutProjectNestedInput
    analysis?: ProjectAnalysisUpdateOneWithoutProjectNestedInput
    savedByUsers?: UserSavedProjectUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: ProjectMetricsUncheckedUpdateOneWithoutProjectNestedInput
    analysis?: ProjectAnalysisUncheckedUpdateOneWithoutProjectNestedInput
    savedByUsers?: UserSavedProjectUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserSavedProjectCreateManyUserInput = {
    id?: string
    projectId: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserSubscriptionCreateManyUserInput = {
    id?: string
    stripeSubscriptionId: string
    priceId: string
    status: string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSavedProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSavedByUsersNestedInput
  }

  export type UserSavedProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedProjectCreateManyProjectInput = {
    id?: string
    userId: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type ProjectTagCreateManyProjectInput = {
    id?: string
    tag: string
    createdAt?: Date | string
  }

  export type UserSavedProjectUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedProjectsNestedInput
  }

  export type UserSavedProjectUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedProjectUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTagUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTagUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTagUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlLogCreateManyDataSourceInput = {
    id?: string
    status: string
    startTime: Date | string
    endTime?: Date | string | null
    itemsFound?: number
    itemsSaved?: number
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type CrawlLogUpdateWithoutDataSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsFound?: IntFieldUpdateOperationsInput | number
    itemsSaved?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlLogUncheckedUpdateWithoutDataSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsFound?: IntFieldUpdateOperationsInput | number
    itemsSaved?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlLogUncheckedUpdateManyWithoutDataSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsFound?: IntFieldUpdateOperationsInput | number
    itemsSaved?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}