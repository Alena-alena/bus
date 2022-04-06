import { IBrief } from '../interfaces/Brief';
import { BriefStatusesConfig } from '../constants/BriefStatuses';

export const getFilteredBriefListByStatus = (briefList: IBrief[], statusFilter: string): IBrief[] => {
  if (statusFilter === BriefStatusesConfig.all.value) {
    return briefList;
  }

  // toDo filter briefs

  return briefList.filter((brief) => brief.status === statusFilter);
};
