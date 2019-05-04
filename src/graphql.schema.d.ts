
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum CategoryOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum NoteOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    title_ASC = "title_ASC",
    title_DESC = "title_DESC",
    content_ASC = "content_ASC",
    content_DESC = "content_DESC",
    theme_ASC = "theme_ASC",
    theme_DESC = "theme_DESC"
}

export enum PrismaDatabase {
    default = "default"
}

export enum ProfileOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    wechat_ASC = "wechat_ASC",
    wechat_DESC = "wechat_DESC",
    qq_ASC = "qq_ASC",
    qq_DESC = "qq_DESC",
    weibo_ASC = "weibo_ASC",
    weibo_DESC = "weibo_DESC",
    zhihu_ASC = "zhihu_ASC",
    zhihu_DESC = "zhihu_DESC",
    github_ASC = "github_ASC",
    github_DESC = "github_DESC",
    facebook_ASC = "facebook_ASC",
    facebook_DESC = "facebook_DESC",
    linkin_ASC = "linkin_ASC",
    linkin_DESC = "linkin_DESC",
    google_ASC = "google_ASC",
    google_DESC = "google_DESC",
    juejin_ASC = "juejin_ASC",
    juejin_DESC = "juejin_DESC",
    avatar_ASC = "avatar_ASC",
    avatar_DESC = "avatar_DESC"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    pwd_ASC = "pwd_ASC",
    pwd_DESC = "pwd_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC"
}

export class CategoryCreateInput {
    id?: string;
    name?: string;
    notes?: NoteCreateManyWithoutCategoriesInput;
}

export class CategoryCreateManyWithoutNotesInput {
    create: CategoryCreateWithoutNotesInput[];
    connect: CategoryWhereUniqueInput[];
}

export class CategoryCreateWithoutNotesInput {
    id?: string;
    name?: string;
}

export class CategoryScalarWhereInput {
    AND: CategoryScalarWhereInput[];
    OR: CategoryScalarWhereInput[];
    NOT: CategoryScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
}

export class CategorySubscriptionWhereInput {
    AND: CategorySubscriptionWhereInput[];
    OR: CategorySubscriptionWhereInput[];
    NOT: CategorySubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: CategoryWhereInput;
}

export class CategoryUpdateInput {
    name?: string;
    notes?: NoteUpdateManyWithoutCategoriesInput;
}

export class CategoryUpdateManyDataInput {
    name?: string;
}

export class CategoryUpdateManyMutationInput {
    name?: string;
}

export class CategoryUpdateManyWithoutNotesInput {
    create: CategoryCreateWithoutNotesInput[];
    connect: CategoryWhereUniqueInput[];
    set: CategoryWhereUniqueInput[];
    disconnect: CategoryWhereUniqueInput[];
    delete: CategoryWhereUniqueInput[];
    update: CategoryUpdateWithWhereUniqueWithoutNotesInput[];
    updateMany: CategoryUpdateManyWithWhereNestedInput[];
    deleteMany: CategoryScalarWhereInput[];
    upsert: CategoryUpsertWithWhereUniqueWithoutNotesInput[];
}

export class CategoryUpdateManyWithWhereNestedInput {
    where: CategoryScalarWhereInput;
    data: CategoryUpdateManyDataInput;
}

export class CategoryUpdateWithoutNotesDataInput {
    name?: string;
}

export class CategoryUpdateWithWhereUniqueWithoutNotesInput {
    where: CategoryWhereUniqueInput;
    data: CategoryUpdateWithoutNotesDataInput;
}

export class CategoryUpsertWithWhereUniqueWithoutNotesInput {
    where: CategoryWhereUniqueInput;
    update: CategoryUpdateWithoutNotesDataInput;
    create: CategoryCreateWithoutNotesInput;
}

export class CategoryWhereInput {
    AND: CategoryWhereInput[];
    OR: CategoryWhereInput[];
    NOT: CategoryWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    notes_every?: NoteWhereInput;
    notes_some?: NoteWhereInput;
    notes_none?: NoteWhereInput;
}

export class CategoryWhereUniqueInput {
    id?: string;
}

export class NoteCreateInput {
    id?: string;
    title?: string;
    content: string;
    theme?: string;
    author: UserCreateOneWithoutNotesInput;
    categories?: CategoryCreateManyWithoutNotesInput;
}

export class NoteCreateManyWithoutAuthorInput {
    create: NoteCreateWithoutAuthorInput[];
    connect: NoteWhereUniqueInput[];
}

export class NoteCreateManyWithoutCategoriesInput {
    create: NoteCreateWithoutCategoriesInput[];
    connect: NoteWhereUniqueInput[];
}

export class NoteCreateWithoutAuthorInput {
    id?: string;
    title?: string;
    content: string;
    theme?: string;
    categories?: CategoryCreateManyWithoutNotesInput;
}

export class NoteCreateWithoutCategoriesInput {
    id?: string;
    title?: string;
    content: string;
    theme?: string;
    author: UserCreateOneWithoutNotesInput;
}

export class NoteScalarWhereInput {
    AND: NoteScalarWhereInput[];
    OR: NoteScalarWhereInput[];
    NOT: NoteScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    title?: string;
    title_not?: string;
    title_in: string[];
    title_not_in: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    content?: string;
    content_not?: string;
    content_in: string[];
    content_not_in: string[];
    content_lt?: string;
    content_lte?: string;
    content_gt?: string;
    content_gte?: string;
    content_contains?: string;
    content_not_contains?: string;
    content_starts_with?: string;
    content_not_starts_with?: string;
    content_ends_with?: string;
    content_not_ends_with?: string;
    theme?: string;
    theme_not?: string;
    theme_in: string[];
    theme_not_in: string[];
    theme_lt?: string;
    theme_lte?: string;
    theme_gt?: string;
    theme_gte?: string;
    theme_contains?: string;
    theme_not_contains?: string;
    theme_starts_with?: string;
    theme_not_starts_with?: string;
    theme_ends_with?: string;
    theme_not_ends_with?: string;
}

export class NoteSubscriptionWhereInput {
    AND: NoteSubscriptionWhereInput[];
    OR: NoteSubscriptionWhereInput[];
    NOT: NoteSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: NoteWhereInput;
}

export class NoteUpdateInput {
    title?: string;
    content?: string;
    theme?: string;
    author?: UserUpdateOneRequiredWithoutNotesInput;
    categories?: CategoryUpdateManyWithoutNotesInput;
}

export class NoteUpdateManyDataInput {
    title?: string;
    content?: string;
    theme?: string;
}

export class NoteUpdateManyMutationInput {
    title?: string;
    content?: string;
    theme?: string;
}

export class NoteUpdateManyWithoutAuthorInput {
    create: NoteCreateWithoutAuthorInput[];
    connect: NoteWhereUniqueInput[];
    set: NoteWhereUniqueInput[];
    disconnect: NoteWhereUniqueInput[];
    delete: NoteWhereUniqueInput[];
    update: NoteUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany: NoteUpdateManyWithWhereNestedInput[];
    deleteMany: NoteScalarWhereInput[];
    upsert: NoteUpsertWithWhereUniqueWithoutAuthorInput[];
}

export class NoteUpdateManyWithoutCategoriesInput {
    create: NoteCreateWithoutCategoriesInput[];
    connect: NoteWhereUniqueInput[];
    set: NoteWhereUniqueInput[];
    disconnect: NoteWhereUniqueInput[];
    delete: NoteWhereUniqueInput[];
    update: NoteUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany: NoteUpdateManyWithWhereNestedInput[];
    deleteMany: NoteScalarWhereInput[];
    upsert: NoteUpsertWithWhereUniqueWithoutCategoriesInput[];
}

export class NoteUpdateManyWithWhereNestedInput {
    where: NoteScalarWhereInput;
    data: NoteUpdateManyDataInput;
}

export class NoteUpdateWithoutAuthorDataInput {
    title?: string;
    content?: string;
    theme?: string;
    categories?: CategoryUpdateManyWithoutNotesInput;
}

export class NoteUpdateWithoutCategoriesDataInput {
    title?: string;
    content?: string;
    theme?: string;
    author?: UserUpdateOneRequiredWithoutNotesInput;
}

export class NoteUpdateWithWhereUniqueWithoutAuthorInput {
    where: NoteWhereUniqueInput;
    data: NoteUpdateWithoutAuthorDataInput;
}

export class NoteUpdateWithWhereUniqueWithoutCategoriesInput {
    where: NoteWhereUniqueInput;
    data: NoteUpdateWithoutCategoriesDataInput;
}

export class NoteUpsertWithWhereUniqueWithoutAuthorInput {
    where: NoteWhereUniqueInput;
    update: NoteUpdateWithoutAuthorDataInput;
    create: NoteCreateWithoutAuthorInput;
}

export class NoteUpsertWithWhereUniqueWithoutCategoriesInput {
    where: NoteWhereUniqueInput;
    update: NoteUpdateWithoutCategoriesDataInput;
    create: NoteCreateWithoutCategoriesInput;
}

export class NoteWhereInput {
    AND: NoteWhereInput[];
    OR: NoteWhereInput[];
    NOT: NoteWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    title?: string;
    title_not?: string;
    title_in: string[];
    title_not_in: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    content?: string;
    content_not?: string;
    content_in: string[];
    content_not_in: string[];
    content_lt?: string;
    content_lte?: string;
    content_gt?: string;
    content_gte?: string;
    content_contains?: string;
    content_not_contains?: string;
    content_starts_with?: string;
    content_not_starts_with?: string;
    content_ends_with?: string;
    content_not_ends_with?: string;
    theme?: string;
    theme_not?: string;
    theme_in: string[];
    theme_not_in: string[];
    theme_lt?: string;
    theme_lte?: string;
    theme_gt?: string;
    theme_gte?: string;
    theme_contains?: string;
    theme_not_contains?: string;
    theme_starts_with?: string;
    theme_not_starts_with?: string;
    theme_ends_with?: string;
    theme_not_ends_with?: string;
    author?: UserWhereInput;
    categories_every?: CategoryWhereInput;
    categories_some?: CategoryWhereInput;
    categories_none?: CategoryWhereInput;
}

export class NoteWhereUniqueInput {
    id?: string;
}

export class ProfileCreateInput {
    id?: string;
    wechat?: string;
    qq?: string;
    weibo?: string;
    zhihu?: string;
    github?: string;
    facebook?: string;
    linkin?: string;
    google?: string;
    juejin?: string;
    avatar?: string;
    user: UserCreateOneWithoutProfileInput;
}

export class ProfileCreateOneWithoutUserInput {
    create?: ProfileCreateWithoutUserInput;
    connect?: ProfileWhereUniqueInput;
}

export class ProfileCreateWithoutUserInput {
    id?: string;
    wechat?: string;
    qq?: string;
    weibo?: string;
    zhihu?: string;
    github?: string;
    facebook?: string;
    linkin?: string;
    google?: string;
    juejin?: string;
    avatar?: string;
}

export class ProfileSubscriptionWhereInput {
    AND: ProfileSubscriptionWhereInput[];
    OR: ProfileSubscriptionWhereInput[];
    NOT: ProfileSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: ProfileWhereInput;
}

export class ProfileUpdateInput {
    wechat?: string;
    qq?: string;
    weibo?: string;
    zhihu?: string;
    github?: string;
    facebook?: string;
    linkin?: string;
    google?: string;
    juejin?: string;
    avatar?: string;
    user?: UserUpdateOneRequiredWithoutProfileInput;
}

export class ProfileUpdateManyMutationInput {
    wechat?: string;
    qq?: string;
    weibo?: string;
    zhihu?: string;
    github?: string;
    facebook?: string;
    linkin?: string;
    google?: string;
    juejin?: string;
    avatar?: string;
}

export class ProfileUpdateOneRequiredWithoutUserInput {
    create?: ProfileCreateWithoutUserInput;
    connect?: ProfileWhereUniqueInput;
    update?: ProfileUpdateWithoutUserDataInput;
    upsert?: ProfileUpsertWithoutUserInput;
}

export class ProfileUpdateWithoutUserDataInput {
    wechat?: string;
    qq?: string;
    weibo?: string;
    zhihu?: string;
    github?: string;
    facebook?: string;
    linkin?: string;
    google?: string;
    juejin?: string;
    avatar?: string;
}

export class ProfileUpsertWithoutUserInput {
    update: ProfileUpdateWithoutUserDataInput;
    create: ProfileCreateWithoutUserInput;
}

export class ProfileWhereInput {
    AND: ProfileWhereInput[];
    OR: ProfileWhereInput[];
    NOT: ProfileWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    wechat?: string;
    wechat_not?: string;
    wechat_in: string[];
    wechat_not_in: string[];
    wechat_lt?: string;
    wechat_lte?: string;
    wechat_gt?: string;
    wechat_gte?: string;
    wechat_contains?: string;
    wechat_not_contains?: string;
    wechat_starts_with?: string;
    wechat_not_starts_with?: string;
    wechat_ends_with?: string;
    wechat_not_ends_with?: string;
    qq?: string;
    qq_not?: string;
    qq_in: string[];
    qq_not_in: string[];
    qq_lt?: string;
    qq_lte?: string;
    qq_gt?: string;
    qq_gte?: string;
    qq_contains?: string;
    qq_not_contains?: string;
    qq_starts_with?: string;
    qq_not_starts_with?: string;
    qq_ends_with?: string;
    qq_not_ends_with?: string;
    weibo?: string;
    weibo_not?: string;
    weibo_in: string[];
    weibo_not_in: string[];
    weibo_lt?: string;
    weibo_lte?: string;
    weibo_gt?: string;
    weibo_gte?: string;
    weibo_contains?: string;
    weibo_not_contains?: string;
    weibo_starts_with?: string;
    weibo_not_starts_with?: string;
    weibo_ends_with?: string;
    weibo_not_ends_with?: string;
    zhihu?: string;
    zhihu_not?: string;
    zhihu_in: string[];
    zhihu_not_in: string[];
    zhihu_lt?: string;
    zhihu_lte?: string;
    zhihu_gt?: string;
    zhihu_gte?: string;
    zhihu_contains?: string;
    zhihu_not_contains?: string;
    zhihu_starts_with?: string;
    zhihu_not_starts_with?: string;
    zhihu_ends_with?: string;
    zhihu_not_ends_with?: string;
    github?: string;
    github_not?: string;
    github_in: string[];
    github_not_in: string[];
    github_lt?: string;
    github_lte?: string;
    github_gt?: string;
    github_gte?: string;
    github_contains?: string;
    github_not_contains?: string;
    github_starts_with?: string;
    github_not_starts_with?: string;
    github_ends_with?: string;
    github_not_ends_with?: string;
    facebook?: string;
    facebook_not?: string;
    facebook_in: string[];
    facebook_not_in: string[];
    facebook_lt?: string;
    facebook_lte?: string;
    facebook_gt?: string;
    facebook_gte?: string;
    facebook_contains?: string;
    facebook_not_contains?: string;
    facebook_starts_with?: string;
    facebook_not_starts_with?: string;
    facebook_ends_with?: string;
    facebook_not_ends_with?: string;
    linkin?: string;
    linkin_not?: string;
    linkin_in: string[];
    linkin_not_in: string[];
    linkin_lt?: string;
    linkin_lte?: string;
    linkin_gt?: string;
    linkin_gte?: string;
    linkin_contains?: string;
    linkin_not_contains?: string;
    linkin_starts_with?: string;
    linkin_not_starts_with?: string;
    linkin_ends_with?: string;
    linkin_not_ends_with?: string;
    google?: string;
    google_not?: string;
    google_in: string[];
    google_not_in: string[];
    google_lt?: string;
    google_lte?: string;
    google_gt?: string;
    google_gte?: string;
    google_contains?: string;
    google_not_contains?: string;
    google_starts_with?: string;
    google_not_starts_with?: string;
    google_ends_with?: string;
    google_not_ends_with?: string;
    juejin?: string;
    juejin_not?: string;
    juejin_in: string[];
    juejin_not_in: string[];
    juejin_lt?: string;
    juejin_lte?: string;
    juejin_gt?: string;
    juejin_gte?: string;
    juejin_contains?: string;
    juejin_not_contains?: string;
    juejin_starts_with?: string;
    juejin_not_starts_with?: string;
    juejin_ends_with?: string;
    juejin_not_ends_with?: string;
    avatar?: string;
    avatar_not?: string;
    avatar_in: string[];
    avatar_not_in: string[];
    avatar_lt?: string;
    avatar_lte?: string;
    avatar_gt?: string;
    avatar_gte?: string;
    avatar_contains?: string;
    avatar_not_contains?: string;
    avatar_starts_with?: string;
    avatar_not_starts_with?: string;
    avatar_ends_with?: string;
    avatar_not_ends_with?: string;
    user?: UserWhereInput;
}

export class ProfileWhereUniqueInput {
    id?: string;
}

export class SigninInput {
    email: string;
    pwd: string;
}

export class SignupInput {
    name: string;
    pwd: string;
    email: string;
}

export class UserCreateInput {
    id?: string;
    name: string;
    pwd: string;
    email: string;
    profile: ProfileCreateOneWithoutUserInput;
    notes?: NoteCreateManyWithoutAuthorInput;
}

export class UserCreateOneWithoutNotesInput {
    create?: UserCreateWithoutNotesInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateOneWithoutProfileInput {
    create?: UserCreateWithoutProfileInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateWithoutNotesInput {
    id?: string;
    name: string;
    pwd: string;
    email: string;
    profile: ProfileCreateOneWithoutUserInput;
}

export class UserCreateWithoutProfileInput {
    id?: string;
    name: string;
    pwd: string;
    email: string;
    notes?: NoteCreateManyWithoutAuthorInput;
}

export class UserSubscriptionWhereInput {
    AND: UserSubscriptionWhereInput[];
    OR: UserSubscriptionWhereInput[];
    NOT: UserSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: UserWhereInput;
}

export class UserUpdateInput {
    name?: string;
    pwd?: string;
    email?: string;
    profile?: ProfileUpdateOneRequiredWithoutUserInput;
    notes?: NoteUpdateManyWithoutAuthorInput;
}

export class UserUpdateManyMutationInput {
    name?: string;
    pwd?: string;
    email?: string;
}

export class UserUpdateOneRequiredWithoutNotesInput {
    create?: UserCreateWithoutNotesInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutNotesDataInput;
    upsert?: UserUpsertWithoutNotesInput;
}

export class UserUpdateOneRequiredWithoutProfileInput {
    create?: UserCreateWithoutProfileInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutProfileDataInput;
    upsert?: UserUpsertWithoutProfileInput;
}

export class UserUpdateWithoutNotesDataInput {
    name?: string;
    pwd?: string;
    email?: string;
    profile?: ProfileUpdateOneRequiredWithoutUserInput;
}

export class UserUpdateWithoutProfileDataInput {
    name?: string;
    pwd?: string;
    email?: string;
    notes?: NoteUpdateManyWithoutAuthorInput;
}

export class UserUpsertWithoutNotesInput {
    update: UserUpdateWithoutNotesDataInput;
    create: UserCreateWithoutNotesInput;
}

export class UserUpsertWithoutProfileInput {
    update: UserUpdateWithoutProfileDataInput;
    create: UserCreateWithoutProfileInput;
}

export class UserWhereInput {
    AND: UserWhereInput[];
    OR: UserWhereInput[];
    NOT: UserWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    pwd?: string;
    pwd_not?: string;
    pwd_in: string[];
    pwd_not_in: string[];
    pwd_lt?: string;
    pwd_lte?: string;
    pwd_gt?: string;
    pwd_gte?: string;
    pwd_contains?: string;
    pwd_not_contains?: string;
    pwd_starts_with?: string;
    pwd_not_starts_with?: string;
    pwd_ends_with?: string;
    pwd_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in: string[];
    email_not_in: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    profile?: ProfileWhereInput;
    notes_every?: NoteWhereInput;
    notes_some?: NoteWhereInput;
    notes_none?: NoteWhereInput;
}

export class UserWhereUniqueInput {
    id?: string;
    email?: string;
}

export interface Node {
    id: string;
}

export class AggregateCategory {
    count: number;
}

export class AggregateNote {
    count: number;
}

export class AggregateProfile {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class Category implements Node {
    id: string;
    name?: string;
    notes: Note[];
}

export class CategoryConnection {
    pageInfo: PageInfo;
    edges?: CategoryEdge[];
    aggregate: AggregateCategory;
}

export class CategoryEdge {
    node: Category;
    cursor: string;
}

export class CategoryPreviousValues {
    id: string;
    name?: string;
}

export class CategorySubscriptionPayload {
    mutation: MutationType;
    node?: Category;
    updatedFields: string[];
    previousValues?: CategoryPreviousValues;
}

export class LoginInfo {
    expiresIn?: number;
    accessToken?: string;
}

export abstract class IMutation {
    abstract signin(signinInput?: SigninInput): LoginInfo | Promise<LoginInfo>;
    abstract signup(signupInput?: SignupInput): UserAbstract | Promise<UserAbstract>;
    abstract createNoteAuto(data: NoteCreateWithoutAuthorInput): Note | Promise<Note>;
    abstract createUser(data: UserCreateInput): User | Promise<User>;
    abstract createProfile(data: ProfileCreateInput): Profile | Promise<Profile>;
    abstract createNote(data: NoteCreateInput): Note | Promise<Note>;
    abstract createCategory(data: CategoryCreateInput): Category | Promise<Category>;
    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;
    abstract updateProfile(data: ProfileUpdateInput, where: ProfileWhereUniqueInput): Profile | Promise<Profile>;
    abstract updateNote(data: NoteUpdateInput, where: NoteWhereUniqueInput): Note | Promise<Note>;
    abstract updateCategory(data: CategoryUpdateInput, where: CategoryWhereUniqueInput): Category | Promise<Category>;
    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;
    abstract deleteProfile(where: ProfileWhereUniqueInput): Profile | Promise<Profile>;
    abstract deleteNote(where: NoteWhereUniqueInput): Note | Promise<Note>;
    abstract deleteCategory(where: CategoryWhereUniqueInput): Category | Promise<Category>;
    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;
    abstract upsertProfile(where: ProfileWhereUniqueInput, create: ProfileCreateInput, update: ProfileUpdateInput): Profile | Promise<Profile>;
    abstract upsertNote(where: NoteWhereUniqueInput, create: NoteCreateInput, update: NoteUpdateInput): Note | Promise<Note>;
    abstract upsertCategory(where: CategoryWhereUniqueInput, create: CategoryCreateInput, update: CategoryUpdateInput): Category | Promise<Category>;
    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyProfiles(data: ProfileUpdateManyMutationInput, where?: ProfileWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyNotes(data: NoteUpdateManyMutationInput, where?: NoteWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyCategories(data: CategoryUpdateManyMutationInput, where?: CategoryWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyProfiles(where?: ProfileWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyNotes(where?: NoteWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyCategories(where?: CategoryWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract executeRaw(database: PrismaDatabase, query: string): Json | Promise<Json>;
}

export class Note implements Node {
    id: string;
    title?: string;
    content: string;
    theme?: string;
    author: User;
    categories: Category[];
}

export class NoteConnection {
    pageInfo: PageInfo;
    edges?: NoteEdge[];
    aggregate: AggregateNote;
}

export class NoteEdge {
    node: Note;
    cursor: string;
}

export class NotePreviousValues {
    id: string;
    title?: string;
    content: string;
    theme?: string;
}

export class NoteSubscriptionPayload {
    mutation: MutationType;
    node?: Note;
    updatedFields: string[];
    previousValues?: NotePreviousValues;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export class Profile implements Node {
    id: string;
    user: User;
    wechat?: string;
    qq?: string;
    weibo?: string;
    zhihu?: string;
    github?: string;
    facebook?: string;
    linkin?: string;
    google?: string;
    juejin?: string;
    avatar?: string;
}

export class ProfileConnection {
    pageInfo: PageInfo;
    edges?: ProfileEdge[];
    aggregate: AggregateProfile;
}

export class ProfileEdge {
    node: Profile;
    cursor: string;
}

export class ProfilePreviousValues {
    id: string;
    wechat?: string;
    qq?: string;
    weibo?: string;
    zhihu?: string;
    github?: string;
    facebook?: string;
    linkin?: string;
    google?: string;
    juejin?: string;
    avatar?: string;
}

export class ProfileSubscriptionPayload {
    mutation: MutationType;
    node?: Profile;
    updatedFields: string[];
    previousValues?: ProfilePreviousValues;
}

export abstract class IQuery {
    abstract selfProfile(): User | Promise<User>;
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;
    abstract profiles(where?: ProfileWhereInput, orderBy?: ProfileOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Profile[] | Promise<Profile[]>;
    abstract notes(where?: NoteWhereInput, orderBy?: NoteOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Note[] | Promise<Note[]>;
    abstract categories(where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Category[] | Promise<Category[]>;
    abstract user(where: UserWhereUniqueInput): User | Promise<User>;
    abstract profile(where: ProfileWhereUniqueInput): Profile | Promise<Profile>;
    abstract note(where: NoteWhereUniqueInput): Note | Promise<Note>;
    abstract category(where: CategoryWhereUniqueInput): Category | Promise<Category>;
    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;
    abstract profilesConnection(where?: ProfileWhereInput, orderBy?: ProfileOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): ProfileConnection | Promise<ProfileConnection>;
    abstract notesConnection(where?: NoteWhereInput, orderBy?: NoteOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): NoteConnection | Promise<NoteConnection>;
    abstract categoriesConnection(where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): CategoryConnection | Promise<CategoryConnection>;
    abstract node(id: string): Node | Promise<Node>;
    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;
    abstract profile(where?: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload | Promise<ProfileSubscriptionPayload>;
    abstract note(where?: NoteSubscriptionWhereInput): NoteSubscriptionPayload | Promise<NoteSubscriptionPayload>;
    abstract category(where?: CategorySubscriptionWhereInput): CategorySubscriptionPayload | Promise<CategorySubscriptionPayload>;
}

export class User implements Node {
    id: string;
    name: string;
    pwd: string;
    email: string;
    profile: Profile;
    notes: Note[];
}

export class UserAbstract {
    id?: string;
    name?: string;
    email?: string;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges?: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserPreviousValues {
    id: string;
    name: string;
    pwd: string;
    email: string;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields: string[];
    previousValues?: UserPreviousValues;
}

export type Json = any;
export type Long = any;
