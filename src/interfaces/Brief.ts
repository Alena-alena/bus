import { HyperLink } from './HyperLink';
import { Localization } from './Localization';
import { ExampleImage } from './ExampleImage';
import { Keyword } from './Keyword';
import { ContributorExclusivity } from './ContributorExclusivity';
import { LocationTarget } from './LocationTarget';

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
