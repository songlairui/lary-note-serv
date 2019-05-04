import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    profiles: <T = Array<Profile | null>>(args: { where?: ProfileWhereInput | null, orderBy?: ProfileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notes: <T = Array<Note | null>>(args: { where?: NoteWhereInput | null, orderBy?: NoteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categories: <T = Array<Category | null>>(args: { where?: CategoryWhereInput | null, orderBy?: CategoryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    profile: <T = Profile | null>(args: { where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    note: <T = Note | null>(args: { where: NoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    category: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    profilesConnection: <T = ProfileConnection>(args: { where?: ProfileWhereInput | null, orderBy?: ProfileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notesConnection: <T = NoteConnection>(args: { where?: NoteWhereInput | null, orderBy?: NoteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categoriesConnection: <T = CategoryConnection>(args: { where?: CategoryWhereInput | null, orderBy?: CategoryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProfile: <T = Profile>(args: { data: ProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNote: <T = Note>(args: { data: NoteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCategory: <T = Category>(args: { data: CategoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateProfile: <T = Profile | null>(args: { data: ProfileUpdateInput, where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateNote: <T = Note | null>(args: { data: NoteUpdateInput, where: NoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCategory: <T = Category | null>(args: { data: CategoryUpdateInput, where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteProfile: <T = Profile | null>(args: { where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteNote: <T = Note | null>(args: { where: NoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCategory: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProfile: <T = Profile>(args: { where: ProfileWhereUniqueInput, create: ProfileCreateInput, update: ProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNote: <T = Note>(args: { where: NoteWhereUniqueInput, create: NoteCreateInput, update: NoteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCategory: <T = Category>(args: { where: CategoryWhereUniqueInput, create: CategoryCreateInput, update: CategoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProfiles: <T = BatchPayload>(args: { data: ProfileUpdateManyMutationInput, where?: ProfileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotes: <T = BatchPayload>(args: { data: NoteUpdateManyMutationInput, where?: NoteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCategories: <T = BatchPayload>(args: { data: CategoryUpdateManyMutationInput, where?: CategoryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProfiles: <T = BatchPayload>(args: { where?: ProfileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotes: <T = BatchPayload>(args: { where?: NoteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCategories: <T = BatchPayload>(args: { where?: CategoryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    profile: <T = ProfileSubscriptionPayload | null>(args: { where?: ProfileSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    note: <T = NoteSubscriptionPayload | null>(args: { where?: NoteSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    category: <T = CategorySubscriptionPayload | null>(args: { where?: CategorySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Profile: (where?: ProfileWhereInput) => Promise<boolean>
  Note: (where?: NoteWhereInput) => Promise<boolean>
  Category: (where?: CategoryWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateCategory {
  count: Int!
}

type AggregateNote {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Category implements Node {
  id: ID!
  name: String
  notes(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Note!]
}

"""A connection to a list of items."""
type CategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  id: ID
  name: String
  notes: NoteCreateManyWithoutCategoriesInput
}

input CategoryCreateManyWithoutNotesInput {
  create: [CategoryCreateWithoutNotesInput!]
  connect: [CategoryWhereUniqueInput!]
}

input CategoryCreateWithoutNotesInput {
  id: ID
  name: String
}

"""An edge in a connection."""
type CategoryEdge {
  """The item at the end of the edge."""
  node: Category!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type CategoryPreviousValues {
  id: ID!
  name: String
}

input CategoryScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [CategoryScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategoryScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategoryScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategorySubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
}

input CategoryUpdateInput {
  name: String
  notes: NoteUpdateManyWithoutCategoriesInput
}

input CategoryUpdateManyDataInput {
  name: String
}

input CategoryUpdateManyMutationInput {
  name: String
}

input CategoryUpdateManyWithoutNotesInput {
  create: [CategoryCreateWithoutNotesInput!]
  connect: [CategoryWhereUniqueInput!]
  set: [CategoryWhereUniqueInput!]
  disconnect: [CategoryWhereUniqueInput!]
  delete: [CategoryWhereUniqueInput!]
  update: [CategoryUpdateWithWhereUniqueWithoutNotesInput!]
  updateMany: [CategoryUpdateManyWithWhereNestedInput!]
  deleteMany: [CategoryScalarWhereInput!]
  upsert: [CategoryUpsertWithWhereUniqueWithoutNotesInput!]
}

input CategoryUpdateManyWithWhereNestedInput {
  where: CategoryScalarWhereInput!
  data: CategoryUpdateManyDataInput!
}

input CategoryUpdateWithoutNotesDataInput {
  name: String
}

input CategoryUpdateWithWhereUniqueWithoutNotesInput {
  where: CategoryWhereUniqueInput!
  data: CategoryUpdateWithoutNotesDataInput!
}

input CategoryUpsertWithWhereUniqueWithoutNotesInput {
  where: CategoryWhereUniqueInput!
  update: CategoryUpdateWithoutNotesDataInput!
  create: CategoryCreateWithoutNotesInput!
}

input CategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [CategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  notes_every: NoteWhereInput
  notes_some: NoteWhereInput
  notes_none: NoteWhereInput
}

input CategoryWhereUniqueInput {
  id: ID
}

scalar DateTime

"""Raw JSON value"""
scalar Json

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createProfile(data: ProfileCreateInput!): Profile!
  createNote(data: NoteCreateInput!): Note!
  createCategory(data: CategoryCreateInput!): Category!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateNote(data: NoteUpdateInput!, where: NoteWhereUniqueInput!): Note
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  deleteUser(where: UserWhereUniqueInput!): User
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteNote(where: NoteWhereUniqueInput!): Note
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  upsertNote(where: NoteWhereUniqueInput!, create: NoteCreateInput!, update: NoteUpdateInput!): Note!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyProfiles(data: ProfileUpdateManyMutationInput!, where: ProfileWhereInput): BatchPayload!
  updateManyNotes(data: NoteUpdateManyMutationInput!, where: NoteWhereInput): BatchPayload!
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
  deleteManyNotes(where: NoteWhereInput): BatchPayload!
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Note implements Node {
  id: ID!
  title: String
  content: String!
  theme: String
  author: User!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type NoteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NoteEdge]!
  aggregate: AggregateNote!
}

input NoteCreateInput {
  id: ID
  title: String
  content: String!
  theme: String
  author: UserCreateOneWithoutNotesInput!
  categories: CategoryCreateManyWithoutNotesInput
}

input NoteCreateManyWithoutAuthorInput {
  create: [NoteCreateWithoutAuthorInput!]
  connect: [NoteWhereUniqueInput!]
}

input NoteCreateManyWithoutCategoriesInput {
  create: [NoteCreateWithoutCategoriesInput!]
  connect: [NoteWhereUniqueInput!]
}

input NoteCreateWithoutAuthorInput {
  id: ID
  title: String
  content: String!
  theme: String
  categories: CategoryCreateManyWithoutNotesInput
}

input NoteCreateWithoutCategoriesInput {
  id: ID
  title: String
  content: String!
  theme: String
  author: UserCreateOneWithoutNotesInput!
}

"""An edge in a connection."""
type NoteEdge {
  """The item at the end of the edge."""
  node: Note!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NoteOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  theme_ASC
  theme_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotePreviousValues {
  id: ID!
  title: String
  content: String!
  theme: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input NoteScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [NoteScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [NoteScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NoteScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  theme: String

  """All values that are not equal to given value."""
  theme_not: String

  """All values that are contained in given list."""
  theme_in: [String!]

  """All values that are not contained in given list."""
  theme_not_in: [String!]

  """All values less than the given value."""
  theme_lt: String

  """All values less than or equal the given value."""
  theme_lte: String

  """All values greater than the given value."""
  theme_gt: String

  """All values greater than or equal the given value."""
  theme_gte: String

  """All values containing the given string."""
  theme_contains: String

  """All values not containing the given string."""
  theme_not_contains: String

  """All values starting with the given string."""
  theme_starts_with: String

  """All values not starting with the given string."""
  theme_not_starts_with: String

  """All values ending with the given string."""
  theme_ends_with: String

  """All values not ending with the given string."""
  theme_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type NoteSubscriptionPayload {
  mutation: MutationType!
  node: Note
  updatedFields: [String!]
  previousValues: NotePreviousValues
}

input NoteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NoteSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NoteSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NoteSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NoteWhereInput
}

input NoteUpdateInput {
  title: String
  content: String
  theme: String
  author: UserUpdateOneRequiredWithoutNotesInput
  categories: CategoryUpdateManyWithoutNotesInput
}

input NoteUpdateManyDataInput {
  title: String
  content: String
  theme: String
}

input NoteUpdateManyMutationInput {
  title: String
  content: String
  theme: String
}

input NoteUpdateManyWithoutAuthorInput {
  create: [NoteCreateWithoutAuthorInput!]
  connect: [NoteWhereUniqueInput!]
  set: [NoteWhereUniqueInput!]
  disconnect: [NoteWhereUniqueInput!]
  delete: [NoteWhereUniqueInput!]
  update: [NoteUpdateWithWhereUniqueWithoutAuthorInput!]
  updateMany: [NoteUpdateManyWithWhereNestedInput!]
  deleteMany: [NoteScalarWhereInput!]
  upsert: [NoteUpsertWithWhereUniqueWithoutAuthorInput!]
}

input NoteUpdateManyWithoutCategoriesInput {
  create: [NoteCreateWithoutCategoriesInput!]
  connect: [NoteWhereUniqueInput!]
  set: [NoteWhereUniqueInput!]
  disconnect: [NoteWhereUniqueInput!]
  delete: [NoteWhereUniqueInput!]
  update: [NoteUpdateWithWhereUniqueWithoutCategoriesInput!]
  updateMany: [NoteUpdateManyWithWhereNestedInput!]
  deleteMany: [NoteScalarWhereInput!]
  upsert: [NoteUpsertWithWhereUniqueWithoutCategoriesInput!]
}

input NoteUpdateManyWithWhereNestedInput {
  where: NoteScalarWhereInput!
  data: NoteUpdateManyDataInput!
}

input NoteUpdateWithoutAuthorDataInput {
  title: String
  content: String
  theme: String
  categories: CategoryUpdateManyWithoutNotesInput
}

input NoteUpdateWithoutCategoriesDataInput {
  title: String
  content: String
  theme: String
  author: UserUpdateOneRequiredWithoutNotesInput
}

input NoteUpdateWithWhereUniqueWithoutAuthorInput {
  where: NoteWhereUniqueInput!
  data: NoteUpdateWithoutAuthorDataInput!
}

input NoteUpdateWithWhereUniqueWithoutCategoriesInput {
  where: NoteWhereUniqueInput!
  data: NoteUpdateWithoutCategoriesDataInput!
}

input NoteUpsertWithWhereUniqueWithoutAuthorInput {
  where: NoteWhereUniqueInput!
  update: NoteUpdateWithoutAuthorDataInput!
  create: NoteCreateWithoutAuthorInput!
}

input NoteUpsertWithWhereUniqueWithoutCategoriesInput {
  where: NoteWhereUniqueInput!
  update: NoteUpdateWithoutCategoriesDataInput!
  create: NoteCreateWithoutCategoriesInput!
}

input NoteWhereInput {
  """Logical AND on all given filters."""
  AND: [NoteWhereInput!]

  """Logical OR on all given filters."""
  OR: [NoteWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NoteWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  theme: String

  """All values that are not equal to given value."""
  theme_not: String

  """All values that are contained in given list."""
  theme_in: [String!]

  """All values that are not contained in given list."""
  theme_not_in: [String!]

  """All values less than the given value."""
  theme_lt: String

  """All values less than or equal the given value."""
  theme_lte: String

  """All values greater than the given value."""
  theme_gt: String

  """All values greater than or equal the given value."""
  theme_gte: String

  """All values containing the given string."""
  theme_contains: String

  """All values not containing the given string."""
  theme_not_contains: String

  """All values starting with the given string."""
  theme_starts_with: String

  """All values not starting with the given string."""
  theme_not_starts_with: String

  """All values ending with the given string."""
  theme_ends_with: String

  """All values not ending with the given string."""
  theme_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  author: UserWhereInput
  categories_every: CategoryWhereInput
  categories_some: CategoryWhereInput
  categories_none: CategoryWhereInput
}

input NoteWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PrismaDatabase {
  default
}

type Profile implements Node {
  id: ID!
  user: User!
  wechat: String
  qq: String
  weibo: String
  zhihu: String
  github: String
  facebook: String
  linkin: String
  google: String
  juejin: String
  avatar: String
}

"""A connection to a list of items."""
type ProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  id: ID
  wechat: String
  qq: String
  weibo: String
  zhihu: String
  github: String
  facebook: String
  linkin: String
  google: String
  juejin: String
  avatar: String
  user: UserCreateOneWithoutProfileInput!
}

input ProfileCreateOneWithoutUserInput {
  create: ProfileCreateWithoutUserInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateWithoutUserInput {
  id: ID
  wechat: String
  qq: String
  weibo: String
  zhihu: String
  github: String
  facebook: String
  linkin: String
  google: String
  juejin: String
  avatar: String
}

"""An edge in a connection."""
type ProfileEdge {
  """The item at the end of the edge."""
  node: Profile!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  wechat_ASC
  wechat_DESC
  qq_ASC
  qq_DESC
  weibo_ASC
  weibo_DESC
  zhihu_ASC
  zhihu_DESC
  github_ASC
  github_DESC
  facebook_ASC
  facebook_DESC
  linkin_ASC
  linkin_DESC
  google_ASC
  google_DESC
  juejin_ASC
  juejin_DESC
  avatar_ASC
  avatar_DESC
}

type ProfilePreviousValues {
  id: ID!
  wechat: String
  qq: String
  weibo: String
  zhihu: String
  github: String
  facebook: String
  linkin: String
  google: String
  juejin: String
  avatar: String
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProfileSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
}

input ProfileUpdateInput {
  wechat: String
  qq: String
  weibo: String
  zhihu: String
  github: String
  facebook: String
  linkin: String
  google: String
  juejin: String
  avatar: String
  user: UserUpdateOneRequiredWithoutProfileInput
}

input ProfileUpdateManyMutationInput {
  wechat: String
  qq: String
  weibo: String
  zhihu: String
  github: String
  facebook: String
  linkin: String
  google: String
  juejin: String
  avatar: String
}

input ProfileUpdateOneRequiredWithoutUserInput {
  create: ProfileCreateWithoutUserInput
  connect: ProfileWhereUniqueInput
  update: ProfileUpdateWithoutUserDataInput
  upsert: ProfileUpsertWithoutUserInput
}

input ProfileUpdateWithoutUserDataInput {
  wechat: String
  qq: String
  weibo: String
  zhihu: String
  github: String
  facebook: String
  linkin: String
  google: String
  juejin: String
  avatar: String
}

input ProfileUpsertWithoutUserInput {
  update: ProfileUpdateWithoutUserDataInput!
  create: ProfileCreateWithoutUserInput!
}

input ProfileWhereInput {
  """Logical AND on all given filters."""
  AND: [ProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  wechat: String

  """All values that are not equal to given value."""
  wechat_not: String

  """All values that are contained in given list."""
  wechat_in: [String!]

  """All values that are not contained in given list."""
  wechat_not_in: [String!]

  """All values less than the given value."""
  wechat_lt: String

  """All values less than or equal the given value."""
  wechat_lte: String

  """All values greater than the given value."""
  wechat_gt: String

  """All values greater than or equal the given value."""
  wechat_gte: String

  """All values containing the given string."""
  wechat_contains: String

  """All values not containing the given string."""
  wechat_not_contains: String

  """All values starting with the given string."""
  wechat_starts_with: String

  """All values not starting with the given string."""
  wechat_not_starts_with: String

  """All values ending with the given string."""
  wechat_ends_with: String

  """All values not ending with the given string."""
  wechat_not_ends_with: String
  qq: String

  """All values that are not equal to given value."""
  qq_not: String

  """All values that are contained in given list."""
  qq_in: [String!]

  """All values that are not contained in given list."""
  qq_not_in: [String!]

  """All values less than the given value."""
  qq_lt: String

  """All values less than or equal the given value."""
  qq_lte: String

  """All values greater than the given value."""
  qq_gt: String

  """All values greater than or equal the given value."""
  qq_gte: String

  """All values containing the given string."""
  qq_contains: String

  """All values not containing the given string."""
  qq_not_contains: String

  """All values starting with the given string."""
  qq_starts_with: String

  """All values not starting with the given string."""
  qq_not_starts_with: String

  """All values ending with the given string."""
  qq_ends_with: String

  """All values not ending with the given string."""
  qq_not_ends_with: String
  weibo: String

  """All values that are not equal to given value."""
  weibo_not: String

  """All values that are contained in given list."""
  weibo_in: [String!]

  """All values that are not contained in given list."""
  weibo_not_in: [String!]

  """All values less than the given value."""
  weibo_lt: String

  """All values less than or equal the given value."""
  weibo_lte: String

  """All values greater than the given value."""
  weibo_gt: String

  """All values greater than or equal the given value."""
  weibo_gte: String

  """All values containing the given string."""
  weibo_contains: String

  """All values not containing the given string."""
  weibo_not_contains: String

  """All values starting with the given string."""
  weibo_starts_with: String

  """All values not starting with the given string."""
  weibo_not_starts_with: String

  """All values ending with the given string."""
  weibo_ends_with: String

  """All values not ending with the given string."""
  weibo_not_ends_with: String
  zhihu: String

  """All values that are not equal to given value."""
  zhihu_not: String

  """All values that are contained in given list."""
  zhihu_in: [String!]

  """All values that are not contained in given list."""
  zhihu_not_in: [String!]

  """All values less than the given value."""
  zhihu_lt: String

  """All values less than or equal the given value."""
  zhihu_lte: String

  """All values greater than the given value."""
  zhihu_gt: String

  """All values greater than or equal the given value."""
  zhihu_gte: String

  """All values containing the given string."""
  zhihu_contains: String

  """All values not containing the given string."""
  zhihu_not_contains: String

  """All values starting with the given string."""
  zhihu_starts_with: String

  """All values not starting with the given string."""
  zhihu_not_starts_with: String

  """All values ending with the given string."""
  zhihu_ends_with: String

  """All values not ending with the given string."""
  zhihu_not_ends_with: String
  github: String

  """All values that are not equal to given value."""
  github_not: String

  """All values that are contained in given list."""
  github_in: [String!]

  """All values that are not contained in given list."""
  github_not_in: [String!]

  """All values less than the given value."""
  github_lt: String

  """All values less than or equal the given value."""
  github_lte: String

  """All values greater than the given value."""
  github_gt: String

  """All values greater than or equal the given value."""
  github_gte: String

  """All values containing the given string."""
  github_contains: String

  """All values not containing the given string."""
  github_not_contains: String

  """All values starting with the given string."""
  github_starts_with: String

  """All values not starting with the given string."""
  github_not_starts_with: String

  """All values ending with the given string."""
  github_ends_with: String

  """All values not ending with the given string."""
  github_not_ends_with: String
  facebook: String

  """All values that are not equal to given value."""
  facebook_not: String

  """All values that are contained in given list."""
  facebook_in: [String!]

  """All values that are not contained in given list."""
  facebook_not_in: [String!]

  """All values less than the given value."""
  facebook_lt: String

  """All values less than or equal the given value."""
  facebook_lte: String

  """All values greater than the given value."""
  facebook_gt: String

  """All values greater than or equal the given value."""
  facebook_gte: String

  """All values containing the given string."""
  facebook_contains: String

  """All values not containing the given string."""
  facebook_not_contains: String

  """All values starting with the given string."""
  facebook_starts_with: String

  """All values not starting with the given string."""
  facebook_not_starts_with: String

  """All values ending with the given string."""
  facebook_ends_with: String

  """All values not ending with the given string."""
  facebook_not_ends_with: String
  linkin: String

  """All values that are not equal to given value."""
  linkin_not: String

  """All values that are contained in given list."""
  linkin_in: [String!]

  """All values that are not contained in given list."""
  linkin_not_in: [String!]

  """All values less than the given value."""
  linkin_lt: String

  """All values less than or equal the given value."""
  linkin_lte: String

  """All values greater than the given value."""
  linkin_gt: String

  """All values greater than or equal the given value."""
  linkin_gte: String

  """All values containing the given string."""
  linkin_contains: String

  """All values not containing the given string."""
  linkin_not_contains: String

  """All values starting with the given string."""
  linkin_starts_with: String

  """All values not starting with the given string."""
  linkin_not_starts_with: String

  """All values ending with the given string."""
  linkin_ends_with: String

  """All values not ending with the given string."""
  linkin_not_ends_with: String
  google: String

  """All values that are not equal to given value."""
  google_not: String

  """All values that are contained in given list."""
  google_in: [String!]

  """All values that are not contained in given list."""
  google_not_in: [String!]

  """All values less than the given value."""
  google_lt: String

  """All values less than or equal the given value."""
  google_lte: String

  """All values greater than the given value."""
  google_gt: String

  """All values greater than or equal the given value."""
  google_gte: String

  """All values containing the given string."""
  google_contains: String

  """All values not containing the given string."""
  google_not_contains: String

  """All values starting with the given string."""
  google_starts_with: String

  """All values not starting with the given string."""
  google_not_starts_with: String

  """All values ending with the given string."""
  google_ends_with: String

  """All values not ending with the given string."""
  google_not_ends_with: String
  juejin: String

  """All values that are not equal to given value."""
  juejin_not: String

  """All values that are contained in given list."""
  juejin_in: [String!]

  """All values that are not contained in given list."""
  juejin_not_in: [String!]

  """All values less than the given value."""
  juejin_lt: String

  """All values less than or equal the given value."""
  juejin_lte: String

  """All values greater than the given value."""
  juejin_gt: String

  """All values greater than or equal the given value."""
  juejin_gte: String

  """All values containing the given string."""
  juejin_contains: String

  """All values not containing the given string."""
  juejin_not_contains: String

  """All values starting with the given string."""
  juejin_starts_with: String

  """All values not starting with the given string."""
  juejin_not_starts_with: String

  """All values ending with the given string."""
  juejin_ends_with: String

  """All values not ending with the given string."""
  juejin_not_ends_with: String
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  user: UserWhereInput
}

input ProfileWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  notes(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Note]!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  user(where: UserWhereUniqueInput!): User
  profile(where: ProfileWhereUniqueInput!): Profile
  note(where: NoteWhereUniqueInput!): Note
  category(where: CategoryWhereUniqueInput!): Category
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  notesConnection(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NoteConnection!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  note(where: NoteSubscriptionWhereInput): NoteSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  pwd: String!
  email: String!
  profile: Profile!
  notes(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Note!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  pwd: String!
  email: String!
  profile: ProfileCreateOneWithoutUserInput!
  notes: NoteCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutNotesInput {
  create: UserCreateWithoutNotesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProfileInput {
  create: UserCreateWithoutProfileInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutNotesInput {
  id: ID
  name: String!
  pwd: String!
  email: String!
  profile: ProfileCreateOneWithoutUserInput!
}

input UserCreateWithoutProfileInput {
  id: ID
  name: String!
  pwd: String!
  email: String!
  notes: NoteCreateManyWithoutAuthorInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  pwd_ASC
  pwd_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  pwd: String!
  email: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  pwd: String
  email: String
  profile: ProfileUpdateOneRequiredWithoutUserInput
  notes: NoteUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  name: String
  pwd: String
  email: String
}

input UserUpdateOneRequiredWithoutNotesInput {
  create: UserCreateWithoutNotesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutNotesDataInput
  upsert: UserUpsertWithoutNotesInput
}

input UserUpdateOneRequiredWithoutProfileInput {
  create: UserCreateWithoutProfileInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutProfileDataInput
  upsert: UserUpsertWithoutProfileInput
}

input UserUpdateWithoutNotesDataInput {
  name: String
  pwd: String
  email: String
  profile: ProfileUpdateOneRequiredWithoutUserInput
}

input UserUpdateWithoutProfileDataInput {
  name: String
  pwd: String
  email: String
  notes: NoteUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutNotesInput {
  update: UserUpdateWithoutNotesDataInput!
  create: UserCreateWithoutNotesInput!
}

input UserUpsertWithoutProfileInput {
  update: UserUpdateWithoutProfileDataInput!
  create: UserCreateWithoutProfileInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  pwd: String

  """All values that are not equal to given value."""
  pwd_not: String

  """All values that are contained in given list."""
  pwd_in: [String!]

  """All values that are not contained in given list."""
  pwd_not_in: [String!]

  """All values less than the given value."""
  pwd_lt: String

  """All values less than or equal the given value."""
  pwd_lte: String

  """All values greater than the given value."""
  pwd_gt: String

  """All values greater than or equal the given value."""
  pwd_gte: String

  """All values containing the given string."""
  pwd_contains: String

  """All values not containing the given string."""
  pwd_not_contains: String

  """All values starting with the given string."""
  pwd_starts_with: String

  """All values not starting with the given string."""
  pwd_not_starts_with: String

  """All values ending with the given string."""
  pwd_ends_with: String

  """All values not ending with the given string."""
  pwd_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  profile: ProfileWhereInput
  notes_every: NoteWhereInput
  notes_some: NoteWhereInput
  notes_none: NoteWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type CategoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type NoteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'content_ASC' |
  'content_DESC' |
  'theme_ASC' |
  'theme_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type PrismaDatabase =   'default'

export type ProfileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'wechat_ASC' |
  'wechat_DESC' |
  'qq_ASC' |
  'qq_DESC' |
  'weibo_ASC' |
  'weibo_DESC' |
  'zhihu_ASC' |
  'zhihu_DESC' |
  'github_ASC' |
  'github_DESC' |
  'facebook_ASC' |
  'facebook_DESC' |
  'linkin_ASC' |
  'linkin_DESC' |
  'google_ASC' |
  'google_DESC' |
  'juejin_ASC' |
  'juejin_DESC' |
  'avatar_ASC' |
  'avatar_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'pwd_ASC' |
  'pwd_DESC' |
  'email_ASC' |
  'email_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface CategoryCreateInput {
  id?: ID_Input | null
  name?: String | null
  notes?: NoteCreateManyWithoutCategoriesInput | null
}

export interface CategoryCreateManyWithoutNotesInput {
  create?: CategoryCreateWithoutNotesInput[] | CategoryCreateWithoutNotesInput | null
  connect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput | null
}

export interface CategoryCreateWithoutNotesInput {
  id?: ID_Input | null
  name?: String | null
}

export interface CategoryScalarWhereInput {
  AND?: CategoryScalarWhereInput[] | CategoryScalarWhereInput | null
  OR?: CategoryScalarWhereInput[] | CategoryScalarWhereInput | null
  NOT?: CategoryScalarWhereInput[] | CategoryScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface CategorySubscriptionWhereInput {
  AND?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput | null
  OR?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput | null
  NOT?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CategoryWhereInput | null
}

export interface CategoryUpdateInput {
  name?: String | null
  notes?: NoteUpdateManyWithoutCategoriesInput | null
}

export interface CategoryUpdateManyDataInput {
  name?: String | null
}

export interface CategoryUpdateManyMutationInput {
  name?: String | null
}

export interface CategoryUpdateManyWithoutNotesInput {
  create?: CategoryCreateWithoutNotesInput[] | CategoryCreateWithoutNotesInput | null
  connect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput | null
  set?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput | null
  disconnect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput | null
  delete?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput | null
  update?: CategoryUpdateWithWhereUniqueWithoutNotesInput[] | CategoryUpdateWithWhereUniqueWithoutNotesInput | null
  updateMany?: CategoryUpdateManyWithWhereNestedInput[] | CategoryUpdateManyWithWhereNestedInput | null
  deleteMany?: CategoryScalarWhereInput[] | CategoryScalarWhereInput | null
  upsert?: CategoryUpsertWithWhereUniqueWithoutNotesInput[] | CategoryUpsertWithWhereUniqueWithoutNotesInput | null
}

export interface CategoryUpdateManyWithWhereNestedInput {
  where: CategoryScalarWhereInput
  data: CategoryUpdateManyDataInput
}

export interface CategoryUpdateWithoutNotesDataInput {
  name?: String | null
}

export interface CategoryUpdateWithWhereUniqueWithoutNotesInput {
  where: CategoryWhereUniqueInput
  data: CategoryUpdateWithoutNotesDataInput
}

export interface CategoryUpsertWithWhereUniqueWithoutNotesInput {
  where: CategoryWhereUniqueInput
  update: CategoryUpdateWithoutNotesDataInput
  create: CategoryCreateWithoutNotesInput
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[] | CategoryWhereInput | null
  OR?: CategoryWhereInput[] | CategoryWhereInput | null
  NOT?: CategoryWhereInput[] | CategoryWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  notes_every?: NoteWhereInput | null
  notes_some?: NoteWhereInput | null
  notes_none?: NoteWhereInput | null
}

export interface CategoryWhereUniqueInput {
  id?: ID_Input | null
}

export interface NoteCreateInput {
  id?: ID_Input | null
  title?: String | null
  content: String
  theme?: String | null
  author: UserCreateOneWithoutNotesInput
  categories?: CategoryCreateManyWithoutNotesInput | null
}

export interface NoteCreateManyWithoutAuthorInput {
  create?: NoteCreateWithoutAuthorInput[] | NoteCreateWithoutAuthorInput | null
  connect?: NoteWhereUniqueInput[] | NoteWhereUniqueInput | null
}

export interface NoteCreateManyWithoutCategoriesInput {
  create?: NoteCreateWithoutCategoriesInput[] | NoteCreateWithoutCategoriesInput | null
  connect?: NoteWhereUniqueInput[] | NoteWhereUniqueInput | null
}

export interface NoteCreateWithoutAuthorInput {
  id?: ID_Input | null
  title?: String | null
  content: String
  theme?: String | null
  categories?: CategoryCreateManyWithoutNotesInput | null
}

export interface NoteCreateWithoutCategoriesInput {
  id?: ID_Input | null
  title?: String | null
  content: String
  theme?: String | null
  author: UserCreateOneWithoutNotesInput
}

export interface NoteScalarWhereInput {
  AND?: NoteScalarWhereInput[] | NoteScalarWhereInput | null
  OR?: NoteScalarWhereInput[] | NoteScalarWhereInput | null
  NOT?: NoteScalarWhereInput[] | NoteScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  content?: String | null
  content_not?: String | null
  content_in?: String[] | String | null
  content_not_in?: String[] | String | null
  content_lt?: String | null
  content_lte?: String | null
  content_gt?: String | null
  content_gte?: String | null
  content_contains?: String | null
  content_not_contains?: String | null
  content_starts_with?: String | null
  content_not_starts_with?: String | null
  content_ends_with?: String | null
  content_not_ends_with?: String | null
  theme?: String | null
  theme_not?: String | null
  theme_in?: String[] | String | null
  theme_not_in?: String[] | String | null
  theme_lt?: String | null
  theme_lte?: String | null
  theme_gt?: String | null
  theme_gte?: String | null
  theme_contains?: String | null
  theme_not_contains?: String | null
  theme_starts_with?: String | null
  theme_not_starts_with?: String | null
  theme_ends_with?: String | null
  theme_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface NoteSubscriptionWhereInput {
  AND?: NoteSubscriptionWhereInput[] | NoteSubscriptionWhereInput | null
  OR?: NoteSubscriptionWhereInput[] | NoteSubscriptionWhereInput | null
  NOT?: NoteSubscriptionWhereInput[] | NoteSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: NoteWhereInput | null
}

export interface NoteUpdateInput {
  title?: String | null
  content?: String | null
  theme?: String | null
  author?: UserUpdateOneRequiredWithoutNotesInput | null
  categories?: CategoryUpdateManyWithoutNotesInput | null
}

export interface NoteUpdateManyDataInput {
  title?: String | null
  content?: String | null
  theme?: String | null
}

export interface NoteUpdateManyMutationInput {
  title?: String | null
  content?: String | null
  theme?: String | null
}

export interface NoteUpdateManyWithoutAuthorInput {
  create?: NoteCreateWithoutAuthorInput[] | NoteCreateWithoutAuthorInput | null
  connect?: NoteWhereUniqueInput[] | NoteWhereUniqueInput | null
  set?: NoteWhereUniqueInput[] | NoteWhereUniqueInput | null
  disconnect?: NoteWhereUniqueInput[] | NoteWhereUniqueInput | null
  delete?: NoteWhereUniqueInput[] | NoteWhereUniqueInput | null
  update?: NoteUpdateWithWhereUniqueWithoutAuthorInput[] | NoteUpdateWithWhereUniqueWithoutAuthorInput | null
  updateMany?: NoteUpdateManyWithWhereNestedInput[] | NoteUpdateManyWithWhereNestedInput | null
  deleteMany?: NoteScalarWhereInput[] | NoteScalarWhereInput | null
  upsert?: NoteUpsertWithWhereUniqueWithoutAuthorInput[] | NoteUpsertWithWhereUniqueWithoutAuthorInput | null
}

export interface NoteUpdateManyWithoutCategoriesInput {
  create?: NoteCreateWithoutCategoriesInput[] | NoteCreateWithoutCategoriesInput | null
  connect?: NoteWhereUniqueInput[] | NoteWhereUniqueInput | null
  set?: NoteWhereUniqueInput[] | NoteWhereUniqueInput | null
  disconnect?: NoteWhereUniqueInput[] | NoteWhereUniqueInput | null
  delete?: NoteWhereUniqueInput[] | NoteWhereUniqueInput | null
  update?: NoteUpdateWithWhereUniqueWithoutCategoriesInput[] | NoteUpdateWithWhereUniqueWithoutCategoriesInput | null
  updateMany?: NoteUpdateManyWithWhereNestedInput[] | NoteUpdateManyWithWhereNestedInput | null
  deleteMany?: NoteScalarWhereInput[] | NoteScalarWhereInput | null
  upsert?: NoteUpsertWithWhereUniqueWithoutCategoriesInput[] | NoteUpsertWithWhereUniqueWithoutCategoriesInput | null
}

export interface NoteUpdateManyWithWhereNestedInput {
  where: NoteScalarWhereInput
  data: NoteUpdateManyDataInput
}

export interface NoteUpdateWithoutAuthorDataInput {
  title?: String | null
  content?: String | null
  theme?: String | null
  categories?: CategoryUpdateManyWithoutNotesInput | null
}

export interface NoteUpdateWithoutCategoriesDataInput {
  title?: String | null
  content?: String | null
  theme?: String | null
  author?: UserUpdateOneRequiredWithoutNotesInput | null
}

export interface NoteUpdateWithWhereUniqueWithoutAuthorInput {
  where: NoteWhereUniqueInput
  data: NoteUpdateWithoutAuthorDataInput
}

export interface NoteUpdateWithWhereUniqueWithoutCategoriesInput {
  where: NoteWhereUniqueInput
  data: NoteUpdateWithoutCategoriesDataInput
}

export interface NoteUpsertWithWhereUniqueWithoutAuthorInput {
  where: NoteWhereUniqueInput
  update: NoteUpdateWithoutAuthorDataInput
  create: NoteCreateWithoutAuthorInput
}

export interface NoteUpsertWithWhereUniqueWithoutCategoriesInput {
  where: NoteWhereUniqueInput
  update: NoteUpdateWithoutCategoriesDataInput
  create: NoteCreateWithoutCategoriesInput
}

export interface NoteWhereInput {
  AND?: NoteWhereInput[] | NoteWhereInput | null
  OR?: NoteWhereInput[] | NoteWhereInput | null
  NOT?: NoteWhereInput[] | NoteWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  content?: String | null
  content_not?: String | null
  content_in?: String[] | String | null
  content_not_in?: String[] | String | null
  content_lt?: String | null
  content_lte?: String | null
  content_gt?: String | null
  content_gte?: String | null
  content_contains?: String | null
  content_not_contains?: String | null
  content_starts_with?: String | null
  content_not_starts_with?: String | null
  content_ends_with?: String | null
  content_not_ends_with?: String | null
  theme?: String | null
  theme_not?: String | null
  theme_in?: String[] | String | null
  theme_not_in?: String[] | String | null
  theme_lt?: String | null
  theme_lte?: String | null
  theme_gt?: String | null
  theme_gte?: String | null
  theme_contains?: String | null
  theme_not_contains?: String | null
  theme_starts_with?: String | null
  theme_not_starts_with?: String | null
  theme_ends_with?: String | null
  theme_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  author?: UserWhereInput | null
  categories_every?: CategoryWhereInput | null
  categories_some?: CategoryWhereInput | null
  categories_none?: CategoryWhereInput | null
}

export interface NoteWhereUniqueInput {
  id?: ID_Input | null
}

export interface ProfileCreateInput {
  id?: ID_Input | null
  wechat?: String | null
  qq?: String | null
  weibo?: String | null
  zhihu?: String | null
  github?: String | null
  facebook?: String | null
  linkin?: String | null
  google?: String | null
  juejin?: String | null
  avatar?: String | null
  user: UserCreateOneWithoutProfileInput
}

export interface ProfileCreateOneWithoutUserInput {
  create?: ProfileCreateWithoutUserInput | null
  connect?: ProfileWhereUniqueInput | null
}

export interface ProfileCreateWithoutUserInput {
  id?: ID_Input | null
  wechat?: String | null
  qq?: String | null
  weibo?: String | null
  zhihu?: String | null
  github?: String | null
  facebook?: String | null
  linkin?: String | null
  google?: String | null
  juejin?: String | null
  avatar?: String | null
}

export interface ProfileSubscriptionWhereInput {
  AND?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput | null
  OR?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput | null
  NOT?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ProfileWhereInput | null
}

export interface ProfileUpdateInput {
  wechat?: String | null
  qq?: String | null
  weibo?: String | null
  zhihu?: String | null
  github?: String | null
  facebook?: String | null
  linkin?: String | null
  google?: String | null
  juejin?: String | null
  avatar?: String | null
  user?: UserUpdateOneRequiredWithoutProfileInput | null
}

export interface ProfileUpdateManyMutationInput {
  wechat?: String | null
  qq?: String | null
  weibo?: String | null
  zhihu?: String | null
  github?: String | null
  facebook?: String | null
  linkin?: String | null
  google?: String | null
  juejin?: String | null
  avatar?: String | null
}

export interface ProfileUpdateOneRequiredWithoutUserInput {
  create?: ProfileCreateWithoutUserInput | null
  connect?: ProfileWhereUniqueInput | null
  update?: ProfileUpdateWithoutUserDataInput | null
  upsert?: ProfileUpsertWithoutUserInput | null
}

export interface ProfileUpdateWithoutUserDataInput {
  wechat?: String | null
  qq?: String | null
  weibo?: String | null
  zhihu?: String | null
  github?: String | null
  facebook?: String | null
  linkin?: String | null
  google?: String | null
  juejin?: String | null
  avatar?: String | null
}

export interface ProfileUpsertWithoutUserInput {
  update: ProfileUpdateWithoutUserDataInput
  create: ProfileCreateWithoutUserInput
}

export interface ProfileWhereInput {
  AND?: ProfileWhereInput[] | ProfileWhereInput | null
  OR?: ProfileWhereInput[] | ProfileWhereInput | null
  NOT?: ProfileWhereInput[] | ProfileWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  wechat?: String | null
  wechat_not?: String | null
  wechat_in?: String[] | String | null
  wechat_not_in?: String[] | String | null
  wechat_lt?: String | null
  wechat_lte?: String | null
  wechat_gt?: String | null
  wechat_gte?: String | null
  wechat_contains?: String | null
  wechat_not_contains?: String | null
  wechat_starts_with?: String | null
  wechat_not_starts_with?: String | null
  wechat_ends_with?: String | null
  wechat_not_ends_with?: String | null
  qq?: String | null
  qq_not?: String | null
  qq_in?: String[] | String | null
  qq_not_in?: String[] | String | null
  qq_lt?: String | null
  qq_lte?: String | null
  qq_gt?: String | null
  qq_gte?: String | null
  qq_contains?: String | null
  qq_not_contains?: String | null
  qq_starts_with?: String | null
  qq_not_starts_with?: String | null
  qq_ends_with?: String | null
  qq_not_ends_with?: String | null
  weibo?: String | null
  weibo_not?: String | null
  weibo_in?: String[] | String | null
  weibo_not_in?: String[] | String | null
  weibo_lt?: String | null
  weibo_lte?: String | null
  weibo_gt?: String | null
  weibo_gte?: String | null
  weibo_contains?: String | null
  weibo_not_contains?: String | null
  weibo_starts_with?: String | null
  weibo_not_starts_with?: String | null
  weibo_ends_with?: String | null
  weibo_not_ends_with?: String | null
  zhihu?: String | null
  zhihu_not?: String | null
  zhihu_in?: String[] | String | null
  zhihu_not_in?: String[] | String | null
  zhihu_lt?: String | null
  zhihu_lte?: String | null
  zhihu_gt?: String | null
  zhihu_gte?: String | null
  zhihu_contains?: String | null
  zhihu_not_contains?: String | null
  zhihu_starts_with?: String | null
  zhihu_not_starts_with?: String | null
  zhihu_ends_with?: String | null
  zhihu_not_ends_with?: String | null
  github?: String | null
  github_not?: String | null
  github_in?: String[] | String | null
  github_not_in?: String[] | String | null
  github_lt?: String | null
  github_lte?: String | null
  github_gt?: String | null
  github_gte?: String | null
  github_contains?: String | null
  github_not_contains?: String | null
  github_starts_with?: String | null
  github_not_starts_with?: String | null
  github_ends_with?: String | null
  github_not_ends_with?: String | null
  facebook?: String | null
  facebook_not?: String | null
  facebook_in?: String[] | String | null
  facebook_not_in?: String[] | String | null
  facebook_lt?: String | null
  facebook_lte?: String | null
  facebook_gt?: String | null
  facebook_gte?: String | null
  facebook_contains?: String | null
  facebook_not_contains?: String | null
  facebook_starts_with?: String | null
  facebook_not_starts_with?: String | null
  facebook_ends_with?: String | null
  facebook_not_ends_with?: String | null
  linkin?: String | null
  linkin_not?: String | null
  linkin_in?: String[] | String | null
  linkin_not_in?: String[] | String | null
  linkin_lt?: String | null
  linkin_lte?: String | null
  linkin_gt?: String | null
  linkin_gte?: String | null
  linkin_contains?: String | null
  linkin_not_contains?: String | null
  linkin_starts_with?: String | null
  linkin_not_starts_with?: String | null
  linkin_ends_with?: String | null
  linkin_not_ends_with?: String | null
  google?: String | null
  google_not?: String | null
  google_in?: String[] | String | null
  google_not_in?: String[] | String | null
  google_lt?: String | null
  google_lte?: String | null
  google_gt?: String | null
  google_gte?: String | null
  google_contains?: String | null
  google_not_contains?: String | null
  google_starts_with?: String | null
  google_not_starts_with?: String | null
  google_ends_with?: String | null
  google_not_ends_with?: String | null
  juejin?: String | null
  juejin_not?: String | null
  juejin_in?: String[] | String | null
  juejin_not_in?: String[] | String | null
  juejin_lt?: String | null
  juejin_lte?: String | null
  juejin_gt?: String | null
  juejin_gte?: String | null
  juejin_contains?: String | null
  juejin_not_contains?: String | null
  juejin_starts_with?: String | null
  juejin_not_starts_with?: String | null
  juejin_ends_with?: String | null
  juejin_not_ends_with?: String | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  user?: UserWhereInput | null
}

export interface ProfileWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  name: String
  pwd: String
  email: String
  profile: ProfileCreateOneWithoutUserInput
  notes?: NoteCreateManyWithoutAuthorInput | null
}

export interface UserCreateOneWithoutNotesInput {
  create?: UserCreateWithoutNotesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutProfileInput {
  create?: UserCreateWithoutProfileInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutNotesInput {
  id?: ID_Input | null
  name: String
  pwd: String
  email: String
  profile: ProfileCreateOneWithoutUserInput
}

export interface UserCreateWithoutProfileInput {
  id?: ID_Input | null
  name: String
  pwd: String
  email: String
  notes?: NoteCreateManyWithoutAuthorInput | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  name?: String | null
  pwd?: String | null
  email?: String | null
  profile?: ProfileUpdateOneRequiredWithoutUserInput | null
  notes?: NoteUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateManyMutationInput {
  name?: String | null
  pwd?: String | null
  email?: String | null
}

export interface UserUpdateOneRequiredWithoutNotesInput {
  create?: UserCreateWithoutNotesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutNotesDataInput | null
  upsert?: UserUpsertWithoutNotesInput | null
}

export interface UserUpdateOneRequiredWithoutProfileInput {
  create?: UserCreateWithoutProfileInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutProfileDataInput | null
  upsert?: UserUpsertWithoutProfileInput | null
}

export interface UserUpdateWithoutNotesDataInput {
  name?: String | null
  pwd?: String | null
  email?: String | null
  profile?: ProfileUpdateOneRequiredWithoutUserInput | null
}

export interface UserUpdateWithoutProfileDataInput {
  name?: String | null
  pwd?: String | null
  email?: String | null
  notes?: NoteUpdateManyWithoutAuthorInput | null
}

export interface UserUpsertWithoutNotesInput {
  update: UserUpdateWithoutNotesDataInput
  create: UserCreateWithoutNotesInput
}

export interface UserUpsertWithoutProfileInput {
  update: UserUpdateWithoutProfileDataInput
  create: UserCreateWithoutProfileInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  pwd?: String | null
  pwd_not?: String | null
  pwd_in?: String[] | String | null
  pwd_not_in?: String[] | String | null
  pwd_lt?: String | null
  pwd_lte?: String | null
  pwd_gt?: String | null
  pwd_gte?: String | null
  pwd_contains?: String | null
  pwd_not_contains?: String | null
  pwd_starts_with?: String | null
  pwd_not_starts_with?: String | null
  pwd_ends_with?: String | null
  pwd_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  profile?: ProfileWhereInput | null
  notes_every?: NoteWhereInput | null
  notes_some?: NoteWhereInput | null
  notes_none?: NoteWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateCategory {
  count: Int
}

export interface AggregateNote {
  count: Int
}

export interface AggregateProfile {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Category extends Node {
  id: ID_Output
  name?: String | null
  notes?: Array<Note> | null
}

/*
 * A connection to a list of items.

 */
export interface CategoryConnection {
  pageInfo: PageInfo
  edges: Array<CategoryEdge | null>
  aggregate: AggregateCategory
}

/*
 * An edge in a connection.

 */
export interface CategoryEdge {
  node: Category
  cursor: String
}

export interface CategoryPreviousValues {
  id: ID_Output
  name?: String | null
}

export interface CategorySubscriptionPayload {
  mutation: MutationType
  node?: Category | null
  updatedFields?: Array<String> | null
  previousValues?: CategoryPreviousValues | null
}

export interface Note extends Node {
  id: ID_Output
  title?: String | null
  content: String
  theme?: String | null
  author: User
  categories?: Array<Category> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface NoteConnection {
  pageInfo: PageInfo
  edges: Array<NoteEdge | null>
  aggregate: AggregateNote
}

/*
 * An edge in a connection.

 */
export interface NoteEdge {
  node: Note
  cursor: String
}

export interface NotePreviousValues {
  id: ID_Output
  title?: String | null
  content: String
  theme?: String | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface NoteSubscriptionPayload {
  mutation: MutationType
  node?: Note | null
  updatedFields?: Array<String> | null
  previousValues?: NotePreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Profile extends Node {
  id: ID_Output
  user: User
  wechat?: String | null
  qq?: String | null
  weibo?: String | null
  zhihu?: String | null
  github?: String | null
  facebook?: String | null
  linkin?: String | null
  google?: String | null
  juejin?: String | null
  avatar?: String | null
}

/*
 * A connection to a list of items.

 */
export interface ProfileConnection {
  pageInfo: PageInfo
  edges: Array<ProfileEdge | null>
  aggregate: AggregateProfile
}

/*
 * An edge in a connection.

 */
export interface ProfileEdge {
  node: Profile
  cursor: String
}

export interface ProfilePreviousValues {
  id: ID_Output
  wechat?: String | null
  qq?: String | null
  weibo?: String | null
  zhihu?: String | null
  github?: String | null
  facebook?: String | null
  linkin?: String | null
  google?: String | null
  juejin?: String | null
  avatar?: String | null
}

export interface ProfileSubscriptionPayload {
  mutation: MutationType
  node?: Profile | null
  updatedFields?: Array<String> | null
  previousValues?: ProfilePreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  name: String
  pwd: String
  email: String
  profile: Profile
  notes?: Array<Note> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  pwd: String
  email: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
Raw JSON value
*/
export type Json = any

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string