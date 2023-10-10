// To parse this data:
//
//   import { Convert, ExerciseMedia } from "./file";
//
//   const exerciseMedia = Convert.toExerciseMedia(json);

export interface ExerciseMedia {
  Index: Index[];
  "Communication & Collaboration": CommunicationCollaboration[];
  "Opportunity Qualification": OpportunityQualification[];
  "RFI to RFP Response Mgmt.": RFIToRFPResponseMgmt[];
  "Costing & Budgeting": CostingBudgeting[];
  "Resource Estimation": ResourceEstimation[];
  "Business Processes": BusinessProcess[];
  "ITSM Capabilities": ITSMCapability[];
  "Risks & Issues": RisksIssue[];
  "Application Mgmt.": ApplicationMgmt[];
  "End User Computing": EndUserComputing[];
  "Information Security": InformationSecurity[];
  "CSIP & Transformation": CSIPTransformation[];
  "Contracting & Legal Compliance": ContractingLegalCompliance[];
  "Handover from Sales to Delivery": HandoverFromSalesToDelivery[];
  Transition: Transition[];
  "Infrastructure Assessment": InfrastructureAssessment[];
  "AMS Assessment": AMSAssessment[];
  "Infrastructure Estimation": InfrastructureEstimation[];
  "AMS Estimation": AMSEstimation[];
  "Rating & Maturity Scoring": RatingMaturityScoring[];
}

export interface AMSAssessment {
  __EMPTY?: string;
  "AMS Assessment": string;
  __EMPTY_1?: string;
}

export interface AMSEstimation {
  __EMPTY?: string;
  "Application MS Estimation": string;
  __EMPTY_1?: string;
}

export interface ApplicationMgmt {
  __EMPTY?: string;
  "Application Mgmt.": string;
  __EMPTY_1?: string;
}

export interface BusinessProcess {
  __EMPTY?: string;
  "Business Processes": string;
  __EMPTY_1?: string;
}

export interface CSIPTransformation {
  __EMPTY?: string;
  "CSIP & Transformation": string;
  __EMPTY_1?: string;
}

export interface CommunicationCollaboration {
  "0": The0;
  __EMPTY?: string;
  "Communication & Collaboration": string;
  __EMPTY_1?: string;
  __EMPTY_2?: string;
  __EMPTY_3?: string;
  "#DIV/0!"?: string;
}

export enum The0 {
  Empty = " ",
  RatingDescription = "Rating Description",
}

export interface ContractingLegalCompliance {
  __EMPTY?: string;
  "Contracting & Legal Compliance": string;
  __EMPTY_1?: string;
}

export interface CostingBudgeting {
  __EMPTY?: string;
  "Costing & Budgeting": string;
  __EMPTY_1?: string;
}

export interface EndUserComputing {
  __EMPTY?: string;
  "End User Computing": string;
  __EMPTY_1?: string;
}

export interface HandoverFromSalesToDelivery {
  __EMPTY?: string;
  "Handover from Sales to Delivery": string;
  __EMPTY_1?: string;
}

export interface ITSMCapability {
  __EMPTY?: string;
  "ITSM Capabilities": string;
  __EMPTY_1?: string;
}

export interface Index {
  "#": number;
  "Workshops Required by Subject Areas": string;
  Bucket: string;
  "Recommended SMEs": string;
}

export interface InformationSecurity {
  __EMPTY?: string;
  "Information Security": string;
  __EMPTY_1?: string;
}

export interface InfrastructureAssessment {
  __EMPTY?: string;
  "Infrastructure Assessment": string;
  __EMPTY_1?: string;
}

export interface InfrastructureEstimation {
  __EMPTY?: string;
  "Infrastructure Estimation": string;
  __EMPTY_1?: string;
}

export interface OpportunityQualification {
  __EMPTY?: string;
  "Opportunity Qualification": string;
  __EMPTY_1?: string;
}

export interface RFIToRFPResponseMgmt {
  __EMPTY?: string;
  "RFI to RFP Response Mgmt.": string;
  __EMPTY_1?: string;
}

export interface RatingMaturityScoring {
  __EMPTY: number | string;
  __EMPTY_1: string;
  "Rating & Maturity Scoring": string;
}

export interface ResourceEstimation {
  __EMPTY?: string;
  "Resource Estimation": string;
  __EMPTY_1?: string;
}

export interface RisksIssue {
  __EMPTY?: string;
  "Risks & Issues": string;
  __EMPTY_1?: string;
}

export interface Transition {
  __EMPTY?: string;
  Transition: string;
  __EMPTY_1?: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toExerciseMedia(json: string): ExerciseMedia {
    return JSON.parse(json);
  }

  public static exerciseMediaToJson(value: ExerciseMedia): string {
    return JSON.stringify(value);
  }
}
