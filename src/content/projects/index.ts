import { project as rotenbi } from "./rotenbi";
import { project as peopleops } from "./peopleops";
import { project as officeResourceBooking } from "./office-resource-booking";
import { project as miniIssueTracker } from "./mini-issue-tracker";
import { project as pvms } from "./project-04";
import { project as komorebi } from "./project-05";
import { project as strawberryRipeness } from "./strawberry-ripeness";
import type { Project } from "../../types/project";

export const projects: readonly Project[] = [
  rotenbi,
  peopleops,
  officeResourceBooking,
  miniIssueTracker,
  pvms,
  komorebi,
  strawberryRipeness,
];
