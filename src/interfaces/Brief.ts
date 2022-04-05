export interface IBrief {
    id: string,
    title: string,
    primaryLanguageTitle: string,
    primaryLanguage: string,
    status: string,
    open: string,
    backgroundImageUrl: string,
    customUiRequired: string,
    briefType: string,
    description: string,
    meId: string,
    customBannerColor: string,
    invited: string,
    modelRequirements: string,
    exampleBoardId: string,
    isGlobalTarget: boolean,
    isIntroBrief: boolean,
    askForReplies: boolean,
    releaseRequired: boolean,
    active: boolean,
    endDate: string,
    startDate: string,
    createdAt: string,
    version: number,
    submissionsCount: number,
    rewardValue: number,
    freeWords: string[],
    subCategories: string[],
    contentTypes: string[],
    categories: string[],
    detailedSections: string[],
    localizedTo: string[],
    rpmCategoryName: string[],
    hyperlinks: HyperLink[],
    localizations: Localization[],
    exampleImages: ExampleImage[],
    tags: any,
    keywords: Keyword[],
    localizedMap: any,
    contributorExclusivity: ContributorExclusivity[],
    locationTarget: LocationTarget[],
    hasContributorExclusivity: boolean
}

export interface HyperLink {
    label: string,
    url: string
}

export interface Localization {
    description: string,
    language: string,
    title: string
}

export interface ExampleImage {
    id: number,
    type: string,
    url: string,
    assetId: string,
    artist: string,
    boardId: string
}

export interface Keyword {
    displayText: string,
    parentText: string,
    parentId: number,
    termId: number,
    en: string
}

export interface ContributorExclusivity {
    briefId: string,
    email: string
}

export interface LocationTarget {
    briefId: string,
    googlePlaceId: string,
    stateLong: string,
    formattedAddress: string,
    countryLong: string,
    countryShort: string,
    cityShort: string,
    cityLong: string,
    stateShort: string,
    postalCode: string,
    latitude: number,
    longitude: number
}
